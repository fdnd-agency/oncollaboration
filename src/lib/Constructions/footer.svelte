<footer>
  <div>
    <p>&copy; 2024 - Antoni van Leeuwenhoek</p>
    <ul class="dot-divider">
      <li>
        <a href="/">Disclaimer</a>
      </li>
      <li>
        <a href="/">Privacystatement</a>
      </li>
      <li>
        <a href="/">Cookiestatement</a>
      </li>
    </ul>
    <div class="footer-logos">
      <img src="/images/AVL-Logo-white.svg" alt="Antoni van Leeuwenhoek">
      <img src="/images/kemenkessardjito.png" alt="kemenkes ziekenhuis">
    </div>
  </div>
</footer>

<style>
  footer {
    display: none;

    @media (min-width: 1080px) {
      display: flex;
      position: sticky;
      bottom: 0;
      align-items: center;
      justify-content: space-between;
      background-color: var(--primary-color);
      padding: 1rem 0rem;
      color: var(--alt-text-color);
    }
  }

  footer ul {
    @media (min-width: 1080px) {
      display: flex;
    }
  }

  footer li {
    @media (min-width: 1080px) {
      padding: 0 0.8rem;
      position: relative;
    }
  }

  footer div  {
    @media (min-width: 1080px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      width: 85vw;
    }
  }

  footer img {
    @media (min-width: 1080px) {
      height: 3.2rem;
    }
  }

  .footer-logos {
    @media (min-width: 1080px) {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 1rem; 
    }
  }

  footer a {
    @media (min-width: 1080px) {
      font-weight: normal;
      color: var(--alt-text-color);
      text-decoration: none;
    }
  }

  footer a:hover {
    @media (min-width: 1080px) {
      text-decoration: underline;
    }
  }

  .dot-divider li::after{
    @media (min-width: 1080px) {
      content: '•';
      position: absolute;
      right: -0.2rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .dot-divider li:last-child::after {
    @media (min-width: 1080px) {
      content: '';
    }
  }

</style>
