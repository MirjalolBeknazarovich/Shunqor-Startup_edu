import { GetServerSideProps } from "next";
import { ArticleType } from "src/interface/article.interface";
import { Language } from "src/interface/constants.interface";
import { withLayout } from "src/layouts/layout";
import Seo from "src/layouts/seo/seo";
import { ArticleDetialedComponent } from "src/page-component";
import { Articles } from "src/services/article.services";

const ArticleDetailPage = ({ article }: ArticleDetailedPageProps) => {    
  return (
    <Seo metaTitle={article.title} metaDescription={article.excerpt}>
        <ArticleDetialedComponent article={article} />
    </Seo>
  );
};

export default withLayout(ArticleDetailPage);

export const getServerSideProps: GetServerSideProps<ArticleDetailedPageProps> = async ({ query, req }) => {
    const slug: string = query.slug as string;
    const lng: Language = req.cookies.i18next as Language;
    
    const article = await Articles.getDetailedArticle(slug);

    if(article.language == lng) {
        return {
            props: {
                article,
            },
        };
    }
    
    return {
        redirect: {
            destination: '/articles',
            permanent: false,
        }
    };
    
};


interface ArticleDetailedPageProps extends Record<string, unknown> {
    article: ArticleType;
  }