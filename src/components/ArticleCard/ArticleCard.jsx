import { Card, CardHeader, CardContent, Avatar, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.1)',
    cursor: 'pointer',
  },
}));

const AuthorLink = styled(Typography)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  '&:hover': {
    color: theme.palette.primary.main,
    cursor: 'pointer',
  },
}));

const ArticleCard = ({ article, lite }) => {
  const navigate = useNavigate();

  const handleAuthorClick = () => {
    navigate(`/author/${article.author}`);
  };

  return (
    <StyledCard>
      <CardHeader
        avatar={
          <StyledAvatar
            src={article.authorAvatar}
            alt={article.author}
            onClick={handleAuthorClick}
          />
        }
        title={<Typography variant={lite ? 'h5' : 'h6'}>{article.title}</Typography>}
        subheader={
          <AuthorLink onClick={handleAuthorClick}>
            {`${article.author} • ${new Date(article.date).toLocaleDateString()}`}
          </AuthorLink>
        }
      />
      {!lite && (
        <CardContent>
          <Typography variant="body3" color="textSecondary">
            {article.description}
          </Typography>
        </CardContent>
      )}
    </StyledCard>
  );
};

export default ArticleCard;
