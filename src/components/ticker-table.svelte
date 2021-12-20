<script>
  import { tickerStore, addPathToOb, wsStore } from '../stores/websocket';
  import { profitToProcent } from '../utils/converters';
</script>

<table>
  <tr>
    <th>PROFIT</th>
    <th>PAIR</th>
    <th>EXCHANGES</th>
  </tr>
  {#if $tickerStore.arbs && $tickerStore.arbs.length}
    {#each $tickerStore.arbs as arb (`${arb.market}-${arb.ask.exchange}-${arb.bid.exchange}`)}
      <tr>
        <td>{profitToProcent(arb.profit)}</td>
        <td>
          <div class="market-wrapper">
            <div class="market">{arb.market}</div>
            <button
              class="ob-button"
              on:click={() =>
                addPathToOb({
                  market: arb.market,
                  exchanges: [arb.ask.exchange, arb.bid.exchange],
                })}
              disabled={!$wsStore.wsOpen}
            >
              OB->
            </button>
          </div>
        </td>
        <td>{arb.ask.exchange} ⟹ {arb.bid.exchange}</td>
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

  .market {
    margin-left: 4px;
  }
  .ob-button {
    margin: 0px 8px;
    border: 1px solid gray;
    border-radius: 8px;
    cursor: pointer;
    background: transparent;
    color: rgb(0, 255, 127);
    font-size: 10px;
    height: 20px;
  }
  .ob-button:hover {
    background-color: rgba(119, 136, 153, 0.3);
  }
  button:disabled {
    border: 1px solid #999999;
    background-color: rgba(119, 136, 153, 0.3);
    color: rgb(255, 99, 71);
    cursor: initial;
  }
  .market-wrapper {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
