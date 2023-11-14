import { Flex, HStack, Heading} from '@chakra-ui/react'
import ColorModeToggle from './ColorModeToggle'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Flex
        border={'solid'}
        width={'100%'}
        px={18}
        alignItems={'center'}
        justify={'space-between'}
        height={'80px'}
    >
        {/* <Box>
            <GiPineTree size={42}/>
        </Box> */}
        <Flex>
        <Heading >N M</Heading>
        </Flex>
        <HStack spacing={5}>
        <NavLink to={'/'} >Home</NavLink>
        <NavLink to={'/projects'}>Projects</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <ColorModeToggle/>
        </HStack>
    </Flex>
  )
}

export default Header