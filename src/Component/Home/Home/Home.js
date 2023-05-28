import React from 'react';
import Banner from '../Banner/Banner';
import OurMentor from '../OurMentor/OurMentor';
import OurSuccess from '../OurSuccess/OurSuccess';
import OurCourses from '../OurCourses/OurCourses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurSuccess></OurSuccess>
            <OurCourses></OurCourses>
            <OurMentor></OurMentor>
        </div>
    );
};

export default Home;