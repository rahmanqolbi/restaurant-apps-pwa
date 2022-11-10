class ReviewInput extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <form id="reviewForm">
      <label for="inputName">Nama</label>
      <input id="inputName" type="text" name="nama" placeholder="Masukan  Nama Anda" required />
      <label for="inputReview">Review</label>
      <textarea name="review" id="inputReview" placeholder="Masukan review" required=""></textarea>
      <button id="reviewSubmit" type="submit" title="Tambah Review">Tambah Review</button>
    </form>
    `;
  }
}

customElements.define('review-input', ReviewInput);
