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

console.group('Constructor');
console.log('constructor', civic);
console.log('toString() prototype method', civic.toString());
console.groupEnd('constructor');
/*
 * Publish/Subscribe Pattern
 */
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PubSub = (function () {
  function PubSub() {
    _classCallCheck(this, PubSub);

    this.handlers = [];
  }

  _createClass(PubSub, [{
    key: 'subscribe',
    value: function subscribe(event, handler, context) {
      if (typeof context === 'undefined') {
        context = handler;
      }
      this.handlers.push({ event: event, handler: handler.bind(context) });
    }
  }, {
    key: 'publish',
    value: function publish(event, args) {
      this.handlers.forEach(function (topic) {
        if (topic.event === event) {
          topic.handler(args);
        }
      });
    }
  }]);

  return PubSub;
})();

/*
 * Mediator Pattern
 */

var Mediator = (function (_PubSub) {
  function Mediator(opts) {
    _classCallCheck(this, Mediator);

    _get(Object.getPrototypeOf(Mediator.prototype), 'constructor', this).call(this);
  }

  _inherits(Mediator, _PubSub);

  _createClass(Mediator, [{
    key: 'attachToObject',
    value: function attachToObject(obj) {
      obj.handlers = [];
      obj.publish = this.publish;
      obj.subscribe = this.subscribe;
    }
  }]);

  return Mediator;
})(PubSub);

var mediator = new Mediator();

var myRoom = {
  name: 'myRoom'
};

mediator.attachToObject(myRoom);

myRoom.subscribe('connection', function () {
  console.group('Mediator');
  console.log('user connected to ' + myRoom.name + '!');
  console.groupEnd();
}, myRoom);

myRoom.publish('connection');
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
/*
 * Observer Pattern
 */
'use strict';

var model = {};

Object.observe(model, function (changes) {
  console.group('Observer');
  // async callback
  changes.forEach(function (change) {
    console.log(change.type, change.name, change.oldValue);
  });
  console.groupEnd();
});

model.first_name = 'Josh';
model.last_name = 'Bedo';
model.age = 22;
/*
 * Publish/Subscribe Pattern
 */
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PubSub = (function () {
  function PubSub() {
    _classCallCheck(this, PubSub);

    this.handlers = [];
  }

  _createClass(PubSub, [{
    key: 'subscribe',
    value: function subscribe(event, handler, context) {
      if (typeof context === 'undefined') {
        context = handler;
      }
      this.handlers.push({ event: event, handler: handler.bind(context) });
    }
  }, {
    key: 'publish',
    value: function publish(event, args) {
      this.handlers.forEach(function (topic) {
        if (topic.event === event) {
          topic.handler(args);
        }
      });
    }
  }]);

  return PubSub;
})();

/*
 * Simple ChatRoom Class
 * uses the PubSub Class to notify other users when a message is sent.
 */

var ChatRoom = (function () {
  function ChatRoom() {
    _classCallCheck(this, ChatRoom);

    this.pubsub = new PubSub();
    this.pubsub.subscribe('message', this.emitMessage, this);
  }

  _createClass(ChatRoom, [{
    key: 'emitMessage',
    value: function emitMessage(msg) {
      console.group('PubSub');
      console.log('user sent message!', msg);
      console.groupEnd();
    }
  }, {
    key: 'sendMessage',
    value: function sendMessage() {
      this.pubsub.publish('message', 'Hey, how are you?');
    }
  }]);

  return ChatRoom;
})();

var room = new ChatRoom();
room.sendMessage();
