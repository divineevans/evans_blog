import React from 'react';
import { Link } from 'react-router-dom'

import Slick from 'react-slick';
import styles from './slider.module.css'

const SliderTemplates = (props) =>{
    let template = null;
    const settings = {
        dots:true,
        infinite:true,
        arrows:false,
        speed:500,
        slideToShow:1,
        slidesToScroll:1,
        ...props.settings
    }
    let data = props.data;
    let type = props.type
    switch(type){
        case ('featured'):
            template = data.map( (item,i) => {
                return(
                    <div key={i}>
                       <div className={styles.featured_item}>
                           <div className={styles.featured_image}
                                style={{
                                    background:`url(../images/articles/${item.image})`
                                }}>
                           </div>
                           <Link to={`/articles/${item.id}`}>
                               <div className={styles.featured_caption}>
                                  {item.title} 
                               </div>
                           </Link>
                        
                        </div> 

                    </div>
                )
            })
            break;
        default:
            template=null;
    }

    return(
       <Slick {...settings}>
           {template}
       </Slick>
    )
}

export default SliderTemplates;