import { Box, Flex, IconButton, Text, useColorModeValue } from "@chakra-ui/react";
import { format } from 'date-fns';
import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <Box pl={{ base: 0, lg: '320px' }}
            mt={10}
            h={'10vh'}
            w={'full'}
            borderTop={'1px'}
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            borderTopColor={useColorModeValue('gray.300', 'gray.700')}
        >
            <Flex justify={'space-between'} h={'full'} align={'center'}>
                <Text>© {format(new Date(), 'yyyy')} Shunqor. Barcha huquqlar himoyalangan</Text>
                <Flex gap={3} mr={10}>
                    <IconButton icon={<FaTelegram />} colorScheme={'facebook'} variant={'outline'} aria-label={'telegram'} />
                    <IconButton icon={<FaInstagram />} colorScheme={'facebook'} variant={'outline'} aria-label={'instagram'} />
                    <IconButton icon={<FaYoutube />} colorScheme={'facebook'} variant={'outline'} aria-label={'youtube'} />
                </Flex>
            </Flex>
        </Box>
    );
};

export default Footer;