class FavoriteSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="list" class="restaurant-section container">
      <h2>Restoran Favorit</h2>
      <div class="restaurant-list"></div>
    </section>
    `;
  }
}

customElements.define('favorite-section', FavoriteSection);
