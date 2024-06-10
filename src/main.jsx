import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddRecipe from './components/AddRecipe';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter([
      {
        children: [
          {
            path: '/',
            element: <App />,
          },
          {
            path: '/recipe',
            element: <AddRecipe/>,
          },
         
        ],
      },
    ])}/>
  </React.StrictMode>,
)
