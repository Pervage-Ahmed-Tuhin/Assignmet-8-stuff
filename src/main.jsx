import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';
import BookDetails from './components/LonelyBookDetail/BookDetails.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Popular from './components/Popular/Popular.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/book.json')

      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('/book.json')
      },
      {
        path: "/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/book.json')
      },
      {
        path: "/popular",
        element: <Popular></Popular>,
        loader: () => fetch('/popular.json')
      },
      {
        path:"/aboutUs",
        element:<AboutUs></AboutUs>
      },
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
