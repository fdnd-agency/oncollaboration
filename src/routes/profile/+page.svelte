<script>
  import { ProfileInfo, ProfileNotification, ProfileHistory, ProfileFavourites, ProfileContourings } from "$lib/index.js";  
  
  let { data } = $props();

  const user = data.user;
  const favouriteWebinars = data.favourites; 

  let viewtransition = true;
</script>

<main>

  <ProfileInfo {user} />
  <ProfileNotification {data} />
  <ProfileHistory {data} />
  <ProfileFavourites {favouriteWebinars} />
  <ProfileContourings {data} {viewtransition} />

  
</main>


  
