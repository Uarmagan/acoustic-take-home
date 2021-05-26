import parse from 'html-react-parser';
import config from '../apiConfig';
import { dateFormatter } from '../utils/dateFormatter';
export function ArticleContents({ article }) {
  const { baseUrl } = config;

  const renditions = article?.mainImage.value.leadImage.renditions;

  return (
    article && (
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full mx-10 lg:mx-0">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-6 text-black">
          {article?.heading.value}
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
          <p className="text-md text-gray-700">By {article.author.value}</p>
          <p className="text-md text-gray-700">
            {dateFormatter(article?.date.value)}
          </p>
        </div>

        <picture data-testid="picture">
          <source
            media="(max-width: 639px)"
            srcSet={`${baseUrl}${renditions.card.source}`}
          />
          <source
            media="(min-width: 640px)"
            srcSet={`${baseUrl}${renditions.lead.source}`}
          />
          <img
            src={`${baseUrl}${renditions.default.source}`}
            alt="relaxing pool with headphones poolside"
          />
        </picture>

        <div
          data-testid="content"
          className="prose max-w-none w-full mt-2 leading-8">
          {article?.body.values.map((e) => (
            <div key={e}>{parse(e)}</div>
          ))}
        </div>
      </article>
    )
  );
}
