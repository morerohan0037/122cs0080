import React, { useEffect, useState } from 'react';
import { fetchTopUsers } from '../api';
import { Card, CardContent, Typography, Grid, Avatar } from '@mui/material';

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchTopUsers().then(res => setUsers(res.data));
  }, []);

  return (
    <Grid container spacing={2}>
      {users.map(user => (
        <Grid item xs={12} md={6} key={user.id}>
          <Card>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Avatar src={`https://i.pravatar.cc/150?u=${user.id}`} />
                </Grid>
                <Grid item>
                  <Typography variant="h6">{user.name}</Typography>
                  <Typography color="textSecondary">{user.email}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopUsers;
