import React from 'react'
import { Flex, Box, Heading, Text } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'
import Icon from '@chakra-ui/icon'
import { DiWebplatform, DiCodeigniter } from 'react-icons/di'
import { 
    Button,
    useDisclosure, 
    useRef, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    Form,
    FormLabel,
    Input,
} from '@chakra-ui/react'

function Profile ( ) {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
    
    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "100vh", lg: "100vh", xl: "100vh"}}>
            <Box alignSelf="" px="16" py="16">
                <Heading fontWeight="extrabold" color="cyan.500" size="4xl  ">
                    Formação
                </Heading>
                <Text fontSize="2xl" color="gray.400">Analise e Desenvolvimento de Sistemas <em>(em andamento)</em></Text>
                
            <Button onClick={onOpen} mt={2}>Educação</Button>  
            <Modal
            isOpen={isOpen}
            onClose={onClose}
            >
             <ModalOverlay />
            <ModalContent>
            <ModalHeader>Desenvolvedor Web Javascript</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
             <Text>Cursando Analise e Desenvolvimento de Sistemas</Text>
             <Text>Certifcações Devmedia HTML, CSS3, Javascript, React</Text>
             <Text>Certificação Udemy Cod3r Cursos Web Moderno com Javascript 2021</Text>
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={onClose}>Fechar</Button>
            </ModalFooter>
          </ModalContent>
            </Modal>
            </Box>
            <Box alignSelf="center" px="32" py="16">
                <Text fontWeight="bold" fontSize="2xl">Especializando-se em tecnologia Web, futuro engenheiro de software.</Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
                    <Flex rounded="xl" mr={1} direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end">
                        <Icon color="white" p="4" as={DiWebplatform} w="24" h="24" />
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">Web Apps</Text>
                    </Flex>
                    <Flex rounded="xl" mr={1} direction="column" mt={4} bg="gray.100" h="30vh" w="30vh" justify="flex-end">
                        <Icon color="red" p="4" as={DiCodeigniter} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">Web Sites</Text>
                    </Flex>
                    <Flex rounded="xl" mr={1} direction="column" mt={4} bgGradient="linear(to-r, green.100, green.300)" h="30vh" w="30vh" justify="flex-end">
                        <Icon color="red" p="4" as={DiCodeigniter} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">Mobile Apps</Text>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
        
    )
}

export default Profile
