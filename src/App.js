import { createBrowserRouter, RouterProvider} from "react-router-dom";
import React from 'react';

import Greetings from './Components/Greetings';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Greetings />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
