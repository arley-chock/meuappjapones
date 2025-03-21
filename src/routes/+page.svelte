<script>
     import Capitulo from 'src/lib/components/capitulo.svelte';
   import livro from 'src/lib/Data/Livro.json';

  </script>
  
  <h1>📚 Desvendando a Língua Japonesa</h1>
  
  {#each livro.capitulos as cap}
  <Capitulo capitulo={cap} />
{/each}