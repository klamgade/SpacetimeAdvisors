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
import {
  AssignmentTurnedIn,
  Assignment,
  BusinessCenter,
  AccountBalanceWallet,
  Gavel,
} from '@mui/icons-material';

const ServicesSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = [
    {
      icon: <AssignmentTurnedIn sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      title: 'Tax Clearance Services',
      description: 'Comprehensive tax clearance support to ensure your business meets all ATO requirements and deadlines.',
      features: ['ATO Clearance Certificates', 'Tax Debt Resolution', 'Compliance Audits'],
    },
    {
      icon: <Assignment sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      title: 'BAS/IAS Lodgment',
      description: 'Professional Business Activity Statement and Instalment Activity Statement preparation and lodgment.',
      features: ['Monthly BAS Preparation', 'Quarterly IAS Lodgment', 'GST Calculations'],
    },
    {
      icon: <BusinessCenter sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      title: 'Business Structure Setup',
      description: 'Strategic business structure establishment to optimize tax efficiency and compliance.',
      features: ['Entity Structure Advice', 'ABN/ACN Registration', 'Tax Planning'],
    },
    {
      icon: <AccountBalanceWallet sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      title: 'Small Business Accounting',
      description: 'Complete accounting solutions tailored for small to medium enterprises.',
      features: ['Bookkeeping Services', 'Financial Reporting', 'Cash Flow Management'],
    },
    {
      icon: <Gavel sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      title: 'ATO Negotiation Support',
      description: 'Expert representation and negotiation with the Australian Taxation Office on your behalf.',
      features: ['Payment Plan Negotiations', 'Penalty Reductions', 'Dispute Resolution'],
    },
  ];

  return (
    <Box
      component="section"
      id="services"
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
            Our Services
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
            Comprehensive tax and accounting solutions designed specifically for Australian 
            small to medium businesses.
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            md: 'repeat(2, 1fr)', 
            lg: 'repeat(3, 1fr)' 
          }, 
          gap: 3,
          justifyItems: 'center',
          alignItems: 'stretch'
        }}>
          {services.map((service, index) => (
            <Card
              key={index}
              sx={{
                height: '100%',
                width: '100%',
                maxWidth: 400,
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                },
              }}
            >
              <CardContent sx={{ p: 4, flexGrow: 1 }}>
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  {service.icon}
                </Box>
                
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: theme.palette.primary.main,
                    textAlign: 'center',
                  }}
                >
                  {service.title}
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    mb: 3,
                    lineHeight: 1.6,
                    textAlign: 'center',
                  }}
                >
                  {service.description}
                </Typography>
                
                <Box>
                  {service.features.map((feature, featureIndex) => (
                    <Box
                      key={featureIndex}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          bgcolor: theme.palette.secondary.main,
                          mr: 2,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
