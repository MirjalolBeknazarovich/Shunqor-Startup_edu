import Carousel from "react-multi-carousel";
import SectionTitle from "../section-title/section-title";
import { courses } from "src/config/constants";
import { Divider, Flex, HStack, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import ReactStars from "react-stars";
import { CiViewList } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SiGoogleanalytics } from 'react-icons/si';
import { courseCarousel } from "src/config/carousel";

const PopularCourses = () => {
  return (
    <>
      <SectionTitle title="Explore Featured Courses" subtitle="10,000 unique online course list designs" />
      <Carousel responsive={courseCarousel} arrows={true} showDots={false} autoPlay={true} autoPlaySpeed={5000} infinite >
        {courses.map(item => (
          <Stack key={item.title} spacing={3} p={3} cursor={'pointer'}>
            <Image src={item.image} alt={item.title} objectFit={'cover'} h={'210px'} w={'full'} borderRadius={'lg'} />
            <HStack>
              <Text color={'#e59819'} >{item.reviewAvarage.toFixed(1)}</Text>
              <ReactStars edit={false} value={item.reviewAvarage} color2={'#e59819'} />
              <Text opacity={0.8}>({item.reviewCount})</Text>
            </HStack>
            <Heading fontSize={'xl'}>{item.title}</Heading>
            <HStack>
              <Flex align={'center'} gap={1}>
                <Icon as={CiViewList} />
                <Text>{item.lessonCount} Lesson</Text>
              </Flex>
              <Flex align={'center'} gap={1}>
                <Icon as={AiOutlineClockCircle} />
                <Text>{item.totalHour} Hour</Text>
              </Flex>
              <Flex align={'center'} gap={1}>
                <Icon as={SiGoogleanalytics} />
                <Text>{item.level}</Text>
              </Flex>
            </HStack>
            <Divider />
            <Flex justify={'space-between'} align={'center'}>
              <HStack align={'center'}>
                <Image src={item.author.avatar} alt={item.author.firstName} w={'50'} h={'50'} borderRadius={'full'} />
                <Text>{item.author.lastName}. {item.author.firstName[0]}</Text>
              </HStack>
              <Text>{item.price.toLocaleString("en-US", { style: 'currency', currency: 'USD' })}</Text>
            </Flex>
          </Stack>
        ))}
      </Carousel>
    </>
  );
};

export default PopularCourses;