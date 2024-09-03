<script>
  import Increament from "../components/Increament.svelte";
  import Decreament from "../components/Decreament.svelte";
  import { counter } from "./../lib/state/state";
  import {saqi} from './../lib/state/state'

  let count = 0;
  counter.subscribe((value) => {
    count = value;
  });


  console.log(saqi)

  let value = ''
  saqi.subscribe((str)=>{
    value = str
  })


console.log(value)
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="">
  <div class="flex mx-auto justify-center items-center gap-2">
    <Increament />
    <h1 class="border border-gray-50 shadow-xl py-2 px-4  rounded-md text-lg font-semibold">{count}</h1>
    <Decreament />
  </div>
</section>
