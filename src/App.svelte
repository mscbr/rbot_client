<script>
  import TwoColumnGrid from './layouts/two-column-grid.svelte';
  import TickerTable from './components/ticker-table.svelte';
</script>

<main>
  <div class="title">scan_exec</div>
  <TwoColumnGrid rows={[{ left: TickerTable, right: null }]} />
</main>

<style>
  .title {
    font-weight: 800;
    letter-spacing: 4px;
    font-size: 18px;
    width: 120px;
    margin: 0 auto;
  }

  main {
    font-family: Roboto;
  }
</style>
