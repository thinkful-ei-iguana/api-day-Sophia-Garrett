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
      //needed to be added here because by the time the first getItems run is done updating AND the items are displayed on the screen 
      //on the second Getitems, the test code below is able to run properly by the time the api request comes back...I think
      const item = store.items[0];
      console.log('current name: ' + item.name);
      store.findAndUpdate(item.id, { name: 'foobar' });
      console.log('new name: ' + item.name);

      shoppingList.render();
    });



  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
