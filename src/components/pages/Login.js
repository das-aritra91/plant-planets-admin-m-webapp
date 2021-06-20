import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";
import '../css/modal.css';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import PositionedSnackbar from '../Notification';
// import Notification from '../Notification';

import ReactNotifications from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

require('./Login.css');

const Container = styled.div``;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2);
  background-color: rgba(255, 255, 255, .15);
`;

const Modal = styled.div`
  background: #fff;
  position: absolute;
  top: 50px;
  right: calc(50% - 100px);
  border: 1px solid #000;
  border-radius: 5px;
  padding: 20px;
  min-height: 200px;

`;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

export default function Login() {
  // alert(localStorage.getItem('admin_logged') === null);
  // const [errorMessage, setErrorMessage] = React.useState("");
  const openModal = (localStorage.getItem('admin_logged') === null) ? true: false
  const [isOpen, setOpen] = useState(openModal);
  // const { history } = props;
  const history = useHistory();

  const classes = useStyles();
  // create state variables for each input
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if((username === password) && (username === process.env.REACT_APP_ADMIN_USERID)){
      //alert('correct');
      localStorage.setItem('admin_logged', true);
      Notify_success();
      setOpen(!isOpen);
      history.push("/home");
    }
    else{
      //handleClick({ vertical: 'top', horizontal: 'center' })
      //PositionedSnackbar(obj_value = { vertical: 'top', horizontal: 'center' })
      //setErrorMessage(`The given credential is not correct. Please get in touch with the admin.`)
      Notify_error();
    }
    reset();
    // console.log(username, password);
    // alert(process.env.REACT_APP_ADMIN_USERID);
  };

  const handleReset = e => {
    // Notification();
    return(<>
    {e.preventDefault()}
    {reset()};
    {/* {setErrorMessage('')}; */}
    </>)
  }

  function reset() {
    setUserName('');
    setPassword('');
  };

  return (
    <Container>
      {isOpen ? (
        <>
          <ModalContainer>
            <Modal>
            {/* {errorMessage && <div className="error"> {errorMessage} </div>} */}
            <ReactNotifications />
              <h2>Please enter using administrative credential</h2>
              <form className={classes.root} onSubmit={handleSubmit}>
              <TextField
                  label="Username"
                  variant="filled"
                  type="text"
                  required
                  value={username}
                  onChange={e => setUserName(e.target.value)}
                />
                <TextField
                  label="Password"
                  variant="filled"
                  type="password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <div>
                <Button variant="contained" onClick={handleReset}>
                  Reset
                </Button>
                <Button type="submit" variant="contained" color="primary">
                    Signup
                </Button>
                </div>
              </form>
            </Modal>
          </ModalContainer>
        </>
      ) : (<>{history.push("/home")}</>)
    }
    </Container>
  );
}

function Notify_success(){
  store.addNotification({
    title: 'Dropbox',
    message: 'Credential(s) are correct',
    type: 'success',                         // 'default', 'success', 'info', 'warning'
    container: 'top-right',                // where to position the notifications
    animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
    animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
    dismiss: {
      duration: 3000
    }
  })
}

function Notify_error(){
  store.addNotification({
    title: '',
    message: 'The given credential is not correct. Please get in touch with the admin',
    type: 'warning',                         // 'default', 'success', 'info', 'warning'
    container: 'top-right',                // where to position the notifications
    animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
    animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
    dismiss: {
      duration: 3000
    }
  })
}


