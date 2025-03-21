<script>
  export let capitulo;

  const navigateToCapitulo = () => {
    if (capitulo) {
      window.location.href = `/capitulo/${capitulo.id}`;
    }
  };
</script>

{#if capitulo}
  <div class="capitulo-card">
    <h2>{capitulo.titulo}</h2>
    <p>{capitulo.content}</p>
    <div class="topicos-count">{capitulo.topicos.length} tópicos</div>
  </div>
{:else}
  <p>Capítulo não encontrado.</p>
{/if}

<button 
  on:click={navigateToCapitulo}
  on:keydown={e => e.key === 'Enter' && navigateToCapitulo()}
  class="capitulo-card"
>
  <h2>{capitulo.titulo}</h2>
  <div class="topicos-count">{capitulo.topicos.length} tópicos</div>
</button>

<style>
  .capitulo-card {
    padding: 1.5rem;
    margin: 1rem 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: transform 0.2s;
    width: 100%;
    text-align: left;
  }
  
  .capitulo-card:hover {
    transform: translateY(-2px);
  }
</style>