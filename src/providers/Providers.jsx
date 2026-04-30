'use client';

import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from '../redux/store';

/**
 * Client-side providers wrapper.
 * Must be 'use client' because Redux Provider and react-hot-toast
 * both require browser/React context which can't run on the server.
 */
export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 1500,
          style: {
            background: '#111827',
            color: '#fff',
            padding: '16px 20px',
            borderRadius: '12px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            fontSize: '14px',
            fontWeight: '700',
            letterSpacing: '0.025em',
          },
        }}
      />
      {children}
    </Provider>
  );
}
