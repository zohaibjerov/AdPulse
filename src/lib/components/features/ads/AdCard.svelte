<script>
  export let ad;
  export let onclick = () => {};
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div 
  class="rounded-2xl shadow-lg overflow-hidden border border-gray-200 max-w-[400px] w-full flex flex-col cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-xl bg-white"
  onclick={onclick}
>
  <div class="relative w-full h-72 bg-gray-100 flex items-center justify-center overflow-hidden">
    {#if ad.videoSrc}
      <!-- svelte-ignore a11y_media_has_caption -->
      <video 
        src={ad.videoSrc} 
        class="object-cover w-full h-full" 
        muted 
        loop 
        playsinline
        onmouseenter={(e) => e.currentTarget.play()}
        onmouseleave={(e) => e.currentTarget.pause()}
      ></video>
    {:else}
      <img src={ad.image} alt={ad.title} class="object-cover w-full h-full" />
    {/if}
    {#if ad.cta}
      <span class="absolute top-3 left-3 bg-white/90 text-xs font-semibold px-3 py-1 rounded-full shadow text-gray-800">{ad.cta}</span>
    {/if}
    {#if ad.video || ad.videoSrc}
  <button class="absolute inset-0 flex items-center justify-center" aria-label="Play video">
        <span class="bg-white/80 rounded-full p-2 shadow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-800">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z" />
          </svg>
        </span>
      </button>
    {/if}
  </div>
  <div class="p-5 flex flex-col gap-2 flex-1">
    <div class="flex items-center gap-2">
      <span class="text-green-600 font-bold text-lg">{ad.metric.value}</span>
      <span class="text-gray-500 text-sm font-medium">{ad.metric.label}</span>
      <span class="ml-auto text-gray-400 text-xs">{ad.timeAgo}</span>
    </div>
    <hr class="border-gray-200 h-[0.5px]" />
    <div class="flex items-center gap-4 text-xs text-gray-500">
      <span class="flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg> {ad.stats.views}</span>
      <span class="flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4V7a4 4 0 00-8 0v2m8 0a4 4 0 01-8 0m8 0v2a4 4 0 01-8 0V7a4 4 0 018 0v2z"/></svg> {ad.stats.engagements}</span>
      <span class="flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3z"/></svg> {ad.stats.price}</span>
    </div>
    <hr class="border-gray-200 h-[0.5px]" />

    <div class="flex items-center gap-2 mt-2">
      {#each ad.flags as flag}
        <img src={flag} alt="flag" class="w-5 h-5 rounded-full border" />
      {/each}
      <span class="text-xs text-gray-400 ml-2">{ad.audience}</span>
    </div>
    <hr class="border-gray-200 h-[0.5px]" />

    <div class="text-xs text-gray-600 mt-2">
      {ad.note}
    </div>
  </div>
</div>
