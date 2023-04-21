import { Box, Button, Card, CardBody, Input, Stack } from "@chakra-ui/react";
import SectionTitle from "../section-title/section-title";

const Newsletter = () => {
  return (
    <Card p={10}>
      <CardBody minH={'50vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Stack spacing={3}>
          <SectionTitle 
          title="Subscribe our Newsletter &" 
          subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam in explicabo voluptatibus odit perspiciatis! Aliquid!" 
          textAlign={'center'}
          maxW={'container.sm'} />
          <Box position={'relative'}>
            <Input h={14} w={'full'} bg={'white'} color={'gray.900'} placeholder={'Your email...'} _placeholder={{color: 'gray.500'}} focusBorderColor={'facebook'} />
            <Button pos={'absolute'} right={2} top={2} colorScheme={'facebook'} zIndex={98}>Submit</Button>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Newsletter;