import React from 'react';
import { Box } from './Box';
import './App.css';

function App() {
  const animals = [{ commomname: 'Lion', scientificname: 'Panthera Leo', race: 'Big Cat', zone: 'Jungle', image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg' }, { commomname: 'Mountain Gorila', scientificname: 'Gorilla', race: 'Monkey', zone: 'Mountain', image: 'https://files.worldwildlife.org/wwfcmsprod/images/HERO_Mountain_Gorilla_Silverback_WW22557/hero_full/4bx23i9jg0_Mountain_Gorilla_Silverback_WW22557.jpg' }, { commomname: 'Eagle', scientificname: 'Accipitridae', race: 'Bird', zone: 'Tall forests', image: 'https://images.theconversation.com/files/414508/original/file-20210804-17-1qovgvx.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip' }];

  return <div>
    <h1>Lista de Animales</h1>
    {animals.map((animal) => <Box commomname={animal.commomname} scientificname={animal.scientificname} race={animal.race} zone={animal.zone} image={animal.image} />)}
  </div>;
}


export default App;
