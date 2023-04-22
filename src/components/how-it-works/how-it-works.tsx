import {Flex, Icon, SimpleGrid, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import SectionTitle from "../section-title/section-title";
import { howItWorks } from "src/config/constants";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
  const backgroundColor = useColorModeValue("gray.200", 'gray.700');
  const { t } =useTranslation();
  return (
    <>
      <SectionTitle textAlign={'center'} title={t('how_it_works_title', {ns: 'home'})} subtitle={t('how_it_works_description', {ns: 'home'})} />
      <SimpleGrid mt={10} columns={5} spacing={10} alignItems={'center'} >
        {howItWorks.map((item, index) => {
          const odd = index % 2;

          return (
            <Fragment key={index}>
              {!odd ? (
                <Stack justify={'center'} align={'center'}>
                  <Flex w={100} h={100} justify={'center'} align={'center'} backgroundColor={backgroundColor} borderRadius={'full'} >
                    <Icon as={item.icon}  w={'50px'} h={'50px'} />
                  </Flex>
                  <Text textAlign={'center'}>{t(item.title, {ns: 'home'})}</Text>
                </Stack>
              ) : (
                <Stack justify={'center'} >
                  <Icon as={item.icon} w={'142px'} h={'21px'} />
                </Stack>
              )}
            </Fragment>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default HowItWorks;