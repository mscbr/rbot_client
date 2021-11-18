<script>
  import {
    subscribeToChannel,
    unsubscribeFromChannel,
    wsStore,
  } from '../stores/websocket';

  import WinButton from '../ui/elements/win-button.svelte';

  $: isSubscribingTickers = $wsStore.subscriptions.find(item => item === 'tickerArbs');
</script>

<div class="container">
  <div class="btn-wrapper">
    <WinButton onClick={() => isSubscribingTickers ? unsubscribeFromChannel('tickerArbs') : subscribeToChannel('tickerArbs') } disabled={!$wsStore.wsOpen}><span>{isSubscribingTickers ? 'Unsubsubscribe Tickers' : 'Subscribe Tickers'}</span></WinButton>
  </div>
</div>

<style>
  .container {
    width: 100%;
    height: 100%;
    border: 1px solid cornsilk;
    border-radius: 5px;
  }
  .btn-wrapper {
    margin: 4px 12px;
  }
  span {
    font-weight: 500;
  }
</style>
