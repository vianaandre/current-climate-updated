import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import geolocation from '../../services/geolocation';
import weather from '../../services/weather';
import WeatherCurrent from '../WeatherCurrent';
import WeatherPrevision from '../WeatherPrevision';

interface WeatherProps {
    lat: number;
    long: number;
}

interface CurrentDataProps {
    temp: number;
    humidity: number;
    windSpeed: number
}

interface PrevisionDataProps {
    rain: number;
    clouds: number;
    temp: {
        day: number;
        max: number;
        min: number;
    };
}

const Weather = ({ lat, long }: WeatherProps) => {
  const [currentData, setCurrentData] = useState<CurrentDataProps | null>(null);
  const [locationData, setLocationData] = useState<null | string>();
  const [previsionData, setPrevisionData] = useState<null | Array<PrevisionDataProps>>([]);

  const getLocation = async () => {
    const { name } = await geolocation(lat, long);
    const data = await geolocation(lat, long);
    setLocationData(name);
    console.log(data);
  };

  const getClimate = async () => {
    const data: any = await weather(lat, long);
    setCurrentData({
      temp: Math.ceil(data.current.temp),
      humidity: Math.ceil(data.current.humidity),
      windSpeed: Number((data.current.wind_speed * 3.6).toFixed(0)),
    });
    setPrevisionData(data.daily);
  };

  useEffect(() => {
    getClimate();
  }, []);

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Flex w={{ base: '100%', md: '100%' }} flexWrap="wrap" flexDirection={{ base: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ base: 'center', md: '' }} pb={50}>
      <WeatherCurrent location={locationData} temp={currentData?.temp} humidity={currentData?.humidity} windSpeed={currentData?.windSpeed} />
      <WeatherPrevision daily={previsionData?.slice(1, 4)} />
    </Flex>
  );
};

export default Weather;
