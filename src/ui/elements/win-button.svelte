<script>
  export let disabled = false;
  export let onClick;
</script>

<div class="winCl-wrap">
  <button class="winCl-btn" type="button" {disabled} on:click={onClick}>
    <slot />
  </button>
</div>

<style>
  .winCl-wrap {
    border: 1px solid #000;
    display: inline;
    margin-right: 10px;
    padding-top: 1px;
    padding-bottom: 3px;
    background: #c6c6c6;
  }

  .winCl-btn {
    border-left: 1px solid #fff;
    border-top: 1px solid #fff;
    border-right: 1px solid #848484;
    border-bottom: 1px solid #848484;
    background-color: transparent;
    padding: 3px 15px 3px 15px;
    font-size: 14px;
    width: 100%;
  }

  .winCl-btn:hover,
  .winCl-btn:focus {
    outline: 0;
  }

  .winCl-btn:active {
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    border-left: 1px solid #848484;
    border-top: 1px solid #848484;
  }
</style>
