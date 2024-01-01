import { Add, Settings } from '@mui/icons-material';
import './App.css';
import {
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: 'skyblue',
    color: '#888',
  });

  return (
    <>
      {/* <Button startIcon={<Add />} variant='text'>
        Text
      </Button>
      <Button startIcon={<Settings />} variant='contained' color='secondary'>
        Contained
      </Button>
      <Button variant='outlined'>Outlined</Button>
      <hr />
      <Typography variant='h1' component='p'>
        It uses h1 style, but it's a p tag
      </Typography>
      <Button sx={{ backgroundColor: 'skyblue', color: '#888' }}>
        My Unique button
      </Button>

      <hr />
      <BlueButton>My Custom Blue Button</BlueButton> */}
      <Navbar />
      <Grid
        container
        bgcolor='black'
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Grid>
    </>
  );
}

export default App;
