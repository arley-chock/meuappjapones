<script>
  export let capitulo;
</script>

{#if capitulo}
  <div class="capitulo-card">
    <h2 class="text-3xl font-bold mb-2">{capitulo.titulo}</h2>
    <p class="text-gray-600 mb-4">{capitulo.descricao}</p>
    {#if capitulo.conteudo?.texto}
      <p class="mb-4">{capitulo.conteudo.texto}</p>
    {/if}
    {#if capitulo.conteudo?.topicos?.length}
      <h3 class="text-xl font-semibold mb-2">Tópicos</h3>
      <ul class="list-disc list-inside space-y-1">
        {#each capitulo.conteudo.topicos as topico}
          <li>
            <span class="font-semibold">{topico.topico}:</span> {topico.conteudo}
          </li>
        {/each}
      </ul>
    {/if}
  </div>
{:else}
  <p>Capítulo não encontrado.</p>
{/if}

<style>
  .capitulo-card {
    padding: 2rem;
    margin: 2rem 0;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
    background: #fff;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
</style>