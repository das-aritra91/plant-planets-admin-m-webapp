import React from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import Image from '../../images/1.jpg';
import '../css/Home.css';
import { motion } from 'framer-motion';
import { animationThree } from '../../Animations/Page-Transition-animation';

const Section = styled.section`
  background: url(${({ image }) => image && image}) center;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: -10px;
`;

const Container = styled.div``

export default function Home(){
  //alert((localStorage.getItem('admin_logged') === null))
  const history = useHistory();

  const check_local_storage = (localStorage.getItem('admin_logged') === null) ? true: false
  return ( 
    <>
      {
        check_local_storage ? (history.push("/"))
        :
        (<motion.div
          initial='out'
          animate='end'
          exit='out'
          variants={animationThree}
        >
        <Common image={Image}/>
        </motion.div>)
      }
    </>);
};

function Common({image}){
  return(
      <Section image={image}>
      <Container className="container-styled-div">
        <h1>Home</h1>
        <p>desc</p>
        <Functionality/>
      </Container>
    </Section>
  )
}

function Functionality(){
  return(<div>home page</div>)
}

