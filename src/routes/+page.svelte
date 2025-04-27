<script>
  import CapituloCard from '$lib/components/CapituloCard.svelte';
  import livro from '$lib/livro.json';
  let capitulos = livro.capitulos;
  let capituloSelecionado = null;

  function abrirCapitulo(cap) {
    capituloSelecionado = cap;
  }
  function fecharCapitulo() {
    capituloSelecionado = null;
  }
</script>

<main class="max-w-7xl mx-auto px-6 py-10 space-y-16">
  <!-- Hero Section -->
  <section class="text-center space-y-4">
    <h1 class="text-5xl font-extrabold text-indigo-600">Meu App de Japonês</h1>
    <p class="text-xl text-gray-700">
      Aprenda japonês de forma simples e eficiente
    </p>
    <a href="#capitulos" class="mt-4 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
      Começar
    </a>
  </section>

  <!-- Capítulos Section -->
  <section id="capitulos" class="space-y-8">
    <h2 class="text-3xl font-bold text-gray-800">Capítulos</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each capitulos as cap}
        <CapituloCard
          capitulo={cap}
          on:click={() => abrirCapitulo(cap)}
          class="transition-transform hover:scale-105"
        />
      {/each}
    </div>

    {#if capituloSelecionado}
      <div class="mt-6 bg-white shadow-lg rounded-lg p-6 animate-fade-in">
        <button
          on:click={fecharCapitulo}
          class="flex items-center text-indigo-600 hover:text-indigo-800 mb-4"
          aria-label="Voltar para capítulos"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 19l-7-7 7-7" />
          </svg>
          Voltar
        </button>
        <h3 class="text-2xl font-semibold mb-2">{capituloSelecionado.titulo}</h3>
        <p class="text-gray-600 mb-4">{capituloSelecionado.descricao}</p>

        {#if capituloSelecionado.indice?.length}
          <div class="mb-4">
            <h4 class="font-bold mb-2 border-b pb-1">Índice</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1 pl-4">
              {#each capituloSelecionado.indice as item}
                <li>{item}</li>
              {/each}
            </ul>
          </div>
        {/if}

        {#if capituloSelecionado.exemplos?.length}
          <div class="mb-4">
            <h4 class="font-bold mb-2 border-b pb-1">Exemplos</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1 pl-4">
              {#each capituloSelecionado.exemplos as ex}
                <li>{ex}</li>
              {/each}
            </ul>
          </div>
        {/if}

        {#if capituloSelecionado.caracteres?.length}
          <div>
            <h4 class="font-bold mb-2 border-b pb-1">Tabela de Caracteres</h4>
            <div class="overflow-x-auto">
              <table class="min-w-[300px] border text-base rounded-lg overflow-hidden">
                <thead class="bg-gray-100">
                  <tr>
                    <th class="px-3 py-2 border">Caractere</th>
                    <th class="px-3 py-2 border">Romanji</th>
                  </tr>
                </thead>
                <tbody>
                  {#each capituloSelecionado.caracteres as c}
                    <tr class="even:bg-gray-50">
                      <td class="px-3 py-2 border font-japanese text-2xl text-center">
                        {c.caractere}
                      </td>
                      <td class="px-3 py-2 border text-center">{c.romanji}</td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </div>
        {/if}
      </div>
    {/if}
  </section>

  <!-- Recursos -->
  <section class="space-y-6">
    <h2 class="text-3xl font-bold text-gray-800">Recursos de Aprendizado</h2>
    <div class="grid md:grid-cols-2 gap-8">
      <div class="flex items-start space-x-4">
        <div class="bg-indigo-100 p-3 rounded-lg">
          <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <div>
          <h4 class="font-semibold mb-1">Exercícios Práticos</h4>
          <p class="text-gray-600">
            Testes interativos para fixar o que você aprendeu.
          </p>
        </div>
      </div>
      <div class="flex items-start space-x-4">
        <div class="bg-indigo-100 p-3 rounded-lg">
          <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
        <div>
          <h4 class="font-semibold mb-1">Áudio de Pronúncia</h4>
          <p class="text-gray-600">
            Saiba como cada caractere e palavra soam naturalmente.
          </p>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  .animate-fade-in {
    animation: fade-in 0.4s ease;
  }
</style>
