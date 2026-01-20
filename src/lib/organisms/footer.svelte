<script>

    import Logos from "$lib/atoms/footer-logos.svelte";
    import FootNav from  "$lib/molecules/footer-nav.svelte";
    import Address from "$lib/molecules/address.svelte";
    let { ...restProps } = $props();
</script>

<footer>
    <Logos class="logos"></Logos>
    <FootNav class="footnav"></FootNav>
    <Address class="contact"></Address>
</footer>

<style>
    footer {
        width: 100%;
        background-color: var(--primary-color-blue-dark-2);
        border: var(--primary-color-blue-dark-2);
        border-top-left-radius: var(--border-radius-small);
        border-top-right-radius: var(--border-radius-small);

        @supports (corner-top-shape-left: bevel){
            corner-top-shape-left: bevel;
            corner-top-shape-right: bevel;
        }

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 15rem 12rem;
        padding: 1em;
        padding-top: 4em;

        @media (width >= 448px) {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr 15rem;
        }

        @media (width >= 767px) {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 15rem;
            gap: 1rem;
        }

        /* container-type: inline-size;
        container-name: footer; */
    }
    
    /* Omdat gewone classnames niet op de componenten kunnen worden gezet moet ik footer en dan Global gebruiken.
    Door footer global:() in te voeren krijg ik dit component wel mee, omdat :global de id pakt die svelte zelf mee geeft
    aan components. */

    footer :global(.contact){
        display: grid;

        @media (min-width: 448px) {
            grid-column: 2 / 2;
            grid-row: 2 / 2;
        }

        @media (min-width: 767px) {
            grid-column: 3 / 3;
            grid-row: 1 /1;
        }
    }

    footer :global(.logos) {
        display: flex;
        justify-content: space-around;
        padding-bottom: 1.4rem;

        @media (min-width: 448px) {
            grid-column: 2 / 2;
            grid-row: 2 / 2;
            align-content: flex-start;
        }
    }

    footer :global(.footnav) {
        display: grid;
    }
</style>