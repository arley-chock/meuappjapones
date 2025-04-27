<script>
  export let lição;
  export let onClick;
</script>

<button
  on:click={onClick}
  class="w-full p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] bg-gradient-to-r from-white to-gray-50"
>
  <div class="flex items-center justify-between">
    <div class="flex-1">
      <div class="flex items-center gap-2 mb-2">
        <h3 class="text-lg font-semibold text-gray-900">{lição.título}</h3>
        <span class="badge bg-[var(--secondary)] text-white px-2 py-0.5 rounded-full text-xs">
          Nova
        </span>
      </div>
      <p class="text-sm text-gray-600">{lição.descrição}</p>
    </div>
    <div class="flex items-center space-x-3 ml-4">
      <span class="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
        {lição.questões?.length || 0} questões
      </span>
      <svg
        class="w-5 h-5 text-[var(--primary)]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  </div>
</button> 