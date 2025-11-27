<script>
    import "$lib/global.css";
    let {href = '#', children, ...rest} = $props(); 
</script>

<a href={href} {...rest}> 
    {@render children()}
</a>
<style>
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--primary-color-blue-dark-2);
        background-color: var(--primary-color-aqua-dark-3);
        width: clamp(16.25em, 100%, 20.625em);
        height: 2.5em;
        text-decoration: none;
        gap: 0.25em;
        border-radius: 0.5em;    
    }
</style>