import { useEffect, useState } from 'react';
import {
  Container, Box, Image, Flex,
  CircularProgress,
} from '@chakra-ui/react';
import './styles/global.css';
import Weather from './components/Weather';

interface LocationProps {
    lat: number;
    long: number;
}

function App() {
  const [location, setLocation] = useState<LocationProps | null | void>();

  useEffect(() => {
    const getLocation = async () => {
      if ('geolocation' in navigator) {
        const watcher = await navigator.geolocation.watchPosition((position) => {
          const coordinates = {
            lat: position.coords.latitude,
            long: position.coords.longitude,
          };
          navigator.geolocation.clearWatch(watcher);
          console.log(coordinates);
          setLocation(coordinates);
        });
      } else {
        alert('Não foi possível pegar sua Localização!!!');
      }
    };

    getLocation();
  }, []);

  return (
    <div>
      {location ? (
        <Container maxW={768} centerContent>
          <Box maxW="sm" pt={14} pb={14}>
            <Image
              src="/assets/logo.svg"
              alt="Logo do Site"
              align="centerContent"
            />
          </Box>
          <Weather lat={location.lat} long={location.long} />
        </Container>
      ) : (
        <Container maxW={768} centerContent>
          <Box maxW="sm" pt={14} pb={14}>
            <Image
              src="/assets/logo.svg"
              alt="Logo do Site"
              align="centerContent"
            />
          </Box>
          <Flex w="100%" flexDirection="row" justifyContent="space-between" pb={50}>
            <CircularProgress />
          </Flex>
        </Container>
      )}
    </div>
  );
}

export default App;
