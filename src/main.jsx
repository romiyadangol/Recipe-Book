import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RecipeApp from './components/RecipeApp';
import Container from './components/Container';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={createBrowserRouter([
      {
        path: '/',
        element: <App/>,
        
        children: [
          {
            path: '/',
            element: <Container/>
          },
        ]
      },
      {
        path: '/recipe',
        element: <RecipeApp/>,
      },
        
         
    
    
    ])}/>
  </React.StrictMode>,
)
