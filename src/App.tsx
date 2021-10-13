import { useEffect, useState } from 'react';
import {
  Container, Box, Image,
  Progress, Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import './styles/global.css';
import Weather from './components/Weather';
import { News } from './components/News';
import { Social } from './components/Social';

interface LocationProps {
    lat: number;
    long: number;
}

function App() {
  const [location, setLocation] = useState<LocationProps | null | void>();
  const [alertDefault, setAlertDeault] = useState(false);

  useEffect(() => {
    const getLocation = async () => {
      if ('geolocation' in navigator) {
        const watcher = await navigator.geolocation.watchPosition((position) => {
          const coordinates = {
            lat: position.coords.latitude,
            long: position.coords.longitude,
          };
          navigator.geolocation.clearWatch(watcher);
          setLocation(coordinates);
        },
        (erro) => {
          const coordinatesDefault = {
            lat: -25.0913,
            long: -54.2477,
          };
          setLocation(coordinatesDefault);
          setAlertDeault(true);
        });
      } else {
        alert('Não foi possível pegar sua Localização!!!');
        const coordinatesDefault = {
          lat: -25.0913,
          long: -54.2477,
        };
        setLocation(coordinatesDefault);
      }
    };

    getLocation();
  }, []);

  return (
    <div>
      {location ? (
        <>
          <Container maxW={768} centerContent overflow="hidden" position="relative">
            <Social />
            <Box maxW="sm" pt={14} pb={14}>
              <Image
                src="/assets/logo.svg"
                alt="Logo do Site"
                align="centerContent"
              />
            </Box>
            {alertDefault ? (
              <Alert status="info" mb={3}>
                <AlertIcon />
                Clima atual de Missal/Paraná
              </Alert>
            ) : null}
            <Weather lat={location.lat} long={location.long} />
            <News />
          </Container>
          <Box display={{ base: 'none', md: 'block' }}>
            <Social />
          </Box>
        </>
      ) : (
        <Box>
          <Progress size="lg" isIndeterminate colorScheme="blue" />
        </Box>
      )}
    </div>
  );
}

export default App;
