class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="app-bar container">
        <div class="app-logo" aria-label="logo">
          <i class="fa-solid fa-store"></i>
          <h1>Restoku</h1>
        </div>
        <button type="button" title="menu" id="menu">
          <i class="fa-solid fa-bars"></i>
        </button>
        <ul id="drawer">
          <li class="active"><a href="/">Home</a></li>
          <li><a href="#/favorite">Favorite</a></li>
          <li><a href="https://github.com/rahmanqolbi">About</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
