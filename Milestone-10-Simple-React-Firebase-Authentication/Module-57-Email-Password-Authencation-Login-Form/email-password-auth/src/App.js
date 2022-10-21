import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterReact from './components/RegisterReact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Login from './components/Login/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <RegisterReact></RegisterReact>
        },
        {
          path: '/register',
          element: <RegisterReact></RegisterReact>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
