import { GetServerSideProps } from "next";
import { useTranslation } from "react-i18next";
import { ArticleType } from "src/interface/article.interface";
import { Language } from "src/interface/constants.interface";
import { withLayout } from "src/layouts/layout";
import Seo from "src/layouts/seo/seo";
import { ArticlePageComponent } from "src/page-component";
import { Articles } from "src/services/article.services";

const ArticlePage = ({articles}: ArticlePageProps) => {
  const { t } = useTranslation(); 
  return (
    <Seo metaTitle={
      `Shunqor | ${t('article_page_title', { ns: 'seo' })}` ||
      'Shunqor | Articles'
    }
    metaDescription={
      `Shunqor | ${t('article_page_description', { ns: 'seo' })}` ||
      'Useful articles of shunqor'
    }>
      <ArticlePageComponent article={articles} />
    </Seo>
  );
};

export default withLayout(ArticlePage);

export const getServerSideProps: GetServerSideProps<ArticlePageProps> = async ({req}) => {

  const lng: Language = req.cookies.i18next as Language;

  const articles = await Articles.getArtciles(lng);

    return {
      props: {
        articles,
      },
  };
};

interface ArticlePageProps extends Record<string, unknown> {
  articles: ArticleType[];
}