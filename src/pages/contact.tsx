import { useTranslation } from 'react-i18next';
import { withLayout } from 'src/layouts/layout';
import Seo from 'src/layouts/seo/seo';
import { ContactPageComponenet } from 'src/page-component';

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <Seo metaTitle={
      `Shunqor | ${t('contact_page_title', { ns: 'seo' })}` ||
      'Shunqor | Contact us'
    }
    metaDescription={
      `Shunqor | ${t('contact_page_description', { ns: 'seo' })}` ||
      'Contact with Shuunqor and you can ask any questions'
    }>
      <ContactPageComponenet />
    </Seo>
  );
};

export default withLayout(ContactPage);