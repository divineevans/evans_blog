import React from 'react';

import NewsSlider from '../widgets/NewsSlider/slider';
import BlogsList from '../widgets/BLogsList/blogslist';
import VideosList from '../widgets/VideosList/videosList'

const Home = () =>{
    return(
        <div>
            <NewsSlider 
                type="featured"
                start={0}
                amount={5}
                settings={{
                    dots:false
                }}
            />
            <BlogsList
                type="card"
                loadmore={true}
                start={2}
                amount={3}
            />
            <VideosList 
                type="card"
                title={true}
                loadmore={true}
                start={0}
                amount={3}
            />

        </div>
    )
}

export default Home;