import React from 'react';

interface FuncionalProps {
    commomname:string;
    scientificname:string;
    race:string;
    zone:string;
    img:string;
}

export const Funcional:React.FC<FuncionalProps> = ({commomname, scientificname, race, zone, img}) => {
    return <div>
        <ul>
         <li>Commomname: {commomname}</li>
         <li>Scientificname: {scientificname}</li>
         <li>Race: {race}</li>
         <li>Zone: {zone}</li>
         <li>Image {img}</li>
        </ul>
    </div>
}