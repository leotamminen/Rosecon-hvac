import React from "react";
import "../App.css";
import Backdrop from "../backdrop";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import putkiImage from '../images/putki.jpg';
import asennusImage from '../images/asennus.jpg';
import huoltoImage from '../images/huolto.jpg';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import { Container } from "@mui/material";


const images = [
  {
    url: putkiImage,
    title: 'Ylläpito',
    width: '40%',
  },
  {
    url: asennusImage,
    title: 'Asennukset',
    width: '30%',
  },
  {
    url: huoltoImage,
    title: 'Huoltotyöt',
    width: '30%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));
function Item2() {
  return (
    <Container>
      <Box display="flex"  justifyContent="center" sx ={{display: { xs: 'block', md: 'none', }, border: '1px dashed grey',  maxWidth: "100%", margin: "auto" }} >
      <img
              style={{maxWidth: '100%', // Ensures the image is not larger than its container
                height: 'auto', // Maintains aspect ratio
                borderRadius: 50,
                boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.1)', // Example shadow, adjust as needed
                border: '1px solid black' // Example border, adjust as needed borderRadius: 50, borderBlockColor: "black"
              }} 
              alt="complex"
              src={putkiImage}
              aling="center"
            />
      </Box>
      <Box display="flex"  justifyContent="center" sx ={{display: { xs: 'none', md: 'block', }, border: '1px dashed grey',  maxWidth: "50%", margin: "auto" }} >
      <img
              style={{maxWidth: '100%', // Ensures the image is not larger than its container
                height: 'auto', // Maintains aspect ratio
                borderRadius: 50,
                boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.1)', // Example shadow, adjust as needed
                border: '1px solid black' // Example border, adjust as needed borderRadius: 50, borderBlockColor: "black"
              }} 
              alt="complex"
              src={putkiImage}
              aling="center"
            />
      </Box>
    </Container>
  );
}
function Item() {
  return (
    <Box displaY="flex" justifyContent="center" sx={{border: '1px dashed grey', whiteSpace: 'normal', width: 'auto', overflow: 'auto' }}>
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
</Box>
  );

}

const Etusivu = () => {
  return (
    <div className="etusivu">
      <header className="etusivu-header">
      <Backdrop />
      <Box sx={{
          display: 'flex',
          justifyContent: 'space-around',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}>
      </Box>
      <Box component="section" sx={{ display: "flex", p: 2, border: '1px dashed grey', justifyContent: 'space-evenly', overflow: 'auto' }}>
      <Item2> </Item2>
      <Item> </Item>
      
      
    </Box>
        
      

      </header>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', width: "100%", width: '100%', border: 5, m: 2 }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
    
    <Box
        component="span"
        sx={{
          display: 'block',
          p: 1,
          m: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        block
      </Box>

      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>
    </div>
  );
};

export default Etusivu;