
	<script>
	import AdCard from '$lib/components/features/ads/AdCard.svelte';
	import FilterBar from '$lib/components/layout/FilterBar.svelte';
	import AdDetailsModal from '$lib/components/features/ads/AdDetailsModal.svelte';
    import AdCardSkeleton from '$lib/components/features/ads/AdCardSkeleton.svelte';
    import { onMount } from 'svelte';
    import { ads } from '$lib/data/mockAds.js';
	import { addToast } from '$lib/stores/toast.svelte.js';

	let selectedAd = $state(null);
    let isLoading = $state(true);

    onMount(() => {
        // Simulate API delay
        setTimeout(() => {
            isLoading = false;
        }, 1200);
    });

    let searchQuery = $state('');

    let filteredAds = $derived(
        ads.filter(ad => {
            const query = searchQuery.toLowerCase();
            return (
                ad.title.toLowerCase().includes(query) ||
                ad.note.toLowerCase().includes(query) ||
                ad.audience.toLowerCase().includes(query)
            );
        })
    );
</script>

<div class="min-h-screen bg-gray-50">
		<FilterBar bind:searchQuery />

	<div class="max-w-7xl mx-auto p-4">
		<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4 sm:gap-0 w-full max-w-[400px] sm:max-w-full mx-auto sm:mx-0">
			<h1 class="text-3xl font-bold text-gray-900 tracking-tight">Market Pulse</h1>
			<div class="flex gap-3">
				<button 
                    onclick={() => addToast('Exporting data...', 'info')}
                    class="border text-[gray] border-gray-300 rounded-lg px-4 py-2 text-base font-medium bg-white hover:bg-gray-100 flex items-center shadow-sm"
                >
					<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" /></svg>
					Export
				</button>
				<button 
                    onclick={() => addToast('Report created successfully', 'success')}
                    class="border border-gray-200 rounded-lg px-4 py-2 text-base font-medium bg-[#4F46E5] text-white hover:bg-[#4338CA] shadow-sm"
                >
                    + Create Report
                </button>
			</div>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {#if isLoading}
                {#each Array(8) as _}
                    <AdCardSkeleton />
                {/each}
            {:else}
                {#each filteredAds as ad (ad.id)}
                    <AdCard {ad} onclick={() => selectedAd = ad} />
                {/each}
            {/if}
		</div>
	</div>
</div>

<AdDetailsModal 
	isOpen={!!selectedAd} 
	ad={selectedAd} 
	onClose={() => selectedAd = null} 
/>
<style lang="postcss">
  @reference "tailwindcss";
  :global(html) {
    background-color: theme(--color-gray-100);
  }
</style>