<script>
  import { page } from "$app/state";
  // let menuOpen = false;
</script>

<nav>
  <a class="grouped-logo" href="/">
    <img src="images/Kemenkes2.png" width="40" height="45" alt="Logo" />
    <img
      src="images/LogoOncollaboration.png"
      width="40"
      height="45"
      alt="logo"
    />
  </a>
  <input
    type="checkbox"
    id="menu-toggle"
    class="menu-toggle"
    aria-label="Open menu"
  />
  <label for="menu-toggle" class="hamburger">
    <span class="menu-text open-text">Open</span>
    <svg
      class="menu-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      ><path
        stroke-width="2"
        d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
      />
    </svg>
    <span class="menu-text close-text">Close</span>
    <svg
      class="close-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      ><path
        stroke-width="2"
        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
      />
    </svg>
  </label>
  <ul class="menu">
    <li>
      <a href="/" class="menuItem" class:active={page.url.pathname === "/"}>
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          min-width="30"
          min-height="30"
          viewBox="0 0 29 32"
          fill="transparent"
        >
          <path
            d="M4 30H9.65091C10.2032 30 10.6509 29.5523 10.6509 29V19.9918C10.6509 19.4396 11.0986 18.9918 11.6509 18.9918H17.1966C17.7489 18.9918 18.1966 19.4396 18.1966 19.9918V29C18.1966 29.5523 18.6444 30 19.1966 30H25C26.1046 30 27 29.1046 27 28V11.6908C27 11.0699 26.7117 10.4843 26.2196 10.1057L15.6165 1.94709C14.8923 1.38984 13.8825 1.39431 13.1633 1.95796L2.76636 10.1056C2.28259 10.4847 2 11.0652 2 11.6798V28C2 29.1046 2.89543 30 4 30Z"
            stroke-width="2.5"
          />
        </svg>Home
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
          min-width="30"
          min-height="30"
          viewBox="0 0 36 26"
        >
          <path
            d="M23.4964 14.1604C24.6893 13.3653 24.6893 11.6138 23.4964 10.8268L17.6079 6.94163C16.2785 6.0645 14.5026 7.02373 14.5026 8.61893V16.4291C14.5026 18.0243 16.2785 18.9715 17.6079 18.0854L23.4964 14.1604Z"
          />
          <rect
            x="1"
            y="1"
            width="34"
            height="23.7143"
            rx="5"
            stroke-width="2"
          />
        </svg>
        Webinars
      </a>
    </li>
    <li>
      <a
        href="/doctors"
        class="menu-item"
        class:active={page.url.pathname.startsWith("/doctors")}
      >
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          min-width="30"
          min-height="30"
          viewBox="0 0 27 31"
        >
          <path
            d="M25.7939 29.8634L25.9337 25.5634C26.0654 21.51 26.1314 19.4818 24.8102 18.2309C23.4906 16.9785 21.2978 16.9906 16.9155 17.0147L13.7231 19.8984L10.717 17.0489C6.33473 17.073 4.14202 17.0851 2.7405 18.3525C1.33747 19.6185 1.27155 21.6466 1.13978 25.7L1 30M20.0047 17.0223L19.7585 24.8809M8.25138 17.0738L8.11829 22.7123M8.11829 22.7123C8.94687 22.7076 9.73157 23.0077 10.2998 23.5465C10.868 24.0854 11.1731 24.8188 11.1481 25.5855L11.1009 27.0309M8.11829 22.7123C7.28971 22.717 6.48512 23.026 5.88153 23.5715C5.27793 24.1169 4.92478 24.8541 4.89975 25.6208L4.85256 27.0662M19.5483 7.47365L19.5955 6.02822C19.6172 5.36387 19.4973 4.70682 19.2425 4.09458C18.9878 3.48235 18.6033 2.92693 18.111 2.46002C17.6186 1.99312 17.0281 1.62388 16.373 1.37338C15.718 1.12289 15.0113 0.996043 14.2934 1.00009C13.5754 1.00415 12.8602 1.13901 12.1885 1.39699C11.5169 1.65497 10.902 2.03101 10.379 2.50365C9.85601 2.97628 9.43508 3.53625 9.14029 4.15159C8.84549 4.76692 8.6826 5.42557 8.66092 6.08992L8.61373 7.53535C8.59204 8.1997 8.71198 8.85675 8.9667 9.46898C9.22143 10.0812 9.60594 10.6366 10.0983 11.1035C10.5906 11.5705 11.1812 11.9397 11.8362 12.1902C12.4912 12.4407 13.1979 12.5675 13.9159 12.5635C14.6339 12.5594 15.3491 12.4246 16.0207 12.1666C16.6923 11.9086 17.3072 11.5326 17.8302 11.0599C18.3532 10.5873 18.7742 10.0273 19.069 9.41198C19.3637 8.79665 19.5266 8.138 19.5483 7.47365ZM20.8993 25.8918C20.8899 26.1793 20.7575 26.4557 20.5312 26.6603C20.3048 26.8648 20.0031 26.9807 19.6924 26.9824C19.3817 26.9842 19.0874 26.8717 18.8743 26.6696C18.6612 26.4675 18.5468 26.1925 18.5562 25.905C18.5656 25.6175 18.698 25.341 18.9244 25.1365C19.1507 24.932 19.4524 24.8161 19.7632 24.8143C20.0739 24.8126 20.3681 24.9251 20.5812 25.1272C20.7943 25.3292 20.9087 25.6043 20.8993 25.8918Z"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>Doctors
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
          min-width="30"
          min-height="30"
          viewBox="0 0 31 31"
        >
          <path
            d="M1.00586 19.1774H3.84554C4.62871 19.1774 5.2513 19.852 5.63725 20.5408C6.3683 21.8388 8.04168 22.7534 9.52209 22.7534C10.4631 22.7534 11.3656 22.3765 12.031 21.7056C12.6965 21.0347 13.0703 20.1248 13.0703 19.176C13.0703 18.2272 12.6965 17.3173 12.031 16.6464C11.3656 15.9755 10.4631 15.5986 9.52209 15.5986C10.4631 15.5986 11.3656 15.2217 12.031 14.5508C12.6965 13.8799 13.0703 12.97 13.0703 12.0212C13.0703 11.0724 12.6965 10.1625 12.031 9.49162C11.3656 8.82073 10.4631 8.44382 9.52209 8.44382C8.04168 8.44382 6.36689 9.35841 5.63725 10.6579C5.2513 11.3452 4.62871 12.0212 3.84554 12.0212H1.00586M29.1139 19.1221H26.2757C25.4911 19.1221 24.8685 19.7981 24.4825 20.4854C23.7529 21.7863 22.0795 22.6995 20.5977 22.6995C19.6567 22.6995 18.7542 22.3225 18.0887 21.6517C17.4233 20.9808 17.0495 20.0708 17.0495 19.1221C17.0495 18.1733 17.4233 17.2633 18.0887 16.5924C18.7542 15.9216 19.6567 15.5447 20.5977 15.5447C19.6567 15.5447 18.7542 15.1678 18.0887 14.4969C17.4233 13.826 17.0495 12.916 17.0495 11.9673C17.0495 11.0185 17.4233 10.1085 18.0887 9.43765C18.7542 8.76676 19.6567 8.38986 20.5977 8.38986C22.0795 8.38986 23.7529 9.30444 24.4825 10.6039C24.8685 11.2913 25.4911 11.9673 26.2757 11.9673H29.1139"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.0857 29.4033C8.44572 29.4033 5.12571 29.4033 3.06215 27.3242C1 25.2422 1 21.8963 1 15.2017C1 8.507 1 5.15967 3.06215 3.08054C5.12712 1 8.44572 1 15.0857 1C21.7257 1 25.0457 1 27.1079 3.08054C29.1715 5.15825 29.1715 8.507 29.1715 15.2017C29.1715 21.8963 29.1715 25.2437 27.1079 27.3242C25.0472 29.4033 21.7257 29.4033 15.0857 29.4033Z"
            stroke-width="2"
          />
        </svg>Contourings
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
          min-width="30"
          min-height="30"
          viewBox="0 0 28 28"
        >
          <path
            d="M6.69127 24.5625C3.21343 22.0759 0.868922 17.9705 1.00568 13.5941C1.22995 6.41768 7.45707 0.788928 14.4059 1.00608C21.3547 1.22323 26.7768 6.64533 26.9939 13.5941C27.2111 20.5429 21.5823 26.7701 14.4059 26.9943C11.6057 27.0818 8.91652 26.1535 6.69127 24.5625ZM6.69127 24.5625C6.69127 24.5625 6.69127 23.3397 6.69127 20.0912C6.69127 17.7125 8.77932 15.2184 11.158 15.2184C14.4065 15.2184 14.4065 15.2184 14.4065 15.2184M21.3097 24.5625C21.3097 24.5625 21.3097 24.8084 21.3097 20.7477C21.3097 18.3873 19.6131 15.2184 17.249 15.2184C14.8848 15.2184 14.4065 15.2184 14.4065 15.2184M14.4065 15.2184C16.3072 15.0321 18.2315 13.0598 18.0611 11.1577C17.8708 9.03258 16.5288 7.31005 14.4059 7.09704C12.0604 6.8617 9.9398 8.80045 9.9398 11.1577C9.9398 13.5941 12.5059 15.4046 14.4065 15.2184Z"
            stroke-width="2"
          />
        </svg>Profile
      </a>
    </li>
  </ul>
  <!-- <button
    aria-label={menuOpen ? "Close menu" : "Open menu"}
    class="hamburger"
    on:click={() => (menuOpen = !menuOpen)}
  >
    {#if !menuOpen}
      <span class="menu-text">Open</span>
    {/if}
    <svg
      class="menu-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      style="display: {menuOpen ? 'none' : 'inline-block'}"
      ><path
        d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
      />
    </svg>
    {#if menuOpen}
      <span class="menu-text">Close</span>
    {/if}
    <svg
      class="close-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      style="display: {menuOpen ? 'inline-block' : 'none'}"
      ><path
        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
      />
    </svg>
  </button> -->
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3em 1em;
    position: relative;
    background-color: var(--text-color-light);
  }

  .grouped-logo {
    position: fixed;
    top: 1em;
    left: 1em;
    z-index: 101;
    display: flex;
    align-items: center;
    background: transparent;
    padding-left: 0.625em;
  }

  .grouped-logo img {
    margin-right: 1em;
  }

  .icon {
    margin-right: 1em;
  }

  .hamburger {
    z-index: 100;
    padding: 0.75em;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    position: fixed;
    top: 1em;
    right: 1em;

    @media (min-width: 1080px) {
      display: none;
    }
  }

  .close-icon {
    display: none;
  }
  
  input[type="checkbox"].menu-toggle {
    display: none;
  }

  /* Hide close by default and show when opened */
  .close-icon,
  .close-text {
    display: none;
  }

  /* When menu is open swap visibility */
  .menu-toggle:checked + .hamburger .menu-icon,
  .menu-toggle:checked + .hamburger .open-text {
    display: none;
  }

  .menu-toggle:checked + .hamburger .close-icon,
  .menu-toggle:checked + .hamburger .close-text {
    display: inline-block;
  }

  .menu {
    transform: translateY(-100%);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .menu-toggle:checked ~ .menu {
    transform: translateY(0);
  }

  .close-icon,
  .menu-icon {
    width: 2.375em;
    height: 2.188em;
    fill: var(--primary-color);
  }

  .menu {
    position: fixed;
    display: flex;
    flex-direction: column;
    transform: translateY(-100%);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background: var(--text-color-light);
    color: var(--text-color-dark);
    list-style: none;
    padding: 5em 1.5em;

    @media (min-width: 1080px) {
      position: static;
      transform: none;
      display: flex;
      flex-direction: row;
      background: transparent;
      padding: 0;
      align-items: center;
      justify-content: space-around;
      gap: 1em;
    }
  }

  .menu-text {
    color: var(--primary-color);
  }

  li {
    margin: 1em 0;
  }

  li a {
    text-decoration: none;
    color: var(--text-color-dark);
    font-size: 1.5em;
    display: flex;
    align-items: center;
  }

  li a:hover {
    color: var(--text-color-light);
    background-color: var(--primary-color);
    border-radius: 0.125em;
  }

  .icon {
    fill: transparent;
    stroke: black;
  }

  li a.active {
    background-color: var(--primary-color);
    font-weight: bold;
    padding: 0.188em;
    border-radius: 0.2em;
    color: var(--text-color-light);
  }

  li a.active .icon {
    fill: transparent;
    stroke: var(--text-color-light);
  }

  li a:focus {
    outline: 0.125px solid var(--primary-color);
    border-radius: 0.125em;
    outline-offset: 0.2em;
    padding: 0.188em;
  }

  li a .icon {
    margin-right: 1em;
    width: 1.875em;
    height: 1.875em;
  }
</style>
