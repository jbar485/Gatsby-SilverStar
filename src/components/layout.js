import React from "react";

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

export default Layout
