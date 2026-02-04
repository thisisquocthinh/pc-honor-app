// PC Honor Center Dashboard - React + Material UI
// Generated from Stitch design

import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Card,
  CardContent,
  Avatar,
  LinearProgress,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Chip,
  Fab,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Search,
  Tune,
  MoreHoriz,
  Inventory,
  Assessment,
  PointOfSale,
  Add,
  TrendingUp,
  Computer
} from '@mui/icons-material';

const HONOR_BLUE = '#0099FF';

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [darkMode, setDarkMode] = useState(false);

  const stats = [
    { label: "Today's Sell-out", value: 1, target: 10, unit: 'Units' },
    { label: 'Inventory Count', value: 45, target: 100, unit: 'Items' },
    { label: 'Monthly Revenue', value: 25000000, target: 50000000, unit: 'VND' }
  ];

  const recentActivities = [
    { id: 1, type: 'sale', title: 'PC Honor MagicBook 14', subtitle: 'Sold to Nguyễn Văn A', time: '2 hours ago', amount: '+15,990,000 VND' },
    { id: 2, type: 'inventory', title: 'Restock: Honor Mouse', subtitle: 'Added 20 units', time: '4 hours ago', amount: null },
    { id: 3, type: 'report', title: 'Daily Report Generated', subtitle: 'Auto-generated at 18:00', time: '6 hours ago', amount: null }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: darkMode ? '#18181B' : '#F3F4F6',
        color: darkMode ? '#fff' : '#111827',
        pb: 8
      }}
    >
      {/* Header */}
      <Box
        sx={{
          px: 3,
          pt: 4,
          pb: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          bgcolor: darkMode ? '#18181B' : '#F3F4F6',
          zIndex: 10
        }}
      >
        <Box>
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
            Welcome back,
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5 }}>
            Nguyễn Quốc Thịnh
          </Typography>
        </Box>
        <Box sx={{ position: 'relative' }}>
          <Avatar
            src="https://via.placeholder.com/48"
            alt="Profile"
            sx={{ width: 48, height: 48, border: '2px solid', borderColor: darkMode ? 'grey.700' : 'white' }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 12,
              height: 12,
              bgcolor: '#22C55E',
              border: '2px solid',
              borderColor: darkMode ? '#18181B' : 'white',
              borderRadius: '50%'
            }}
          />
        </Box>
      </Box>

      {/* Search Bar */}
      <Box sx={{ px: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 1.5 }}>
          <TextField
            fullWidth
            placeholder="Search inventory or sales..."
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                bgcolor: darkMode ? '#27272A' : 'white',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                '& fieldset': { border: 'none' }
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: 'grey.400' }} />
                </InputAdornment>
              )
            }}
          />
          <IconButton
            sx={{
              width: 52,
              height: 52,
              bgcolor: '#111827',
              color: 'white',
              borderRadius: '50%',
              '&:hover': { bgcolor: '#1F2937' }
            }}
          >
            <Tune />
          </IconButton>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ px: 3 }}>
        {/* Today's Goal Card */}
        <Card
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            position: 'relative',
            mb: 3,
            background: `linear-gradient(135deg, ${HONOR_BLUE}22 0%, ${HONOR_BLUE}44 100%)`
          }}
        >
          <Box
            sx={{
              p: 3,
              color: 'white',
              position: 'relative',
              zIndex: 1
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
              <Chip
                label="Today's Goal"
                size="small"
                sx={{
                  bgcolor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  fontWeight: 600,
                  backdropFilter: 'blur(10px)'
                }}
              />
              <IconButton size="small" sx={{ color: 'white' }}>
                <MoreHoriz />
              </IconButton>
            </Box>

            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 1 }}>
              Total Sell-out
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1, mb: 1 }}>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                1
              </Typography>
              <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 400, mb: 0.5 }}>
                / 10
              </Typography>
              <Chip
                label="+1 from yesterday"
                size="small"
                sx={{
                  bgcolor: 'rgba(34,197,94,0.3)',
                  color: '#4ADE80',
                  fontWeight: 600,
                  ml: 1,
                  mb: 1
                }}
              />
            </Box>

            <LinearProgress
              variant="determinate"
              value={10}
              sx={{
                height: 8,
                borderRadius: 4,
                bgcolor: 'rgba(255,255,255,0.2)',
                '& .MuiLinearProgress-bar': {
                  bgcolor: HONOR_BLUE,
                  borderRadius: 4
                },
                mb: 1
              }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                10% Achieved
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                Target: 10 Units
              </Typography>
            </Box>
          </Box>
        </Card>

        {/* Quick Actions */}
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
          Quick Actions
        </Typography>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          {[
            { icon: <Inventory />, label: 'Inventory', color: HONOR_BLUE },
            { icon: <Assessment />, label: 'Reports', color: '#8B5CF6' },
            { icon: <PointOfSale />, label: 'Record Sale', color: '#22C55E' },
            { icon: <TrendingUp />, label: 'Analytics', color: '#F59E0B' }
          ].map((action, index) => (
            <Grid item xs={3} key={index}>
              <Card
                sx={{
                  borderRadius: 2,
                  textAlign: 'center',
                  py: 2,
                  bgcolor: darkMode ? '#27272A' : 'white',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'scale(1.05)' }
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    bgcolor: `${action.color}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 1
                  }}
                >
                  {React.cloneElement(action.icon, { sx: { color: action.color } })}
                </Box>
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
                  {action.label}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Recent Activity */}
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
          Recent Activity
        </Typography>

        <Card sx={{ borderRadius: 3, bgcolor: darkMode ? '#27272A' : 'white' }}>
          <List sx={{ py: 0 }}>
            {recentActivities.map((activity, index) => (
              <ListItem
                key={activity.id}
                divider={index < recentActivities.length - 1}
                sx={{ py: 2 }}
              >
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      bgcolor:
                        activity.type === 'sale'
                          ? '#22C55E22'
                          : activity.type === 'inventory'
                          ? HONOR_BLUE + '22'
                          : '#8B5CF622'
                    }}
                  >
                    {activity.type === 'sale' && <PointOfSale sx={{ color: '#22C55E' }} />}
                    {activity.type === 'inventory' && <Inventory sx={{ color: HONOR_BLUE }} />}
                    {activity.type === 'report' && <Assessment sx={{ color: '#8B5CF6' }} />}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {activity.title}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        {activity.subtitle}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {activity.time}
                      </Typography>
                    </>
                  }
                />
                {activity.amount && (
                  <Typography variant="body2" sx={{ color: '#22C55E', fontWeight: 600 }}>
                    {activity.amount}
                  </Typography>
                )}
              </ListItem>
            ))}
          </List>
        </Card>
      </Box>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          bgcolor: HONOR_BLUE,
          '&:hover': { bgcolor: '#0077CC' }
        }}
      >
        <Add />
      </Fab>
    </Box>
  );
};

export default Dashboard;
