import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Component/Share/Header/Header';
import Footer from '../../Component/Share/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;