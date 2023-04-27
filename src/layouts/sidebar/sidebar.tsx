import { Box, Button, Container, HStack, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { navigation } from "src/config/constants";
import { SidebarProps } from "./sidebar.props";
import { useTranslation } from "react-i18next";

const Sidebar = ({toggle}: SidebarProps): JSX.Element => {

  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Box 
    zIndex={1001}
    w={{base: "full", lg: '300px'}} 
    h={'90vh'} 
    bg={useColorModeValue('gray.50', 'gray.900')}
    color={useColorModeValue('gray.700', 'gray.200')}
    pos={'fixed'}
    left={{base: toggle ? 0 : '-100%', lg: 0}}
    top={'10vh'}
    borderRight={'1px'} 
    borderRightColor={useColorModeValue('gray.300', 'gray.700')}
    overflowY={'scroll'}
    css={{
      '&::-webkit-scrollbar': { width: '1px' },
      '&::-webkit-scrollbar-track': { width: '1px' },
      '&::-webkit-scrollbar-thumb': { background: 'transparent' },
    }}
    transition={'all 1s ease'}>
      <Container maxW={'container.xl'}>
        {navigation.map((item, endix) => (
          <Box key={endix} mt={10}>
            <Text>{ t(item.title, {ns: 'layout'}) }</Text>
            {
              item.links.map((nav, index) => {
                const active = `/${router.pathname.split('/')[1]}` == nav.route;
                return (
                  <Link href={`${nav.route}`} key={index}>
                    <Button colorScheme={'facebook'} variant={ active ? 'solid' : 'ghost' } w={'full'} justifyContent={'flex-start'} h={14} mt={2} >
                      <HStack gap={2}>
                        <Icon as={nav.icon} />
                        <Text>{ t(nav.label, {ns: 'layout'}) }</Text>
                      </HStack>
                    </Button>
                  </Link>
                );
              })
            }
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Sidebar;