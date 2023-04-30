import { Button, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import SectionTitle from "src/components/section-title/section-title";
import AboutImage from '/public/images/about.png';

const AboutPageComponent = () => {
    const { t } = useTranslation();
    return (
        <>
            <SectionTitle textAlign={'center'} title={t('about_title', { ns: 'global' })} subtitle={t('about_descrption', { ns: 'global' })} />
            <Grid gridTemplateColumns={{ base: '100%', lg: '50% 50%' }} mt={10} gap={5} >
                <Image src={AboutImage} alt="about image" />
                <Stack justifySelf={'center'} spacing={4} alignSelf={'center'} >
                    <Heading fontSize={'3xl'} color={'gray.500'} >{t('about_heading', {ns: 'global'})}</Heading>
                    <Text>{t('about_text_1', {ns: 'global'})}</Text>
                    <Text>{t('about_text_2', {ns: 'global'})}</Text>
                    <Button h={14} colorScheme={'facebook'} variant={'outline'} w={'fit-content'}>{t('about_btn', {ns: 'global'})}</Button>

                </Stack>
            </Grid>
        </>
    );
};

export default AboutPageComponent;