import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Alert,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Phone, Email, LocationOn, AccessTime, Send } from '@mui/icons-material';

const ContactSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Phone sx={{ fontSize: 32, color: theme.palette.primary.main }} />,
      title: 'Phone',
      content: '+61 2 1234 5678',
      action: 'tel:+61212345678',
    },
    {
      icon: <Email sx={{ fontSize: 32, color: theme.palette.primary.main }} />,
      title: 'Email',
      content: 'info@spacetimeadvisors.com.au',
      action: 'mailto:info@spacetimeadvisors.com.au',
    },
    {
      icon: <LocationOn sx={{ fontSize: 32, color: theme.palette.primary.main }} />,
      title: 'Address',
      content: 'Level 15, 123 Collins Street\nMelbourne VIC 3000',
      action: null,
    },
    {
      icon: <AccessTime sx={{ fontSize: 32, color: theme.palette.primary.main }} />,
      title: 'Hours',
      content: 'Mon-Fri: 9:00 AM - 6:00 PM\nSat: 9:00 AM - 1:00 PM',
      action: null,
    },
  ];

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" sx={{ mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: isMobile ? '2rem' : '2.5rem',
              fontWeight: 600,
              mb: 3,
              color: theme.palette.primary.main,
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              color: theme.palette.text.secondary,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Ready to get your business tax-compliant? Contact us today for a free consultation.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          {/* Contact Information */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              component="h3"
              sx={{
                fontWeight: 600,
                mb: 4,
                color: theme.palette.primary.main,
              }}
            >
              Contact Information
            </Typography>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  component={info.action ? 'a' : 'div'}
                  href={info.action || undefined}
                  sx={{
                    height: '100%',
                    textDecoration: 'none',
                    transition: 'transform 0.3s ease',
                    '&:hover': info.action ? {
                      transform: 'translateY(-2px)',
                      cursor: 'pointer',
                    } : {},
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      {info.icon}
                      <Box>
                        <Typography
                          variant="h6"
                          component="h4"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                            color: theme.palette.primary.main,
                          }}
                        >
                          {info.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            whiteSpace: 'pre-line',
                          }}
                        >
                          {info.content}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>

            {/* Map Placeholder */}
            <Box
              sx={{
                mt: 4,
                height: 250,
                bgcolor: theme.palette.background.paper,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `2px dashed ${theme.palette.divider}`,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  textAlign: 'center',
                }}
              >
                📍 Interactive Map<br />
                <Typography component="span" variant="body2">
                  Melbourne CBD Location
                </Typography>
              </Typography>
            </Box>
          </Box>

          {/* Contact Form */}
          <Box sx={{ flex: 1 }}>
            <Card sx={{ p: 4 }}>
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  fontWeight: 600,
                  mb: 4,
                  color: theme.palette.primary.main,
                }}
              >
                Send us a Message
              </Typography>

              {submitStatus === 'success' && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Thank you for your message! We'll get back to you within 24 hours.
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                  </Box>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    multiline
                    rows={4}
                    variant="outlined"
                    placeholder="Tell us about your business and how we can help..."
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={submitStatus === 'loading'}
                    endIcon={<Send />}
                    sx={{
                      py: 1.5,
                      px: 4,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      alignSelf: 'flex-start',
                    }}
                  >
                    {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
                  </Button>
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
