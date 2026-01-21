<script>
    import Strong from "$lib/atoms/strong.svelte"
    import UlAddress from "$lib/atoms/footer-ul-address.svelte"
    import Language from "$lib/atoms/header-language.svelte"
    let { class: className, ...rest } = $props();
</script>

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
        gap: .7em;
    }
</style>