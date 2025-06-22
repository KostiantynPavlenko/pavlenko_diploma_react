import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './components/Layout';
import About from './pages/about';
import Hotels from './pages/hotels';
import Hotel from './pages/Hotel';
import { hotelLoader } from './loaders/hotelLoader';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Hotels />
      },
      {
        path: 'hotels/:id',
        element: <Hotel />,
        loader: hotelLoader
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: '*',
        element: <div>404 page</div>
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
