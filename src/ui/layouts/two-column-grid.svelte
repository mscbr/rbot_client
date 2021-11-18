<script>
  export let rows = [
    { left: null, right: null },
    { left: null, right: null },
  ];
</script>

<div class="container">
  {#each rows as row}
    <div class="row">
      <div class="column"><svelte:component this={row.left} /></div>
      <div class="column"><svelte:component this={row.right} /></div>
    </div>
  {/each}
</div>

<style>
  .container {
    width: 100vw;
    min-height: 100vh;
    padding: 16px;
    background: transparent;
    box-sizing: border-box;
    z-index: 2;
  }
  .row {
    display: grid;
    grid-gap: 8px;
    margin-bottom: 8px;
    grid-template-columns: 5fr 3fr;
    grid-template-rows: auto;
  }
  .column {
    min-height: 80px;
    border-radius: 5px;
  }
</style>
