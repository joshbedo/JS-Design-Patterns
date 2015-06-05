/*
 * Publish/Subscribe Pattern
 */
class PubSub {
  constructor() {
    this.handlers = [];
  }

  subscribe(event, handler, context) {
    if (typeof context === 'undefined') { context = handler; }
    this.handlers.push({ event: event, handler: handler.bind(context) });
  }

  publish(event, args) {
    this.handlers.forEach(topic => {
      if (topic.event === event) {
        topic.handler(args)
      }
    })
  }
}

/*
 * Simple ChatRoom Class
 * uses the PubSub Class to notify other users when a message is sent.
 */
class ChatRoom {
  constructor() {
    this.pubsub = new PubSub();
    this.pubsub.subscribe('message', this.emitMessage, this);
  }

  emitMessage(msg) {
    console.group('PubSub')
    console.log('user sent message!', msg);
    console.groupEnd();
  }

  sendMessage() {
    this.pubsub.publish('message', 'Hey, how are you?');
  }

}

var room = new ChatRoom();
room.sendMessage();