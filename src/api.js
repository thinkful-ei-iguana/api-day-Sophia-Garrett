const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Sophia-Garrett';

const getItems = function () {
  return fetch(`${BASE_URL}/items`);
};

function createItem (name){
  let newItem = {
    name,
  };
  
  let newItemJSON = JSON.stringify(newItem);
  console.log(newItem);
  return fetch(`${BASE_URL}/items`, 
    {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItemJSON,
    });
}


export default {
  getItems,
  createItem
};