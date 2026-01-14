<script>
    let { as = 'p', children, ...restProps } = $props();
  </script>
  
  <svelte:element this={as} {...restProps}>
    {@render children?.()}
  </svelte:element>