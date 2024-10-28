<script>
// @ts-nocheck

	import Button from "../Button/Button.stories.svelte";

	let isOpen = false;
	const navigation = [
		{ name: 'Home', href: '#' },
		{ name: 'Team', href: '#' },
		{ name: 'Projects', href: '#' },
		{ name: 'Calendar', href: '#' },
		{ name: 'Reports', href: '#' }
	];

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<header class="w-full">
	<div class="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
		<nav class="flex items-center justify-between gap-4 py-4">
			<!-- Logo or Brand Name -->
			<div class="text-xl  font-bold">Brand</div>

			<!-- Hamburger Button for Mobile -->
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button class=" md:hidden" on:click={toggleMenu}>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
				</svg>
			</button>

			<!-- Desktop Navigation Links -->
			<div class="hidden md:flex gap-4">
				{#each navigation as item}
					<a href={item.href} class="px-3 py-2 text-lg font-normal hover:bg-gray-300  rounded">{item.name}</a>
				{/each}
			</div>

			<!-- Desktop Buttons -->
			<div class="hidden md:flex gap-3 items-center">
				<button class="text-white px-4 py-2 bg-blue-700 rounded hover:bg-blue-600">Login</button>
				<button class="text-white px-4 py-2 bg-blue-700 rounded hover:bg-blue-600">Sign up</button>
			</div>
		</nav>

		<!-- Mobile Navigation Links -->
		{#if isOpen}
			<div class="md:hidden bg-blue-600">
				{#each navigation as item}
					<a href={item.href} class="block px-4 py-2 text-white hover:bg-blue-700">{item.name}</a>
				{/each}
				<div class="flex flex-col gap-3 items-start px-4 py-2">
					<button class="text-white px-4 py-2 bg-blue-700 rounded hover:bg-blue-600">Login</button>
					<button class="text-white px-4 py-2 bg-blue-700 rounded hover:bg-blue-600">Sign up</button>
				</div>
			</div>
		{/if}
	</div>
</header>
