<script>
	
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	let { children } = $props();
    import Sidebar from '$lib/components/layout/Sidebar.svelte';

	import Toast from '$lib/components/ui/Toast.svelte';

	let isMobileOpen = $state(false);

	function toggleMobile() {
		isMobileOpen = !isMobileOpen;
	}

</script>

<svelte:head>
	<title>AdPulse</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<Toast />

<div class="flex">
	<Sidebar {isMobileOpen} {toggleMobile} />
	<div class="flex-1 min-w-0 lg:ml-20 transition-all duration-300">
		{@render children()}
	</div>
</div>