﻿import React, { useState, useEffect } from 'react';
import {Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from "axios";
export const VideoList = () => {

    const [success, setSuccess] = useState("");
    const [videos, setVideos] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('/api/videos');
                const json = await response.json();
                setVideos(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {success ? (
                <section>
                    <h1>You are loggedIn</h1>
                    <br />
                </section>
            ) : (
                <div>
                        {videos.map((video) => <li key={video.id}>
                            <div className="ratio ratio-16x9">
                                <iframe src={ video.videoLinks} title="YouTube video" allowfullscreen></iframe>
                            </div>
                        </li>)}
                        
                       
                        )}
                </div>
                    
            
                    
                )
            }
           
        </>
        )
}