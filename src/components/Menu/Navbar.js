import React from "react";
import "./Navbar-styles.css";
import { AnimatePresence } from 'framer-motion';
import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { menuItems } from './MenuItems';
import GlobalStyle from '../../globalstyles';
import styled from 'styled-components';
// import useSticky from "../../useSticky"

const useStyles = makeStyles({});
const Section = styled.section`
  overflow-x: hidden;
`;

export default function ButtonAppBar() {
  // const { isSticky, element } = useSticky()

  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* <Header sticky={isSticky}/> */}
      <Header />
      <Section>
      <GlobalStyle />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            {menuItems.map(menuItem => {
              const { menuTitle, pageURL, component } = menuItem;
              return (
                <Route key = {menuTitle} exact path={pageURL} exact component={component}/>
              );
            })}
          </Switch>
        </AnimatePresence>
      </Section>
    </div>
  );
}
