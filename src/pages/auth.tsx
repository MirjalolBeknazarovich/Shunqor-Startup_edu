import { useTranslation } from "react-i18next";
import Seo from "src/layouts/seo/seo";
import { AuthPageComponent } from "src/page-component";

const AuthPage = () => {
  const { t } = useTranslation();
  return (
   <Seo metaTitle={
    `Shunqor | ${t('about_page_title', { ns: 'seo' })}` || 'Shunqor | About us'
  }
  metaDescription={
    `Shunqor | ${t('about_page_description', { ns: 'seo' })}` ||
    'Main information about shunqor platform'
  }
  >
     <AuthPageComponent />
   </Seo>
  );
};

export default AuthPage;