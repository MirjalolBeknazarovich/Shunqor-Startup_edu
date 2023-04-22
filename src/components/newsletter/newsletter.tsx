import { Box, Button, Card, CardBody, Input, Stack } from "@chakra-ui/react";
import SectionTitle from "../section-title/section-title";
import { useTranslation } from "react-i18next";

const Newsletter = () => {
  const { t } = useTranslation(); 
  return (
    <Card p={10}>
      <CardBody minH={'50vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Stack spacing={3}>
          <SectionTitle 
          title={t('newsletter_title', {ns: 'home'})}
          subtitle={t('newsletter_description', {ns: 'home'})} 
          textAlign={'center'}
          maxW={'container.sm'} />
          <Box position={'relative'}>
            <Input h={14} w={'full'} bg={'white'} color={'gray.900'} placeholder={t('newsletter_placeholder', {ns: 'home'}) || ''}  _placeholder={{color: 'gray.500'}} focusBorderColor={'facebook'} />
            <Button pos={'absolute'} right={2} top={2} colorScheme={'facebook'} zIndex={98}>{t('newsletter_submit', {ns: 'home'})}</Button>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Newsletter;