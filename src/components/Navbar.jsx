import { Mail, Notifications, Pets } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});
const Icons = styled(Box)({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
});

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>
          Lama Dev
        </Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color='error'>
            <Notifications />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }}>LD</Avatar>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
