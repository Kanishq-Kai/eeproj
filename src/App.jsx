import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalProvider } from './Components/GlobalContext'; // Import the GlobalProvider component
import SignUp from './Components/SignUp.jsx';
import Dashboard from './Components/Dashboard.jsx';
import Plans from './Components/Plans.jsx';
import EditDashboard from './Components/EditDashboard.jsx';

const App = () => {
  const router = new createBrowserRouter([
    {
      path: "/",
      element: <SignUp />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '/edit',
      element: <EditDashboard />
    },
    {
      path: '/plans',
      element: <Plans />
    }
  ]);

  return (
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  );
};

export default App;
