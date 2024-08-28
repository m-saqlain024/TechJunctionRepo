<script>
  // @ts-nocheck
  import Increament from "../components/Increament.svelte";
  import Decreament from "../components/Decreament.svelte";
  import { counter } from "./../lib/state/state";

  let count = 10;
  counter.subscribe((value) => {
    count = value;
  });

  // unsubscribe()
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <Increament />
  <h1>{count}</h1>
  <Decreament />
</section>
