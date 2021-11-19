<script>
  import {
    subscribeToChannel,
    unsubscribeFromChannel,
    wsStore,
    obStore,
    clearTargets,
  } from '../stores/websocket';

  import WinButton from '../ui/elements/win-button.svelte';

  $: isSubscribingTickers = $wsStore.subscriptions.find(
    (item) => item === 'obArbs'
  );
</script>

<div class="container2">
  <div class="btn-row">
    <div class="btn-wrapper">
      <WinButton
        onClick={() =>
          isSubscribingTickers
            ? unsubscribeFromChannel('obArbs')
            : subscribeToChannel('obArbs')}
        disabled={!$wsStore.wsOpen}
        ><span
          >{isSubscribingTickers ? 'Unsubsubscribe OB' : 'Subscribe OB'}</span
        ></WinButton
      >
    </div>
    <div class="btn-wrapper">
      <WinButton
        onClick={clearTargets}
        disabled={!$wsStore.wsOpen || !$obStore.targets.length}
        ><span>Clear Targets</span></WinButton
      >
    </div>
  </div>
</div>

<style>
  .container2 {
    width: 100%;
    height: 100%;
    border: 1px solid cornsilk;
    border-radius: 5px;
  }
  .btn-wrapper {
    margin: 4px 12px;
  }
  .btn-row {
    display: flex;
    justify-content: space-around;
  }
  span {
    font-weight: 500;
  }
</style>
