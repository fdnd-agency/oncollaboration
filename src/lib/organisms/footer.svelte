<script>
    import "$lib/global.css";
    import Logos from "$lib/atoms/header-logos.svelte";
    import FootNav from  "$lib/molecules/footer-nav.svelte";
    import Address from "$lib/molecules/address.svelte";
    let { class: className, ...rest } = $props();
</script>

<footer>
    <Logos></Logos>
    <FootNav></FootNav>
    <Address class="address"></Address>
</footer>

<style>
    footer {
        /* hier is de styling van de footer */
        width: 100%;
        background-color: var(--primary-color-blue-dark-2);
        border: var(--primary-color-blue-dark-2);
        border-top-left-radius: var(--border-radius-small);
        border-top-right-radius: var(--border-radius-small);

        /* hier is de mooiere styling ALS de browser dit ondersteunt */
        @supports (corner-top-shape-left: bevel){
            corner-top-shape-left: bevel;
            corner-top-shape-right: bevel;
        }

        /* hier is de positie die de elementen bepaalt */
        display: grid;
        gap: 0.8rem;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 15rem 12rem repeat(2, 5em);
        padding: 1em;
        padding-top: 4em;

        /* De media queries voor responsive design */
        @media (width >= 448px) {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr 15rem 2.3em 2.5em;
        }

        @media (width >= 767px) {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 15rem 2.3rem 4rem;
            gap: 1rem;
        }
    }
    
    footer :global(address){
        background-color: red;
    }
</style>