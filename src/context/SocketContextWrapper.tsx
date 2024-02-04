import {Socket, io} from 'socket.io-client';
import {SocketContext} from './SocketContext';

export const SocketContextWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const init = () => {
    const socket = connect();

    initEventListeners(socket);
  };

  const initEventListeners = (socket: Socket) => {
    onConnectListener(socket);
    onConnectErrorListener(socket);
    onDisconnectListener(socket);
    onEventListener(socket);
  };

  const connect = () => {
    return io(getWebSocketURL(), {
      transports: ['websocket'],
    });
  };

  const emit = (event: unknown) => {
    console.log('Event Emitted: ', event);

    // socket?.emit('event', event)
  };

  const getWebSocketURL = () => {
    // const hostname = window.location.hostname;

    return 'http://192.168.1.209:4003';
  };

  const onConnectListener = (socket: Socket) => {
    socket.on('connect', () => {
      console.log('connected');
    });
  };

  const onConnectErrorListener = (socket: Socket) => {
    socket.on('connect_error', (error: unknown) => {
      console.log('connect error', JSON.stringify(error, null, 2));
    });
  };

  const onDisconnectListener = (socket: Socket) => {
    socket.on('disconnect', () => {
      console.log('disconnected');
    });
  };

  const onEventListener = (socket: Socket) => {
    socket.on('event', (event: unknown) => {
      console.log('event', event);
    });
  };
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <SocketContext.Provider value={{init, emit}}>
      {children}
    </SocketContext.Provider>
  );
};
