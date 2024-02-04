import {createContext} from 'react';

export const SocketContext = createContext({
  init: () => {},
  emit: (_event: unknown) => {},
});
