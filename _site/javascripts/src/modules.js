const shoppingList = new WeakMap();

class AbstractDataType {
  constructor() {
    // woo! our Class is instantiated lets add some private properties.
    shoppingList.set(this, ['coffee', 'chicken', 'pizza'])
  }

  // Lets create a public prototype method to access our private `shoppingList`
  getShoppingList() {
    return shoppingList.get(this);
  }

  addItem(item) {
    shoppingList.get(this).push(item);
  }
}

var ADT = new AbstractDataType();
console.group('ADT (AbstractDataType)')
console.log('class', ADT);
console.log('getShoppingList()', ADT.getShoppingList());
console.log('private member shoppingList (undefined)', ADT.shoppingList);
ADT.addItem('candy');
console.log('getShoppingList() after adding item', ADT.getShoppingList());
console.groupEnd();