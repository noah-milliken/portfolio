
import { Box, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Header  from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

import './theme/styles.css'
function App(props) {


  return (
<Flex
   direction='column'
   align='center'
   maxW={{xl: '1200px'}}
   minH={'100vh'}
   m='0 auto'
   justify={'space-between'}
>
  <Header />
  
  <About />
  <Projects />
  <Contact />
  <Footer />
  
</Flex>
  )
}

export default App
