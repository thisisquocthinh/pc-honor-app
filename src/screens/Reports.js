import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Card,
  CardContent,
  Grid,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import {
  ArrowBack,
  TrendingUp,
  TrendingDown,
  CalendarToday
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const HONOR_BLUE = '#0099FF';

const Reports = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);

  const salesData = [
    { name: 'T2', sales: 4 },
    { name: 'T3', sales: 3 },
    { name: 'T4', sales: 5 },
    { name: 'T5', sales: 2 },
    { name: 'T6', sales: 6 },
    { name: 'T7', sales: 8 },
    { name: 'CN', sales: 5 }
  ];

  const revenueData = [
    { name: 'T1', revenue: 120 },
    { name: 'T2', revenue: 150 },
    { name: 'T3', revenue: 180 },
    { name: 'T4', revenue: 140 }
  ];

  const transactions = [
    { id: 1, date: '04/02/2025', product: 'Honor MagicBook 14', amount: 15990000, type: 'income' },
    { id: 2, date: '04/02/2025', product: 'Honor Mouse (x3)', amount: 1350000, type: 'income' },
    { id: 3, date: '03/02/2025', product: 'Nhập kho Honor Keyboard', amount: -5000000, type: 'expense' },
    { id: 4, date: '03/02/2025', product: 'Honor Monitor 27"', amount: 8500000, type: 'income' }
  ];

  return (
    <Box>
      {/* Header */}
      <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'background.paper' }}>
        <Toolbar>
          <IconButton edge="start" onClick={() => navigate('/dashboard')} sx={{ mr: 2 }}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Báo cáo & Thống kê
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Stats Cards */}
      <Box sx={{ px: 3, py: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card sx={{ bgcolor: '#DBEAFE' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <TrendingUp sx={{ color: HONOR_BLUE }} />
                  <Typography variant="body2" color="text.secondary">
                    Doanh thu tháng
                  </Typography>
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>
                  45.8M đ
                </Typography>
                <Typography variant="caption" sx={{ color: '#22C55E' }}>
                  +12% so với tháng trước
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ bgcolor: '#FEF3C7' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <TrendingDown sx={{ color: '#F59E0B' }} />
                  <Typography variant="body2" color="text.secondary">
                    Chi phí tháng
                  </Typography>
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>
                  12.5M đ
                </Typography>
                <Typography variant="caption" sx={{ color: '#EF4444' }}>
                  +5% so với tháng trước
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Tabs */}
      <Box sx={{ px: 3, mb: 2 }}>
        <Tabs
          value={tabValue}
          onChange={(e, v) => setTabValue(v)}
          variant="fullWidth"
          sx={{ bgcolor: 'background.paper', borderRadius: 2 }}
        >
          <Tab label="Doanh số" />
          <Tab label="Doanh thu" />
          <Tab label="Giao dịch" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      <Box sx={{ px: 3, pb: 4 }}>
        {tabValue === 0 && (
          <Card sx={{ p: 2, borderRadius: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Doanh số tuần này
            </Typography>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke={HONOR_BLUE} strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        )}

        {tabValue === 1 && (
          <Card sx={{ p: 2, borderRadius: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Doanh thu theo tháng
            </Typography>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill={HONOR_BLUE} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        )}

        {tabValue === 2 && (
          <Card sx={{ borderRadius: 3 }}>
            <List>
              {transactions.map((t, i) => (
                <ListItem key={t.id} divider={i < transactions.length - 1}>
                  <ListItemText
                    primary={t.product}
                    secondary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CalendarToday sx={{ fontSize: 14 }} />
                        <Typography variant="caption">{t.date}</Typography>
                      </Box>
                    }
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: t.type === 'income' ? '#22C55E' : '#EF4444'
                    }}
                  >
                    {t.type === 'income' ? '+' : ''}
                    {t.amount.toLocaleString()}đ
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Card>
        )}
      </Box>
    </Box>
  );
};

export default Reports;
