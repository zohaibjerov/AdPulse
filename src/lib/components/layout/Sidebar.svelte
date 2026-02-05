<script>
import { BookOpen, LayoutGrid, UserCheck, GraduationCap, Share2, HelpCircle, Settings, Menu, X, Layers } from 'lucide-svelte';

	let { isMobileOpen = false, toggleMobile } = $props();
	let isHovered = $state(false);
</script>

<!-- Mobile Toggle Button (Fixed on screen) -->
{#if !isMobileOpen}
	<button onclick={toggleMobile} class="fixed top-4 left-4 z-50 p-2 bg-white/80 backdrop-blur-md rounded-lg shadow-md lg:hidden transition-opacity duration-300 hover:bg-white/90">
		<Menu class="w-6 h-6 text-gray-800" />
	</button>
{/if}

<aside 
	class="fixed top-0 left-0 h-full bg-white shadow-xl flex flex-col z-50 transition-transform duration-300 ease-in-out border-r border-gray-200
	{isMobileOpen ? 'translate-x-0 w-72' : '-translate-x-full w-72 lg:translate-x-0 lg:w-20'} 
	{isHovered ? 'lg:w-72' : ''}"
	onmouseenter={() => isHovered = true}
	onmouseleave={() => isHovered = false}
>
  <div class="flex items-center justify-between px-4 py-6 h-20 flex-shrink-0">
	<div class="flex items-center gap-3 overflow-hidden">
		<!-- Placeholder Logo -->
		<div class="w-10 h-10 min-w-[2.5rem] bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-sm">
			<Layers class="w-6 h-6" />
		</div>
		<span class="text-2xl font-bold text-gray-800 whitespace-nowrap transition-opacity duration-300
			{isHovered || isMobileOpen ? 'opacity-100' : 'opacity-0 lg:opacity-0 lg:group-hover:opacity-100'}
		">AdPulse</span>
	</div>
	<!-- Mobile Close Button (Inside Header) -->
	<button onclick={toggleMobile} class="p-1 rounded-md hover:bg-gray-100 lg:hidden text-gray-500">
		<X class="w-6 h-6" />
	</button>
  </div>

  <nav class="flex-1 flex flex-col gap-1 mt-2 px-2">
    <a href="#" class="flex items-center gap-3 px-4 py-3.5 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-xl transition overflow-hidden bg-white" title="Ads Library">
		<div class="min-w-[1.25rem]"><BookOpen class="w-5 h-5" /></div>
		<span class="whitespace-nowrap transition-opacity duration-300
			{isHovered || isMobileOpen ? 'opacity-100' : 'opacity-0 lg:opacity-0 lg:group-hover:opacity-100'}
		">Ads Library</span>
	</a>
    <a href="#" class="flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition overflow-hidden" title="Pages Library">
		<div class="min-w-[1.25rem]"><LayoutGrid class="w-5 h-5" /></div>
		<span class="whitespace-nowrap transition-opacity duration-300
			{isHovered || isMobileOpen ? 'opacity-100' : 'opacity-0 lg:opacity-0 lg:group-hover:opacity-100'}
		">Pages Library</span>
	</a>
    <a href="#" class="flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition overflow-hidden" title="Services">
		<div class="min-w-[1.25rem]"><UserCheck class="w-5 h-5" /></div>
		<span class="whitespace-nowrap transition-opacity duration-300
			{isHovered || isMobileOpen ? 'opacity-100' : 'opacity-0 lg:opacity-0 lg:group-hover:opacity-100'}
		">Services</span>
	</a>
    <a href="#" class="flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition overflow-hidden" title="Guides">
		<div class="min-w-[1.25rem]"><GraduationCap class="w-5 h-5" /></div>
		<span class="whitespace-nowrap transition-opacity duration-300
			{isHovered || isMobileOpen ? 'opacity-100' : 'opacity-0 lg:opacity-0 lg:group-hover:opacity-100'}
		">Guides</span>
	</a>
    <div class="flex-1"></div>
    <a href="#" class="flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition overflow-hidden" title="Social">
		<div class="min-w-[1.25rem]"><Share2 class="w-5 h-5" /></div>
		<span class="whitespace-nowrap transition-opacity duration-300 {isHovered || isMobileOpen ? 'opacity-100' : 'opacity-0 lg:opacity-0 lg:group-hover:opacity-100'}">Social</span>
	</a>
    <a href="#" class="flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition overflow-hidden" title="Help Center">
		<div class="min-w-[1.25rem]"><HelpCircle class="w-5 h-5" /></div>
		<span class="whitespace-nowrap transition-opacity duration-300 {isHovered || isMobileOpen ? 'opacity-100' : 'opacity-0 lg:opacity-0 lg:group-hover:opacity-100'}">Help Center</span>
	</a>
    <a href="#" class="flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition mb-2 overflow-hidden" title="Your Settings">
		<div class="min-w-[1.25rem]"><Settings class="w-5 h-5" /></div>
		<span class="whitespace-nowrap transition-opacity duration-300 {isHovered || isMobileOpen ? 'opacity-100' : 'opacity-0 lg:opacity-0 lg:group-hover:opacity-100'}">Your Settings</span>
	</a>
  </nav>
</aside>
{#if isMobileOpen}
	<div class="fixed inset-0 bg-black/50 z-30 lg:hidden" onclick={toggleMobile}></div>
{/if}
