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

function updateItem (id, updateData){
  let updataDataJSON = JSON.stringify(updateData);
   return fetch(`${BASE_URL}/items/${id}`, 
   {
     method: 'PATCH',
     headers: {'Content-Type': 'application/json'},
     body: updataDataJSON
   }
   )
}


export default {
  getItems,
  createItem,
  updateItem
};