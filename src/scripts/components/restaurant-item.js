import CONFIG from '../global/config';

class RestaurantItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="restaurant-item" id="${this._restaurant.id}">
      <a href="#/detail/${this._restaurant.id}">
        <div class="item-thumbnail">
          <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL('small')}${this._restaurant.pictureId}" alt="${this._restaurant.name || ''}">
          <p class="city-tag">${this._restaurant.city}</p>
          <p class="rating-tag">
            <i class="fa-solid fa-star"></i>
            ${this._restaurant.rating}
          </p>
        </div>
        <div class="item-content">
          <h3>${this._restaurant.name}</h3>
          <p>${this._restaurant.description}</p>
        </div>
      </a>   
    </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
