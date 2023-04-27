import { GetServerSideProps } from "next";
import { ArticleType } from "src/interface/article.interface";
import { Language } from "src/interface/constants.interface";
import { withLayout } from "src/layouts/layout";
import { ArticleDetialedComponent } from "src/page-component";
import { Articles } from "src/services/article.services";

const ArticleDetailPage = ({ article }: ArticleDetailedPageProps) => {
    console.log(article);
    
  return (
    <ArticleDetialedComponent article={article} />
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