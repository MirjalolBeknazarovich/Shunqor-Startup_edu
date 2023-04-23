import { Box, Button, Flex, Grid, HStack, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiFillShopping } from "react-icons/ai";
import SectionTitle from "src/components/section-title/section-title";
import { booksCategory, dataBooksCard } from "src/config/constants";
import { motion } from 'framer-motion';

const BooksPageComponent = () => {
    const { t } = useTranslation();
    const [filter, setFilter] = useState<string>('all-categories');
    const backroundColor = useColorModeValue('gray.200', 'gray.900');
    const filterData = useCallback(() => {
        switch (filter) {
            case 'programming':
                return dataBooksCard.filter(c => c.category === 'programming');
            case 'design':
                return dataBooksCard.filter(c => c.category === 'design');
            case 'business':
                return dataBooksCard.filter(c => c.category === 'business');
            case 'history':
                return dataBooksCard.filter(c => c.category === 'history');
            case 'writing':
                return dataBooksCard.filter(c => c.category === 'writing');
            case 'lifestyle':
                return dataBooksCard.filter(c => c.category === 'lifestyle');
            default:
                return dataBooksCard;
        }
    }, [filter]);
    return (
        <Box mb={20}>
            <SectionTitle title={t('title', { ns: 'books' })} subtitle={t('description', { ns: 'books' })} textAlign={'center'} pt={4} />
            <Flex justify={'center'} mt={5} flexWrap={'wrap'}>
                {booksCategory.map((item, index) => (
                    <Button
                        key={item.id}
                        variant={filter == item.id ? 'solid' : 'outline'}
                        colorScheme={'facebook'}
                        borderRadius={0}
                        borderLeftRadius={index == 0 ? 'md' : 0}
                        borderRightRadius={booksCategory.length - 1 == index ? 'md' : 0}
                        onClick={() => setFilter(item.id)} >
                        {t(item.label, { ns: 'books' })}
                    </Button>
                ))}
            </Flex>
            <Grid gridTemplateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}} rowGap={20} gap={4} mt={5}>
                {filterData().map(item => (
                    <motion.div key={item.name} layout>
                        <Box pos={'relative'}>
                            <Image src={item.image} alt={item.name} borderRadius={'lg'} w={'full'} h={'250px'} objectFit={'cover'} />
                            <HStack pos={'absolute'} justify={'space-between'} bg={backroundColor} minH={'90px'} borderRadius={'lg'} boxShadow={'dark-lg'} left={2} right={2} p={2} bottom={-10}>
                                <Box>
                                    <Text fontSize={'md'}>{item.name}</Text>
                                    <Text fontWeight={'bold'} fontSize={'2xl'}>{item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Text>
                                </Box>
                                <Button colorScheme={'facebook'} rightIcon={<AiFillShopping />}>Buy</Button>
                            </HStack>
                        </Box>
                    </motion.div>
                ))}
            </Grid>
        </Box>
    );
};

export default BooksPageComponent;