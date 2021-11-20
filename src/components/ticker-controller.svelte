<script>
  import {
    subscribeToChannel,
    unsubscribeFromChannel,
    wsStore,
    tickerStore,
  } from '../stores/websocket';
  import WinButton from '../ui/elements/win-button.svelte';

  let interval = $tickerStore.interval;

  $: isSubscribingTickers = $wsStore.subscriptions.find(
    (item) => item === 'tickerArbs'
  );
</script>

<div class="container">
  <div class="flex-row">
    <div class="btn-wrapper">
      <WinButton
        onClick={() =>
          isSubscribingTickers
            ? unsubscribeFromChannel('tickerArbs')
            : subscribeToChannel('tickerArbs', { interval })}
        disabled={!$wsStore.wsOpen}
        ><span class="sub-btn-lablel"
          >{isSubscribingTickers
            ? 'Unsubsubscribe Tickers'
            : 'Subscribe Tickers'}</span
        ></WinButton
      >
    </div>
    <div class="interval-input-wrapper">
      <label for="interval">INT:</label>
      <input
        type="number"
        id="interval"
        name="interval"
        bind:value={$tickerStore.interval}
        disabled={isSubscribingTickers || !$wsStore.wsOpen}
        on:change={({ target: { value } }) => {
          if (parseFloat(value) >= 1) interval = parseFloat(value);
        }}
        min={3}
      />
      <div>s.</div>
    </div>
  </div>
</div>

<style>
  .container {
    width: 100%;
    min-height: 250px;
    border: 1px solid cornsilk;
    border-radius: 5px;
  }
  .flex-row {
    display: flex;
    justify-content: space-around;
  }
  .btn-wrapper {
    margin: 4px 12px;
  }
  .sub-btn-lablel {
    font-weight: 500;
  }

  #interval {
    font-size: 14px;
    height: 24px;
    width: 48px;
  }
  .interval-input-wrapper {
    margin: 4px 12px;
    display: flex;
    align-items: baseline;
    gap: 4px;
  }
</style>
