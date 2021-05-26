/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import { ArticleContents } from '../components/article';
import '@testing-library/jest-dom';
import testData from './testData';
import { dateFormatter } from '../utils/dateFormatter';
describe('Article Component ', () => {
  it('should render article props', () => {
    const { getByText, getByTestId } = render(
      <ArticleContents article={testData} />
    );
    const formattedDate = dateFormatter(testData.date.value);

    const heading = getByText(testData.heading.value);
    const author = getByText(testData.author.value, { exact: false });
    const date = getByText(dateFormatter(formattedDate));
    const image = getByTestId('picture');
    const content = getByTestId('content');

    expect(heading).toBeVisible();
    expect(author).toBeVisible();
    expect(date).toBeVisible();
    expect(image).toBeVisible();
    expect(content).toBeVisible();
  });
});
