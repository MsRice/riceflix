import React from 'react';
import { useParams } from 'react-router-dom';


const Tv = () => {

const { id } = useParams()
console.log(id)

    return (
        <div>
            <div className='movie__trailer--wrapper'>

            </div>
        </div>
    );
}

export default Tv;
