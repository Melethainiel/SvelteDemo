<script lang="ts">
	import Header from '../components/Header.svelte';
	import NavMenu from '../components/NavMenu.svelte';
	
	import '../app.css';

	let { children } = $props();
</script>

<Header />
<NavMenu />

<main class="lg:pl-[14.5rem] px-6">
	{@render children()}
</main>
