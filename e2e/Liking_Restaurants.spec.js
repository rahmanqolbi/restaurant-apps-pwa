/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('like and unlike one restaurants', async ({ I }) => {
  // memastikan daftar restoran favorit kosong
  I.waitForElement('.restaurant-list h2', 5);
  I.see('Daftar Restoran Favorit Anda Kosong', '.restaurant-list h2');

  // Menyukai salah satu restoran
  I.amOnPage('/');
  I.seeElement('.restaurant-item');
  const firstRestaurant = locate('.item-content h3').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton[aria-label="Suka Restoran"]');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.item-content h3');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // Batal menyukai restoran tersebut
  const firstFavoriteRestaurant = locate('.item-content h3').first();
  I.click(firstFavoriteRestaurant);

  I.seeElement('#likeButton[aria-label="Batal Suka Restoran"]');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Daftar Restoran Favorit Anda Kosong', 'h2');
});
