import {
  Flex, Image, Box, Heading, Text, Link,
} from '@chakra-ui/react';

interface CardNewsProps {
    image: string;
    description: string;
    title: string;
    author: string;
    url: string;
}

export const CardNews = ({
  image, title, author, url, description,
}: CardNewsProps) => {
  return (
    <Box w="100%" mb="30px" h={{ base: 'auto', md: '250px' }} mr="20px" overflow="hidden">
      <Link href={url} isExternal>
        <Flex w="100%" h={{ base: 'auto', md: '100%' }} alignItems={{ base: 'center', md: 'auto' }} flexDirection={{ base: 'column', md: 'row' }}>
          <Image src={image} boxSize="250px" objectFit="cover" />
          <Box display="flex" h={{ base: 'auto', md: '100%' }} w={{ base: '250px', md: '100%' }} flexDirection="column" p={{ base: '10px 10px', md: '15px 30px' }} bg="white.50" borderWidth="1px" borderColor="white.150">
            <Heading as="h2" fontSize={{ base: '18px', md: '24px' }} mb="20px">{title}</Heading>
            <Text overflow="hidden" fontSize={{ base: '12px', md: '14px' }} mb="20px">{description}</Text>
            <Box display="flex" alignItems="center" opacity="0.9">
              <Image src="/assets/author.svg" mr="10px" width="12px" />
              <Heading as="h5" fontSize="14px" color="#313131">{author || 'Desconhecido' }</Heading>
            </Box>
          </Box>
        </Flex>
      </Link>
    </Box>
  );
};

//
