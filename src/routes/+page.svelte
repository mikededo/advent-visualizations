<script lang="ts">
    import { GithubIcon } from 'lucide-svelte';
</script>

<svelte:head>
    <title>AoC Visualizations - @mikededo</title>
</svelte:head>

<div class="container">
    <header>
        <nav>
            <a
                class="mb-2 flex items-center justify-end gap-2 text-sm text-[var(--tw-prose-headings)] no-underline"
                href="/"
                rel="external"
                target="_blank"
            >
                <GithubIcon class="size-4" strokeWidth={2} />
            </a>
        </nav>
        <h1>Advent of Code Visualizations</h1>
        <p>
            A collection of visualizations for Advent of Code problems, from some of the problems that I've solved. You can find the solutions in this
            <a
                href="https://github.com/mikededo/avent"
                rel="external"
                target="_blank"
            >
                repository
            </a>.
        </p>
    </header>
    <section>
        <h2>2024</h2>
        <ul class="not-prose grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <li>
                <a
                    class="flex flex-col gap-1 rounded-md border p-2 ring-2 ring-transparent ring-offset-1 transition-colors duration-150 hover:border-blue-500 hover:ring-blue-100 hover:ring-offset-blue-100 md:p-3"
                    href="/2024/12"
                >
                    <p class="font-semibold">12th</p>
                    <p class="text-sm">
                        Implementation of a <em>&ldquo;flood fill&rdquo;</em> algorithm to dectect consequent areas.
                    </p>
                    <div class="flex flex-wrap items-center gap-1">
                        <div class="m-1 flex items-center justify-center rounded-full border border-purple-100 bg-purple-100 px-2 py-1 font-medium text-purple-500">
                            <div class="text-xs font-normal leading-none">Algorithm</div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </section>
</div>
