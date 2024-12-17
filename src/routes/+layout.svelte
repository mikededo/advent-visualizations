<script lang="ts">
    import '../app.css';

    const { children } = $props();
</script>

<main class="min-h-[calc(100vh-48px)] px-6 bg-white container lg:pt-16 lg:pb-28 py-8 flex flex-col relative lg:py-12">
    {@render children()}
</main>

<footer class="w-full bg-gray-50 h-12 mt-auto flex items-center justify-center">
    <p>
        Designed and developed by
        <a
            href="https://github.com/mikededo"
            rel="external"
            target="_blank"
        >
            @mikededo
        </a>
    </p>
</footer>
