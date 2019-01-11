import React from 'react';
import Coverflow from 'react-coverflow';
import data from '../data';

export default class SliderContainer extends React.Component {

     render(){
        return (
            <div>  
                 <Coverflow
                    media={{
                        background: "#e1e1e1",
                        height: "75vh",
                        width: "80vw",
                    }}
                    displayQuantityOfSide={1}
                    navigation={true}
                    enableHeading={true}
                    
                    >
                    {data.properties.map(proper => <img key={proper.index} style={{width:"60vw%", height:"40vh"}} src={proper.picture} alt={proper.description} /> )}
                </Coverflow>
            </div>
        )
    }
}