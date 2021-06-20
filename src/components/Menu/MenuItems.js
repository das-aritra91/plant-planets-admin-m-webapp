// export const MenuItems = [
//     {
//         title: "Home",
//         url: "/Home",
//         cName: 'nav-links'
//     },
//     {
//         title: "Manage Tree Types",
//         url: "/ManageTreeTypes",
//         cName: 'nav-links'
//     },
//     {
//         title: 'Manage Trees',
//         url: '#',
//         cName: 'nav-links'
//     },
//     {
//         title: 'Sign out',
//         url: '#',
//         cName: 'nav-links-mobile'
//     }
// ]

import Home from "../pages/Home";
import ManageTreeTypes from "../pages/Manage-Tree-Types";
import ManageTrees from "../pages/Manage-Trees";
import Login from "../pages/Login";
import Logout from "../pages/Logout";

export const menuItems = [
  {
    menuTitle: "",
    pageURL: "/",
    component: Login
  },
    {
      menuTitle: "Home",
      pageURL: "/home",
      component: Home
    },
    {
      menuTitle: "Manage Tree Types",
      pageURL: "/managetreetypes",
      component: ManageTreeTypes
    },
    {
      menuTitle: "Manage Trees",
      pageURL: "/managetrees",
      component: ManageTrees
    }
    ,
    {
      menuTitle: "Logout",
      pageURL: "/logout",
      component: Logout
    }
  ];