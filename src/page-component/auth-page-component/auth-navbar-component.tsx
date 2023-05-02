import { Box, Container, Flex, HStack, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { navigation } from "src/config/constants";
import { DarkLogo, LightLogo } from "src/icons";

const AuthNavbarComponent = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { t } = useTranslation();
    const linkHover = useColorModeValue('black', 'white');
    return (
        <>
            <Box zIndex={1001} w={'full'} h={'10vh'}>
                <Container maxW={'container.lg'}>
                    <Flex align={'center'} justify={'space-between'} h={'10vh'}>
                        <Link href={'/'}>{colorMode === 'light' ? <DarkLogo /> : <LightLogo />}</Link>
                        <HStack gap={5}>
                            {navigation[1].links.map(nav => (
                                <Link href={nav.route}>
                                    <Box as='a' color={'facebook.300'} _hover={{ textDecoration: 'underline', color: linkHover }} >{t(nav.label, { ns: 'layout' })}</Box>
                                </Link>
                            ))}
                            <IconButton aria-label="color-mode"
                                onClick={toggleColorMode}
                                icon={colorMode == 'light' ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
                                colorScheme={'facebook'}
                                variant={'outline'}
                            />
                        </HStack>
                    </Flex>
                </Container>
            </Box>
        </>
    );
};

export default AuthNavbarComponent;