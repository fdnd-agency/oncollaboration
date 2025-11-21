<script>
    import { SearchInput, Button} from '$lib/index.js'
    import search from "$lib/assets/search.svg";
</script>

<div class="container-filters">
<SearchInput></SearchInput>

<Button type="filteren" class="filteren">
    <img class="img-search" src={search} alt="" />
</Button>
</div>