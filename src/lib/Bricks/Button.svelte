<script>
  let {
    tag,
    className,
    label,
    href,
    svgIcon,
    action,
    svgWidth = "140",
    svgHeight = "140",
    validTags = ["button", "a"], // Default valid tags
  } = $props();

  try {
    if (!validTags.includes(tag)) {
      throw new error(`invalid tag '${tag}'. Use "<button>" or "<a>".`);
    }
    if (tag === "button" && !action) {
      throw new error(
        "A <button> element must have a action or function attached."
      );
    }
    if (tag === "a" && !href) {
      throw new error("A <a> element must have a href provided");
    }
  } catch (e) {
    console.log(e);
  }
</script>

<svelte:element
  this={tag}
  class={className}
  href={tag === "a" ? href : undefined}
  onclick={tag === "button" ? action : undefined}
  role={tag === "button" ? "button" : tag === "a" ? "link" : undefined}
>
  <div class="dynamic-button">
    {#if svgIcon}
        {@render svgIcon({
          width: svgWidth,
          height: svgHeight
        })} 
    {/if}

    {#if label !== ""}
      <span class="button-label">
        {label}
      </span>
    {/if}
  </div>
</svelte:element>

<style>
  .dynamic-button {
    position: relative;
  }

  .button-label {
    position: absolute;
    left: 0.8em;
    bottom: 1.8em;
    color: var(--text-color-light);
  }

  
</style>
