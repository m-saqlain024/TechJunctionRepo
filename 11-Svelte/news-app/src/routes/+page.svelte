<script>
  import Increament from "../components/Increament.svelte";
  import Decreament from "../components/Decreament.svelte";
  import { counter } from "./../lib/state/state";
  import { saqi } from "./../lib/state/state";
  import { writable } from 'svelte/store';

  let count = 0;
  counter.subscribe((value) => {
    count = value;
  });

  let value = "";
  saqi.subscribe((str) => {
    value = str;
  });


  let arr = [0, 1 ,2,3,4,5,6,7,8,9,10];
  $: handleClick1 = () => {
    arr.splice(2,4)
    arr = arr;
  };
  let x = 0;
	let y = 0;

	/** @param {number} value */
	function setY(value) {
		y = value;
	}

	$: yDependent = y;
	$: setY(x);
  // /** @type {string} */
	// let className;
/** @param {number} value */
  const counters = writable(120);

  counters.set(420)
	console.log($counters); 
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="">
  <button on:click={handleClick1}>click me</button>
  <div class="flex mx-auto justify-center items-center gap-2">
    <Increament />
    <h1
      class="border border-gray-50 shadow-xl py-2 px-4 rounded-md text-lg font-semibold"
    >
      {count}
    </h1>
    <Decreament />
  </div>
</section>


<style>
  :global(body){
    background-color: antiquewhite;
  }
</style>