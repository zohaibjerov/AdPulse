<script>
    import { getToasts, removeToast } from '$lib/stores/toast.svelte.js';
    import { fly } from 'svelte/transition';
    import { CheckCircle, Info, XCircle, X } from 'lucide-svelte';

    let toasts = $derived(getToasts());
</script>

<div class="fixed bottom-4 right-4 z-[200] flex flex-col gap-2 p-4 pointer-events-none">
    {#each toasts as toast (toast.id)}
        <div 
            class="pointer-events-auto min-w-[300px] bg-white rounded-lg shadow-lg border border-gray-100 p-4 flex items-center gap-3 overflow-hidden"
            in:fly={{ x: 200, duration: 300 }}
            out:fly={{ x: 200, duration: 300 }}
            role="alert"
        >
            <div class="flex-shrink-0">
                {#if toast.type === 'success'}
                    <div class="bg-green-100 p-1 rounded-full">
                        <CheckCircle class="w-5 h-5 text-green-600" />
                    </div>
                {:else if toast.type === 'error'}
                    <div class="bg-red-100 p-1 rounded-full">
                        <XCircle class="w-5 h-5 text-red-600" />
                    </div>
                {:else}
                    <div class="bg-blue-100 p-1 rounded-full">
                        <Info class="w-5 h-5 text-blue-600" />
                    </div>
                {/if}
            </div>
            
            <p class="text-sm font-medium text-gray-800 flex-1">{toast.message}</p>

            <button 
                onclick={() => removeToast(toast.id)}
                class="text-gray-400 hover:text-gray-600 transition-colors p-1"
                aria-label="Close"
            >
                <X class="w-4 h-4" />
            </button>
            
            <!-- Progress bar could go here -->
        </div>
    {/each}
</div>
