<script>
    const {
        id = 'defaultId',
        label = 'Default label',
        placeholder = 'Default placeholder',
        ...restProps
    } = $props();
</script>
    
<div class="searchbar">
    <label for={id}>{label}</label>
    <input
        type="search"
        id={id}
        placeholder={placeholder}
        {...restProps} 
    />
</div>