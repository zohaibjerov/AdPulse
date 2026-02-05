<script>
  import {
    Bookmark,
    SlidersHorizontal,
    ListFilterPlus,
    ChartNoAxesCombined,
    ChartNoAxesColumnDecreasing,
    Cpu,
    Flag,
    Languages,
    Grid2x2,
    MousePointer,
    Percent,
    Calendar,
    Search
  } from '@lucide/svelte';

  let { searchQuery = $bindable('') } = $props();
</script>

<div class="w-full flex items-center gap-2 overflow-x-auto py-4 pl-16 pr-2 lg:px-2 bg-white shadow mb-8 text-gray-500 whitespace-nowrap scrollbar-hide">
  <!-- Search -->
  <div class="relative group">
    <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
    <input
      type="text"
      bind:value={searchQuery}
      placeholder="Search (CMD + K)"
      class="border rounded-lg pl-9 pr-4 py-2 text-sm w-40 shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all focus:w-64"
    />
  </div>

  <!-- Icon only -->
  <button class="filter-btn">
    <Bookmark class="w-4 h-4" />
  </button>

  <button class="filter-btn">
    <SlidersHorizontal class="w-4 h-4" />
    <span>All Filters</span>
  </button>

  <button class="filter-btn">
    <ListFilterPlus class="w-4 h-4" />
    <span>Active ads</span>
  </button>

  <button class="filter-btn">
    <ChartNoAxesCombined class="w-4 h-4" />
    <span>Trend</span>
  </button>

  <button class="filter-btn">
    <ChartNoAxesColumnDecreasing class="w-4 h-4" />
    <span>Performance</span>
  </button>

  <button class="filter-btn">
    <Cpu class="w-4 h-4" />
    <span>Technology</span>
  </button>

  <button class="filter-btn">
    <Flag class="w-4 h-4" />
    <span>Country</span>
  </button>

  <button class="filter-btn">
    <Languages class="w-4 h-4" />
    <span>Languages</span>
  </button>

  <button class="filter-btn">
    <Grid2x2 class="w-4 h-4" />
    <span>Display Format</span>
  </button>

  <button class="filter-btn">
    <SlidersHorizontal class="w-4 h-4" />
    <span>Publisher Platform</span>
  </button>

  <button class="filter-btn">
    <MousePointer class="w-4 h-4" />
    <span>Call To Action</span>
  </button>

  <button class="filter-btn">
    <Percent class="w-4 h-4" />
    <span>Percentage Change</span>
  </button>

  <button class="filter-btn">
    <Calendar class="w-4 h-4" />
    <span>Creation Date</span>
  </button>
</div>



<style>
  /* Hide scrollbar for Chrome, Safari and Opera */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
</style>
