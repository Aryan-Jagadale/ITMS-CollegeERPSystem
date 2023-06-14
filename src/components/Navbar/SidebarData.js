import React from "react";
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
import * as RiIcons from "react-icons/ri";
import dashboard from "../../images/NavImages/dashbord.png";
import customer from "../../images/NavImages/customer.svg";
import invoice from "../../images/NavImages/invoice.svg";
import products from "../../images/NavImages/products.svg";
import inventory from "../../images/NavImages/inventory.svg";

const style = { color: "white" }
export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <img alt='dashboard' src={dashboard} />,
    // icon: <AiIcons.AiFillHome style={style}/>,
    iconClosed: <RiIcons.RiArrowDownSFill style={style} />,
    iconOpened: <RiIcons.RiArrowUpSFill style={style} />,
  },
  {
    title: 'Customer',
    path: '#',
    icon: <img alt='customer' src={customer} />,
    // icon: <IoIcons.IoIosPaper style={style}/>,
    iconClosed: <RiIcons.RiArrowDownSFill style={style} />,
    iconOpened: <RiIcons.RiArrowUpSFill style={style} />,

    subNav: [
      {
        title: 'Add Customer',
        path: '/add-customer',
        icon: <img alt='add-customer' src={customer} />,
        cName: 'sub-nav'
      },
      {
        title: 'View Customer',
        path: '/view-customer',
        icon: <img alt='view-customer' src={customer} />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Invoice',
    path: '#',
    icon: <img alt='invoice' src={invoice} />,
    // icon: <FaIcons.FaEnvelopeOpenText style={style}/>,
    iconClosed: <RiIcons.RiArrowDownSFill style={style} />,
    iconOpened: <RiIcons.RiArrowUpSFill style={style} />,

    subNav: [
      {
        title: 'Add Invoice',
        path: '/add-invoice',
        icon: <img alt='add-invoice' src={invoice} />
      },
      {
        title: 'View Invoice',
        path: '/view-invoice',
        icon: <img alt='view-invoice' src={invoice} />
      }
    ]
  },
  {
    title: 'Inventory',
    path: '#',
    icon: <img alt='inventory' src={inventory} />,
    // icon: <IoIcons.IoIosPaper style={style}/>,
    iconClosed: <RiIcons.RiArrowDownSFill style={style} />,
    iconOpened: <RiIcons.RiArrowUpSFill style={style} />,

    subNav: [
      {
        title: 'Add Inventory',
        path: '/add-inventory',
        icon: <img alt='add-inventory' src={inventory} />,
        cName: 'sub-nav'
      },
      {
        title: 'View Inventory',
        path: '/view-inventory',
        icon: <img alt='view-inventory' src={inventory} />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Product',
    path: '#',
    icon: <img alt='product' src={products} />,
    // icon: <FaIcons.FaEnvelopeOpenText style={style} />,
    iconClosed: <RiIcons.RiArrowDownSFill style={style} />,
    iconOpened: <RiIcons.RiArrowUpSFill style={style} />,

    subNav: [
      {
        title: 'Add Product',
        path: '/add-stock',
        icon: <img alt='add-product' src={products} />
      },
      {
        title: 'View Product',
        path: '/view-stock',
        icon: <img alt='view-product' src={products} />
      }
    ]
  }
];