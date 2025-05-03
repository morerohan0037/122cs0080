import React, { useEffect, useState } from 'react';
import { fetchTrendingPosts } from '../api';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchTrendingPosts().then(res => setPosts(res.data));
  }, []);

  return (
    <Grid container spacing={2}>
      {posts.map(post => (
        <Grid item xs={12} md={6} key={post.id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={`https://picsum.photos/seed/${post.id}/400/200`}
              alt="post"
            />
            <CardContent>
              <Typography variant="h6">{post.title}</Typography>
              <Typography>{post.body}</Typography>
              <Typography color="textSecondary">Comments: {post.comments.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TrendingPosts;
