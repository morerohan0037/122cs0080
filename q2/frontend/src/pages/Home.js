import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TopUsers from '../components/TopUsers';
import TrendingPosts from '../components/TrendingPosts';
import Feed from '../components/Feed';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <AppBar position="static" sx={{ mb: 3 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Social Media Analytics
          </Typography>
          <Button color="inherit" component={Link} to="/top-users">Top Users</Button>
          <Button color="inherit" component={Link} to="/trending">Trending Posts</Button>
          <Button color="inherit" component={Link} to="/feed">Feed</Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<TopUsers />} />
        <Route path="/top-users" element={<TopUsers />} />
        <Route path="/trending" element={<TrendingPosts />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Container>
  );
};

export default Home;
