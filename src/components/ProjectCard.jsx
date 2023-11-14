import { Text, Image, Heading, Divider, Tag, HStack, VStack, Stack } from "@chakra-ui/react"

const ProjectCard = ({index}) => {
  const rowDir = index % 2 === 0 ? 'row' : 'row-reverse'


  return (
    <Stack
    borderRadius={10}
    direction={['column', 'column', `${rowDir}`]}
    p={5}
    mx={5}
    maxWidth={'100%'}
    bg='teal.800'
    alignItems={'center'}
    justify={'space-between'}
    alignSelf={'stretch'}
    >
       <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        
        maxW={['100%','50%','50%','md']}
        borderRadius='xl'
        />
        <VStack
          direction={'column'}
          px={4}
        >
          
          <Heading size='lg' alignSelf={['center','center','flex-start']}>Pick-IT</Heading>
          <Divider/>
          <HStack alignSelf={['center','center','flex-start']}>
            <Tag>Chakra UI</Tag>
            <Tag>React</Tag>
            <Tag>Node.js</Tag>
            <Tag>MySql</Tag>
          </HStack>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum laborum sed ratione voluptas rem reprehenderit amet maxime odit porro fuga minus necessitatibus ipsum, dolore molestiae, dicta dolores optio laudantium magni!</Text>
         
        </VStack>
    </Stack>
  )
}

export default ProjectCard
