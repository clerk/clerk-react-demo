import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';
import { ClerkProvider, SignedIn } from '@clerk/clerk-react';
import SignInPage from './components/SignIn';
import SignOutButton from './components/SignOut';
import Layout from './components/Layout';
import NoMatch from './components/NoMatch';
import './styles/index.css';

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={publishableKey}>
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route
          path="/protected"
          element={
            <SignedIn>
              <h1>This is a protected page</h1>
              <SignOutButton />
            </SignedIn>
          }
        />
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </ClerkProvider>
  </React.StrictMode>
);
