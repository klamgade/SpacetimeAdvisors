import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Star, Verified, Security, Speed, Support } from '@mui/icons-material';

const WhyChooseUsSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const benefits = [
    {
      icon: <Verified sx={{ fontSize: 40, color: 'white' }} />,
      title: 'Registered Tax Agents',
      description: 'All our advisors are fully registered with the Australian Taxation Office and maintain professional indemnity insurance.',
      color: theme.palette.primary.main,
    },
    {
      icon: <Security sx={{ fontSize: 40, color: 'white' }} />,
      title: 'ATO-Compliant Processes',
      description: 'Our processes are designed to ensure full compliance with all Australian tax laws and regulations.',
      color: theme.palette.secondary.main,
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: 'white' }} />,
      title: 'Fast Turnaround',
      description: 'We understand business needs and provide quick, efficient service without compromising quality.',
      color: '#8b5cf6',
    },
    {
      icon: <Support sx={{ fontSize: 40, color: 'white' }} />,
      title: 'Ongoing Support',
      description: 'Year-round support and advice to keep your business on track with all tax obligations.',
      color: '#10b981',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      business: 'Mitchell Consulting',
      content: 'Spacetime Advisors helped us navigate a complex tax clearance process. Their expertise saved us both time and money.',
      rating: 5,
    },
    {
      name: 'David Chen',
      business: 'Chen Industries',
      content: 'Professional, reliable, and always available when we need them. Our BAS lodgments are always on time.',
      rating: 5,
    },
    {
      name: 'Rebecca Thompson',
      business: 'Thompson & Associates',
      content: 'Their ATO negotiation support was invaluable. They helped us resolve our tax issues professionally.',
      rating: 5,
    },
  ];

  return (
    <Box
      component="section"
      id="why-choose-us"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth="lg">
        {/* Benefits Section */}
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
            Why Choose Us
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
            Trusted by hundreds of Australian businesses for reliable tax clearance and accounting services.
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: 'repeat(2, 1fr)', 
            md: 'repeat(4, 1fr)' 
          }, 
          gap: 3,
          mb: 8,
          justifyItems: 'center'
        }}>
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              sx={{
                height: '100%',
                width: '100%',
                maxWidth: 280,
                textAlign: 'center',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: benefit.color,
                    mx: 'auto',
                    mb: 3,
                  }}
                >
                  {benefit.icon}
                </Avatar>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: theme.palette.primary.main,
                  }}
                >
                  {benefit.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                  }}
                >
                  {benefit.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Testimonials Section */}
        <Box textAlign="center" sx={{ mb: 4 }}>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontSize: isMobile ? '1.75rem' : '2rem',
              fontWeight: 600,
              mb: 2,
              color: theme.palette.primary.main,
            }}
          >
            What Our Clients Say
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            md: 'repeat(3, 1fr)' 
          }, 
          gap: 3,
          justifyItems: 'center'
        }}>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              sx={{
                height: '100%',
                width: '100%',
                maxWidth: 400,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent sx={{ p: 4, flexGrow: 1 }}>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      sx={{
                        color: '#fbbf24',
                        fontSize: 20,
                      }}
                    />
                  ))}
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: 'italic',
                    mb: 3,
                    color: theme.palette.text.primary,
                    lineHeight: 1.6,
                  }}
                >
                  "{testimonial.content}"
                </Typography>
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.primary.main,
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {testimonial.business}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUsSection;
