<script>
  export let capitulo;
</script>

<a
  class="card snap-start min-w-[280px] hover:scale-105 transition-all duration-300 bg-gradient-to-br from-white to-gray-50 block cursor-pointer"
  href={`/capitulo/${capitulo.id}`}
  aria-label={`Abrir capítulo ${capitulo.titulo}`}
>
  <div class="flex flex-col h-full p-6">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-xl font-bold text-gray-900">{capitulo.titulo}</h3>
      <span class="badge bg-[var(--primary)] text-white px-3 py-1 rounded-full text-sm">
        Capítulo {capitulo.id}
      </span>
    </div>
    <p class="text-gray-600 mb-4 flex-grow">{capitulo.descricao}</p>
    <div class="flex flex-wrap gap-2 mt-4">
      {#each capitulo.conteudo?.topicos || [] as topico}
        <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
          {topico.topico}
        </span>
      {/each}
    </div>
  </div>
</a> 