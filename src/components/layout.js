import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import "./layout.css";
import Header from './Globals/Header';
import Footer from './Globals/Footer';

const Layout = ({ children }) => (
<>
<Header />
{children}
<Footer />
</>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
