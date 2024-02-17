import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  loadingOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
}));

const LoadingSpinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.loadingOverlay}>
      <CircularProgress style={{color: '#6C22A6'}}/>
    </div>
  );
};

export default LoadingSpinner;
