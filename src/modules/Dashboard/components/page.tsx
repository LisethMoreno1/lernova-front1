import * as React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  styled,
} from '@mui/material';
import {
  Home,
  Language,
  Analytics,
  Subscriptions,
  Settings,
  Book,
  Help,
  ExpandMore,
  CheckCircleOutline,
  CancelOutlined,
  Article,
  Lock,
} from '@mui/icons-material';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    borderRight: 'none',
    backgroundColor: '#f8f9fa',
  },
});

export default function Component() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f8f9fa' }}>
      {/* Sidebar */}
      <StyledDrawer variant="permanent">
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box component="img" src="/placeholder.svg" sx={{ width: 32, height: 32 }} />
          <Typography variant="h6">Mosaic</Typography>
        </Box>
        <List sx={{ px: 2 }}>
          <ListItem button>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Language />
            </ListItemIcon>
            <ListItemText primary="Websites" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Analytics />
            </ListItemIcon>
            <ListItemText primary="Analytics" />
          </ListItem>
          <ListItem button selected>
            <ListItemIcon>
              <Subscriptions />
            </ListItemIcon>
            <ListItemText primary="Subscription" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
        <Box sx={{ mt: 'auto' }}>
          <List sx={{ px: 2 }}>
            <ListItem button>
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Changelog" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Book />
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Help />
              </ListItemIcon>
              <ListItemText primary="Help & Guides" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Lock />
              </ListItemIcon>
              <ListItemText primary="Privacy & Terms" />
            </ListItem>
          </List>
        </Box>
      </StyledDrawer>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h5" sx={{ mb: 1 }}>Subscription</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          Manage your billing and invoices here.
        </Typography>

        {/* Pricing Cards */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3, mb: 4 }}>
          {/* Free Plan */}
          <Card variant="outlined">
            <CardContent sx={{ p: 3 }}>
              <Typography variant="overline" sx={{ mb: 2, display: 'block' }}>
                Free
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
                For Trying Out
              </Typography>
              <Typography variant="h4" component="div" sx={{ mb: 3 }}>
                $0
                <Typography component="span" variant="body2" color="text.secondary">
                  /per month
                </Typography>
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <CheckCircleOutline color="success" sx={{ mr: 1 }} />
                  <Typography>500 Images</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <CheckCircleOutline color="success" sx={{ mr: 1 }} />
                  <Typography>1 Website</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CancelOutlined color="error" sx={{ mr: 1 }} />
                  <Typography>No Support</Typography>
                </Box>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                You are on Free Plan
              </Typography>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card variant="outlined">
            <CardContent sx={{ p: 3 }}>
              <Typography variant="overline" sx={{ mb: 2, display: 'block' }}>
                Pro
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
                For Individual Use
              </Typography>
              <Typography variant="h4" component="div" sx={{ mb: 3 }}>
                $19
                <Typography component="span" variant="body2" color="text.secondary">
                  /per month
                </Typography>
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <CheckCircleOutline color="success" sx={{ mr: 1 }} />
                  <Typography>5000 Images</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <CheckCircleOutline color="success" sx={{ mr: 1 }} />
                  <Typography>Unlimited Websites</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircleOutline color="success" sx={{ mr: 1 }} />
                  <Typography>Priority Email Support</Typography>
                </Box>
              </Box>
              <Button variant="contained" color="primary" fullWidth>
                Get Pro Plan →
              </Button>
            </CardContent>
          </Card>

          {/* Pro Plus Plan */}
          <Card variant="outlined">
            <CardContent sx={{ p: 3 }}>
              <Typography variant="overline" sx={{ mb: 2, display: 'block' }}>
                Pro Plus
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
                For Larger Websites
              </Typography>
              <Typography variant="h4" component="div" sx={{ mb: 3 }}>
                Custom
                <Typography component="span" variant="body2" color="text.secondary">
                  /per month
                </Typography>
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <CheckCircleOutline color="success" sx={{ mr: 1 }} />
                  <Typography>Unlimited Images</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <CheckCircleOutline color="success" sx={{ mr: 1 }} />
                  <Typography>Unlimited Websites</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircleOutline color="success" sx={{ mr: 1 }} />
                  <Typography>Dedicated Account Manager</Typography>
                </Box>
              </Box>
              <Button variant="outlined" color="primary" fullWidth>
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </Box>

        {/* Invoice History Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Invoice History & Manage Plan</Typography>
          <Typography variant="body2" color="text.secondary">
            Find the details of your previous invoices or to cancel your current subscription. 
            If you have any questions regarding your invoices, please contact our support team.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button variant="outlined" startIcon={<Settings />}>
              Manage Plan
            </Button>
          </Box>
        </Box>

        {/* FAQ Section */}
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>Frequently Asked Questions</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            If you can't find the answer you're looking for, please check out our help articles
          </Typography>
          
          <Box sx={{ mb: 4 }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>What is an OG image?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  An OG image is the image that appears when you share a link on social media.
                </Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>What's included in each plan?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  Each plan includes different features. The Free plan includes basic features,
                  while Pro and Pro Plus plans include additional features and support.
                </Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>How many free OG images do I get?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  The Free plan includes 500 OG images.
                </Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>Why upgrade to Mosaic Pro?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  Upgrading to Pro gives you access to more images, unlimited websites, and priority support.
                </Typography>
              </AccordionDetails>
            </Accordion>
            
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>What happens if I hit the free plan limit?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  When you reach the free plan limit, you'll need to upgrade to continue creating new images.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}