import Header from "../../components/Header/Header";
import "./LandingPage.Styles.css";
import { Container } from '@mui/material';
import ArticleCard from '../../components/ArticleCard/ArticleCard';

const articles = [
  {
    author: 'John Doe',
    authorAvatar: 'https://example.com/avatar.jpg',
    title: 'An Interesting Article',
    date: '2023-05-31',
    description: 'This is a brief description of the article.',
  },
  {
    author: 'Jane Smith',
    authorAvatar: 'https://example.com/avatar2.jpg',
    title: 'Another Great Read',
    date: '2023-05-30',
    description: 'This article explores some fascinating topics.',
  },
];

const LandingPage = ({ toggleTheme }) => {
  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <Container>
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} lite={index % 2 === 0} />
        ))}
      </Container>
    </>
  )
}

export default LandingPage;