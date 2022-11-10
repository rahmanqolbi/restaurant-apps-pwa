/* eslint-disable no-undef */
const assert = require('assert');

Feature('Customer Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('customer add review to restaurant', async ({ I }) => {
  I.waitForElement('.restaurant-item', 5);
  const firstRestaurant = locate('.item-content h3').first();
  I.click(firstRestaurant);

  I.seeElement('#reviewForm');
  const reviewerName = 'Customer';
  const reviewerReview = 'Isi Review';
  I.fillField('#inputName', reviewerName);
  I.fillField('#inputReview', reviewerReview);
  I.click('button[type="submit"]');

  const submittedReviewerName = await I.grabTextFrom(locate('.review-detail h3').last());
  const submittedReviewerReview = await I.grabTextFrom(locate('.review-detail .review').last());
  assert.strictEqual(reviewerName, submittedReviewerName);
  assert.strictEqual(reviewerReview, submittedReviewerReview);
});
