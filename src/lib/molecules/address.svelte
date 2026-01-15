<script>
    import "$lib/global.css"
    import Strong from "$lib/atoms/strong.svelte"
    import UlAddress from "$lib/atoms/footer-ul-address.svelte"
    import Language from "$lib/atoms/header-language.svelte"
    let { class: className, ...rest } = $props();
</script>

<svelte:head>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
    </style>
</svelte:head>

<address class={className} {...rest}>
    <Strong>
        Contact Information
    </Strong>
    <UlAddress></UlAddress>
    <Language></Language>
</address>

<style>
    address {
        display: grid;
        padding-top: -1.4rem; 
    }
</style>