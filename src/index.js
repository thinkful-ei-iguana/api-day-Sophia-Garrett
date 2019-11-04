import $ from 'jquery';
import api from './api';
import 'normalize.css';
import './index.css';
import shoppingList from './shopping-list';
import store from './store';

const main = function () {
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      const item = items[0];
      return api.updateItem(item.id, { name: 'foobar' });
    })
    .then(res => res.json())
    .then(() => console.log('updated!'));
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });
  console.log(api.BASE_URL);

  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
