import { Flex, Heading, Text } from "@chakra-ui/react"


const About = () => {
  return (
    <Flex
    border={'solid'}
    minH={'100vh'}
    minW={'100%'}
    flexDir={['column', "row"]}
    >
      <Flex
        minW={'50%'}
        
      >
        <Heading>My Name is Noah</Heading>
      </Flex>
      <Flex
      maxW={'50%'}
      >

        <Heading>About ME:</Heading>
        <Text>Im a software engineer from Main, USA. I love solving prroblems as a team that bring value to organizations and businesses. </Text>
      </Flex>

    </Flex>
  )
}

export default About