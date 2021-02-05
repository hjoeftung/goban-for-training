class Socket {
  constructor(callbacks) {
    this.callbacks = callbacks;
    this.socket = new WebSocket(`ws://${window.location.host}${window.location.pathname}`);
    this.socket.onmessage = this.listen;
    this.socket.onopen = () => {
      console.log('connection ready');
    };
    this.socket.onclose = event => {
      if (!event.wasClean) {
        console.log(`Connection aborted, code ${event.code}`);
      }
    };

    window.addEventListener('beforeunload', () => {
      this.socket.close(1000);
    });
  }

  sendMessage(message) {
    console.log(`sending: ${message}`);
    this.socket.send(message);
  }

  sendName(name) {
    const message = JSON.stringify({
      action: 'name',
      payload: {
        newName: name
      }
    });
    this.sendMessage(message);
  }

  sendSeat(color, name) {
    const message = JSON.stringify({ action: 'seat', payload: { color, name } });
    this.sendMessage(message);
  }

  leaveSeat(color) {
    const message = JSON.stringify({ action: 'leave', payload: { color } });
    this.sendMessage(message);
  }

  sendMove(color, coords) {
    const message = JSON.stringify({
      action: 'move',
      payload: {
        color,
        coords
      }
    });
    this.sendMessage(message);
  }

  requestRevert() {
    const message = JSON.stringify({ action: 'revert' });
    this.sendMessage(message);
  }

  confirmRevert() {
    const message = JSON.stringify({ action: 'confirm' });
    this.sendMessage(message);
  }

  listen = event => {
    const message = JSON.parse(event.data);
    console.log(`received message: ${event.data}`);
    switch (message.action) {
      case 'connection':
        console.log('setting board');
        this.callbacks.setBoard(message.payload);
        break;
      case 'revert':
        this.callbacks.askRevert();
        break;
      case 'confirm':
        this.callbacks.confirmRevert();
        break;
      case 'seat':
        console.log('setting seat');
        this.callbacks.setSeat(message.payload.color, message.payload.name);
        break;
      case 'leave':
        console.log('left seat');
        this.callbacks.clearSeat(message.payload.color);
        break;
      case 'move':
        console.log('placing stone');
        this.callbacks.move(message.payload.color, message.payload.coords);
        break;
      default:
        console.log(`Unknown action type: ${message.action}`);
    }
  }
}

export default Socket;
