class LoadingIndicator extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    `;
  }
}

customElements.define('loading-indicator', LoadingIndicator);
