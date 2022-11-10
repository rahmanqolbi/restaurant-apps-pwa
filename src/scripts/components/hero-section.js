class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="hero-section">
      <picture>
        <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
        <img src="./images/hero-image_2-large.jpg" alt="hero image" />
      </picture>
      <h1>Restoku</h1>
      <p>Temukan Restoran-Restoran Menarik pada Katalog Website Ini</p>
    </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);
