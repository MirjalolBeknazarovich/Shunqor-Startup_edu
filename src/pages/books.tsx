import { useTranslation } from "react-i18next";
import { withLayout } from "src/layouts/layout";
import Seo from "src/layouts/seo/seo";
import { BooksPageComponent } from "src/page-component";

const Books = () => {
  const { t } = useTranslation();
  return (
    <Seo metaTitle={
      `Shunqor | ${t('books_page_title', { ns: 'seo' })}` || 'Shunqor | Books'
    }
      metaDescription={
        `Shunqor | ${t('books_page_description', { ns: 'seo' })}` ||
        'Shunqor can advice books for you'
      }>
      <BooksPageComponent />
    </Seo>
  );
};

export default withLayout(Books);