import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Import the layout components
import RootLayout from './layouts/root';
import DashboardLayout from './layouts/dashboard';

// Import the route components
import IndexPage from './routes';
import ContactPage from './routes/contact';
import SignInPage from './routes/sign-in';
import SignUpPage from './routes/sign-up';
import DashboardPage from './routes/dashboard';
import InvoicesPage from './routes/invoices';

// Loaders and Actions are NOT supported by Clerk at the moment with React Router
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <IndexPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/sign-in/*', element: <SignInPage /> },
      { path: '/sign-up/*', element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: 'dashboard',
        children: [
          { path: '/dashboard', element: <DashboardPage /> },
          { path: '/dashboard/invoices', element: <InvoicesPage /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
