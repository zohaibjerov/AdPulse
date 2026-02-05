<script>
  import { X, Copy, Star, Save, Play, RefreshCw, TrendingUp, BarChart3, Users, Globe, PlayCircle, Instagram, Facebook, Check } from 'lucide-svelte';
  import { fade, fly } from 'svelte/transition';
  import { addToast } from '$lib/stores/toast.svelte.js';
  
  export let isOpen = false;
  export let onClose;
  export let ad;

  // Prevent scrolling when modal is open
  $: if (typeof document !== 'undefined') {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }

  let isPlaying = false;
  $: if (ad) isPlaying = false;

  function handleCopyLink() {
      navigator.clipboard.writeText(`https://app.afterlib.com/sharableAd?ad=${ad.id || '1'}`);
      addToast('Link copied to clipboard', 'success');
  }

  function handleSaveAd() {
      addToast('Ad saved to your collection', 'info');
  }

  function handleSavePage() {
      addToast('Page saved to library', 'info');
  }
</script>

{#if isOpen && ad}
  <div class="fixed inset-0 z-[100] flex justify-end" role="dialog" aria-modal="true">
    <!-- Backdrop -->
    <button 
        class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onclick={onClose} 
        aria-label="Close modal"
        transition:fade={{ duration: 200 }}
    ></button>

    <!-- Drawer Content -->
    <div 
        class="relative h-full w-full max-w-[1000px] bg-white shadow-2xl flex flex-col overflow-hidden transform transition-transform duration-300 ease-out"
        transition:fly={{ x: 1000, duration: 300, opacity: 1 }}
    >
      
      <!-- Header -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0 bg-white z-10">
        <h2 class="text-xl font-bold text-gray-900">Ad summary</h2>
        <button onclick={onClose} class="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
          <X class="w-6 h-6" />
        </button>
      </div>

      <!-- Scrollable Body -->
      <div class="flex-1 overflow-y-auto p-6 md:p-8 min-h-0">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          <!-- Left Column (Media & Actions) -->
          <div class="flex flex-col gap-6">
            <div class="relative aspect-[4/5] bg-gray-50 rounded-xl overflow-hidden border border-gray-100 group flex items-center justify-center bg-black">
              {#if ad.videoSrc && isPlaying}
                <!-- svelte-ignore a11y_media_has_caption -->
                <video 
                  src={ad.videoSrc} 
                  class="w-full h-full object-contain" 
                  controls
                  autoplay
                ></video>
              {:else}
                <img src={ad.image} alt={ad.title} class="w-full h-full object-cover opacity-90" />
                {#if ad.video || ad.videoSrc}
                    <button 
                        class="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors cursor-pointer"
                        onclick={() => isPlaying = true}
                        aria-label="Play video"
                    >
                        <div class="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transform transition-transform group-hover:scale-110">
                            <Play class="w-10 h-10 text-gray-900 ml-1" fill="currentColor" />
                        </div>
                    </button>
                {/if}
              {/if}
            </div>

            <!-- Ad ID & Share -->
            <div class="flex flex-col gap-2">
              <span class="text-xs font-medium text-gray-500">Ad's ID: {ad.id || '1'}</span>
              <div class="flex gap-2">
                <div class="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 truncate font-mono">
                  https://app.afterlib.com/sharableAd?ad={ad.id || '1'}
                </div>
                <button onclick={handleCopyLink} class="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 transition-colors" aria-label="Copy link">
                  <Copy class="w-5 h-5" />
                </button>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="grid grid-cols-2 gap-3">
              <button onclick={handleSaveAd} class="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                <Star class="w-4 h-4" /> Save ad
              </button>
              <button onclick={handleSavePage} class="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                <Save class="w-4 h-4" /> Save page
              </button>
            </div>

            <!-- Page Info -->
            <div class="space-y-4 pt-2">
                <div>
                    <h3 class="text-sm font-bold text-gray-900 mb-1">Ad's page name</h3>
                    <a href="#" class="text-blue-600 hover:underline font-medium">Summer Collection Launch</a>
                </div>
                <div>
                    <h3 class="text-sm font-bold text-gray-900 mb-1">Offer link</h3>
                    <a href="#" class="text-blue-600 hover:underline break-all block">https://example.com/offer/1</a>
                </div>
            </div>

             <!-- Video Assets Accordion (Static) -->
             <div class="border border-gray-200 rounded-lg p-4 flex items-center gap-3 text-gray-700 hover:bg-gray-50 cursor-pointer">
                <PlayCircle class="w-5 h-5" />
                <span class="font-medium text-sm">Video 1</span>
             </div>
          </div>

          <!-- Right Column (Details) -->
          <div class="flex flex-col gap-8">
             <!-- Header Info -->
             <div>
                <div class="text-sm text-gray-500 mb-4">Published Oct 20, 2025 • Seen Jan 20, 2026</div>
                <div class="space-y-4">
                    <p class="text-gray-800 leading-relaxed">
                        Discover our new summer collection. Fresh styles, bold colors, and sustainable materials. Shop now and get 20% off your first order.
                    </p>
                    <p class="text-gray-800 leading-relaxed">
                        High engagement in Germany, ages 21–35, short-form video format drives 3x more clicks than static images
                    </p>
                </div>
             </div>

             <!-- CTA Box -->
             <div class="space-y-3">
                 <div class="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 font-medium flex items-center gap-2">
                    <Globe class="w-4 h-4 text-gray-500" /> Summer Collection Launch
                 </div>
                 <button class="w-full bg-[#111827] text-white font-bold py-3.5 rounded-lg hover:bg-gray-900 transition-colors">
                    Shop Now
                 </button>
             </div>

             <!-- Hashtags -->
             <div class="flex flex-wrap gap-1 text-sm text-blue-600 font-medium">
                 <a href="#">#Technology</a> <a href="#">#Innovation</a> <a href="#">#AI</a> <a href="#">#Future</a> <a href="#">#Digital</a> <a href="#">#Smart</a> <a href="#">#Modern</a> <a href="#">#Tech</a>
             </div>

             <!-- Main Stats -->
             <div>
                 <h3 class="text-sm font-bold text-gray-900 mb-4">Ad's main stats</h3>
                 <div class="grid grid-cols-2 gap-4">
                     <div class="bg-gray-50 rounded-xl p-4 flex flex-col gap-1">
                         <div class="text-xs text-gray-500 font-medium flex items-center gap-2">
                            <RefreshCw class="w-4 h-4" /> Active ads
                         </div>
                         <div class="text-xl font-bold text-gray-900">233</div>
                     </div>
                     <div class="bg-gray-50 rounded-xl p-4 flex flex-col gap-1">
                         <div class="text-xs text-gray-500 font-medium flex items-center gap-2">
                            <TrendingUp class="w-4 h-4" /> Trend
                         </div>
                         <div class="text-xl font-bold text-gray-900">↑ 2</div>
                     </div>
                     <div class="bg-gray-50 rounded-xl p-4 flex flex-col gap-1">
                         <div class="text-xs text-gray-500 font-medium flex items-center gap-2">
                            <BarChart3 class="w-4 h-4" /> Performance
                         </div>
                         <div class="text-xl font-bold text-gray-900">89</div>
                     </div>
                     <div class="bg-gray-50 rounded-xl p-4 flex flex-col gap-1">
                         <div class="text-xs text-gray-500 font-medium flex items-center gap-2">
                            <Users class="w-4 h-4" /> Audience reach
                         </div>
                         <div class="text-xl font-bold text-gray-900">{ad.stats.engagements}</div>
                     </div>
                 </div>
             </div>

             <!-- Ad Details Grid -->
             <div>
                <h3 class="text-sm font-bold text-gray-900 mb-4">Ad's details</h3>
                <div class="grid grid-cols-2 gap-y-6 gap-x-8">
                    <!-- Technology -->
                    <div>
                        <div class="text-xs font-semibold text-gray-900 mb-2">Technology</div>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-medium">Shopify</span>
                            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-medium">Zendesk</span>
                            <span class="text-xs text-gray-500 mt-1">(+2)</span>
                        </div>
                    </div>
                     <!-- Audience Age -->
                     <div>
                        <div class="text-xs font-semibold text-gray-900 mb-2">Audience age</div>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-medium">{ad.audience}</span>
                        </div>
                    </div>
                    <!-- Country -->
                    <div>
                        <div class="text-xs font-semibold text-gray-900 mb-2">Country</div>
                        <div class="flex flex-wrap gap-2">
                             {#each ad.flags as flag, i}
                                <div class="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-medium flex items-center gap-2">
                                     <img src={flag} alt="flag" class="w-4 h-4 rounded-full" />
                                     <span>{['DE', 'AT', 'CH'][i] || 'US'}</span>
                                </div>
                             {/each}
                            <span class="text-xs text-gray-500 mt-1">(+2)</span>
                        </div>
                    </div>
                     <!-- Languages -->
                     <div>
                        <div class="text-xs font-semibold text-gray-900 mb-2">Languages</div>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-medium">English</span>
                        </div>
                    </div>
                     <!-- Display Format -->
                     <div>
                        <div class="text-xs font-semibold text-gray-900 mb-2">Display format</div>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-medium">{ad.video ? 'Video' : 'Image'}</span>
                        </div>
                    </div>
                     <!-- Publisher Platform -->
                     <div>
                        <div class="text-xs font-semibold text-gray-900 mb-2">Publisher platform</div>
                        <div class="flex flex-wrap gap-2">
                            <div class="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-medium flex items-center gap-2">
                                <Facebook class="w-3 h-3 text-blue-600" fill="currentColor" /> Facebook
                            </div>
                             <div class="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-medium flex items-center gap-2">
                                <Instagram class="w-3 h-3 text-pink-600" /> Instagram
                            </div>
                        </div>
                    </div>
                </div>
             </div>

          </div>
        </div>
    </div>
  </div>
</div>
{/if}
