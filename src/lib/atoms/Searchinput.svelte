<script>
    let {
        id = "defaultId",
        label = "Default label",
        placeholder = "Default placeholder",
        ...restProps
    } = $props();
</script>

<div class="searchbar">
    <label for={id}>{label}</label>
    <input type="search" {id} {placeholder} {...restProps} />
</div>

<style>
    .searchbar {
        position: relative;
        width: 100%;
    }
</style>
