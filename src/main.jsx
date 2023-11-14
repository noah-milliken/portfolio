import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  } from 'react-router-dom'
  import About from './components/About.jsx'
  import Projects from './components/Projects.jsx'
  import Contact from './components/Contact.jsx'
  import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
  import theme from './theme/index.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='about' element={<About/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='contact' element={<Contact />} />
    </Route>
     
  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider  router={router}/>
    </ChakraProvider>
  </React.StrictMode>,
)
