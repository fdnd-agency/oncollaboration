<script>
    import "$lib/global.css";
    import Logos from "$lib/atoms/footer-logos.svelte";
    import FootNav from  "$lib/molecules/footer-nav.svelte";
    import Address from "$lib/molecules/address.svelte";
    let { class: className, ...rest } = $props();
</script>

<footer>
    <Logos class="logos"></Logos>
    <FootNav class="footnav"></FootNav>
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
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 15rem 12rem;
        padding: 1em;
        padding-top: 4em;

        /* De media queries voor responsive design */
        @media (width >= 448px) {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr 15rem 2.3em 2.5em;
        }

        @media (width >= 767px) {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 15rem;
            gap: 1rem;
        }

        container-type: inline-size;
        container-name: footer;
    }
    
    /* Omdat gewone classnames niet op de componenten kunnen worden gezet moet ik footer en dan Global gebruiken.
    Door footer global:() in te voeren krijg ik dit component wel mee, omdat :global de id pakt die svelte zelf mee geeft
    aan components. */

    footer :global(address){
        display: grid;
    }

    footer :global(logos) {
        display: flex;
        justify-content: space-around;
        padding-bottom: 1.4rem;
    }

    footer :global(footnav) {
        display: grid;
    }

    /* MARK: 448px */
    @container footer (width >= 448px) {
        footer :global(logos) {
            grid-column: 1 / -1;
            grid-row: 1 / 1;
            align-content: flex-start;
        }

        footer :global(footnav) {
            justify-items: center;
            grid-column: 1 / 2;
            grid-row: 2 / 2;
        }
    }

    /* MARK: 767px */
    @container footer (width >= 767px) {
        footer :global(address){
            grid-column: 3 / 3;
            grid-row: 1 / 2;
        }

        footer :global(logos) {
            display: grid;
            gap: 2rem;
            grid-column: 1 / 1;
        }

        footer :global(footnav) {
            justify-items: center;
            grid-column: 2 / 2;
            grid-row: 1 / 2;
        }
    }

</style>