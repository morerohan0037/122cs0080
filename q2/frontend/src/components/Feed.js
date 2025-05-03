import React, { useEffect, useState } from 'react';
import { fetchLatestPosts } from '../api';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    const res = await fetchLatestPosts();
    setPosts(res.data);
  };

  useEffect(() => {
    loadPosts();
    const interval = setInterval(loadPosts, 10000); 
    return () => clearInterval(interval);
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
              alt="feed"
            />
            <CardContent>
              <Typography variant="h6">{post.title}</Typography>
              <Typography>{post.body}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Feed;
