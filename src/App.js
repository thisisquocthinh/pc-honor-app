import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import Inventory from './screens/Inventory';
import Reports from './screens/Reports';
import RecordSale from './screens/RecordSale';

// Page transition wrapper
const pageVariants = {
  initial: {
    opacity: 0,
    x: 20,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: -20,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.3,
};

function AnimatedRoute({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}

// Routes with animation
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/login"
          element={
            <AnimatedRoute>
              <Login />
            </AnimatedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AnimatedRoute>
              <Dashboard />
            </AnimatedRoute>
          }
        />
        <Route
          path="/inventory"
          element={
            <AnimatedRoute>
              <Inventory />
            </AnimatedRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <AnimatedRoute>
              <Reports />
            </AnimatedRoute>
          }
        />
        <Route
          path="/record-sale"
          element={
            <AnimatedRoute>
              <RecordSale />
            </AnimatedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
