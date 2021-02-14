/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link as ALink} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../Layer/Copyright';
import * as M from '../../Assets/MainStyled';
import swal from 'sweetalert';
import { Alert } from 'reactstrap';
import axios from 'axios';
import { LOCALSTORAGE, MAINURL } from '../../Assets/Data';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Alert
  const [alertStatus, setAlertStatus] = useState<string>('');
  const [alertData, setAlertData] = useState<string>('');
  const [alertState, setAlertState] = useState<boolean>(false);
  const classes = useStyles();
  const handleSubmit = () =>{
    console.log(`${email} ${password}`)
      let body = {
        email: email,
        password: password,
        isAdmin: true
      }
      let params: RequestInit = {
        method: "POST",
        body: JSON.stringify(body)
    }
    let myurl = `${MAINURL}/auth/login`;
    axios.post(myurl ,body)
    .then(function (response) {
        console.log({response: response.statusText});
        if (response.statusText === 'Created') {
          localStorage.setItem(LOCALSTORAGE.Token, response.data.token)
          localStorage.setItem(LOCALSTORAGE.userDetails, JSON.stringify(response.data.userDetails))
          setAlertState(true); 
          setAlertStatus('success');                                                                                                                       
          setAlertData('success');
          window.location.href = '/dashboard'
        } else {
          setAlertState(true); 
          setAlertStatus('danger');
          setAlertData("You can't login"); 
        }
        
    })
    .catch(function (error) {
        // console.log(error);
        setAlertState(true); 
        setAlertStatus('success');
        setAlertData('error');
    });
      // swal("Successful!", "You clicked the button!", "success");
      setAlertState(true); 
      setAlertStatus('success');
      setAlertData('success');
      setTimeout(()=>{
        // window.location.href = '/dashboard';
        setAlertState(false);
      }, 3000);
  } 
  return (
    <>
        <Container component="main" maxWidth="xs" style={{backgroundColor: '#fff', paddingBottom: '20px'}}>
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Login
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e: any): any => setEmail(e.target.value)}
                  autoFocus
              />
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e: any): any => setPassword(e.target.value)}
                  autoComplete="current-password"
              />
              <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
              />
              <M.MainBtnContainer
                  className='btn btn-block btn-main'
                  onClick={handleSubmit}
              >
                  Sign In
              </M.MainBtnContainer>
              <br/>
              <Grid container>
                  <Grid item xs>
                  <ALink to="/forgetpassword">
                      Forgot password?
                  </ALink>
                  </Grid>
                  <Grid item>
                  <ALink to="/register" >
                      {"Don't have an account? Sign Up"}
                  </ALink>
                  </Grid>
              </Grid>
              <Alert color={alertStatus} style={{display: `${alertState ? 'block' : 'none'}`}}>
                {alertData}
              </Alert>
            </form>
            
        </div>
        </Container>
        <Box mt={8}>
            <Copyright />
        </Box>
    </>
  );
}