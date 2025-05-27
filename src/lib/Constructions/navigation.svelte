<script>
  import { page } from "$app/state";
  let menuOpen = false;
</script>

<nav>
  <div class="logo">
    <a class="grouped-logo" href="/">
      <img src="images/Kemenkes2.png" width="40" height="45" alt="Logo" />
      <img src="images/LogoOncollaboration.png" width="40" height="45" alt="logo" />
    </a>
  </div>
  <ul class="menu {menuOpen ? 'show-menu' : ''}">
    <li>
      <a href="/" class="menuItem" class:active={page.url.pathname === "/"}>
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          fill="currentColor"
          ><path
            d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
          /></svg
        >Home
      </a>
    </li>
    <li>
      <a
        href="/webinars"
        class="menu-item"
        class:active={page.url.pathname.startsWith("/webinars")}
      >
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          fill="currentColor"
          ><path
            d="M840-120v-640H120v320H40v-320q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120ZM360-400q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM40-80v-112q0-34 17.5-62.5T104-298q62-31 126-46.5T360-360q66 0 130 15.5T616-298q29 15 46.5 43.5T680-192v112H40Zm80-80h480v-32q0-11-5.5-20T580-226q-54-27-109-40.5T360-280q-56 0-111 13.5T140-226q-9 5-14.5 14t-5.5 20v32Zm240-400Zm0 400Z"
          /></svg
        >Webinars
      </a>
    </li>
    <li>
      <a
        href="/contourings"
        class="menu-item"
        class:active={page.url.pathname.startsWith("/contourings")}
      >
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          fill="currentColor"
          ><path
            d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-560H200v560Zm160 0v-72l-72-84q-11-11-19.5-30t-8.5-44q0-13 2.5-25.5T271-440q-5-11-8-23.5t-3-26.5q0-25 8.5-44t19.5-30l72-84v-72h60v83q0 5-7 19l-80 94q-7 8-10 16.5t-3 17.5q0 20 13 34.5t33 14.5q9 0 17-3t14-10q17-17 38.5-26t44.5-9q23 0 44.5 9t38.5 26q7 7 15 10t16 3q20 0 33-14.5t13-33.5q0-9-3.5-17.5T627-523l-80-95q-4-4-5.5-9t-1.5-10v-83h60v72l73 86q14 16 20.5 34.5T700-489q0 13-3.5 25.5T688-440q6 12 9 24.5t3 25.5q0 25-8.5 44T672-316l-72 84v72h-60v-83q0-6 7-19l80-94q7-8 10-17t3-18q-11 5-22 7.5t-23 2.5q-20 0-40-8t-35-24q-7-8-17.5-12t-22.5-4q-11 0-21.5 4T440-413q-15 16-34.5 24t-39.5 8q-12 0-23.5-2.5T320-391q0 9 3 18t10 17l80 94q3 5 5 9.5t2 9.5v83h-60Zm-160 0v-560 560Z"
          /></svg
        >Contouring
      </a>
    </li>
    <li>
      <a
        href="/profile"
        class="menu-item"
        class:active={page.url.pathname.startsWith("/profile")}
      >
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          fill="currentColor"
          ><path
            d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"
          /></svg
        >Profile
      </a>
    </li>
  </ul>
  <button aria-label="hamburger menu" class="hamburger" on:click={() => menuOpen = !menuOpen}>
    <svg
      class="menu-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      style="display: {menuOpen ? 'none' : 'block'}"
      ><path
        d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
      /></svg
    >
    <svg
      class="close-icon" 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      style="display: {menuOpen ? 'block' : 'none'}"
      ><path
        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
      /></svg
    >
  </button>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em 1em;
    position: relative;
  }

  .grouped-logo {
    padding-left: 10px
  }

  .grouped-logo img {
    margin-right: 1rem;
  }

  .hamburger {
    z-index: 100;
    padding: 4px;
    border: none;
    background: white;
    cursor: pointer;
  }

  .close-icon {
    display: none;
  }

  .close-icon,
  .menu-icon {
    width: 38px;
    height: 35px;
    fill: #D9D9D9;
  }

  .menu {
    position: fixed;
    transform: translateY(-100%);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background: white;
    color: black;
    list-style: none;
    padding: 3rem 2rem;
  }

  li {
    margin: 1rem 0;
  }

  li a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
  }

  li a .icon {
    margin-right: 1rem;
    width: 24px;
    height: 24px;
  }


  .show-menu {
    transform: translateY(0);
  }
</style>
