import {
  Box, Link, List, ListItem, Image,
} from '@chakra-ui/react';

export const Social = () => {
  return (
    <List display="flex" flexDirection={{ base: 'row', md: 'column' }} padding={{ base: '10px 20px', md: '25px 15px' }} bgColor="white.50" borderWidth={1} borderColor="white.150" borderRadius={{ base: '0px 0px 10px 10px', md: '0px 10px 10px 0px' }} position={{ base: 'relative', md: 'fixed' }} top="30%" left="0px">
      <ListItem mb={{ base: '0px', md: '35px' }} mr={{ base: '30px', md: '0px' }}>
        <Link href="https://github.com/vianaandre/" target="_blank" isExternal>
          <Image src="/assets/github.svg" opacity="0.9" />
        </Link>
      </ListItem>
      <ListItem mb={{ base: '0px', md: '35px' }} mr={{ base: '30px', md: '0px' }}>
        <Link href="https://www.linkedin.com/in/andr%C3%A9-viana-133353190/" isExternal>
          <Image src="/assets/linkedin.svg" opacity="0.9" />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://app.rocketseat.com.br/me/andre-gustavo-viana-1591466715" isExternal>
          <Image src="/assets/rock.svg" opacity="0.9" />
        </Link>
      </ListItem>
    </List>
  );
};
