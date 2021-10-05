import {
  Box, Heading, Image, Flex,
} from '@chakra-ui/react';
import Info from './Info';

const WeatherCurrent = () => {
  return (
    <Flex flexDirection="column" alignItems="center" bg="white.50" p={35} borderRadius="lg" borderWidth="thin" borderColor="white.150">
      <Box pb={10}>
        <Heading fontFamily="body" as="h1" size="lg" color="black.600">Missal/Paraná</Heading>
      </Box>
      <Image
        src="/assets/sun.svg"
      />
      <Heading fontFamily="body" mt={10} mb={10} color="black.600" size="xl" as="h2">19°</Heading>
      <Flex direction="row" inlineSize={230} justifyContent="space-between">
        <Info num={19} metric="km/h" desc="Vento" bgColor="blue.400" />
        <Info num={83} metric="%" desc="Umidade" bgColor="yellow.200" />
      </Flex>
    </Flex>
  );
};

export default WeatherCurrent;
