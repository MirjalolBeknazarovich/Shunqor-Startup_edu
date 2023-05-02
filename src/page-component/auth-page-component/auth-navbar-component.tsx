import { Box, Button, Container, Flex, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { language, navigation } from "src/config/constants";
import { DarkLogo, LightLogo } from "src/icons";

const AuthNavbarComponent = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { t, i18n } = useTranslation();
    const linkHover = useColorModeValue('black', 'white');
    const onLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
      };
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
                            <Menu placement="bottom">
                                <MenuButton as={Button} rightIcon={<TbWorld />} textTransform={'capitalize'} colorScheme={'facebook'} variant={'ghost'} >
                                    {i18n.resolvedLanguage}
                                </MenuButton>
                                <MenuList p={0}>
                                    {language.map(item => (
                                        <MenuItem key={item.lng} onClick={() => onLanguage(item.lng)} icon={<item.icon />} backgroundColor={i18n.resolvedLanguage === item.lng ? 'facebook.500' : ''} >{item.nativeLng}</MenuItem>
                                    ))}
                                </MenuList>
                            </Menu> F
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