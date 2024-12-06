import React from 'react';
import photo_polin from '../assests/Polin.jpg'

const Related = ({title}) => {
    console.log(title)
    return (
        <div className='related__details--wrapper'>
                    <h1>Related Title</h1>
                    <div className='related__container'>

                        {/* { relatedTitles?.map((elem) => { */}
                                <div className='related__movie--wrapper'>
                                    <img 
                                        src= {photo_polin} 
                                        alt=""
                                        className='related__img' />
                                    <h1>{title.title}</h1>
                                </div>

                        {/* })} */}
                            
                           
                          
                    </div>
                </div>
    );
}

export default Related;
