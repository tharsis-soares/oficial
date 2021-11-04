import React from 'react'
import { useColorMode } from '@chakra-ui/color-mode'
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout'
import { Button, Image, useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    Form,
    FormLabel,
    Input} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query'

function Header () {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
    
    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1" w="16rem" h="16rem" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start" >
                    <Text fontSize="5x1" fontWeight="semibold">Oi! Somos a</Text>
                    <Text fontSize="7x1" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Caramelo Web</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"} >Desevolvedor Web Javascript, React, Vue, Angular</Text>
                <Button mt={8} colorSchema="blue" onClick={onOpen}>Contrate-me</Button>
                <Modal
            isOpen={isOpen}
            onClose={onClose}
            >
             <ModalOverlay />
            <ModalContent>
            <ModalHeader>Mande sua mensagem, ficarei muito feliz em responde-la</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Esta gostando?</FormLabel>
                <Input placeholder="Diga o que esta achando" />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Sua sugestão vale ouro!</FormLabel>
                <Input placeholder="sua sugestao será sempre bem vinda" />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Text display="flex" padding="4">meramente ilustrativo</Text>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
            </Modal>
            
                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="16rem" src='https://avatars.githubusercontent.com/u/50808840?v=4'
                />
            </Flex>
        </Stack>
    )
}

export default Header