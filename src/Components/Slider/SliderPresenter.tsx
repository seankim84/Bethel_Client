import React from 'react';
import data from '../data';

const SliderPresenter:React.SFC  = () => {
    
    return (
        <div>
            {data.properties.map(proper =>
                <div key={proper.index}>
                    <img style={{width:"30vw", height:"30vh"}} src={proper.picture} />
                </div>
                )}
        </div>
    );
}

export default SliderPresenter