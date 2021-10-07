import { Box, Text } from '@chakra-ui/react';

interface InfoProps {
    num: number | undefined;
    desc: string;
    metric: string;
    bgColor: string;
}

const Info = ({
  num, desc, metric, bgColor,
}: InfoProps) => {
  return (
    <Box textAlign="center">
      <Text fontSize="1x1" color="black.600" mb={2}>
        {num}
        {metric}
      </Text>
      <Box mb={2} borderRadius="lg" w={100} h={1} bgColor={bgColor} />
      <Text>
        {desc}
      </Text>
    </Box>
  );
};

export default Info;
