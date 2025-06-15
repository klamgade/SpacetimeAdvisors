import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';
import { Phone, Email, LinkedIn, Facebook, Twitter } from '@mui/icons-material';

const Footer: React.FC = () => {
  const theme = useTheme();
  
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Tax Clearance Services',
    'BAS/IAS Lodgment',
    'Business Structure Setup',
    'Small Business Accounting',
    'ATO Negotiation Support',
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.primary.main,
        color: 'white',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: 'repeat(2, 1fr)', 
            md: '2fr 1fr 1.5fr 1.5fr' 
          }, 
          gap: 4 
        }}>
          {/* Company Info */}
          <Box>
            <Typography
              variant="h5"
              component="h3"
              sx={{
                fontWeight: 700,
                mb: 2,
              }}
            >
              Spacetime Advisors
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 3,
                lineHeight: 1.6,
                opacity: 0.9,
              }}
            >
              Your trusted partner for tax clearance and accounting services 
              across Australia. Helping small to medium businesses stay 
              compliant and grow with confidence.
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Phone sx={{ fontSize: 18, mr: 1 }} />
              <Typography variant="body2">+61 2 1234 5678</Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Email sx={{ fontSize: 18, mr: 1 }} />
              <Typography variant="body2">info@spacetimeadvisors.com.au</Typography>
            </Box>

            {/* Social Media */}
            <Box>
              <IconButton
                href="#"
                sx={{
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href="#"
                sx={{
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="#"
                sx={{
                  color: 'white',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                }}
              >
                <Twitter />
              </IconButton>
            </Box>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography
              variant="h6"
              component="h4"
              sx={{
                fontWeight: 600,
                mb: 2,
              }}
            >
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {quickLinks.map((link, index) => (
                <Box component="li" key={index} sx={{ mb: 1 }}>
                  <Typography
                    component="button"
                    variant="body2"
                    onClick={() => scrollToSection(link.href)}
                    sx={{
                      color: 'white',
                      opacity: 0.8,
                      textDecoration: 'none',
                      cursor: 'pointer',
                      border: 'none',
                      background: 'none',
                      p: 0,
                      textAlign: 'left',
                      '&:hover': {
                        opacity: 1,
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Services */}
          <Box>
            <Typography
              variant="h6"
              component="h4"
              sx={{
                fontWeight: 600,
                mb: 2,
              }}
            >
              Our Services
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {services.map((service, index) => (
                <Box component="li" key={index} sx={{ mb: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'white',
                      opacity: 0.8,
                    }}
                  >
                    {service}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Business Info */}
          <Box>
            <Typography
              variant="h6"
              component="h4"
              sx={{
                fontWeight: 600,
                mb: 2,
              }}
            >
              Business Information
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'white',
                opacity: 0.8,
                mb: 1,
              }}
            >
              ABN: 12 345 678 901
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'white',
                opacity: 0.8,
                mb: 2,
              }}
            >
              Registered Tax Agent: 23456789
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'white',
                opacity: 0.8,
                lineHeight: 1.6,
              }}
            >
              Level 15, 123 Collins Street<br />
              Melbourne VIC 3000<br />
              Australia
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.2)' }} />

        {/* Bottom Footer */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between', 
          alignItems: { xs: 'center', md: 'center' },
          gap: { xs: 2, md: 0 }
        }}>
          <Typography
            variant="body2"
            sx={{
              color: 'white',
              opacity: 0.7,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            © {currentYear} Spacetime Advisors. All rights reserved.
          </Typography>
          
          <Box
            sx={{
              display: 'flex',
              gap: 3,
            }}
          >
            <Typography
              component="a"
              href="#"
              variant="body2"
              sx={{
                color: 'white',
                opacity: 0.7,
                textDecoration: 'none',
                '&:hover': {
                  opacity: 1,
                  textDecoration: 'underline',
                },
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              component="a"
              href="#"
              variant="body2"
              sx={{
                color: 'white',
                opacity: 0.7,
                textDecoration: 'none',
                '&:hover': {
                  opacity: 1,
                  textDecoration: 'underline',
                },
              }}
            >
              Terms of Service
            </Typography>
            <Typography
              component="a"
              href="#"
              variant="body2"
              sx={{
                color: 'white',
                opacity: 0.7,
                textDecoration: 'none',
                '&:hover': {
                  opacity: 1,
                  textDecoration: 'underline',
                },
              }}
            >
              Disclaimer
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
