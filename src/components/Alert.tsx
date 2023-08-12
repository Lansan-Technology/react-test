import React, { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Skeleton } from '@mui/material';

interface IAlert {
    message: string;
    type?: "success" | "error" | 'info';
    action?:{
        onClick: () => void;
        title: string;
    }
}

export const CustomeAlert = ({message,action,type}: IAlert) => {

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false) , 5000);
    return () => clearTimeout(timer);
  }, []);

  if(loading) return <AlertSkeleton/>
  return (
    <Alert severity={type} action={<button onClick={() => console.log("Hello wolrd")}>Hello World</button>} >
        {message}{' '}
    </Alert>
  )
}

const useAlertSkeletonStyles = makeStyles((theme: Theme) =>
  createStyles({
    alertContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      padding: theme.spacing(0, 1)
    },
    infoArea: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    infoText: {
      marginLeft: '12px'
    },
    buttonArea: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
);

function AlertSkeleton() {
  const classes = useAlertSkeletonStyles();
  return (
    <div className={classes.alertContainer}>
      <div className={classes.infoArea}>
        <Skeleton variant='circular' height={24} width={24}/>
        <p className={classes.infoText}>
        <Skeleton variant='text' height={16} width={512}/>
        </p>
      </div>
      <div className={classes.buttonArea}>
        <Skeleton variant='rectangular' height={32} width={128}/>
      </div>
    </div>
  );
}
