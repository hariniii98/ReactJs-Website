import React from 'react';
import './App.css';
import Cards from './Cards';

const Classic = () => {
    return (
        <>
        <div className="main_div">
            <div className="container_div media">
                <Cards 
                name='GENE KELLY'
                para='Classic movie quotes can have lot od definitons but in this site these are movie quotes taken from movies movies movies'
                imgsrc="https://source.unsplash.com/200x200/?men"
                />
                <Cards name="AUDREY"
                para="A fine copy of movie lines have been gathered here from classic movies to wet your movie apetite and to remind movies"
                imgsrc="https://source.unsplash.com/200x200/?women"
                />
            </div>
        </div>
        </>
    );
}

export default Classic;
