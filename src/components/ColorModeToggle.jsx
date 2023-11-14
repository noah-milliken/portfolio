import {LuMoon, LuSun} from 'react-icons/lu'
import { Button, Flex, useColorMode, useColorModeValue } from '@chakra-ui/react'
const ColorModeToggle = () => {
    
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
        <Flex
        align={'center'}
        justify={'center'}
        direction={'column'}
        >
            
            <Button
            onClick={() => toggleColorMode()}
            >
            
            {colorMode === 'dark' ? <LuMoon size={22} /> : <LuSun size={22} />}
            </Button>

        </Flex>
    </div>
  )
}

export default ColorModeToggle