import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { ArrowForward, Phone } from '@mui/icons-material';

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 0 }, // Add padding top to account for fixed navbar
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' }, 
          gap: 4, 
          alignItems: 'center' 
        }}>
          <Box>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: isMobile ? '2.5rem' : '3.5rem',
                fontWeight: 700,
                mb: 2,
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              Spacetime Advisors
            </Typography>
            
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontSize: isMobile ? '1.25rem' : '1.5rem',
                fontWeight: 400,
                mb: 3,
                opacity: 0.95,
                lineHeight: 1.5,
              }}
            >
              Helping Your Business Stay Compliant and Tax-Clear
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                fontSize: isMobile ? '1rem' : '1.125rem',
                mb: 4,
                opacity: 0.9,
                maxWidth: '600px',
                lineHeight: 1.6,
              }}
            >
              Professional tax clearance services for small to medium businesses across Australia. 
              Our registered tax agents ensure your business stays ATO compliant while you focus on growth.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                onClick={scrollToContact}
                endIcon={<ArrowForward />}
                sx={{
                  bgcolor: 'white',
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Book a Consultation
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                href="tel:+61234567890"
                startIcon={<Phone />}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Call Now
              </Button>
            </Box>
          </Box>
          
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            {/* Professional illustration/icon */}
            <Box
              sx={{
                width: isMobile ? 200 : 300,
                height: isMobile ? 200 : 300,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255,255,255,0.2)',
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: isMobile ? '4rem' : '6rem',
                  opacity: 0.7,
                }}
              >
                📊
              </Typography>
            </Box>
          </Box>
        </Box>
        
        {/* Scroll indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 30,
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 20%, 50%, 80%, 100%': {
                transform: 'translateX(-50%) translateY(0)',
              },
              '40%': {
                transform: 'translateX(-50%) translateY(-10px)',
              },
              '60%': {
                transform: 'translateX(-50%) translateY(-5px)',
              },
            },
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
            Scroll to explore
          </Typography>
          <Box
            sx={{
              width: 2,
              height: 30,
              bgcolor: 'white',
              opacity: 0.6,
              mx: 'auto',
              borderRadius: 1,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
