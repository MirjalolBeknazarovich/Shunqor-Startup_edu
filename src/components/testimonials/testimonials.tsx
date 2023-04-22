import Carousel from "react-multi-carousel";
import SectionTitle from "../section-title/section-title";
import { testimonialsCarousel } from "src/config/carousel";
import { testimonialsData } from "src/config/constants";
import { Center, Icon, Text } from "@chakra-ui/react";
import { ImQuotesRight } from 'react-icons/im';
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle textAlign={'center'} title={t('testimonials_title', { ns: 'home' })} subtitle={t('testimonials_description', { ns: 'home' })} />

      <Carousel responsive={testimonialsCarousel} arrows={true} showDots={false} infinite >
        {testimonialsData.map((item, index) => (
          <Center key={index} flexDirection={'column'} maxW={'container.sm'} mx={'auto'} >
            <Icon as={ImQuotesRight} fontSize={100} />
            <Text mt={5} textAlign={'center'} >{item.description}</Text>
            <Text fontSize={'xl'} mt={3} fontWeight={'bold'}>{item.name}</Text>
          </Center>
        ))}
      </Carousel>
    </>
  );
};

export default Testimonials;

