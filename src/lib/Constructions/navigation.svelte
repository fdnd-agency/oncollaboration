<script>
  import { page } from '$app/stores';
  import { Icons } from "$lib/index.js";
</script>

<nav>
  <ul>
    <li>
      <a href="/" class:active={$page.url.pathname === '/'}>
        <Icons name="Home" />Home
      </a>
    </li>
    <li>
      <a href="/webinars" class:active={$page.url.pathname.startsWith('/webinars')}>
        <Icons name="Webinars" />Webinars
      </a>
    </li>
    <li>
      <a href="/contourings" class:active={$page.url.pathname.startsWith('/contourings')}>
        <Icons name="Contouring" />Contouring
      </a>
    </li>
    <li >
      <a class="profile" href="/profile" class:active={$page.url.pathname.startsWith('/profile')}>
        <Icons name="Profile" />Profile
      </a>
    </li>
  </ul>
</nav>

<style>
  nav {
    position: fixed;
    background-color: var(--background-color-alt);
    bottom: 0;
    width: 100%;
    padding: 0 1em .5em;
    z-index: 1000;
    box-shadow: 0px -4px 17px 0px rgba(0,0,0,0.3);

      @media (min-width: 1080px) {
        background-color: var(--primary-color);
    }
  }

  ul {
    display: flex;
    justify-content: space-around;
  }

  li a {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--font-size-xs);
    color: rgba(116, 116, 116, 1);
    padding: .7em .5em 0; 
    text-decoration: none;
    transition: .2s;

    @media (min-width: 1080px) {
      color: var(--alt-text-color);
    }
  }

  li a:hover {
    color: var(--hover-state-color);
  }

  li a.active {
    color: var(--primary-color);
    border-top: var(--border-nav);
    padding-top: calc(.7em - 2px);

    @media (min-width: 1080px) {
      color: var(--text-color);
    }
  }

  :global(.icon) {
    width: 24px;
    height: 24px;
  }

  @media only screen and (min-width: 600px) {
    li a {
      font-size: var(--font-size-md);
    }

    :global(.icon) {
      width: 28px;
      height: 28px;
    }
  }

  @media only screen and (min-width: 1080px) {
    nav {
      bottom: auto;
      top: 0;
      box-shadow: 0px 4px 17px 0px rgba(0,0,0,0.3);
      padding: 0;
    }

    ul {
      justify-content: right;
      width: 85vw;
      margin: 0 auto;
    }

    li a {
      flex-direction: row-reverse;
      padding: 1em .5em;
      margin-right: 1.5em;
      font-weight: 700;
    }

    .profile {
      margin-right: 0;
      padding-right: 0;
    }

    li a.active {
      padding-top: 1em;
      border-bottom: var(--border-nav);
      padding-bottom: calc(1em - 3px);
      border-top: 0;
    }

    :global(.icon) {
      width: 32px;
      height: 32px;
      margin-left: .4em;
    }
  }

  @media only screen and (min-width: 1920px) {
    li a {
      font-size: var(--font-size-xl);
    }
  }
</style>