import RestaurantSource from '../../data/restaurant-source';

const Home = {
  async render() {
    return `
    <hero-section></hero-section>
    <restaurants-section id="content">
    </restaurants-section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurantsContainer = document.querySelector('.restaurant-list');
    // skeleton view
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= 20; i++) {
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

    const restaurantList = await RestaurantSource.listRestaurants();
    if (restaurantList.error === true) {
      restaurantsContainer.innerHTML = `
      <h1>Daftar restoran gagal untuk ditampilkan</h1>
      `;
    } else {
      restaurantsContainer.innerHTML = '';
      restaurantList.restaurants.forEach((restaurant) => {
        const restaurantElement = document.createElement('restaurant-item');
        restaurantElement.restaurant = restaurant;
        restaurantsContainer.appendChild(restaurantElement);
      });
    }
  },
};

export default Home;
