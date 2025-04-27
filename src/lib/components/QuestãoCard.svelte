<script>
  export let questão;
  export let onClick;
</script>

<button
  on:click={onClick}
  class="w-full p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
>
  <div class="flex items-center justify-between">
    <div>
      <h3 class="text-lg font-medium text-gray-900">{questão.título}</h3>
      <p class="text-sm text-gray-500 mt-1">{questão.descrição}</p>
    </div>
    <div class="flex items-center space-x-2">
      <span class="text-sm text-gray-500">{questão.opções?.length || 0} opções</span>
      <svg
        class="w-5 h-5 text-gray-400"
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