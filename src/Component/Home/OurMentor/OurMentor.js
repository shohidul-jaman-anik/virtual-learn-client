import React from 'react';
import "./OurMentor.css"

const OurMentor = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-4">Our Mentor
                  
                    </h1>
                    <p className='text-center text-1xl text-gray-900 mb-20'>Come and enjoy unlimited coding support, daily concept clear sessions
                        </p>
                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div class="p-4 md:w-1/3 flex">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0 ">
                                {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg> */}
                                <img src="https://i.ibb.co/vd0GSjJ/user-2.png" className='mentorImg' alt="" srcset="" />
                            </div>
                            
                            <div class="flex-grow pl-6">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Sarah Johnson</h2>
                                <p class="leading-relaxed text-base">Full-stack developer with a focus on Python, Django, and React. I have several years of industry experience and enjoy mentoring aspiring programmers. I can help you build robust web applications and provide guidance on best practices and software engineering principles.</p>
                                <a class="mt-3 text-indigo-500 inline-flex items-center">Read More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 flex">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg> */}
                                <img src="https://i.ibb.co/VJbwWKm/pexels-photo-2112728.webp" className='mentorImg' alt="" srcset="" />
                            </div>
                            <div class="flex-grow pl-6">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">David Rodriguez</h2>
                                <p class="leading-relaxed text-base">Front-end developer specializing in JavaScript, Angular, and Vue.js. I have a strong background in user interface design and a passion for creating interactive and visually appealing websites. Let's work together to improve your front-end skills and create amazing web experiences.</p>
                                <a class="mt-3 text-indigo-500 inline-flex items-center">Read More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 flex">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg> */}
                                <img src="https://i.ibb.co/GTchynd/download.jpg" className='mentorImg' alt="" srcset="" />
                            </div>
                            <div class="flex-grow pl-6">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Emily Chen</h2>
                                <p class="leading-relaxed text-base">Data scientist and machine learning enthusiast. I can assist you in understanding complex algorithms, implementing data models, and applying machine learning techniques. Whether you're a beginner or looking to advance your skills, I'm here to help you navigate the world of data science.</p>
                                <a class="mt-3 text-indigo-500 inline-flex items-center">Read More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurMentor;