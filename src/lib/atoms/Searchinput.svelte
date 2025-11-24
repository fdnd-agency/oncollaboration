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
        font-family: var(--primary-font-family);
        position: absolute;
        width: 1px;
        height: 1px;
        clip: rect(0, 0, 0, 0);
    }

    input {
        padding: 0.5em;
        width: 100%;
        height: 100%;
        border-radius: var(--border-radius-small);
        background-position: 1em;
        font-size: var(--font-size-small);
        border: 1px solid var(--primary-color-blue-dark-2);
    }

</style>
