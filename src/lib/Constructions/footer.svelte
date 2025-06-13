<footer>
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
    <img src="images/LogoOncollaboration.png" width="40" height="45" alt="Logo Antoni van Leeuwenhoek Hospital" class="s-lCPQtr6yAWsI">
    <img src="images/Kemenkes2.png" width="40" height="45" alt="Logo Kemenkes hospital" class="s-lCPQtr6yAWsI">
  </div>
</footer>

<style>
  footer {
    height: 12.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 0.6rem;
    background-color: var(--primary-color);

    @media (min-width: 1080px) {
      position: sticky;
      bottom: 0;
    }
  }

  footer p {
    color: var(--text-light);
  }

  footer ul {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  footer li {
    list-style: none;
    font-size: 11px;
  }

  footer a {
    color: var(--text-light);
  }

  footer a:hover {
    text-decoration: underline;
  }
</style>
