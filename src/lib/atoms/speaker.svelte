<script>
    let { as = 'p', children, ...restProps } = $props();
  </script>
  
  <svelte:element this={as} {...restProps}>
    {@render children?.()}
  </svelte:element>

<style>

.speakers-fullname {
  margin: 1em 1.5em;
}

</style>