<script lang="ts">
  import { onMount } from 'svelte';
  import Livro from 'src/lib/Data/Livro.json';

  interface Topico {
    id: number;
    titulo: string;
    conteudo: {
      texto: string;
      tabela?: Array<{ caractere: string; romanji: string; audio: string }>;
      exemplos?: string[];
    };
  }

  interface Capitulo {
    id: number;
    topicos: Topico[];
  }

  export let capituloId: string;
  export let topicoId: string;

  let topicoEncontrado: Topico | undefined;

  onMount(() => {
    const capitulo: Capitulo | undefined = Livro.capitulos.find(
      (c: Capitulo) => c.id === Number(capituloId)
    );
    
    if (capitulo) {
      topicoEncontrado = capitulo.topicos.find(
        (t: Topico) => t.id === Number(topicoId)
      );
    }
  });
</script>

{#if topicoEncontrado}
  <article class="topico">
    <h1>{topicoEncontrado.titulo}</h1>
    <div class="conteudo">
      <p>{topicoEncontrado.conteudo.texto}</p>
      
      {#if topicoEncontrado.conteudo.tabela}
        <div class="tabela-hiragana">
          {#each topicoEncontrado.conteudo.tabela as item}
            <div class="caractere">
              <span class="japones">{item.caractere}</span>
              <span class="romanji">{item.romanji}</span>
              <button on:click={() => new Audio(item.audio).play()}>▶</button>
            </div>
          {/each}
        </div>
      {/if}
      
      {#if topicoEncontrado.conteudo.exemplos}
        <div class="exemplos">
          <h3>Exemplos</h3>
          {#each topicoEncontrado.conteudo.exemplos as exemplo}
            <div class="exemplo">{exemplo}</div>
          {/each}
        </div>
      {/if}
    </div>
  </article>
{/if}
  <style>
    .tabela-hiragana {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1rem;
      margin: 1rem 0;
    }
    .caractere {
      text-align: center;
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
    .japones {
      font-size: 2rem;
      display: block;
    }
  </style>