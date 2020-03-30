import React from 'react';
import './styles/App.css';
import Tarjeta from './components/Tarjeta';
import mesa from './assets/imagemesa.jpg';
import sillon from './assets/imagesillones.jpg';
import silla from './assets/imagesilla.jpg';
import image from './assets/image.jpg';


const App = () => {
  return (
    <div className="Main">

      <Tarjeta nombre="Coombes" precio="$2,600" imagen={sillon}/>
      <Tarjeta nombre="Keeve Set" precio="$590" imagen={image}/>
      <Tarjeta nombre="Penemille" precio="$120" imagen={silla}/>
      <Tarjeta nombre="Blanko" precio="$90" imagen={mesa}/>

    </div>
  );
}

export default App;
