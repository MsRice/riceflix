import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import React, { useRef, useState } from 'react';
import Thumbnail from './Thumbnail';


const Category = ({title , movies , setMovie}) => {
    const rowRef = useRef(null)
    const [isMoved , setIsMoved] = useState(false)

    function handleClicked(direction){
        setIsMoved(true)

        if(rowRef.current){
            const {scrollLeft , clientWidth} = rowRef.current

            const scrollTo =
                direction=== 'left'
                    ? scrollLeft - clientWidth 
                    : scrollLeft + clientWidth

            rowRef.current.scrollTo({left: scrollTo , behavior : 'smooth'})
        }
    }
  
    return (
        <div className='category__container'>
            <h1>{title}</h1>
            <div className='movies__container--wrapper'>
                <ChevronLeftIcon className={`category__arrow arrow-left ${!isMoved && 'hidden'} `} onClick={() => handleClicked("left")}/>
                <div className='movies__container' ref={rowRef}>
                    {movies.map((movie) =>

                        <Thumbnail movie={movie} setMovie={setMovie}/>

                    )}
            
                </div>
                <ChevronRightIcon className='category__arrow arrow-right ' onClick={() => handleClicked("right")}/>


            </div>
        </div>
            
       
    );
}

export default Category;
