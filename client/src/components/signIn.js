import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import {Link as RouterLink} from 'react-router-dom';
import './signIn&Up.css';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: 'white',
    },
  },
  paper: {
    marginTop: '60px',
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
    marginTop: '30px',
  },
  button: {
    marginTop: '20px',
    marginBottom: '20px',
    backgroundColor: "#22b8cf",
    color: "white",
    height: "52px",
    fontSize: "17px"
  },
});

class SignIn extends React.Component {
  state = {
    username:"",
    passwd:""
  }

  handleChange = (e) => {
      let nextState = {};
      nextState[e.target.name] = e.target.value;
      this.setState(nextState);
  }

  handleRegister = () => {
      let id = this.state.username;
      let pw = this.state.passwd;

      this.props.onRegister(id, pw).then(
          (result) => {
              if(!result) {
                  this.setState({
                      username: '',
                      passwd: ''
                  });
              }
          }
      );
  }
  
  render(){
    const { classes } = this.props;
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
              onChange={this.handleChange}
              value={this.state.username}
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
              onChange={this.handleChange}
              value={this.state.passwd}
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
              onClick={this.handleRegister}
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
                <Link href="#" variant="body1" color="inherit">
                  비밀번호 찾기
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

SignIn.propTypes = {
  onRegister: PropTypes.func
};

SignIn.defaultProps = {
  onRegister: (id, pw) => { console.error("register function is not defined"); }
};

const StyledSignIn = withStyles(styles)(SignIn)
export default StyledSignIn;
