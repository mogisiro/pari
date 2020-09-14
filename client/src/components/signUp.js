import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import './signIn&Up.css';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: 'white',
    },
  },
  paper: {
    marginTop: '800px',
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
    marginTop: '30px',
  },
  submit: {
    marginTop: '20px',
    marginBottom: '20px'
  },
});

class SignUp extends React.Component {
  state = {
    username:"",
    passwd:"",
    email: "",
    
  }

  handleChange = (e) => {
      let nextState = {};
      nextState[e.target.name] = e.target.value;
      this.setState(nextState);
  }

  handleRegister = () => {
      let username = this.state.username;
      let passwd = this.state.passwd;
      let email = this.state.email;
      this.props.onRegister(username, passwd, email).then(
          (result) => {
              if(!result) {
                  this.setState({
                      username: '',
                      passwd: '',
                      email: ''
                  });
              }
          }
      );
  }
  render(){
    const { classes } = this.props;
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
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.username}
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
                  onChange={this.handleChange}
                  value={this.state.passwd}
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
                  onChange={this.handleChange}
                  value={this.state.email}
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
                  //name="certificate_no"
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
              onClick={this.handleRegister}
            >
              가입하기
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

SignUp.propTypes = {
  onRegister: PropTypes.func
};

SignUp.defaultProps = {
  onRegister: (id, pw, email) => { console.error("register function is not defined"); }
};

const StyledSignUp = withStyles(styles)(SignUp)
export default StyledSignUp;