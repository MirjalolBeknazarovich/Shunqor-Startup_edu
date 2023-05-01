import { Box, Button, Flex, HStack, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { DarkLogo, LightLogo } from "src/icons";
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import { BiMenuAltLeft, BiUserCircle } from 'react-icons/bi';
import { MdOutlineContactSupport } from 'react-icons/md';
import Link from "next/link";
import { HeaderProps } from "./header.props";
import { language } from "src/config/constants";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const Header = ({ onToggle }: HeaderProps): JSX.Element => {

  const { toggleColorMode, colorMode } = useColorMode();

  const { t, i18n } = useTranslation();

  const router = useRouter();

  const onLanguage = (lng: string) => {
    router.replace(router.asPath);
    i18n.changeLanguage(lng);
  };

  return (
    <Box w={'full'}
      zIndex={1001}
      h={'10vh'}
      px={'10'}
      pos={'fixed'}
      top={0}
      left={0}
      right={0}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      borderBottom={'1px'}
      borderBottomColor={useColorModeValue('gray.300', 'gray.700')}>
      <Flex h={'full'} justify={'space-between'} align={'center'}>
        <HStack>
          <Icon as={BiMenuAltLeft} onClick={onToggle} w={6} h={6} />
          <Link href={'/'}>{colorMode === 'light' ? <DarkLogo /> : <LightLogo />} Shunqor</Link>
        </HStack>
        <HStack>
          <IconButton aria-label="support" icon={<MdOutlineContactSupport />} colorScheme={'facebook'} variant={'ghost'} />
          <Menu placement="bottom">
            <MenuButton as={Button} rightIcon={<TbWorld />} textTransform={'capitalize'} colorScheme={'gray'} variant={'outline'} >
              {i18n.resolvedLanguage}
            </MenuButton>
            <MenuList p={0}>
              {language.map(item => (
                <MenuItem key={item.lng} onClick={() => onLanguage(item.lng)} icon={<item.icon />} backgroundColor={i18n.resolvedLanguage === item.lng ? 'facebook.500' : ''} >{item.nativeLng}</MenuItem>
              ))}
            </MenuList>
          </Menu>
          <IconButton aria-label="color-mode"
            onClick={toggleColorMode}
            icon={colorMode == 'light' ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
            colorScheme={'facebook'}
            variant={'outline'}
          />
          <Button rightIcon={<BiUserCircle />} onClick={() => router.push('/auth')} colorScheme={'facebook'}>{ t('login', {ns: 'layout'}) }</Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;