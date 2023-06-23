console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = [];
let bag = [1, 2, 3, 4];
let cart = ['Bread', 'Eggs'];



function addItem(item) {
        basket.push(item);
        return true;
    }

addItem('Apple');
addItem('Bananas');
addItem('Kale');
addItem('Spinach');

console.log(basket);

  //- Create a function called `listItems`. It should:
  //- loop over the items in the `basket` array
  //- console.log each individual item on a new line

  function listItems(array){
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
  }

listItems(basket);
listItems(bag);  
listItems(cart);

//- Create a function called `empty`. It should:
//- reset the `basket` to an empty array

function empty(array){
    array.splice(0, array.length)
}
empty(basket);
console.log(basket);

// array.splice(0, array.length);




// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
