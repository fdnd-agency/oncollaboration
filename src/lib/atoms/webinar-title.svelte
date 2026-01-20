<script>
    let { as = 'p', children, ...restProps } = $props();
  </script>
  
  <svelte:element this={as} {...restProps}>
    {@render children?.()}
  </svelte:element>

  <style>
     h3 {
        width: 230px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 1.5em 1em .5em 1em;
    }
  </style>