<script>
  import { obStore, removeObPath } from '../stores/websocket';
  import { profitToProcent } from '../utils/converters';
</script>

<table>
  <tr>
    <th>RL-PROFIT</th>
    <th>PAIR</th>
    <th>FEES</th>
    <th>EXCHANGES</th>
  </tr>
  {#if $obStore.paths && $obStore.paths.length}
    {#each $obStore.paths as path (Math.random().toString())}
      <tr>
        <td>
          <div class="ob-level-profit">
            {#if !!path.arbs}
              {#each Object.values(path.arbs) as level}
                <div class="ob-level">
                  {level.preVal.split('.')[0]}:
                  <span class={level.arb > 1 ? 'green' : 'red'}
                    >{profitToProcent(level.arb)}</span
                  >
                </div>
              {/each}
            {/if}
          </div>
        </td>
        <td>
          <div class="market-wrapper">
            <div class="market">{path.market}</div>
            <button
              class="ob-button"
              on:click={() => removeObPath({ id: path.id })}
            >
              RMV
            </button>
          </div>
        </td>
        <td
          >{path.transferFees && Object.keys(path.transferFees).length
            ? `fix: ${path.transferFees.fix} ${
                path.transferFees.percent
                  ? `%: ${path.transferFees.percent}`
                  : ''
              }` +
              ' ' +
              `${Object.keys(path.transferFees.quoteEstimation).map(
                (key) => `${key}: ${path.transferFees.quoteEstimation[key]}`
              )}`
            : 'NO DATA'}</td
        >
        {#if path.exchanges.length}
          <td>{path.exchanges[0]} ⟹ {path.exchanges[1]}</td>
        {/if}
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

  .ob-level-profit {
    display: flex;
    justify-content: space-between;
  }
  .green {
    color: limegreen;
  }
  .red {
    color: darkred;
  }
  .ob-button {
    margin: 0px 8px;
    border: 1px solid gray;
    border-radius: 8px;
    cursor: pointer;
    background: transparent;
    color: lightcoral;
    /* color: rgb(0, 255, 127); */
    font-size: 10px;
    height: 20px;
  }
  .ob-button:hover {
    background-color: rgba(119, 136, 153, 0.3);
  }
  button:disabled {
    border: 1px solid #999999;
    background-color: rgba(119, 136, 153, 0.3);
    /* color: rgb(255, 99, 71); */
    cursor: initial;
  }
  .market-wrapper {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
