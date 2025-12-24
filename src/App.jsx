


import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMenu, 
  FiX, 
  FiChevronUp, 
  FiDownload, 
  FiExternalLink,
  FiStar,
  FiTrendingUp,
  FiCode,
  FiSmartphone,
  FiGlobe,
  FiLinkedin,
  FiMessageCircle,
  FiCheckCircle,
  FiDollarSign,
  FiUsers,
  FiActivity,
  FiPercent,
  FiArrowUpRight,
  FiHome,
  FiBriefcase,
  FiBook,
  FiStar as FiStarIcon
} from 'react-icons/fi';

// 3D Bar Chart Component without Three.js
const ThreeDChart = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / 100;
      const y = (e.clientY - window.innerHeight / 2) / 100;
      setRotation({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const bars = [
    { height: 'h-32', color: 'from-[#00ff88] to-[#00cc66]', value: '$24K', label: 'Jan' },
    { height: 'h-24', color: 'from-[#ff0088] to-[#cc0066]', value: '$18K', label: 'Feb' },
    { height: 'h-28', color: 'from-[#0088ff] to-[#0066cc]', value: '$22K', label: 'Mar' },
    { height: 'h-30', color: 'from-[#ffaa00] to-[#cc8800]', value: '$24K', label: 'Apr' },
    { height: 'h-20', color: 'from-[#ff00ff] to-[#cc00cc]', value: '$16K', label: 'May' },
    { height: 'h-26', color: 'from-[#00ffff] to-[#00cccc]', value: '$20K', label: 'Jun' },
  ];
  
  return (
    <div 
      className="relative w-full h-full"
      style={{
        transform: `perspective(1000px) rotateX(${rotation.y * 5}deg) rotateY(${rotation.x * 5}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out'
      }}
    >
      {/* 3D Grid Background */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-4 opacity-10">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="border border-white/20 rounded-lg" />
        ))}
      </div>
      
      {/* Chart Bars */}
      {/* <div className="absolute inset-0 flex items-end justify-around px-4">
        {bars.map((bar, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
           
            <div 
              className="absolute bottom-0 w-8 bg-black/30 rounded-t-lg"
              style={{ 
                height: bar.height,
                transform: 'translateZ(-20px)',
                filter: 'blur(4px)'
              }}
            />
            
            
            <motion.div
              className={`w-8 ${bar.height} bg-gradient-to-t ${bar.color} rounded-t-lg relative`}
              style={{ 
                transform: 'translateZ(20px)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              
              <div 
                className="absolute -top-1 left-0 right-0 h-2 bg-gradient-to-r from-white/30 to-transparent rounded-t-lg"
                style={{ transform: 'translateZ(5px)' }}
              />
              
             
              <div 
                className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 rounded-t-lg"
                style={{ transform: 'translateZ(5px)' }}
              />
            </motion.div>
            
           
            <motion.div 
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold bg-black/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ transform: 'translateZ(30px)' }}
            >
              {bar.value}
            </motion.div>
            
           
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs">
              {bar.label}
            </div>
          </motion.div>
        ))}
      </div> */}
      
<div className="absolute inset-0 flex items-center justify-around px-4 pb-20">
  {bars.map((bar, index) => (
    <motion.div
      key={index}
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      style={{ alignSelf: 'flex-end' }}
    >
      {/* Bar Shadow */}
      <div 
        className="absolute bottom-0 w-8 bg-black/30 rounded-t-lg"
        style={{ 
          height: bar.height,
          transform: 'translateZ(-20px)',
          filter: 'blur(4px)'
        }}
      />
      
      {/* Main Bar */}
      <motion.div
        className={`w-8 ${bar.height} bg-gradient-to-t ${bar.color} rounded-t-lg relative`}
        style={{ 
          transform: 'translateZ(20px)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
        }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >

        
        {/* Bar Top */}
        <div 
          className="absolute -top-1 left-0 right-0 h-2 bg-gradient-to-r from-white/30 to-transparent rounded-t-lg"
          style={{ transform: 'translateZ(5px)' }}
        />
        
        {/* Bar Front */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 rounded-t-lg"
          style={{ transform: 'translateZ(5px)' }}
        />
      </motion.div>
      
      {/* Value Label */}
      <motion.div 
        className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold bg-black/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ transform: 'translateZ(30px)' }}
      >
        {bar.value}
      </motion.div>
      
      {/* Axis Label */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs">
        {bar.label}
      </div>
    </motion.div>
  ))}
</div>








      
      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#00ff88] rounded-full"
          style={{
            left: `${10 + i * 8}%`,
            top: `${20 + Math.sin(i) * 30}%`,
            transform: 'translateZ(40px)'
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
      
      {/* Chart Grid Lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute left-0 right-0 h-px bg-white/10"
            style={{ 
              bottom: `${i * 25}%`,
              transform: 'translateZ(10px)'
            }}
          />
        ))}
      </div>
    </div>
  );
};







// Floating Card Component with advanced 3D effect
const FloatingCard3D = ({ children, color, delay = 0 }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / 100;
      const y = (e.clientY - window.innerHeight / 2) / 100;
      setMouse({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="relative"
      style={{
        transform: `perspective(1000px) rotateX(${mouse.y * 2}deg) rotateY(${mouse.x * 2}deg)`,
        transformStyle: 'preserve-3d',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* 3D Edge Effects */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-50"
        style={{
          background: `linear-gradient(135deg, ${color}40, transparent 70%)`,
          transform: 'translateZ(-20px)',
          filter: 'blur(20px)'
        }}
      />
      
      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: `radial-gradient(circle at center, ${color}40, transparent 70%)`,
          transform: 'translateZ(-30px)'
        }}
        animate={{
          opacity: isHovered ? 0.3 : 0,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Reflective Edges */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-20 h-20"
          style={{
            background: `linear-gradient(135deg, ${color}20, transparent)`,
            transform: 'translateZ(5px)'
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-20 h-20"
          style={{
            background: `linear-gradient(315deg, ${color}20, transparent)`,
            transform: 'translateZ(5px)'
          }}
        />
      </div>
    </motion.div>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ value, prefix = '', suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = typeof value === 'string' ? parseFloat(value) : value;
    
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1000 / 60);
    
    return () => clearInterval(timer);
  }, [value, duration]);
  
  const displayValue = count >= 1000 ? `${(count/1000).toFixed(1)}k` : count.toFixed(count % 1 === 0 ? 0 : 1);
  
  return (
    <span className="inline-block">
      {prefix}{displayValue}{suffix}
    </span>
  );
};

// Simplified Statistics Dashboard Component
const StatsDashboard = ({ stats, time }) => (
  <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A0A0A] via-black to-[#0A0A0A]">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          <span className="bg-gradient-to-r from-[#00ff88] via-[#0088ff] to-[#ff0088] bg-clip-text text-transparent">
            Performance Dashboard
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Real-time analytics and insights into application performance and user engagement metrics
        </p>
      </motion.div>
      
      {/* Live Time Display */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center mb-8"
      >
        <div className="inline-flex items-center gap-3 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
          <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></div>
          <span className="text-gray-300 text-sm">
            Last updated: {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* 3D Chart Section */}
        <div className="relative h-[400px] bg-gradient-to-br from-gray-900/30 to-black/30 rounded-3xl border border-white/10 overflow-hidden group">
          <div className="absolute inset-0 p-4">
            <ThreeDChart />
          </div>
          
          {/* Chart Title */}
          <div className="absolute top-6 left-6 z-20">
            <h3 className="text-white font-semibold">Revenue Analytics</h3>
            <p className="text-gray-400 text-sm">Last 6 months performance</p>
          </div>
          
          {/* 3D Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/10 via-[#0088ff]/10 to-[#ff0088]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
        </div>
        
        {/* Stats Cards Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { 
              title: "Monthly Recurring Revenue", 
              value: stats.mrr, 
              prefix: "$", 
              suffix: "k",
              change: "+24.5%",
              icon: FiDollarSign,
              color: "#00ff88",
              delay: 0
            },
            { 
              title: "Revenue (Last 28 days)", 
              value: stats.revenue, 
              prefix: "$", 
              suffix: "k",
              change: "+18.2%",
              icon: FiActivity,
              color: "#0088ff",
              delay: 0.1
            },
            { 
              title: "Active Subscriptions", 
              value: stats.activeSubscriptions, 
              prefix: "", 
              suffix: "",
              change: "+32 subscriptions",
              icon: FiUsers,
              color: "#ff0088",
              delay: 0.2
            },
            { 
              title: "Growth Rate", 
              value: stats.growthRate, 
              prefix: "", 
              suffix: "%",
              change: "month-over-month",
              icon: FiPercent,
              color: "#ffaa00",
              delay: 0.3
            },
          ].map((stat, index) => (
            <FloatingCard3D key={index} color={stat.color} delay={stat.delay}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-3xl border border-white/10 h-full relative overflow-hidden group"
              >
                {/* Icon */}
                <div className="absolute top-4 right-4">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: `${stat.color}20` }}
                  >
                    <stat.icon className="text-white" size={24} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="mb-4">
                  <span className="text-gray-400 text-sm">{stat.title}</span>
                </div>
                
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: stat.delay }}
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                  style={{ textShadow: `0 0 20px ${stat.color}40` }}
                >
                  <AnimatedCounter 
                    value={stat.value} 
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </motion.div>
                
                <div className="flex items-center gap-2" style={{ color: stat.color }}>
                  <FiTrendingUp />
                  <span className="text-sm">{stat.change}</span>
                </div>
              </motion.div>
            </FloatingCard3D>
          ))}
        </div>
      </div>
      
      {/* Additional Metrics */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Customer Satisfaction", value: 91, color: "#00ff88", icon: "😊" },
          { label: "Monthly Active Users", value: 10000, color: "#0088ff", icon: "👥" },
          { label: "Total Product", value: 5, color: "#ff0088", icon: "📉" },
        ].map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-3xl border border-white/10 group hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{metric.icon}</span>
                <span className="text-gray-400">{metric.label}</span>
              </div>
              <span className="font-bold" style={{ color: metric.color }}>
                {metric.value}{metric.label.includes('Rate') ? '%' : metric.value > 1000 ? 'k' : ''}
              </span>
            </div>
            
            <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${metric.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="h-full rounded-full"
                style={{ 
                  background: `linear-gradient(90deg, ${metric.color}, ${metric.color}80)`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div> */}

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { 
            label: "Customer Satisfaction", 
            value: 91, 
            maxValue: 100,
            color: "#00ff88", 
            icon: "😊",
            suffix: "%",
            description: "Based on user reviews and feedback"
          },
          { 
            label: "Monthly Active Users", 
            value: 10000, 
            maxValue: 15000,
            color: "#0088ff", 
            icon: "👥",
            suffix: "K",
            description: "Active users in last 30 days"
          },
          { 
            label: "Total Products", 
            value: 5, 
            maxValue: 5,
            color: "#ff0088", 
            icon: "📦",
            suffix: "",
            description: "Published applications"
          },
        ].map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-3xl border border-white/10 group hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{metric.icon}</span>
                <div>
                  <h3 className="text-gray-400 text-sm">{metric.label}</h3>
                  <p className="text-gray-500 text-xs mt-1">{metric.description}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="font-bold text-2xl" style={{ color: metric.color }}>
                  {metric.value}
                  {metric.suffix && <span className="text-lg">{metric.suffix}</span>}
                </span>
              </div>
            </div>
            
            {/* Progress bar with percentage */}
            <div className="mb-2 flex justify-between items-center">
              <span className="text-gray-400 text-xs">Progress</span>
              <span className="text-white text-sm font-semibold">
                {Math.round((metric.value / metric.maxValue) * 100)}%
              </span>
            </div>
            
            <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(metric.value / metric.maxValue) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="h-full rounded-full relative"
                style={{ 
                  background: `linear-gradient(90deg, ${metric.color}, ${metric.color}80)`,
                  boxShadow: `0 0 10px ${metric.color}40`
                }}
              >
                {/* Animated shine effect on progress bar */}
                <motion.div
                  className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: [-100, 100],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.2
                  }}
                />
              </motion.div>
            </div>
            
            {/* Progress labels */}
            <div className="flex justify-between mt-2">
              <span className="text-gray-500 text-xs">0</span>
              <span className="text-gray-500 text-xs">{metric.maxValue}{metric.suffix}</span>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stats] = useState({
    mrr: 24000,
    revenue: 18000,
    activeSubscriptions: 156,
    growthRate: 24.5
  });
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Mouse follower effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Enhanced Gradient background component
  const GradientBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00ff88]/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-[#0088ff]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-1/3 w-60 h-60 bg-[#ff0088]/10 rounded-full blur-3xl" />
      
      {/* Animated gradient dots */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00ff88] rounded-full animate-ping" />
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-[#0088ff] rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
    </div>
  );

  // Floating particles
  const FloatingParticles = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#00ff88]/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, -20, 20],
            x: [null, Math.sin(i) * 10],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="relative bg-[#0A0A0A] min-h-screen overflow-hidden">
      <GradientBackground />
      <FloatingParticles />
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-white flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-[#00ff88] to-[#0088ff] flex items-center justify-center">
              <span className="text-white font-bold">D</span>
            </div>
            <span className="bg-gradient-to-r from-[#00ff88] via-[#0088ff] to-[#ff0088] bg-clip-text text-transparent">
              Devank
            </span>
          </motion.div>
          
          <div className="hidden md:flex gap-8">
            {[
              { name: 'Home', icon: FiHome },
              { name: 'Dashboard', icon: FiActivity },
              { name: 'Projects', icon: FiBriefcase },
              { name: 'Experience', icon: FiTrendingUp },
              { name: 'Education', icon: FiBook }
            ].map((item) => (
              <motion.a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-[#00ff88] transition-colors flex items-center gap-2 relative group"
              >
                <item.icon />
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#0088ff] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <motion.a
              href="https://www.linkedin.com/in/devank-karanwal-99b05b120/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-[#00ff88]/30 transition-all"
            >
              <FiMessageCircle /> Let's Connect
            </motion.a>
            
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(true)}
            >
              <FiMenu size={24} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-[#0A0A0A]/95 backdrop-blur-lg z-50 flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiX size={24} />
            </button>
            
            <div className="flex flex-col items-center gap-8">
              {['Home', 'Dashboard', 'Projects', 'Experience', 'Education'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: item.charCodeAt(0) * 0.01 }}
                  className="text-3xl text-white hover:text-[#00ff88] transition-colors flex items-center gap-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item === 'Home' && <FiHome />}
                  {item === 'Dashboard' && <FiActivity />}
                  {item === 'Projects' && <FiBriefcase />}
                  {item === 'Experience' && <FiTrendingUp />}
                  {item === 'Education' && <FiBook />}
                  {item}
                </motion.a>
              ))}
              
              <motion.a
                href="https://www.linkedin.com/in/gauhun/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-white px-8 py-3 rounded-full flex items-center gap-2"
              >
                <FiLinkedin /> Let's Connect
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00ff88]/10 to-[#0088ff]/10 text-[#00ff88] px-4 py-2 rounded-full">
                  <FiTrendingUp /> Senior IOS & React Native Developer
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="block bg-gradient-to-r from-[#00ff88] via-[#0088ff] to-[#ff0088] bg-clip-text text-transparent">
                  Hello, I'm
                </span>
                <span className="block text-white mt-2">Devank karanwal</span>
              </h1>
              
              {/* <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Crafting exceptional mobile experiences with Native IOS & React Native for over 8+ years. 
                Passionate about building scalable applications that users love.
              </p> */}

              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
  
 Crafting exceptional mobile experiences using <span className="font-semibold"> React Native</span>, 
  <span className="font-semibold"> Swift</span>, and <span className="font-semibold"> Flutter</span> for over 8+ years. 
  Passionate about building scalable applications that users love, including my own products:
 <span className="font-semibold"> CoinClash</span>, 
  {/* Passionate about building scalable applications that users love, including <span className="font-semibold">CoinClash</span>,  */}
  <span className="font-semibold"> VPN</span>, <span className="font-semibold"> Hido</span>, 
  <span className="font-semibold"> Luvio</span>, and <span className="font-semibold"> Geobuddy</span>.
</p>

              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-300">
                  <FiCheckCircle className="text-[#00ff88]" />
                  <span>8+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <FiCheckCircle className="text-[#00ff88]" />
                  <span>20+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <FiCheckCircle className="text-[#00ff88]" />
                  <span>100K+ Downloads</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-[#00ff88]/30 transition-all flex items-center justify-center gap-2"
                >
                  <FiMessageCircle /> Hire Me
                </motion.button>
                
                <motion.a
                  href="https://drive.google.com/file/d/18FQYFwE75hRUp7zuO_Qyt40zeah3VZCc/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-gray-700 text-white px-8 py-3 rounded-full hover:border-[#00ff88] transition-colors flex items-center justify-center gap-2"
                >
                  <FiDownload /> Download CV
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
                {/* Animated orbit rings */}
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    className="absolute inset-0 border border-[#00ff88]/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20 + ring * 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}
                
                {/* Floating tech icons with AI colors */}
                {['📱', '🚀', '💻', '⚛️', '⚡', '🦅', '🛠️', '🎨', '📝'].map((icon, index) => (
                  <motion.div
                    key={index}
                    className="absolute text-2xl"
                    style={{
                      color: ['#00ff88', '#0088ff', '#ff0088', '#ffaa00', '#ff00ff', '#00ffff', '#ffaa00', '#ff00ff', '#00ffff'][index]
                    }}
                    animate={{
                      rotate: 360,
                      x: Math.cos(index) * (100 + index * 20),
                      y: Math.sin(index) * (100 + index * 20),
                    }}
                    transition={{
                      duration: 10 + index * 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5
                    }}
                  >
                    {icon}
                  </motion.div>
                ))}
                
                {/* Center profile */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#00ff88] relative bg-gradient-to-br from-[#00ff88]/20 to-[#0088ff]/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl md:text-8xl">🚀</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Dashboard */}
      <StatsDashboard stats={stats} time={time} />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
          >
            <span className="bg-gradient-to-r from-[#00ff88] via-[#0088ff] to-[#ff0088] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>
          



<div className="grid md:grid-cols-2 gap-8">
  {
 

  [
  {
    title: "تكويد",
    description: "Tracks farm locations, verifies export-area cultivation, ensures crop quality, sponsored by Egypt’s Agricultural Export Council.",
    stats: "100+ installs",
    color: "#00ff88",
    icon: "🌾 🚜",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.takweed.app"
  },
  {
    title: "قمحاوي",
    description: "Empowers farmers with smart tools for crop health, disease detection, weather insights, and marketplace access.",
    stats: "50K+ installs",
    color: "#ff0088",
    icon: "🤖 🚜",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.qamhawy.app&hl=en"
  },
  {
    title: "Yapsody QuickScan",
    description: "QuickScan efficiently manages event ticket scanning, attendee info, refunds, and multiple venue entries seamlessly",
    stats: "100+ Downloads",
    color: "#0088ff",
    icon: "📲",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.yapsody.quickscan&hl=en"
  },
  {
    title: "Yapsody YapStats",
    description: "YapStats tracks events, provides support, enables past event access, and simplifies presenter management efficiently",
    stats: "1K+ Downloads",
    color: "red",
    icon: "📊",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.yapsody.yapstats&hl=en"
  },

    {
    title: "Yapsody YapTickets",
    description: "YapTickets simplifies ticket access, redemption, and transfers, ensuring fast, seamless entry to any event",
    stats: "10K+ Downloads",
    color: "red",
    icon: "🎫",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.yapsody.yaptix&hl=en"
  },



    {
    title: "Yatri Sathi",
    description: "Yatri Sathi offers reliable ride-hailing in Kolkata, connecting millions of users with trusted local drivers",
    stats: "1M+ Downloads",
    color: "#ffaa00",
    icon: "🚖",
    playStoreUrl: "https://play.google.com/store/apps/details?id=in.juspay.jatrisaathi&hl=en"
  },



      {
    title: "Hido - Video Calls & Friends",
    description: "Hido enables meaningful conversations, connecting people through text and video for genuine emotional connections",
    stats: "10K+ Downloads",
    color: "purple",
    icon: "💬",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.hi.hido&hl=en"
  },



      {
    title: "CoinClash",
    description: "CoinClash rewards knowledge by letting users play quizzes, watch ads, and earn real money easily",
    stats: "100+ Downloads",
    color: "green",
    icon: "🪙",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.coinclash&hl=en"
  },



      {
    title: "Chatter Social",
    description: "Chatter enables real-time group conversations, viral moments, and community-driven content for creators and users",
    stats: "10K+ Downloads",
    color: "brown",
    icon: "👥 💬",
    playStoreUrl: "https://play.google.com/store/apps/details?id=io.chattersocial.app&hl=en"
  },


     {
    title: "GeoBuddy- The Learning App",
    description: "Our app offers comprehensive, uninterrupted learning from home with interactive features for students nationwide",
    stats: "1K+ Downloads",
    color: "gold",
    icon: "📚",
    playStoreUrl: "https://play.google.com/store/apps/details?id=co.iron.jpiyu&hl=en"
  },

]

  
  .map((project, index) => (
    <FloatingCard3D key={index} color={project.color} delay={index * 0.1}>
      {/* Simple hover without complex effects */}
      <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 p-6 rounded-3xl border border-white/10 h-full overflow-hidden group hover:border-white/20 transition-all duration-300">
        {/* Simple overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="text-4xl opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
              {project.icon}
            </div>
            <span className="text-sm px-3 py-1 rounded-full transition-all duration-300 group-hover:scale-105" style={{ 
              background: `${project.color}20`,
              color: project.color,
              border: `1px solid ${project.color}30`,
            }}>
              {project.stats}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
            {project.title}
          </h3>
          
          <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
            {project.description}
          </p>
          
          {/* <div className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300" style={{ color: project.color }}>
            <FiExternalLink className="group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm group-hover:tracking-wider group-hover:font-medium transition-all duration-300">
              View Details
            </span>
          </div> */}

          <a
  href={project.playStoreUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
  style={{ color: project.color }}
>
  <FiExternalLink className="group-hover:scale-110 transition-transform duration-300" />
  <span className="text-sm group-hover:tracking-wider group-hover:font-medium transition-all duration-300">
    View Details
  </span>
</a>
        </div>
        
        {/* Simple shadow on hover */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 shadow-[0_0_40px_rgba(0,0,0,0.3)] rounded-3xl" />
        </div>
      </div>
    </FloatingCard3D>
  ))}
</div>




        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
          >
            <span className="bg-gradient-to-r from-[#00ff88] via-[#0088ff] to-[#ff0088] bg-clip-text text-transparent">
              Work Experience
            </span>
          </motion.h2>
          
          {/* <div className="space-y-8">
            {[
              {
                title: "Senior Software Engineer (Flutter)",
                company: "Kellton Tech",
                duration: "June 2022 - Present",
                location: "Gurugram",
                points: ["Led team of 2 developers", "Enhanced system response by 30%", "Delivered 3 major projects"]
              },
              {
                title: "Software Engineer (Flutter)",
                company: "Enbake Consultancy",
                duration: "Nov 2020 - May 2022",
                location: "New Delhi",
                points: ["Increased user engagement by 20%", "Mentored junior developers", "Cross-functional collaboration"]
              }
            ].map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-3xl border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: '#00ff8820' }}>
                    <FiBriefcase className="text-[#00ff88]" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-gray-400">{exp.company} • {exp.duration}</p>
                    <p className="text-gray-500 text-sm">{exp.location}</p>
                    
                    <ul className="mt-4 space-y-2">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <FiCheckCircle className="text-[#00ff88] mt-1 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div> */}

<div className="space-y-8">
  {
  
[
  {
    title: "Senior Software Engineer React Native and IOS",
    company: "App Cake",
    duration: "March 2024 - Present",
    location: "Remote",
    points: [
      "Led team of 10 developers",
      "Enhanced system response by 80%",
      "Delivered 10+ major projects"
    ],
    color: "#22c55e" // green (keep as is)
  },
  {
    title: "Senior Software Engineer React Native and IOS",
    company: "Avi Software",
    duration: "July 2023 - Dec 2023",
    location: "Mumbai",
    points: [
      "Contract base of 6 month",
      "Enhanced system response by 85%",
      "Delivered 2+ major projects"
    ],
    color: "#3b82f6" // blue (keep as is)
  },

  {
    title: "Junior Software Engineer Flutter and IOS",
    company: "ConsCent",
    duration: "May 2022 - July 2023",
    location: "Delhi",
    points: [
      "Junior Developer Flutter",
      "Enhanced system response by 80%",
      "Delivered 2+ major projects"
    ],
    color: "#ef4444" // pink
  },

  {
    title: "Senior Software Engineer React Native and IOS",
    company: "Floweret™ - India's Online Nursery",
    duration: "July 2021 - May 2022",
    location: "Noida",
    points: [
      "Senior Developer Native iOS",
      "Enhanced system response by 70%",
      "Delivered 3+ major projects"
    ],
    color: "#f472b6" // rose pink
  },

  {
    title: "Junior Software Engineer React Native and IOS",
    company: "QuickNet Solution",
    duration: "July 2020 - July 2021",
    location: "Noida",
    points: [
      "Junior Developer Native iOS",
      "Enhanced system response by 70%",
      "Delivered 4+ major projects"
    ],
    color: "#c084fc" // neon pink
  },

  {
    title: "Junior Software Engineer React Native and IOS",
    company: "Pan India Internet Pvt Ltd",
    duration: "July 2019 - July 2020",
    location: "Kota",
    points: [
      "Junior Developer Native iOS",
      "Enhanced system response by 60%",
      "Delivered 2+ major projects"
    ],
    color: "#facc15" // soft pink
  },

  {
    title: "Junior Software Engineer React Native and IOS",
    company: "Technogogues IT Solutions Pvt. Ltd",
    duration: "Oct 2018 - July 2019",
    location: "Kota",
    points: [
      "Junior Developer Native iOS",
      "Enhanced system response by 60%",
      "Delivered 2+ major projects"
    ],
    color: "#991b1b" // deep rose
  }
]

  
  .map((exp, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="relative group"
    >
      {/* Hover Gradient Background */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${exp.color}15, transparent 70%)`,
          filter: 'blur(20px)'
        }}
      />
      
      {/* Glass Card */}
      <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-3xl border border-white/10 backdrop-blur-sm group-hover:border-white/20 transition-all duration-500 overflow-hidden">
        
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 rounded-3xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div 
            className="absolute inset-0 rounded-3xl"
            style={{
              background: `linear-gradient(90deg, transparent, ${exp.color}30, transparent)`,
              animation: 'gradientMove 2s linear infinite'
            }}
          />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-start gap-4">
            {/* Icon with Hover Effect */}
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
              style={{ 
                background: `${exp.color}20`,
                boxShadow: '0 0 0 transparent'
              }}
            >
              <FiBriefcase 
                className="transition-all duration-500 group-hover:scale-110" 
                style={{ color: exp.color }}
                size={24}
              />
            </div>
            
            <div className="flex-1">
              {/* Title with Hover Effect */}
              <h3 className="text-xl font-bold text-white mb-1 group-hover:translate-x-1 transition-transform duration-300">
                {exp.title}
              </h3>
              
              {/* Company and Duration */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  {exp.company}
                </p>
                <span className="text-gray-500">•</span>
                <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  {exp.duration}
                </p>
              </div>
              
              {/* Location */}
              <p className="text-gray-500 text-sm mb-4 transition-colors duration-300 group-hover:text-gray-400">
                📍 {exp.location}
              </p>
              
              {/* Points List with Hover Effects */}
              <ul className="mt-4 space-y-3">
                {exp.points.map((point, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + idx * 0.1 }}
                    className="flex items-start gap-3 group/point"
                  >
                    {/* Check Icon with Pulse Effect */}
                    <div className="relative mt-1">
                      <FiCheckCircle 
                        className="transition-all duration-300 group-hover/point:scale-110" 
                        style={{ color: exp.color }}
                        size={18}
                      />
                      {/* Pulse Animation */}
                      <div 
                        className="absolute inset-0 rounded-full opacity-0 group-hover/point:opacity-100 transition-opacity duration-300"
                        style={{
                          background: exp.color,
                          filter: 'blur(6px)',
                          animation: 'pulse 2s infinite'
                        }}
                      />
                    </div>
                    
                    {/* Point Text */}
                    <span className="text-gray-300 transition-all duration-300 group-hover/point:text-white group-hover/point:translate-x-2">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Floating Elements on Hover */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
              style={{
                background: exp.color,
                filter: 'blur(1px)',
                top: `${20 + i * 20}%`,
                left: `${10 + i * 25}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2 + i,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  ))}
</div>



        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
          >
            <span className="bg-gradient-to-r from-[#00ff88] via-[#0088ff] to-[#ff0088] bg-clip-text text-transparent">
              Education
            </span>
          </motion.h2>
          
          {/* <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                degree: "Bachelor of Computer Applications (BCA)",
                institution: "Indira Gandhi National University",
                duration: "2020-2023",
                percentage: "67%"
              },
              {
                degree: "Diploma in Computer Engineering",
                institution: "Ambedkar Institute Of Technology",
                duration: "2017-2020",
                percentage: "76%"
              }
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-3xl border border-white/10 hover:border-[#00ff88]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: '#0088ff20' }}>
                    <span className="text-[#0088ff] text-2xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-gray-400 mb-1">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.duration}</p>
                    <div className="mt-4">
                      <span className="px-3 py-1 rounded-full text-sm" style={{ 
                        background: '#ff008820',
                        color: '#ff0088'
                      }}>
                        {edu.percentage}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div> */}

<div className="grid md:grid-cols-2 gap-6">
  {[
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Modi Institute of Management & Technology",
      duration: "2013-2016",
      percentage: "67%",
      iconColor: "#0088ff",
      percentageColor: "#ff0088"
    },
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Career Point University",
      duration: "2016-2018",
      percentage: "76%",
      iconColor: "#00ff88",
      percentageColor: "#ffaa00"
    }
  ].map((edu, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/30">
        <div className="flex items-start gap-4">
          {/* Icon with Hover Effect */}
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
            style={{ 
              background: `${edu.iconColor}20`,
              boxShadow: '0 0 0 transparent'
            }}
          >
            <span 
              className="text-2xl transition-transform duration-300 group-hover:scale-110"
              style={{ color: edu.iconColor }}
            >
              🎓
            </span>
          </div>
          
          <div className="flex-1">
            {/* Degree Title */}
            <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
              {edu.degree}
            </h3>
            
            {/* Institution */}
            <p className="text-gray-400 mb-1 group-hover:text-gray-300 transition-colors duration-300">
              🏛️ {edu.institution}
            </p>
            
            {/* Duration */}
            <p className="text-gray-500 text-sm mb-4 group-hover:text-gray-400 transition-colors duration-300">
              📅 {edu.duration}
            </p>
            
            {/* Percentage Badge */}
            <div className="mt-4">
              <span 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                style={{ 
                  background: `${edu.percentageColor}20`,
                  color: edu.percentageColor,
                  border: `1px solid ${edu.percentageColor}30`
                }}
              >
                <FiPercent className="group-hover:scale-110 transition-transform duration-300" size={14} />
                <span className="font-semibold">{edu.percentage}</span>
              </span>
            </div>
            
            {/* Simple Progress Indicator */}
            <div className="mt-3">
              <div className="h-1 bg-gray-800/50 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ 
                    width: `${parseInt(edu.percentage)}%`,
                    background: `linear-gradient(90deg, ${edu.percentageColor}, ${edu.percentageColor}80)`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Let's Build Something Amazing</h3>
              <p className="text-gray-400">Ready to bring your app idea to life?</p>
            </div>
            
            <motion.a
              href="https://www.linkedin.com/in/devank-karanwal-99b05b120/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-[#00ff88]/30 transition-all flex items-center gap-2"
            >
              <FiLinkedin /> Connect on LinkedIn
            </motion.a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Devank karanwal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:shadow-[#00ff88]/30 z-50"
          >
            <FiChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;



