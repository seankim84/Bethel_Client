import React from 'react';
import data from '../data';

const SliderPresenter:React.SFC  = () => {
        return (
            <div>
            {data.properties.map(proper =>
                    <img key={proper.index} style={{width:"20vw", height:"auto"}} src={proper.picture} />
                )}
            </div>
        )
            
}

export default SliderPresenter