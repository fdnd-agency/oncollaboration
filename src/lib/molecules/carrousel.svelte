<script>
    import { onMount } from 'svelte';
    import "$lib/global.css";
    import Logos from "$lib/atoms/homepage-logo.svelte";
    let { data } = $props();


    onMount(() => {
        for (const carousel of document.querySelectorAll('.homepage-carrousel-content')) {
            const { animationName } = window.getComputedStyle(carousel);

        if (animationName && animationName !== 'none') {

        for (const logo of Array.from(carousel.children)) {
            carousel.appendChild(logo.cloneNode(true));
        }}}
    });
</script>

<div class="homepage-carrousel-content">
    <Logos data={data}></Logos>
</div>

<style>
    .homepage-carrousel-content {
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;

        @supports (animation: scroll 10s linear infinite) {
            width: max-content;
            animation: scroll 10s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
            animation: none;
            overflow-x: auto;
            scroll-behavior: smooth;
        }    
    }

    .homepage-carrousel-content:hover {
        animation-play-state: paused;
    }

    @keyframes scroll {
        0% {  transform: translateX(0); }
        100% { transform: translateX(-50%); }
    }

</style>