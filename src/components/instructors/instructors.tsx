import { Box, Flex, Grid, GridItem, HStack, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import SectionTitle from "../section-title/section-title";
import { FaUserGraduate } from "react-icons/fa";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Link from "next/link";
import { instructorData } from "src/config/constants";

const Instructors = () => {
  return (
    <>
    <SectionTitle title='Learn from the best instructors' subtitle="All our mentor with high experienced" />

    <Grid gap={3} gridTemplateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)'}} mt={5} >
      {instructorData.map((item, index) => (
        <GridItem key={index}>
          <Stack spacing={3}>
            <Image src={item.avatar} alt={item.firstName} borderRadius={'lg'} h={'330px'} objectFit={'cover'} />
            <Heading fontSize={'xl'} >
              {item.lastName} {item.firstName}
            </Heading>
            <Text color={'gray.500'} >{item.job}</Text>
            <HStack opacity={'.6'}>
              <Flex align={'center'} gap={1} >
                <Icon as={FaUserGraduate} />
                <Text>{item.students} students</Text>
              </Flex>
              <Flex align={'center'} gap={1}>
                <Icon as={AiOutlinePlayCircle} />
                <Text>{item.courses} courses</Text>
              </Flex>
            </HStack>
          </Stack>
        </GridItem>
      ) )}
    </Grid>
    <Text textAlign={'center'}>Want to help people learn, grow and achieve more in life? <Box as={'span'} color={'teal'} _hover={{textDecoration: 'underline'}} ><Link href={'/become-instructor'}>Become an instructor</Link></Box></Text>
    </>
  );
};

export default Instructors;