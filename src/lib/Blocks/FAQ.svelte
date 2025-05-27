<script>
    let { content } = $props();
</script>
<section>
<h2>FAQ</h2>

{#if content}
    <details>
        <summary>{content[7].heading}</summary>
        <p>{content[7].text}</p>
    </details>

    <details>
        <summary>{content[8].heading}</summary>
        <p>{content[8].text}</p>
    </details>

    <details>
        <summary>{content[9].heading}</summary>
        <p>{content[9].text}</p>
    </details>
{/if}

</section>