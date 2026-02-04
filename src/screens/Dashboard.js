import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Card,
  Avatar,
  LinearProgress,
  Chip,
  Fab,
  Paper
} from '@mui/material';
import {
  Search,
  Tune,
  MoreHoriz,
  Add,
  Home,
  Inventory,
  Assessment,
  Person
} from '@mui/icons-material';

const HONOR_BLUE = '#0099FF';
const BG_GRADIENT = 'linear-gradient(180deg, #E8F4FD 0%, #F8FBFF 50%, #FFFFFF 100%)';

const Dashboard = () => {
  const navigate = useNavigate();
  const [navValue, setNavValue] = useState(0);

  const scrollStats = [
    { icon: '💰', label: 'Bonus Earned', value: '$150.00', color: '#3B82F6', bg: '#EFF6FF' },
    { icon: '📦', label: 'Total Stock', value: '45 Units', color: '#F59E0B', bg: '#FEF3C7' },
    { icon: '⭐', label: 'Top Model', value: 'Honor 90', color: '#8B5CF6', bg: '#F3E8FF' }
  ];

  const quickActions = [
    { icon: '🛒', label: 'Record Sale', color: HONOR_BLUE, path: '/record-sale' },
    { icon: '🔄', label: 'Update Stock', color: '#10B981', path: '/inventory' },
    { icon: '📊', label: 'View Report', color: '#6366F1', path: '/reports' }
  ];

  const recentActivities = [
    { title: 'Daily Report Generated', time: '2 hours ago', type: 'report' },
    { title: 'New Sale: Honor MagicBook', time: '3 hours ago', type: 'sale' },
    { title: 'Stock Updated: +5 units', time: '5 hours ago', type: 'inventory' }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: BG_GRADIENT,
      pb: 10 
    }}>
      {/* Header */}
      <Box sx={{ px: 3, pt: 5, pb: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Box>
            <Typography variant="body2" sx={{ color: '#6B7280', fontWeight: 500, mb: 0.5 }}>
              Welcome back,
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827' }}>
              Nguyễn Quốc Thịnh
            </Typography>
          </Box>
          <Box sx={{ position: 'relative' }}>
            <Avatar 
              src="https://via.placeholder.com/48" 
              sx={{ 
                width: 48, 
                height: 48, 
                border: '2px solid white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }} 
            />
            <Box sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 12,
              height: 12,
              bgcolor: '#22C55E',
              border: '2px solid white',
              borderRadius: '50%'
            }} />
          </Box>
        </Box>
      </Box>

      {/* Search Bar */}
      <Box sx={{ px: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            fullWidth
            placeholder="Search inventory or sales..."
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 50,
                bgcolor: 'white',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                '& fieldset': { border: 'none' }
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: '#9CA3AF', fontSize: 20 }} />
                </InputAdornment>
              )
            }}
          />
          <IconButton sx={{
            width: 48,
            height: 48,
            bgcolor: '#111827',
            color: 'white',
            borderRadius: 50,
            '&:hover': { bgcolor: '#374151' }
          }}>
            <Tune fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* Hero Card with Image Background */}
      <Box sx={{ px: 3, mb: 3 }}>
        <Card sx={{
          borderRadius: 3,
          overflow: 'hidden',
          position: 'relative',
          height: 280,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)'
        }}>
          {/* Background Pattern */}
          <Box sx={{
            position: 'absolute',
            inset: 0,
            background: 'url(https://images.unsplash.com/photo-1557683316-973673baf926?w=800) center/cover',
            opacity: 0.8
          }} />
          <Box sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)'
          }} />
          
          <Box sx={{ 
            position: 'relative', 
            p: 3, 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: 'white'
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Chip 
                label="Today's Goal" 
                size="small"
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.2)', 
                  color: 'white',
                  fontWeight: 600,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }} 
              />
              <IconButton size="small" sx={{ color: 'white' }}>
                <MoreHoriz />
              </IconButton>
            </Box>

            <Box>
              <Typography variant="body2" sx={{ opacity: 0.8, mb: 0.5 }}>
                Total Sell-out
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1, mb: 2 }}>
                <Typography variant="h2" sx={{ fontWeight: 700, lineHeight: 1 }}>
                  1
                </Typography>
                <Typography variant="h5" sx={{ opacity: 0.6, mb: 1, fontWeight: 400 }}>
                  / 10
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={10}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  bgcolor: 'rgba(255,255,255,0.2)',
                  '& .MuiLinearProgress-bar': {
                    bgcolor: '#60A5FA',
                    borderRadius: 4
                  },
                  mb: 1
                }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                  10% Achieved
                </Typography>
                <Chip
                  label="+1 from yesterday"
                  size="small"
                  sx={{
                    bgcolor: 'rgba(34,197,94,0.3)',
                    color: '#86EFAC',
                    fontWeight: 600,
                    height: 24
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>

      {/* Horizontal Scroll Stats */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ 
          display: 'flex', 
          gap: 2, 
          overflowX: 'auto',
          px: 3,
          pb: 1,
          '&::-webkit-scrollbar': { display: 'none' }
        }}>
          {scrollStats.map((stat, idx) => (
            <Card key={idx} sx={{
              minWidth: 140,
              p: 2.5,
              borderRadius: 3,
              bgcolor: 'white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              border: '1px solid #F3F4F6'
            }}>
              <Box sx={{
                width: 36,
                height: 36,
                borderRadius: 2,
                bgcolor: stat.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 1.5,
                fontSize: 20
              }}>
                {stat.icon}
              </Box>
              <Typography variant="caption" sx={{ color: '#6B7280', display: 'block', mb: 0.5 }}>
                {stat.label}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#111827' }}>
                {stat.value}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Quick Actions */}
      <Box sx={{ px: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#111827' }}>
          Quick Actions
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {quickActions.map((action, idx) => (
            <Card
              key={idx}
              onClick={() => navigate(action.path)}
              sx={{
                flex: 1,
                p: 2,
                borderRadius: 3,
                bgcolor: 'white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                border: '1px solid #F3F4F6',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'translateY(-2px)' }
              }}
            >
              <Box sx={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                bgcolor: `${action.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 1,
                fontSize: 24
              }}>
                {action.icon}
              </Box>
              <Typography variant="caption" sx={{ fontWeight: 600, color: '#374151' }}>
                {action.label}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Recent Activity */}
      <Box sx={{ px: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#111827' }}>
          Recent Activity
        </Typography>
        <Card sx={{ borderRadius: 3, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          {recentActivities.map((activity, idx) => (
            <Box key={idx} sx={{
              p: 2.5,
              borderBottom: idx < recentActivities.length - 1 ? '1px solid #F3F4F6' : 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}>
              <Box sx={{
                width: 40,
                height: 40,
                borderRadius: 2,
                bgcolor: activity.type === 'sale' ? '#DBEAFE' : activity.type === 'report' ? '#F3E8FF' : '#FEF3C7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Typography sx={{ fontSize: 18 }}>
                  {activity.type === 'sale' ? '🛒' : activity.type === 'report' ? '📊' : '📦'}
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#111827', mb: 0.5 }}>
                  {activity.title}
                </Typography>
                <Typography variant="caption" sx={{ color: '#6B7280' }}>
                  {activity.time}
                </Typography>
              </Box>
            </Box>
          ))}
        </Card>
      </Box>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        onClick={() => navigate('/record-sale')}
        sx={{
          position: 'fixed',
          bottom: 90,
          right: 20,
          bgcolor: HONOR_BLUE,
          '&:hover': { bgcolor: '#0077CC' },
          boxShadow: '0 4px 20px rgba(0,153,255,0.4)'
        }}
      >
        <Add />
      </Fab>

      {/* Bottom Navigation */}
      <Paper sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0,
        borderRadius: '20px 20px 0 0',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.05)',
        zIndex: 1000
      }} elevation={0}>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', py: 1.5 }}>
          {[
            { icon: <Home />, label: 'Home', active: true },
            { icon: <Inventory />, label: 'Stock', active: false },
            { icon: <Assessment />, label: 'Reports', active: false },
            { icon: <Person />, label: 'Profile', active: false }
          ].map((item, idx) => (
            <Box key={idx} sx={{ 
              textAlign: 'center', 
              cursor: 'pointer',
              color: item.active ? HONOR_BLUE : '#9CA3AF'
            }}>
              <IconButton sx={{ color: item.active ? HONOR_BLUE : '#9CA3AF' }}>
                {item.icon}
              </IconButton>
              <Typography variant="caption" sx={{ display: 'block', fontSize: '10px', mt: -0.5 }}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default Dashboard;
