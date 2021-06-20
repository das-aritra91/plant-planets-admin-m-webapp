import React, { useState } from "react";
import styled, { css } from "styled-components";
import '../css/modal.css';

const Container = styled.div``;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  background: #fff;
  position: absolute;
  top: 50px;
  right: calc(50% - 100px);
  border: 1px solid #000;
  padding: 20px;
  min-height: 200px;
`;

const Login = props => {
  const [isOpen, setOpen] = useState(true);
  const { history } = props;
  return (
    <Container>
      {isOpen ? (
        <>
          <ModalContainer className="modal-container">
            <Modal>
                <p>
                    I am a modal, I want to be special.
                </p>
               <p>
                    <button onClick={() => setOpen(!isOpen)}>Close Modal</button>
                </p> 
            
            </Modal>
          </ModalContainer>
        </>
      ) : (<>{history.push("/home")}</>)
    }
    </Container>
  );
}

export default Login;
