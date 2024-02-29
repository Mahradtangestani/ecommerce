import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import ShopContextProvider from './context/ShopContext';


createRoot(document.getElementById('root')).render(
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  
);


