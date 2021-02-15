// Use this list of items in your routes and test files.

// Your application should have the following routes:

// GET /items - this should render a list of shopping items.
// Here is what a response looks like:

// [{“name”: “popsicle”, “price”: 1.45}, {“name”:”cheerios”, “price”: 3.40}]

// POST /items - this route should accept JSON data and add it to the shopping list.
// Here is what a sample request/response looks like:

// {“name”:”popsicle”, “price”: 1.45} => {“added”: {“name”: “popsicle”, “price”: 1.45}}

// GET /items/:name - this route should display a single item’s name and price.
// Here is what a sample response looks like:

// {“name”: “popsicle”, “price”: 1.45}

// PATCH /items/:name, this route should modify a single item’s name and/or price.
// Here is what a sample request/response looks like:

// {“name”:”new popsicle”, “price”: 2.45} => {“updated”: {“name”: “new popsicle”, “price”: 2.45}}

// DELETE /items/:name - this route should allow you to delete a specific item from the array.

// Here is what a sample response looks like:

// {message: “Deleted”}
// Please make use of the Express Router.

/**Item in shopping cart */
const items = require('./fakeDb')


// The constructor() method is called automatically when a class is initiated, 
// and it has to have the exact name "constructor", in fact, if you do not have a constructor method, 
// JavaScript will add an invisible and empty constructor method.

/** Update found item with matching name to data. */
class Item {
    constructor(name, price) {
      this.name = name;
      this.price = price;
  
      // keep track of all items
      items.push(this);
    }
  
    static findAll(){
      return items
    }
    /** Update found item with matching name to data. */
  
    static update(name, data) {
      let foundItem = Item.find(name);
      if (foundItem === undefined) {
        throw {message: "Not Found", status: 404}
      }
      foundItem.name = data.name;
      foundItem.price = data.price;
  
      return foundItem;
    }
  
    /** Find & return item with matching name. */
  
    static find(name) {
      const foundItem = items.find(v => v.name === name);
      if(foundItem === undefined){
        throw { message: "Not Found", status: 404 }
      }
      return foundItem
    }
  
    /** Remove item with matching id. */
  
  
    static remove(name) {
      let foundIdx = items.findIndex(v => v.name === name);
      if (foundIdx === -1) {
        throw {message: "Not Found", status: 404}
      }
      items.splice(foundIdx, 1);
    }
  }
  
  module.exports = Item;