<script>
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import { page } from '$app/stores';
  const year = new Date().getFullYear();
</script>

<div class="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800">
  <Header />
  
  <main class="flex-grow">
    <slot />
  </main>

  <footer class="bg-white shadow-sm mt-auto">
    <div class="container py-6">
      <div class="text-center text-gray-600">
        <p>&copy; {year} Meu App de Japonês. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</div>