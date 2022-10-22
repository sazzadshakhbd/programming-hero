import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Order from './components/Order';
import Registration from './components/Registration';
import PrivateRoute from './components/routes/PrivateRoute';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <PrivateRoute><Home></Home></PrivateRoute>,
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/order',
          element: <PrivateRoute><Order></Order></PrivateRoute>
        },
        {
          path: '/registration',
          element: <Registration></Registration>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
