import React from "react";

import "./layout.css";
import { Helmet } from "react-helmet";
import Header from './Globals/Header';
import Footer from './Globals/Footer';

const Layout = ({ children }) => (
<>
<Helmet>
<link href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&family=Yanone+Kaffeesatz&display=swap" rel="stylesheet"></link>
</Helmet>
<Header />
{children}
<Footer />
</>
);

export default Layout
