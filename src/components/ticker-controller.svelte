<script>
  import {
    subscribeToChannel,
    unsubscribeFromChannel,
    populateWithdrawFees,
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
  <div class="flex-row">
    <div class="btn-wrapper">
      <WinButton onClick={populateWithdrawFees} disabled={!$wsStore.wsOpen}
        >W/draw fees</WinButton
      >
    </div>
  </div>
  <div class="status-map">
    <ul>
      <li><span style="color: lime">BTC/USDT</span> - "CHECKED"</li>
      <li><span style="color: yellow">BTC/USDT</span> - "TO TEST"</li>
      <li><span style="color: red">BTC/USDT</span> - "INVALID"</li>
    </ul>
  </div>
</div>

<style>
  .container {
    width: 100%;
    min-height: 250px;
    border: 1px solid cornsilk;
    border-radius: 5px;
    position: relative;
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
  .status-map {
    position: absolute;
    bottom: 0;
    font-size: 12px;
  }
</style>
