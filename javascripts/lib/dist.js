/**
 * Constructor Pattern
 */
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Car = (function () {
  function Car(opts) {
    _classCallCheck(this, Car);

    this.model = opts.model;
    this.year = opts.year;
    this.miles = opts.miles;
  }

  _createClass(Car, [{
    key: 'toString',
    value: function toString() {
      return '' + this.model + ' has driven ' + this.miles + ' miles';
    }
  }]);

  return Car;
})();

var civic = new Car({
  model: 'Honda Civic',
  year: 2001,
  miles: 50000
});

console.group('constructor');
console.log('constructor', civic);
console.log('toString()', civic.toString());
console.groupEnd('constructor');
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var shoppingList = new WeakMap();

var AbstractDataType = (function () {
  function AbstractDataType() {
    _classCallCheck(this, AbstractDataType);

    // woo! our Class is instantiated lets add some private properties.
    shoppingList.set(this, ['coffee', 'chicken', 'pizza']);
  }

  _createClass(AbstractDataType, [{
    key: 'getShoppingList',

    // Lets create a public prototype method to access our private `shoppingList`
    value: function getShoppingList() {
      return shoppingList.get(this);
    }
  }, {
    key: 'addItem',
    value: function addItem(item) {
      shoppingList.get(this).push(item);
      // var list = shoppingList.get(this);
      // list.push(item);
      // shoppingList.set(this, list)
    }
  }]);

  return AbstractDataType;
})();

var ADT = new AbstractDataType();
console.group('ADT (AbstractDataType)');
console.log('class', ADT);
console.log('getShoppingList()', ADT.getShoppingList());
console.log('private member shoppingList (undefined)', ADT.shoppingList);
ADT.addItem('candy');
console.log('getShoppingList() after adding item', ADT.getShoppingList());
console.groupEnd();
