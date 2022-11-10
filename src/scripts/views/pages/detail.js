import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <div id="content" class="restaurant-detail-section container">
    </div>
      `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('.restaurant-detail-section');
    restaurantContainer.innerHTML = `
    <div class="detail-information">
      <div class="skeleton skeleton-img skeleton-img__detail"></div>
      <div class="information-content">
        <div class="skeleton skeleton-text skeleton-text__name"></div>
        <p class="categories"><span>‎</span></p>
        <div class="skeleton skeleton-text"></div>
      </div>
    </div>
    <div class="detail-container">
      <div class="detail-description">
        <h2>Deskripsi</h2>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
      </div>
      <div class="detail-menu">
        <h2>Menu</h2>
          <div class="menus">
            <div class="menu">
              <h3><i class="fa-solid fa-utensils"></i> </i>Makanan</h3>
              <ul>
                <li><div class="skeleton skeleton-text"></div></li>
                <li><div class="skeleton skeleton-text"></div></li>
                <li><div class="skeleton skeleton-text"></div></li>
                <li><div class="skeleton skeleton-text"></div></li>
                <li><div class="skeleton skeleton-text"></div></li>
                <li><div class="skeleton skeleton-text"></div></li>
              </ul>
              </div>
            <div class="menu">
              <h3><i class="fa-solid fa-mug-hot"></i> </i> Minuman</h3>
              <ul>
                <li><div class="skeleton skeleton-text"></div></li>
                <li><div class="skeleton skeleton-text"></div></li>
                <li><div class="skeleton skeleton-text"></div></li>
                <li><div class="skeleton skeleton-text"></div></li>
                <li><div class="skeleton skeleton-text"></div></li>
                <li><div class="skeleton skeleton-text"></div></li>
              </ul>
            </div>
          </div>
        </div>
      </div>  
      <div class="detail-review">
        <h2>Review Customer</h2>
        <div id="reviewList">
              <div class="review-item">
                <i class="fa-regular fa-circle-user"></i>
                <div class="review-detail">
                  <div class="skeleton skeleton-text skeleton-text__name"></div>
                  <div class="skeleton skeleton-text"></div>
                  <div class="skeleton skeleton-text"></div>
                </div>
              </div>
        </div>
        <div class="review-item">
          <i class="fa-regular fa-circle-user"></i>
          <div class="review-detail">
            <review-input></review-input>
          </div>
        </div>
      </div> 
    `;
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const result = await RestaurantSource.detailRestaurant(url.id);
    if (result.error === true) {
      restaurantContainer.innerHTML = `
      <div class="center">
        <h2 class="empty-text">Detail restoran gagal untuk ditampilkan</h2>
      </div>
      `;
    } else {
      restaurantContainer.innerHTML = `
        <div id="likeButtonContainer"></div>
      `;
      const likeButtonContainer = document.querySelector('#likeButtonContainer');
      const likeButtonElement = document.createElement('like-button');
      likeButtonContainer.appendChild(likeButtonElement);

      const restaurantElement = document.createElement('restaurant-detail');
      restaurantElement.restaurant = result.restaurant;
      restaurantContainer.appendChild(restaurantElement);

      const reviewForm = document.querySelector('#reviewForm');
      const inputName = document.querySelector('#inputName');
      const inputReview = document.querySelector('#inputReview');

      reviewForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const review = {
          id: result.restaurant.id,
          name: inputName.value,
          review: inputReview.value,
        };
        const newReviews = await RestaurantSource.addReviewRestaurant(review);
        const reviewListContainer = document.querySelector('#reviewList');
        reviewListContainer.innerHTML = newReviews.customerReviews.map((newReview) => `
              <div class="review-item">
                <i class="fa-regular fa-circle-user"></i>
                <div class="review-detail">
                  <h3>${newReview.name}</h3>
                  <p>${newReview.date}</p>
                  <p class="review">${newReview.review}</p>
                </div>
              </div>
          `).join('');
        reviewForm.reset();
      });

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: result.restaurant.id,
          name: result.restaurant.name,
          city: result.restaurant.city,
          rating: result.restaurant.rating,
          description: result.restaurant.description,
          pictureId: result.restaurant.pictureId,
        },
      });
    }
  },

};

export default Detail;
