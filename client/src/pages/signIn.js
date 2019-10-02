import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link as RouterLink} from 'react-router-dom';
import './signIn&Up.css';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../actions/isLogged.js';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid lightgray',
    borderRadius: '5px',
    paddingTop: "20px",
    paddingBottom: '30px'
  },
  form: {
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#22b8cf",
    color: "white",
    height: "52px",
    fontSize: "17px"
  },
}));

export default function SignIn() {
  const classes = useStyles();
  //const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <Container component="main" maxWidth="xs" id="loginTemplate">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userName"
            label="아이디"
            name="username"
            autoComplete="아이디"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="passWord"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="#22b8cf"/>}
            label="자동 로그인"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            className={classes.button}
            style={{marginBottom: "5px"}}
            onClick = {()=>dispatch(login())}
          >
            로그인
          </Button>
          <Link component={RouterLink} to="/register" underline="none">
            <Button
            fullWidth
            variant="contained"
            size="large"
            className={classes.button}
            style={{marginTop: "10px"}}
          >
               회원가입
            </Button>
          </Link> 
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body1" color="dimgray">
                비밀번호 찾기
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

