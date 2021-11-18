import { writable, get } from 'svelte/store';

export const tickerStore = writable({});
export const obStore = writable({});
const wsInitState = { wsOpen: false, subscriptions: [] };
export const wsStore = writable(wsInitState);

let socket = null;

const _initConnection = () => {
  if (!socket) return;
  socket.addEventListener('open', function (evnt) {
    socket.addEventListener('message', function (event) {
      let response = null;
      if (!!event.data) response = JSON.parse(event.data);
      if (response && response.channel == 'tickerArbs') {
        tickerStore.set({
          arbs: response.arbs,
          interval: response.interval,
        });
      }
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

export const subscribeToChannel = (channel) => {
  const { subscriptions } = get(wsStore);
  if (socket && socket.readyState > 0 && !subscriptions.includes(channel)) {
    socket.send(
      JSON.stringify({
        request: 'SUB',
        channel,
      })
    );
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

// start app with open WS connection
socket = new WebSocket('ws://localhost:8080/');
_initConnection();