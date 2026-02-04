import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Checkbox,
  Divider,
  Dialog,
  DialogContent,
  DialogActions
} from '@mui/material';
import {
  ArrowBack,
  CheckCircle
} from '@mui/icons-material';

const HONOR_BLUE = '#0099FF';

const RecordSale = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '', email: '' });
  const [successDialog, setSuccessDialog] = useState(false);

  const products = [
    { id: 1, name: 'Honor MagicBook 14', price: 15990000, stock: 15, image: '💻' },
    { id: 2, name: 'Honor MagicBook 16', price: 18990000, stock: 8, image: '💻' },
    { id: 3, name: 'Honor Monitor 27"', price: 8500000, stock: 3, image: '🖥️' },
    { id: 4, name: 'Honor Mouse', price: 450000, stock: 45, image: '🖱️' },
    { id: 5, name: 'Honor Keyboard', price: 890000, stock: 22, image: '⌨️' },
    { id: 6, name: 'Honor Pad 8', price: 6990000, stock: 2, image: '📱' }
  ];

  const steps = ['Chọn sản phẩm', 'Thông tin KH', 'Xác nhận'];

  const toggleProduct = (product) => {
    const exists = selectedProducts.find(p => p.id === product.id);
    if (exists) {
      setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
    } else {
      setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
    }
  };

  const totalAmount = selectedProducts.reduce((sum, p) => sum + p.price * p.quantity, 0);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setSuccessDialog(true);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Box sx={{ pb: 10 }}>
      {/* Header */}
      <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'background.paper' }}>
        <Toolbar>
          <IconButton edge="start" onClick={() => navigate('/dashboard')} sx={{ mr: 2 }}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Ghi nhận bán hàng
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Stepper */}
      <Box sx={{ px: 3, py: 2 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Step 1: Select Products */}
      {activeStep === 0 && (
        <Box sx={{ px: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Chọn sản phẩm
          </Typography>
          <Card>
            <List>
              {products.map((product) => (
                <ListItem key={product.id} divider>
                  <Checkbox
                    checked={selectedProducts.some(p => p.id === product.id)}
                    onChange={() => toggleProduct(product)}
                  />
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: '#DBEAFE' }}>
                      <Typography>{product.image}</Typography>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={product.name}
                    secondary={`Tồn kho: ${product.stock}`}
                  />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {product.price.toLocaleString()}đ
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Card>
        </Box>
      )}

      {/* Step 2: Customer Info */}
      {activeStep === 1 && (
        <Box sx={{ px: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Thông tin khách hàng
          </Typography>
          <Card sx={{ p: 3 }}>
            <TextField
              fullWidth
              label="Họ tên"
              value={customerInfo.name}
              onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Số điện thoại"
              value={customerInfo.phone}
              onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              value={customerInfo.email}
              onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
              margin="normal"
            />
          </Card>
        </Box>
      )}

      {/* Step 3: Confirm */}
      {activeStep === 2 && (
        <Box sx={{ px: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Xác nhận đơn hàng
          </Typography>
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Khách hàng
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {customerInfo.name || 'Khách lẻ'} • {customerInfo.phone || 'N/A'}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Sản phẩm
              </Typography>
              <List dense>
                {selectedProducts.map((p) => (
                  <ListItem key={p.id}>
                    <ListItemText
                      primary={p.name}
                      secondary={`x${p.quantity}`}
                    />
                    <Typography variant="body2">
                      {(p.price * p.quantity).toLocaleString()}đ
                    </Typography>
                  </ListItem>
                ))}
              </List>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">Tổng tiền</Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, color: HONOR_BLUE }}>
                  {totalAmount.toLocaleString()}đ
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}

      {/* Bottom Actions */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          p: 2,
          bgcolor: 'background.paper',
          borderTop: 1,
          borderColor: 'divider',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box>
          <Typography variant="body2" color="text.secondary">
            Tổng tiền
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 700, color: HONOR_BLUE }}>
            {totalAmount.toLocaleString()}đ
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {activeStep > 0 && (
            <Button onClick={handleBack} variant="outlined">
              Quay lại
            </Button>
          )}
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={activeStep === 0 && selectedProducts.length === 0}
            sx={{ bgcolor: HONOR_BLUE }}
          >
            {activeStep === steps.length - 1 ? 'Hoàn tất' : 'Tiếp theo'}
          </Button>
        </Box>
      </Box>

      {/* Success Dialog */}
      <Dialog open={successDialog} onClose={() => {}}>
        <DialogContent sx={{ textAlign: 'center', pt: 4 }}>
          <CheckCircle sx={{ fontSize: 64, color: '#22C55E', mb: 2 }} />
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
            Ghi nhận thành công!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Đơn hàng đã được lưu vào hệ thống
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
          <Button
            variant="contained"
            onClick={() => navigate('/dashboard')}
            sx={{ bgcolor: HONOR_BLUE }}
          >
            Về trang chủ
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RecordSale;
