import {
  Container, Box, Image, Flex,
} from '@chakra-ui/react';
import WeatherCurrent from './components/WeatherCurrent';
import './styles/global.css';

function App() {
  return (
    <div>
      <Container maxW={768} centerContent>
        <Box maxW="sm" pt={14} pb={14}>
          <Image
            src="/assets/logo.svg"
            alt="Logo do Site"
            align="centerContent"
          />
        </Box>
        <Flex>
          <WeatherCurrent />
        </Flex>
      </Container>
    </div>
  );
}

export default App;
