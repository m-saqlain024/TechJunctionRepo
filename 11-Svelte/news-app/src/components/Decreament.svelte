<script>
  // @ts-nocheck

  import { counter } from "./../lib/state/state";
  const handleClick = () => {
    counter.update((value) => value + 1);
  };
</script>

<button on:click={handleClick}> - </button>

<style>
  button {
    background-color: aqua;
    padding: 2px 3px;
    border: 2px solid burlywood;
    border-radius: 5px;
  }
</style>
