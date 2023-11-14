import { Flex } from "@chakra-ui/react"
import ProjectCard from "./ProjectCard"


const Projects = () => {
  return (
    <Flex
    my={8}
    width={'100%'}
    align={'center'}
    justify={'center'}
    direction={'column'}
    gap={4}
    >
      <ProjectCard index={1} />
      <ProjectCard index={2} />
      <ProjectCard index={3}/>
    </Flex>
  )
}

export default Projects