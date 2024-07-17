'use strict';

import data from './data.js';

const alpha = ['a', 'b', 'c', 'd'];

function generateFollowersCardMarkup(data) {
  return `
    <li class="followers__item">
      <figure class="followers__card">
        <div class="followers__card--gradient" style="background-image: linear-gradient(to right, var(--c-gradient-${data.platform.toLowerCase()}-1) 0%, var(--c-gradient-${data.platform.toLowerCase()}-2) 100%);"></div>
        <div class="followers__card--handle">
          <img src="./images/icon-${data.platform.toLowerCase()}.svg" />
          @nathanf
        </div>
        <div class="followers__card--followers">
          <div class="followers__card--followers-num">${data.followers.total}</div>
          <div class="followers__card--followers-label">FOLLOWERS</div>
        </div>
        <div class="followers__card--rate ${data.followers.rate > 0 ? 'card--up' : 'card--down'}">
          <img src="./images/icon-${data.followers.rate > 0 ? 'up' : 'down'}.svg" />
          <span>${data.followers.rate} Today</span>
        </div>
      </figure>
    </li>
  `;
}

function generateOverviewCardMarkup(data, i) {
  return `
    <li class="overview__item" style="grid-area: ${alpha.at(i)}-1;">
      <figure class="overview__card">
        <div class="overview__card--header">
          <span class="overview__card--header-view">${data.details.at(0).type}</span>
          <img src="./images/icon-${data.platform.toLowerCase()}.svg" />
        </div>
        <div class="overview__card--btm">
          <span class="overview__card--btm-num">${data.details.at(0).today}</span>
          <span class="overview__card--btm-rate__wrap ${data.details.at(0).rate > 0 ? 'card--up' : 'card--down'}">
            <img src="./images/icon-${data.details.at(0).rate > 0 ? 'up' : 'down'}.svg" />
            <span class="overview__card--btm-rate">${data.details.at(0).rate}%</span>
          </span>
        </div>
      </figure>
    </li>
    <li class="overview__item" style="grid-area: ${alpha.at(i)}-2;">
      <figure class="overview__card">
        <div class="overview__card--header">
          <span class="overview__card--header-view">${data.details.at(1).type}</span>
          <img src="./images/icon-${data.platform.toLowerCase()}.svg" />
        </div>
        <div class="overview__card--btm">
          <span class="overview__card--btm-num">${data.details.at(1).today}</span>
          <span class="overview__card--btm-rate__wrap ${data.details.at(1).rate > 0 ? 'card--up' : 'card--down'}">
            <img src="./images/icon-${data.details.at(1).rate > 0 ? 'up' : 'down'}.svg" />
            <span class="overview__card--btm-rate">${data.details.at(1).rate}%</span>
          </span>
        </div>
      </figure>
    </li>
  `;
}

function insertListHTML(listName, fn) {
  const listContainer = document.querySelector(`.${listName}__list`);
  data.forEach((data, i) => listContainer.insertAdjacentHTML('beforeend', fn(data, i)));
}

function insertFollowersCardHTML() {
  insertListHTML('followers', generateFollowersCardMarkup);
}

function insertOverviewCardHTML() {
  insertListHTML('overview', generateOverviewCardMarkup);
}

insertOverviewCardHTML();
insertFollowersCardHTML();
