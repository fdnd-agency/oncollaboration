<script>
    import "$lib/global.css";
    let {href = '#', children, ...rest} = $props(); 
</script>

<a href={href} {...rest}>{@render children()}
    <svg class="arrow" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.8125 0.21875C6.9375 0.0625 7.1875 0.0625 7.34375 0.21875L13.875 6.75C14.0312 6.90625 14.0312 7.125 13.875 7.28125L7.34375 13.8125C7.1875 13.9688 6.9375 13.9688 6.8125 13.8125L6.1875 13.2188C6.03125 13.0625 6.03125 12.8125 6.1875 12.6875L11.0312 7.8125H0.375C0.15625 7.8125 0 7.65625 0 7.4375V6.5625C0 6.375 0.15625 6.1875 0.375 6.1875H11.0312L6.1875 1.34375C6.03125 1.21875 6.03125 0.96875 6.1875 0.8125L6.8125 0.21875Z" fill="currentColor"/>
    </svg>
</a>

<style>
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--primary-color-blue-dark-2);
        background: var(--primary-color-aqua-dark-3);
        width: clamp(16.25em, 100%, 20.625em);
        height: 2.5em;
        text-decoration: none;
        gap: 0.5em;
        border-radius: 0.5em;    
    }

    svg {
        fill: var(--primary-color-blue-dark-2);
    }
</style>