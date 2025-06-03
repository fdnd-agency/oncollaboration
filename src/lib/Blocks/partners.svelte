<script>
    import { onMount } from "svelte";
    let { logos } = $props();

    console.log("Logos length:", logos.length);

</script>

<section>
    <h2>Our partners</h2>
    <div class="partner-container" style="
    --width: 100px;
    --height: 74px;
    --quantity: {logos.length};
    ">
        <div class="partner-logos">
            {#each logos as logo, index}
                <div class="logos" style="--position: {index + 1}"><img src="https://fdnd-agency.directus.app/assets/{logo.logo}" alt="{logo.name}" /></div>
            {/each}
        </div>
    </div>
     <p>Our partners are essential to the success of Oncollaboration.
Through their expertise, networks, and local knowledge, we can create lasting impact and improve cancer care together.</p>
</section>

<style>
    .partner-container {
     width: 100%;
     height: var(--height);
     overflow: hidden;
     mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
    }

    .partner-container .partner-logos {
        display: flex;
        width: 100%;
        min-width: calc(var(--width) * var(--quantity));
        position: relative;
    }

    .partner-container .partner-logos .logos {
        width: var(--width);
        height: var(--height);
        position: absolute;
        left: 100%;
        animation: autoslide 10s linear infinite;
        animation-delay: calc((10s / var(--quantity)) * (var(--position) - 1) );
    }

    .partner-container .partner-logos .logos img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @keyframes autoslide {
        from {
            left: 100%;
        }
        to{
            left: calc(var(--width) * -1);
        }
    }


</style>