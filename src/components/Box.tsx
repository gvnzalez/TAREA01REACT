import React from 'react';

interface BoxProps {
    commomname:string;
    scientificname:string;
    race:string;
    zone:string;
    image:string;
}

export class Box extends React.Component<BoxProps> {
    render() {
        const { commomname, scientificname, race, zone, image } = this.props;
        return <div className="flex-container"> 
         <div>
             <h3>Commomname: {commomname}</h3>
             <p>Scientificname: {scientificname}</p>
             <p>Race: {race}</p>
             <p>Zone: {zone}</p>
             <img src={image} width= '300px' height= '200px' alt='animal' /><b/>
         </div>
        </div>

    }
}