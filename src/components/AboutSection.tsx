import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { CheckCircle, Business, AccountBalance, TrendingUp } from '@mui/icons-material';

const AboutSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const highlights = [
    {
      icon: <CheckCircle sx={{ fontSize: 40, color: theme.palette.secondary.main }} />,
      title: 'ATO Registered',
      description: 'Fully qualified and registered tax agents with the Australian Taxation Office.',
    },
    {
      icon: <Business sx={{ fontSize: 40, color: theme.palette.secondary.main }} />,
      title: '10+ Years Experience',
      description: 'Serving small to medium businesses across Australia with proven expertise.',
    },
    {
      icon: <AccountBalance sx={{ fontSize: 40, color: theme.palette.secondary.main }} />,
      title: 'Compliance Focused',
      description: 'Ensuring your business meets all Australian tax and regulatory requirements.',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: theme.palette.secondary.main }} />,
      title: 'Growth Oriented',
      description: 'Supporting your business growth through strategic tax planning and advice.',
    },
  ];

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: isMobile ? '2rem' : '2.5rem',
                fontWeight: 600,
                mb: 2,
                color: theme.palette.primary.main,
              }}
            >
              About Spacetime Advisors
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                lineHeight: 1.6,
                mb: 2,
                color: theme.palette.text.primary,
              }}
            >
              At Spacetime Advisors, we specialize in providing comprehensive tax clearance 
              and accounting services tailored specifically for small to medium-sized businesses 
              across Australia.
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                lineHeight: 1.6,
                mb: 2,
                color: theme.palette.text.primary,
              }}
            >
              Our mission is simple: to ensure your business stays compliant with Australian 
              tax regulations while you focus on what you do best - growing your business. 
              We understand the complexities of the Australian tax system and provide clear, 
              actionable advice that keeps you ahead of your obligations.
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                lineHeight: 1.6,
                color: theme.palette.text.primary,
              }}
            >
              With years of experience working with the ATO and deep knowledge of tax 
              clearance processes, we're your trusted partner in maintaining financial 
              compliance and business success.
            </Typography>
          </Box>
          
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  sx={{
                    height: '100%',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <Box sx={{ mb: 2 }}>
                      {highlight.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        mb: 1.5,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {highlight.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                      }}
                    >
                      {highlight.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
