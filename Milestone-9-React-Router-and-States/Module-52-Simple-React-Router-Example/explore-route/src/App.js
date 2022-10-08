import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: "This is default page" },
    { path: '/home', element: "This is Home page" },
    { path: '/about', element: 'This is about page' }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
