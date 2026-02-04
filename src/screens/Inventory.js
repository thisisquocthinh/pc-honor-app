import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  InputAdornment,
  Card,
  Grid,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField as MuiTextField
} from '@mui/material';
import {
  ArrowBack,
  Search,
  Add,
  Inventory as InventoryIcon,
  Warning
} from '@mui/icons-material';

const HONOR_BLUE = '#0099FF';

const Inventory = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const inventoryItems = [
    { id: 1, name: 'Honor MagicBook 14', category: 'Laptop', stock: 15, minStock: 5, price: '15,990,000đ', status: 'good' },
    { id: 2, name: 'Honor MagicBook 16', category: 'Laptop', stock: 8, minStock: 5, price: '18,990,000đ', status: 'good' },
    { id: 3, name: 'Honor Monitor 27"', category: 'Monitor', stock: 3, minStock: 5, price: '8,500,000đ', status: 'low' },
    { id: 4, name: 'Honor Mouse', category: 'Accessory', stock: 45, minStock: 20, price: '450,000đ', status: 'good' },
    { id: 5, name: 'Honor Keyboard', category: 'Accessory', stock: 22, minStock: 10, price: '890,000đ', status: 'good' },
    { id: 6, name: 'Honor Pad 8', category: 'Tablet', stock: 2, minStock: 5, price: '6,990,000đ', status: 'low' }
  ];

  const filteredItems = inventoryItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    total: inventoryItems.length,
    lowStock: inventoryItems.filter(i => i.stock <= i.minStock).length,
    totalValue: '245,000,000đ'
  };

  return (
    <Box>
      {/* Header */}
      <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'background.paper' }}>
        <Toolbar>
          <IconButton edge="start" onClick={() => navigate('/dashboard')} sx={{ mr: 2 }}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Quản lý kho hàng
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Stats */}
      <Box sx={{ px: 3, py: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: HONOR_BLUE }}>
                {stats.total}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Sản phẩm
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#F59E0B' }}>
                {stats.lowStock}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Sắp hết
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#22C55E' }}>
                245M
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Giá trị
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Search */}
      <Box sx={{ px: 3, mb: 2 }}>
        <TextField
          fullWidth
          placeholder="Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            )
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
              bgcolor: 'background.paper'
            }
          }}
        />
      </Box>

      {/* Inventory List */}
      <Box sx={{ px: 3, pb: 10 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
          Danh sách sản phẩm
        </Typography>

        <Card sx={{ borderRadius: 3 }}>
          <List>
            {filteredItems.map((item, index) => (
              <ListItem
                key={item.id}
                divider={index < filteredItems.length - 1}
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: item.status === 'low' ? '#FEF3C7' : '#DBEAFE' }}>
                    <InventoryIcon sx={{ color: item.status === 'low' ? '#F59E0B' : HONOR_BLUE }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {item.name}
                      </Typography>
                      {item.status === 'low' && (
                        <Chip
                          size="small"
                          icon={<Warning sx={{ fontSize: 14 }} />}
                          label="Sắp hết"
                          color="warning"
                          sx={{ height: 20 }}
                        />
                      )}
                    </Box>
                  }
                  secondary={
                    <Typography variant="body2" color="text.secondary">
                      {item.category} • Tồn: {item.stock} • {item.price}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Card>
      </Box>

      {/* FAB */}
      <Fab
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          bgcolor: HONOR_BLUE
        }}
        onClick={() => setOpen(true)}
      >
        <Add />
      </Fab>

      {/* Add Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>Thêm sản phẩm mới</DialogTitle>
        <DialogContent>
          <MuiTextField autoFocus margin="dense" label="Tên sản phẩm" fullWidth />
          <MuiTextField margin="dense" label="Danh mục" fullWidth />
          <MuiTextField margin="dense" label="Số lượng" type="number" fullWidth />
          <MuiTextField margin="dense" label="Giá bán" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Hủy</Button>
          <Button variant="contained" sx={{ bgcolor: HONOR_BLUE }}>
            Thêm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Inventory;
