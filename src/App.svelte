<script>
  import { openConnection, closeConnection, wsStore } from './stores/websocket';
  import TwoColumnGrid from './ui/layouts/two-column-grid.svelte';
  import TickerTable from './components/ticker-table.svelte';
  import TickerController from './components/ticker-controller.svelte';
  import ObController from './components/ob-controller.svelte';
  import ObTable from './components/ob-table.svelte';

  import WinButton from './ui/elements/win-button.svelte';
</script>

<main>
  <div class="btn-container">
    <WinButton onClick={$wsStore.wsOpen ? closeConnection : openConnection}>
      WS: {$wsStore.wsOpen ? 'Disconnect' : 'Connect'}
    </WinButton>
  </div>
  <div class="title">scan_exec</div>
  <TwoColumnGrid
    rows={[
      { left: ObTable, right: ObController },
      { left: TickerTable, right: TickerController },
    ]}
  />
</main>

<style>
  .title {
    font-weight: 800;
    letter-spacing: 4px;
    font-size: 18px;
    width: 120px;
    margin: 0 auto 32px;
  }
  .btn-container {
    position: absolute;
    top: 0;
    left: 0;
    margin: 4px;
  }

  main {
    font-family: Roboto;
  }
</style>
