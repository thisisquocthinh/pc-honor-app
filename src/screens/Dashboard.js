import React from 'react';
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
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Chip,
  Fab,
  BottomNavigation,
  BottomNavigationAction,
  Paper
} from '@mui/material';
import {
  Search,
  Tune,
  MoreHoriz,
  Inventory,
  Assessment,
  PointOfSale,
  TrendingUp,
  Add,
  Home,
  BarChart,
  Settings,
  Person
} from '@mui/icons-material';
const HONOR_BLUE = '#0099FF';

const Dashboard = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const stats = [
    { label: "Mục tiêu hôm nay", value: 1, target: 10, unit: 'máy', percent: 10 },
    { label: 'Tồn kho', value: 45, target: 100, unit: 'sản phẩm', percent: 45 },
    { label: 'Doanh thu tháng', value: '25M', target: '50M', unit: 'VND', percent: 50 }
  ];

  const recentActivities = [
    { id: 1, type: 'sale', title: 'Honor MagicBook 14', subtitle: 'Bán cho Nguyễn Văn A', time: '2 giờ trước', amount: '+15,990,000đ' },
    { id: 2, type: 'inventory', title: 'Nhập kho: Honor Mouse', subtitle: 'Thêm 20 sản phẩm', time: '4 giờ trước', amount: null },
    { id: 3, type: 'report', title: 'Báo cáo ngày', subtitle: 'Tự động tạo lúc 18:00', time: '6 giờ trước', amount: null },
    { id: 4, type: 'sale', title: 'Honor Monitor 27"', subtitle: 'Bán cho Trần Thị B', time: '1 ngày trước', amount: '+8,500,000đ' }
  ];

  const quickActions = [
    { icon: <Inventory />, label: 'Kho hàng', color: HONOR_BLUE, path: '/inventory' },
    { icon: <Assessment />, label: 'Báo cáo', color: '#8B5CF6', path: '/reports' },
    { icon: <PointOfSale />, label: 'Bán hàng', color: '#22C55E', path: '/record-sale' },
    { icon: <TrendingUp />, label: 'Thống kê', color: '#F59E0B', path: '/reports' }
  ];

  return (
    <Box sx={{ pb: 8 }}>
      {/* Header */}
      <Box
        sx={{
          px: 3,
          pt: 4,
          pb: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box>
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
            Xin chào,
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5 }}>
            Nguyễn Quốc Thịnh
          </Typography>
        </Box>
        <Box sx={{ position: 'relative' }}>
          <Avatar
            src="https://via.placeholder.com/48"
            sx={{
              width: 48,
              height: 48,
              border: 2,
              borderColor: 'background.paper'
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 12,
              height: 12,
              bgcolor: '#22C55E',
              border: 2,
              borderColor: 'background.paper',
              borderRadius: '50%'
            }}
          />
        </Box>
      </Box>

      {/* Search */}
      <Box sx={{ px: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 1.5 }}>
          <TextField
            fullWidth
            placeholder="Tìm kiếm sản phẩm, đơn hàng..."
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                bgcolor: 'background.paper',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                '& fieldset': { border: 'none' }
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              )
            }}
          />
          <IconButton
            sx={{
              width: 52,
              height: 52,
              bgcolor: 'text.primary',
              color: 'background.paper',
              borderRadius: '50%',
              '&:hover': { bgcolor: 'text.secondary' }
            }}
          >
            <Tune />
          </IconButton>
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ px: 3 }}>
        {/* Main Goal Card */}
        <Card
          sx={{
            borderRadius: 3,
            mb: 3,
            background: `linear-gradient(135deg, ${HONOR_BLUE}22 0%, ${HONOR_BLUE}44 100%)`,
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Box sx={{ p: 3, position: 'relative', zIndex: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
              <Chip
                label="Mục tiêu hôm nay"
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

            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
              Bán hàng hôm nay
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1, mb: 1 }}>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                {stats[0].value}
              </Typography>
              <Typography variant="h5" sx={{ opacity: 0.6, fontWeight: 400, mb: 0.5 }}>
                / {stats[0].target}
              </Typography>
              <Typography component="span" sx={{ ml: 'auto', color: '#4ADE80', fontWeight: 600 }}>
                {stats[0].percent}%
              </Typography>
            </Box>

            <LinearProgress
              variant="determinate"
              value={stats[0].percent}
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
              <Typography variant="caption" sx={{ opacity: 0.7 }}>
                Đã đạt {stats[0].percent}%
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.7 }}>
                Còn {stats[0].target - stats[0].value} máy
              </Typography>
            </Box>
          </Box>
        </Card>

        {/* Stats Overview */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {stats.slice(1).map((stat, index) => (
            <Grid item xs={6} key={index}>
              <Card
                sx={{
                  borderRadius: 2,
                  p: 2,
                  textAlign: 'center',
                  bgcolor: 'background.paper'
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 700, color: HONOR_BLUE }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Quick Actions */}
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
          Thao tác nhanh
        </Typography>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          {quickActions.map((action, index) => (
            <Grid item xs={3} key={index}>
              <Card
                onClick={() => navigate(action.path)}
                sx={{
                  borderRadius: 2,
                  textAlign: 'center',
                  py: 2,
                  bgcolor: 'background.paper',
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
          Hoạt động gần đây
        </Typography>

        <Card sx={{ borderRadius: 3 }}>
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
        onClick={() => navigate('/record-sale')}
        sx={{
          position: 'fixed',
          bottom: 80,
          right: 24,
          bgcolor: HONOR_BLUE,
          '&:hover': { bgcolor: '#0077CC' }
        }}
      >
        <Add />
      </Fab>

      {/* Bottom Navigation */}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Trang chủ" icon={<Home />} />
          <BottomNavigationAction label="Báo cáo" icon={<BarChart />} />
          <BottomNavigationAction label="Cài đặt" icon={<Settings />} />
          <BottomNavigationAction label="Tài khoản" icon={<Person />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default Dashboard;
