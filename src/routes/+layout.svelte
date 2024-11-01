<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { ModeWatcher } from 'mode-watcher';
	import Nav from '$lib/components/Nav.svelte';
</script>

<ModeWatcher />

<Nav />

{@render children()}
