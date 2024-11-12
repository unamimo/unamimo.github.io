import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/App/App';
import Page1 from './pages/Page1/Page1';
import Page3 from './pages/Page3/Page3';
import Page2 from './pages/Page2/Page2';
import NotFoundPage from './pages/NotFoundPage';
import TextToSpeechProvider from './context/TextToSpeechContext';

const router = createBrowserRouter([
  {
    path: "/",          // route path
    element: <App />,   // tells the router where to start
    children: [
        {path: "", element: <App />,}
    ],
    errorElement: <NotFoundPage />
  },
  {
    path: "/page1",
    element: <Page1 />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
  {
    path: "/page3", 
    element: <Page3 />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TextToSpeechProvider>
      <RouterProvider router={router}/>
    </TextToSpeechProvider>
  </StrictMode>,
)
