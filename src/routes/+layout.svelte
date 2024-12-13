<script lang="ts">
    import '../app.css';

    const { children } = $props();
</script>

<main class="min-h-[calc(100vh-48px)]">
    {@render children()}
</main>

<footer class="w-full bg-gray-50 h-12 mt-auto flex items-center justify-center">
    <p>Designed and developed by <a class="hover:underline font-mono text-sm" href="https://github.com/mikededo">@mikededo</a></p>
</footer>
