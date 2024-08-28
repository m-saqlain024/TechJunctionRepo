<script>
  // @ts-nocheck

  import { counter } from "./../lib/state/state";
  const handleClick = () => {
    counter.update((value) => value + 1);
  };
</script>

<button class="bg-blue-500 py-2 px-5 outline-none rounded-lg hover:bg-blue-400 text-white text-lg font-extrabold cursor-pointer border border-zinc-400"  on:click={handleClick}> - </button>

