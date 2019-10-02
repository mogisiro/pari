import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './signIn&Up.css';


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
    paddingBottom: '20px',
    marginTop: '50px',
  },
  form: {
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" id="registerTemplate"
    >
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          회원가입
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="아이디"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="passWord"
                label="비밀번호"
                type="password"
                name="passwd"
                autoComplete="password"
              />
            </Grid>
            <Typography variant="body1"><p>학교 메일 인증</p></Typography>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="sogangEmail"
                label="서강대 이메일 주소"
                name="email"
                autoComplete="email"
              />
              <Button variant="contained"
               style={{marginTop: "10px", backgroundColor: "lightgray"}}>
                인증번호 전송
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="certificate_no"
                label="인증번호"
                id="certificateNo"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            style={{color: 'white', backgroundColor: "#22B8CF"}}
            className={classes.submit}
          >
            가입하기
          </Button>
        </form>
      </div>
    </Container>
  );
}