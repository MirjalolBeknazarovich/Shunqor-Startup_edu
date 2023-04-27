import { GetServerSideProps } from "next";
import { ArticleType } from "src/interface/article.interface";
import { Language } from "src/interface/constants.interface";
import { withLayout } from "src/layouts/layout";
import { ArticlePageComponent } from "src/page-component";
import { Articles } from "src/services/article.services";

const ArticlePage = ({articles}: ArticlePageProps) => {
  
  return (
    <ArticlePageComponent article={articles} />
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