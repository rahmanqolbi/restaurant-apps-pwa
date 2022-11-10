import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Favorite = {
  async render() {
    return `
    <favorite-section id="content"></favorite-section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurantsContainer = document.querySelector('.restaurant-list');
    // skeleton view
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= 3; i++) {
      restaurantsContainer.innerHTML += `
      <div class="restaurant-item">
        <div class="item-thumbnail">
          <div class="skeleton skeleton-img"></div>
          <p class="city-tag">‎</p>
          <p class="rating-tag">
            <i class="fa-solid fa-star"></i>
          </p>
        </div>
        <div class="item-content">
          <div class="skeleton skeleton-text skeleton-text__name"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
        </div>
      </div>
      `;
    }
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    if (restaurants.length === 0) {
      restaurantsContainer.classList.add('center');
      restaurantsContainer.innerHTML = `
        <h2>Daftar Restoran Favorit Anda Kosong</h2>
      `;
    } else {
      restaurantsContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        const restaurantElement = document.createElement('restaurant-item');
        restaurantElement.restaurant = restaurant;
        restaurantsContainer.appendChild(restaurantElement);
      });
    }
  },
};

export default Favorite;
