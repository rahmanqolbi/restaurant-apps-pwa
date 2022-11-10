import CONFIG from '../global/config';

class RestaurantDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="detail-information">
      <picture>
        <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL('small')}${this._restaurant.pictureId}">
        <img src="${CONFIG.BASE_IMAGE_URL('large')}${this._restaurant.pictureId}" alt="${this._restaurant.name || ''}">
      </picture>
      <div class="information-content">
        <h1>${this._restaurant.name}</h1>
        <p class="categories">${this._restaurant.categories.map((category) => `<span>${category.name}</span>`).join(' ')}</p>
        <p><i class="fa-solid fa-location-dot"></i> ${this._restaurant.address}, ${this._restaurant.city}</p>
      </div>
    </div>
    <div class="detail-container">
      <div class="detail-description">
        <h2>Deskripsi</h2>
        <p>${this._restaurant.description}</p>
      </div>
      <div class="detail-menu">
        <h2>Menu</h2>
          <div class="menus">
            <div class="menu">
              <h3><i class="fa-solid fa-utensils"></i> </i>Makanan</h3>
              <ul>
              ${this._restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
              </ul>
            </div>
            <div class="menu">
              <h3><i class="fa-solid fa-mug-hot"></i> </i> Minuman</h3>
              <ul>
              ${this._restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>  
      <div class="detail-review">
        <h2>Review Customer</h2>
        <div id="reviewList">
          ${this._restaurant.customerReviews.map((review) => `
              <div class="review-item">
                <i class="fa-regular fa-circle-user"></i>
                <div class="review-detail">
                  <h3>${review.name}</h3>
                  <p>${review.date}</p>
                  <p class="review">${review.review}</p>
                </div>
              </div>
          `).join('')}
        </div>
        <div class="review-item">
          <i class="fa-regular fa-circle-user"></i>
          <div class="review-detail">
            <review-input></review-input>
          </div>
        </div>
      </div> 
    `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
