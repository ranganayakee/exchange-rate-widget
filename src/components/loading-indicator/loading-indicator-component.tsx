import React, { FC, useEffect, useState } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export interface LoadingIndicatorProps {
  loading : boolean;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

const LoadingIndicatorComponent : FC<LoadingIndicatorProps> = ({loading}) =>  {
  const classes = useStyles();
  const [open, setOpen]  = useState<boolean>(loading);
  
  useEffect(() => {
    setOpen(loading);
  }, [loading]);

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default LoadingIndicatorComponent;