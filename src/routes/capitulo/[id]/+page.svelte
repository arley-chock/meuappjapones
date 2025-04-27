<!-- Componente Pai (+page.svelte) -->
<script>
    import Capitulo from '$lib/components/capitulo.svelte';
    import livro from '$lib/livro.json';
    import { page } from '$app/stores';

    // Pega o id da URL
    $: id = $page.params.id;
    $: capitulo = livro.capitulos.find(c => String(c.id) === String(id));
</script>

<h1>Meu app de japonês</h1>

{#if capitulo}
    <Capitulo capitulo={capitulo} />
{:else}
    <p class="text-red-600">Capítulo não encontrado.</p>
{/if}