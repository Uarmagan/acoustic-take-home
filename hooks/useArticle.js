import { useState, useEffect } from 'react';
import config from '../apiConfig';
import axios from 'axios';
export default function useArticle(articleId) {
  const [article, setArticle] = useState(null);
  const [isError, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const baseUrl = config.baseUrl;
  useEffect(() => {
    const getContent = async () => {
      setError(false);
      setLoading(true);
      try {
        const { data } = await axios.get(
          `${baseUrl}/delivery/v1/content/${articleId}`
        );
        setArticle(data.elements);
      } catch (error) {
        console.error(error);
        setError(true);
      }
      setLoading(false);
    };
    getContent();
  }, []);

  return { article, isError, isLoading };
}
