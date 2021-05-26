import { Layout } from '../components/layout';
import { NotFound } from '../components/notFound';
import { LoadingMessage } from '../components/loadingMessage';
import { ArticleContents } from '../components/article';
import useArticle from '../hooks/useArticle';
export default function Home() {
  const { article, isError, isLoading } = useArticle(
    'db4930e9-7504-4d9d-ae6c-33facca754d1'
  );

  const ArticleContainer = () => {
    if (isError) return <NotFound />;
    if (isLoading) return <LoadingMessage />;
    return <ArticleContents article={article} />;
  };

  return (
    <Layout>
      <div className="absolute inset-0 flex items-start mt-16 justify-center">
        <ArticleContainer />
      </div>
    </Layout>
  );
}
