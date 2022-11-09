import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import Root, { loader as rootLoader, action as rootAction } from './routes/Root';
import Contact, { loader as contactLoader, action as contactAction } from './routes/Contact';
import ErrorPage from './components/ErrorPage';
import EditContact, { action as editAction } from './routes/EditContact';
import { action as destroyAction } from './routes/Destroy';
import IndexContact from './routes/IndexContact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        index: true,
        element: <IndexContact />
      },
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: contactLoader,
        action: contactAction,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: 'contacts/:contactId/destroy',
        errorElement: <div>Oops! There was an error.</div>,
        action: destroyAction,
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
