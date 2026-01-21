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
        padding: 1em;
        padding-top: 4em;

        container-type: inline-size;
        container-name: footer;
    }
    
    /* Omdat gewone classnames niet op de componenten kunnen worden gezet moet ik footer en dan Global gebruiken.
    Door footer global:() in te voeren krijg ik dit component wel mee, omdat :global de id pakt die svelte zelf mee geeft
    aan components. */

    
    footer :global(.logos) {
        @container footer (min-width: 500px) {
            display: flex;
            justify-content: space-around;
            padding-bottom: 1.4rem;
            grid-column: 1 / 1;
            grid-row: 2 / 2;
            align-content: flex-start;
        }

        @container footer (min-width: 800px) {
            display: grid;
            grid-column: 1 / 1;
        }
    }
    
    footer :global(.footnav) {
        display: grid;
        border-bottom: solid var(--primary-color-true-aqua);
        
        @container footer (min-width: 500px) {
            grid-column: 2 / 2;
        }

        @container footer (min-width: 800px) {
            border-bottom: none;
        }
    }
    
    footer :global(.contact){
        display: grid;
        padding-top: 1.4em;

        @container footer (min-width: 500px) {
            grid-column: 2 / 2;
            grid-row: 2 / 2;
        }

        @container footer (min-width: 800px) {
            grid-column: 3 / 3;
            grid-row: 1 /1;

            padding-top: 0em;
        }
    }
</style>