import { gql, request } from 'graphql-request';
import { ArticleType } from 'src/interface/article.interface';
import { Language } from 'src/interface/constants.interface';

const grapqhlApi = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const Articles = {
	async getArtciles(lng: Language) {
		const query = gql`
			query Articles($lng: Language) {
				articles(where: { language: $lng }) {
					createdAt
					id
					title
					excerpt
					slug
					image {
						url
					}
					language
					author {
						name
						avatar {
							url
						}
					}
					description {
					text
					}
				}
			}
		`;


		const result = await request<{ articles: ArticleType[] }>(grapqhlApi, query, { lng });
		return result.articles;
	},

	async getDetailedArticle(slug: string) {
		const query = gql`
		query DetailedArticle($slug: String!) {
			article(where: {slug: $slug}){
				createdAt
				id
				title
				excerpt
				slug
				image {
					url
				}
				language
				author {
					name
					avatar {
						url
					}
				}
				description {
				text
				raw
				}
			}
		}
		`;

		const result = await request<{ article: ArticleType }>(grapqhlApi, query, { slug });
		return result.article;
	}
};