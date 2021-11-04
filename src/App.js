import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Flex, VStack, Heading, Spacer } from '@chakra-ui/layout';
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import Header from './components/Header/Header.js';
import Profile from './components/Profile/Profile.js';
import Footer from './components/Footer/Footer.js';
import TodoArea from './components/TodoArea/TodoArea.js';

function App() {
  
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={2} maxWidth="90vw">
      <Flex w='100%'>
        <Heading ml="4" size='md' fontWeight="semibold" color="cyan.400">Caramelo App</Heading>
        <Spacer></Spacer>
        <IconButton size="sm" icon={<FaLinkedin />} isRound="true" onClick={() => {window.open('https://www.linkedin.com/in/tharsis-soares-caramelo/')}}></IconButton>
        <IconButton ml={2} size="sm" icon={<FaInstagram />} isRound="true" onClick={() => {window.open('https://www.instagram.com/tharsissoares/')}}></IconButton>
        <IconButton ml={2} size="sm" icon={<FaGithub />} isRound="true" onClick={() => window.open('https://github.com/tharsis-soares')}></IconButton>
        <IconButton ml={4} size="sm" icon={isDark ? <FaSun/> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>   
      </Flex>
      <Header></Header>
      <Profile></Profile>
      <TodoArea></TodoArea>
      <Footer></Footer>
    </VStack>
  );
}

export default App;
