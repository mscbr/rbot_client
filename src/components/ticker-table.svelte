<script>
  import { tickerStore } from '../stores/websocket';

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
  {#if $tickerStore.arbs && $tickerStore.arbs.length}
    {#each $tickerStore.arbs as arb (arb.market)}
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
