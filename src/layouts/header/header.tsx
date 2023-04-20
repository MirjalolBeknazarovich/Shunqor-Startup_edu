import { Box, Button, Flex, HStack, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { DarkLogo, EngIcons, LightLogo, RusIcons, TurkIcons, UzbIcons } from "src/icons";
import { BsFillMoonStarsFill, BsFillSunFill, BsTranslate } from 'react-icons/bs';
import { BiMenuAltLeft, BiUserCircle } from 'react-icons/bi';
import { MdOutlineContactSupport } from 'react-icons/md';
import Link from "next/link";
import { HeaderProps } from "./header.props";

const Header = ({ onToggle }: HeaderProps): JSX.Element => {

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box w={'full'} h={'10vh'} px={'10'} pos={'fixed'} top={0} left={0} right={0} borderBottom={'1px'} borderBottomColor={useColorModeValue('gray.300', 'gray.700')}>
      <Flex h={'full'} justify={'space-between'} align={'center'}>
        <HStack>
          <Icon as={BiMenuAltLeft} onClick={onToggle} w={6} h={6} />
          <Link href={'/'}>{colorMode === 'light' ? <DarkLogo /> : <LightLogo />}</Link>
        </HStack>
        <HStack>
          <IconButton aria-label="support" icon={<MdOutlineContactSupport />} colorScheme={'facebook'} variant={'ghost'} />
          <Menu>
            <MenuButton as={IconButton} icon={<BsTranslate />} colorScheme={'facebook'} variant={'solid'} />
            <MenuList>
              <MenuItem icon={<UzbIcons />} >UZB</MenuItem>
              <MenuItem icon={<RusIcons />} >RUS</MenuItem>
              <MenuItem icon={<EngIcons />} >ENG</MenuItem>
              <MenuItem icon={<TurkIcons />} >TURK</MenuItem>
            </MenuList>
          </Menu>
          <IconButton aria-label="color-mode"
            onClick={toggleColorMode}
            icon={colorMode == 'light' ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
            colorScheme={'facebook'}
            variant={'outline'}
          />
          <Button rightIcon={<BiUserCircle />} colorScheme={'facebook'}>Login</Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;