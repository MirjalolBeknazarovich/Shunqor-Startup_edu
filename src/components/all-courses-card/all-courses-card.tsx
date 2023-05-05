import { Box, Button, Divider, Flex, HStack, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { AllCoursesCardProps } from "./all-courses-card.props";
import ReactStars from "react-stars";
import { CiViewList } from "react-icons/ci";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SiGoogleanalytics } from "react-icons/si";
import { BsMinecartLoaded } from "react-icons/bs";
import { useRouter } from "next/router";

const AllCoursesCard = ({ course }: AllCoursesCardProps) => {
    const router = useRouter();

    const onDetailedCource = () => router.push(`/courses/${course.slug}`);
    return (
        <>
            <Box py={3}>
                <Flex gap={4} direction={{ base: 'column', md: 'row' }}>
                    <Image src={course.image} alt={course.title} onClick={onDetailedCource} cursor={'pointer'} w={{ base: 'full', md: '250px' }} h={'280px'} borderRadius={'lg'} objectFit={'cover'} />
                    <Stack>
                        <HStack>
                            <Text color={'#e59819'}>{course.reviewAvarage.toFixed(1)}</Text>
                            <ReactStars edit={false} value={course.reviewAvarage} color2={'#e59819'} />
                            <Text opacity={'0.8'}>{course.reviewCount}</Text>
                        </HStack>
                        <Heading fontSize={'xl'}>{course.title}</Heading>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatibus quae esse quasi eaque delectus.</Text>
                        <Flex gap={3} fontSize={'14px'} direction={{ base: 'column', md: 'row' }}>
                            <HStack align={'center'}>
                                <Image src={course.author.avatar} alt={course.author.firstName} w={50} h={50} borderRadius={'full'} />
                                <Text>{course.author.lastName}. {course.author.firstName[0]}</Text>
                            </HStack>
                            <HStack gap={3}>
                                <Flex align={'center'} gap={1}>
                                    <Icon as={CiViewList} />
                                    <Text>{course.lessonCount} lesson</Text>
                                </Flex>
                                <Flex align={'center'} gap={1}>
                                    <Icon as={AiOutlineClockCircle} />
                                    <Text>{course.totalHour} hours</Text>
                                </Flex>
                                <Flex align={'center'} gap={1}>
                                    <Icon as={SiGoogleanalytics} />
                                    <Text>{course.level}</Text>
                                </Flex>
                            </HStack>
                        </Flex>

                        <Divider />
                        <Flex align={{ base: 'flex-start', lg: 'center' }} justify={'space-between'} direction={{ base: 'column', md: 'row' }} >
                            <Text fontSize={'xl'} fontWeight={'bold'} mr={10}>{course.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Text>
                            <Flex gap={4}>
                                <Button rightIcon={<BsMinecartLoaded />} colorScheme={'facebook'} >Add to card</Button>
                                <Button colorScheme={'facebook'} variant={'outline'} onClick={onDetailedCource} cursor={'pointer'} >Detail</Button>
                            </Flex>
                        </Flex>
                    </Stack>
                </Flex>
            </Box>
            <Divider />
        </>
    );
};

export default AllCoursesCard;