import { writable, get } from 'svelte/store';

export const tickerStore = writable({ arbs: [], interval: 3 });
export const obStore = writable({ paths: [] });
const wsInitState = { wsOpen: false, subscriptions: [] };
export const wsStore = writable(wsInitState);

let socket = null;

const _compareTargets = (target, { market, ask, bid }) => {
  if (target.market !== market) return false;
  if (target.exchanges[0] !== ask.exchange || target.exchanges[1] !== bid.exchange) return false;

  return true;
};

const _tickerArbsListener = (response) => {
  const { paths } = get(obStore);
  const arbs = response.arbs.map(arb => {
    if (paths.reduce((acc, path) => {
      if (_compareTargets(path, arb)) acc = true;
      return acc;
    }, false)) return {
      ...arb,
      inOb: true
    };

    return {
      ...arb,
      inOb: false
    };
  });

  tickerStore.set({
    arbs,
    interval: response.interval,
  });
};

const _obArbsListener = (response) => {
  obStore.set({
    paths: Object.values(response.paths)
  });
};

const _initConnection = () => {
  if (!socket) return;
  socket.addEventListener('open', function () {
    socket.addEventListener('message', function (event) {
      let response = null;
      if (!!event.data) response = JSON.parse(event.data);
      if (response && response.channel === 'tickerArbs') {
        _tickerArbsListener(response);
      }
      if (response && response.channel === 'obArbs') {
        _obArbsListener(response);
      };
    });

    wsStore.update((prevData) => ({ ...prevData, wsOpen: true }));

    console.log('WS: connection opened');
  });

  socket.addEventListener('close', function () {
    console.log('WS: connection terminated');
    wsStore.set(wsInitState);
  });
};



export const openConnection = () => {
  socket = new WebSocket('ws://localhost:8080/');
  _initConnection();
};

export const closeConnection = () => {
  socket && socket.close();
  socket = null;
};

export const subscribeToChannel = (channel, params) => {
  const { subscriptions } = get(wsStore);
  if (socket && socket.readyState > 0 && !subscriptions.includes(channel)) {
    socket.send(
      JSON.stringify({
        request: 'SUB',
        channel,
        payload: { params }
      })
    );
    if (channel === 'tickerArbs') tickerStore.update((prevData) => ({ ...prevData, }));
    wsStore.update((prevData) => ({ ...prevData, subscriptions: [...subscriptions, channel] }));
  }
};

export const unsubscribeFromChannel = (channel) => {
  const { subscriptions } = get(wsStore);
  if (subscriptions.includes(channel)) {
    socket.send(
      JSON.stringify({
        request: 'UNSUB',
        channel,
      })
    );
    wsStore.update((prevData) => ({ ...prevData, subscriptions: subscriptions.filter(item => item !== channel) }));
  }
};

export const populateWithdrawFees = () => {
  if (!socket && socket.readyState < 1) return;
  socket.send(
    JSON.stringify({
      request: 'TRIG',
      channel: 'tickerArbs',
      payload: {
        name: 'populateWithdrawFees',
      }
    })
  );
};

export const addPathToOb = ({ market, exchanges }) => {
  if (!socket && socket.readyState < 1) return;

  const { paths } = get(obStore);

  socket.send(
    JSON.stringify({
      request: 'TRIG',
      channel: 'obArbs',
      payload: {
        name: 'addPath',
        params: {
          path: {
            market,
            exchanges
          }
        }
      }
    })
  );

  tickerStore.update((prevState) => ({
    ...prevState, arbs: prevState.arbs.map(arb => {
      if (paths.reduce((acc, path) => {
        if (_compareTargets(path, arb)) acc = true;
        return acc;
      }, false) || _compareTargets({ market, exchanges }, arb)) {
        return {
          ...arb,
          inOb: true
        };
      }

      return {
        ...arb,
        inOb: false
      };
    })
  }));
};

export const removeObPath = ({ id }) => {
  socket.send(
    JSON.stringify({
      request: 'TRIG',
      channel: 'obArbs',
      payload: {
        name: 'removePath',
        params: {
          path: {
            id
          }
        }
      }
    })
  );
  obStore.update((prevState) => ({ ...prevState, arbs: prevState.paths.filter(path => path.id !== id) }));
};

export const clearPaths = () => {
  if (!socket && socket.readyState < 1) return;
  socket.send(
    JSON.stringify({
      request: 'TRIG',
      channel: 'obArbs',
      payload: {
        name: 'clearPaths',
      }
    })
  );
};



// start app with open WS connection
socket = new WebSocket('ws://localhost:8080/');
_initConnection();