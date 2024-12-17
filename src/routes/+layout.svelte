<script lang="ts">
    import '../app.css';

    const { children } = $props();
</script>

<main class="container relative flex min-h-[calc(100vh-48px)] flex-col bg-white px-6 py-8 lg:py-12 lg:pb-28 lg:pt-16">
    {@render children()}
</main>

<footer class="mt-auto flex h-12 w-full items-center justify-center bg-gray-50 text-sm">
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
