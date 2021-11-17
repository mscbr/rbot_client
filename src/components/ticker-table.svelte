<script>
  let socket = new WebSocket('ws://localhost:8080/');
  let isSocketReady = false;
  let arbs = [];

  $: isSocketReady &&
    socket.send(
      JSON.stringify({
        request: 'SUB',
        channel: 'tickerArbs',
      })
    );

  socket.addEventListener('open', function (event) {
    console.log('WS: connection open');
    isSocketReady = true;
  });

  socket.addEventListener('message', function (event) {
    let response = null;
    if (!!event.data) response = JSON.parse(event.data);

    if (response && response.channel == 'tickerArbs') arbs = response.message;
  });

  const profitToProcent = (profitFloat) => {
    const arr = profitFloat.toFixed(3).toString().split('.')[1].split('');
    return arr[0] + arr[1] + '.' + arr[2] + '%';
  };
</script>

<table>
  <tr>
    <th>PROFIT</th>
    <th>PAIR</th>
    <th>EXCHANGES</th>
  </tr>
  {#if arbs.length}
    {#each arbs as arb (arb.market)}
      <tr>
        <td>{profitToProcent(arb.profit)}</td>
        <td>{arb.market}</td>
        <td>{arb.lowestAsk.exchange} ⟹ {arb.highestBid.exchange}</td>
      </tr>
    {/each}
  {/if}
</table>

<style>
  table {
    width: 100%;
    border-radius: 15px;
  }
  table,
  th,
  td {
    border: 1px solid gray;
    border-collapse: collapse;
  }
  th {
    font-size: larger;
    letter-spacing: 1px;
    opacity: 0.7;
  }
  td {
    padding: 5px;
    font-size: smaller;
    text-align: center;
  }
</style>
