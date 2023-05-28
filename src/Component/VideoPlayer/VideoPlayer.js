import ProgressBar from "@ramonak/react-progress-bar";
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import "./VIdeoPlayer.css";


const VideoPlayer = () => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [watchedVideos, setWatchedVideos] = useState([]);
    const [message, setMessage] = useState([]);
    const [notes, setNote] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch('videos.json')
            .then(res => res.json())
            .then(data => {
                setVideos(data);
                if (data.length > 0) {
                    setSelectedVideo(data[0]);
                }
            });
    }, []);



    const handleVideoClick = (videoId, index) => {
        const selected = videos.find(video => video.id === videoId);
        setSelectedVideo(selected);
        setWatchedVideos(prevWatchedVideos => [...prevWatchedVideos, videoId]);

    };

    const watchedVideoCount = watchedVideos.length;
    const totalVideoCount = videos.length;
    const complete = watchedVideoCount / (totalVideoCount + 1) * 100


    // ============= For Note ==============

    const onSubmit = data => {
        // console.log(data)
        const url = `https://virtual-learn.onrender.com/addNote`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                reset()
                if (result) {
                    setMessage(result.message)
                    setNote(prevNotes => [...prevNotes, data]);
                }
            }
            )
    };
    useEffect(() => {
        fetch('https://virtual-learn.onrender.com/allNote')
            .then(res => res.json())
            .then(data => {
                setNote(data.result)
                // console.log(data, "noteee")
            });
    }, []);


    //============ For Bookmark ==============

    const handleBookmark = (bookmarkId) => {
        // console.log(bookmarkId, "BookmarkId")
        const bookmarVideo = videos.find(video => video.id == bookmarkId);

        const url = `https://virtual-learn.onrender.com/addBookmark`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(bookmarVideo)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result, "Bookmark  result")
                if (result) {

                    setBookmark(prevNotes => [...prevNotes, bookmarVideo]);
                }
            }
            )
    }

    useEffect(() => {
        fetch('https://virtual-learn.onrender.com/allBookmark')
            .then(res => res.json())
            .then(data => {
                setBookmark(data.result)
                console.log(data, "Bookmark data")
            });
    }, []);


    return (
        <div className="videoContainer">
            <div>
                <div className='videoSection mt-8'>

                    <iframe className='videoPlayer' src={selectedVideo?.videoUrl} frameBorder="0" allowfullscreen ></iframe>

                </div>
                <h3 className='videoTitle'>{selectedVideo?.title}</h3>

                <button className="btn btn-xs mt-3" onClick={() => handleBookmark(selectedVideo?.id)}>Bookmark</button>
                <p className="">{bookmark?.message}</p>
            </div>

            <div className="VideodownSection">

                {/*------------ Pill--------- */}
                <div>
                    <div className="border-b border-gray-200 dark:border-gray-700">
                        <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
                            <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-lg whitespace-nowrap text-gray-500 hover:text-blue-600  active" id="tabs-with-icons-item-1" data-hs-tab="#tabs-with-icons-1" aria-controls="tabs-with-icons-1" role="tab">
                                Add Note
                            </button>
                            <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-12 inline-flex items-center gap-2 border-b-[3px] border-transparent text-lg whitespace-nowrap text-gray-500 hover:text-blue-600" id="tabs-with-icons-item-2" data-hs-tab="#tabs-with-icons-2" aria-controls="tabs-with-icons-2" role="tab">

                                All Note
                            </button>
                            <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-lg whitespace-nowrap text-gray-500 hover:text-blue-600" id="tabs-with-icons-item-3" data-hs-tab="#tabs-with-icons-3" aria-controls="tabs-with-icons-3" role="tab">

                                Resource
                            </button>
                            <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-lg whitespace-nowrap text-gray-500 hover:text-blue-600" id="tabs-with-icons-item-4" data-hs-tab="#tabs-with-icons-4" aria-controls="tabs-with-icons-4" role="tab">

                                Bookmark
                            </button>


                        </nav>
                    </div>

                    <div className="mt-3">
                        <div id="tabs-with-icons-1" role="tabpanel" aria-labelledby="tabs-with-icons-item-1">

                            <div className='reviewContainer '>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input
                                        className='inputStyle'
                                        placeholder='Note Title'
                                        // value={user?.displayName}
                                        {...register("title", { required: true, maxLength: 200 })}
                                    /> <br />


                                    <textarea
                                        className='textarea'
                                        placeholder='Enter Your Note'

                                        {...register("description",
                                            {
                                                maxLength: 1250, required: {
                                                    value: true,
                                                    message: "Description is required"
                                                },
                                            })}
                                    /><br />
                                    <label className="label">
                                        {errors.description?.type === 'required' && <span className="label-text-alt text-danger">{errors.description.message}</span>}
                                    </label>

                                    <p className="text-green-500 mb-6">{message}</p>

                                    <input
                                        className='addComment'
                                        type="submit"
                                        value="Add Note"
                                    />

                                </form>
                            </div>
                        </div>


                        <div id="tabs-with-icons-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-icons-item-2">


                            {
                                notes?.map((note, index) =>

                                    // console.log(note.title)
                                    <div className="nodeList shadow-1xl">
                                        <h3>{note?.title}</h3>
                                        <p>{note?.description}</p>
                                    </div>
                                )
                            }


                        </div>
                        <div id="tabs-with-icons-3" className="hidden resource" role="tabpanel" aria-labelledby="tabs-with-icons-item-3"
                        >

                            <div>
                                <h3>GitHub Repository</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    GitHub: https://github.com/shohidul-jaman-anik
                                </p>
                            </div>
                            <div>
                                <h3>Leson Related Importent Link</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    w3school : https://www.w3schools.com/REACT/DEFAULT.ASP
                                </p>
                            </div>
                        </div>

                        <div id="tabs-with-icons-4" className="hidden " role="tabpanel" aria-labelledby="tabs-with-icons-item-4"

                        >

                            {
                                bookmark?.map(b => <div className="nodeList shadow-1xl">
                                    <h3>{b?.title}</h3>
                                </div>)
                            }

                        </div>

                    </div>

                </div>

                {/*---------------- Accrodion------------ */}


                <div className="hs-accordion-group">
                    <div className="hs-accordion active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                        <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                            <span className="text-2xl">Module-1</span>

                            <ProgressBar
                                completed={watchedVideoCount / totalVideoCount * 100}
                                bgColor="#6D67E4"
                                className='mal'
                                baseBgColor="rgb(191, 191, 255)"
                                height="15px"
                                width='250px'
                                labelColor="#ffffff"
                                labelSize="10px"
                                animateOnRender
                                maxCompleted={100}
                                customLabel={`${watchedVideoCount / totalVideoCount * 100}%`}
                            />
                            <svg className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <svg className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                        <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                            {
                                videos.map(video => (
                                    <div
                                        className={`eatchVideo ${watchedVideos.includes(video.id) ? '' : 'disabled'}`}
                                        onClick={() => handleVideoClick(video.id)}
                                    >
                                        {video.title}
                                    </div>
                                ))
                            }
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default VideoPlayer;