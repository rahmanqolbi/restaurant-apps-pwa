class RestaurantsSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="list" class="restaurant-section container">
      <h2>Jelajahi Restoran</h2>
      <div class="restaurant-list"></div>
    </section>
    `;
  }
}

customElements.define('restaurants-section', RestaurantsSection);
