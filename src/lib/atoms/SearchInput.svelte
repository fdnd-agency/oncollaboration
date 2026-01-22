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

label {
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0, 0, 0, 0);
    font-family: var(--primary-font-family);
}

input {
    width: 100%;
    height: 100%;
    padding: 0.5em;
    background-position: 1em;
    border: 1px solid var(--primary-color-blue-dark-2);
    border-radius: var(--border-radius-small);
    font-size: var(--font-size-small);
}

</style>
