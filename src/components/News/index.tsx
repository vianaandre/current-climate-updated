import { useEffect, useState } from 'react';
import {
  Box, List, Collapse, Button, useDisclosure, Image, Heading,
} from '@chakra-ui/react';
import { getNews } from '../../services/getNews';
import { CardNews } from './CardNews';

interface NoticiesProps {
    author: string;
    title: string;
    description: string;
    url: string;
    image: string;
}

export const News = () => {
  const [noticies, setNoticies] = useState<null | Array<NoticiesProps>>(null);
  const { isOpen, onToggle } = useDisclosure();

  const getNewsData = async () => {
    const news = await getNews();
    setNoticies(news);
  };

  useEffect(() => {
    getNewsData();
  }, []);

  return (
    <Box w="100%" display="flex" mb="20px" alignItems="center" flexDirection="column">
      {noticies ? (
        <List h="100%" w={{ base: '300px', md: '100%' }}>
          <Heading as="h2" mb="30px" fontSize="36px" color="black.600" fontWeight="bold">Notícias</Heading>
          <CardNews author={noticies[0].author} description={noticies[0].description} image={noticies[0].image || 'https://res.cloudinary.com/andreimagens/image/upload/v1633958627/news-clima_bmpa9g.jpg'} title={noticies[0].title} url={noticies[0].url} />
          <Button w="100%" mb="30px" onClick={onToggle} bgColor="white.150" variant="solid">
            {isOpen ? <Image src="/assets/up.svg" /> : <Image src="/assets/down.svg" />}
          </Button>
          <Collapse animateOpacity in={isOpen}>
            {noticies.slice(1, 5).map(({
              author, description, image, title, url,
            }, index) => {
              return (
                <CardNews key={index} author={author} description={description} image={image || 'https://res.cloudinary.com/andreimagens/image/upload/v1633958627/news-clima_bmpa9g.jpg'} title={title} url={url} />
              );
            })}
          </Collapse>
        </List>
      ) : null}
    </Box>
  );
};
