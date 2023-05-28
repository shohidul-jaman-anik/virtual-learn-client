import React from 'react';
import Banner from '../Banner/Banner';
import OurMentor from '../OurMentor/OurMentor';
import OurSuccess from '../OurSuccess/OurSuccess';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurSuccess></OurSuccess>
            <OurMentor></OurMentor>
        </div>
    );
};

export default Home;