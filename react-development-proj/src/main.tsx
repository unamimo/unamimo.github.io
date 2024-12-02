import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/App/App';
import NotFoundPage from './pages/NotFound';
import TextToSpeechProvider from './context/TextToSpeechContext';
import About from './pages/About/About';
import Config from './pages/Config/Config';
import { ThemeProvider } from './context/ThemeContext';

// import i18n (needs to be bundled ;))
import './i18n';
import Guide from './pages/Guide/Guide';

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
    path: "/About",
    element: <About />,
  },
  {
    path: "/Config",
    element: <Config />,
  },
  {
    path: "/Guide", 
    element: <Guide />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <TextToSpeechProvider>
        <RouterProvider router={router}/>
      </TextToSpeechProvider>
    </ThemeProvider>
  </StrictMode>,
)
