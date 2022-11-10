import UrlParser from '../routes/url-parser';

const DrawerInitiator = {
  init({ button, drawer, content }) {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
    Array.from(drawer.children).forEach((navItem) => {
      if (url.resource === navItem.children[0].innerText.toLowerCase()) {
        this._removeActive(drawer);
        this._addActive(navItem);
      }
      navItem.addEventListener('click', () => {
        this._removeActive(drawer);
        this._addActive(navItem);
      });
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
  _removeActive(drawer) {
    Array.from(drawer.children).forEach((navItem) => {
      navItem.classList.remove('active');
    });
  },
  _addActive(navItem) {
    navItem.classList.add('active');
  },
};

export default DrawerInitiator;
