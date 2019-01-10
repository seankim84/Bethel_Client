import React from 'react';
import Coverflow from 'react-coverflow';
import data from '../data';

export default class SliderContainer extends React.Component {
     render(){
        return (
            <div>  
                 <Coverflow
                    media={{
                        height: "80vh",
                        width: "100vw",
                    }}
                    displayQuantityOfSide={2}
                    navigation={true}
                    enableHeading={false}
                    >
                    {data.properties.map(proper => <img onClick={""} key={proper.index} style={{width:"20vw", height:"auto"}} src={proper.picture} /> )}
                </Coverflow>
            </div>
        )
    }
}