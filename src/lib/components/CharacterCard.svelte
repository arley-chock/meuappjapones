<script>
  export let character = '';
  export let romaji = '';
  export let meaning = '';
  export let audioSrc = '';

  function playAudio() {
    if (audioSrc) {
      const audio = new Audio(audioSrc);
      audio.play();
    }
  }

  function handleKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      playAudio();
    }
  }
</script>

<div
  class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-primary-100 transition-colors group"
  on:click={playAudio}
  on:keydown={handleKeydown}
  role="button"
  tabindex="0"
>
  <div class="text-center mb-3">
    <span class="text-4xl font-japanese group-hover:text-primary-600 transition-colors">
      {character}
    </span>
  </div>
  
  <div class="text-center">
    <p class="font-medium text-gray-900 mb-1">{romaji}</p>
    <p class="text-sm text-gray-500 italic">{meaning}</p>
  </div>

  {#if audioSrc}
    <div class="mt-2 text-center">
      <button class="text-primary-600 hover:text-primary-700 text-sm">
        <svg class="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.9M6.343 9.657L9 12.314l-2.657 2.657a2 2 0 11-2.828-2.828l2.828-2.486z"/>
        </svg>
        Ouvir
      </button>
    </div>
  {/if}
</div> 