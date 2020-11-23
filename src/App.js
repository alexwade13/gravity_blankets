import './App.css';
import products from './challenge_products.json'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


function App() {
  
  let items = []

  products.products.forEach((item, i) => {
    items.push(
      <Slide className="slide" index={i}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img 
          className="item" 
          src={item.images.[0].src}
          onMouseOver={e => (e.currentTarget.src =item.images.[1].src)}
          onMouseOut={e => (e.currentTarget.src = item.images.[0].src)}

        />
        <div className="name">{item.title.toUpperCase()}</div>
        <div className="price">From ${item.variants[0].price.split('.')[0]}</div> 
      </Slide>)
  })

  return (
    <div className="App">
      <header className="App-header">
        <CarouselProvider
          naturalSlideWidth={300}
          naturalSlideHeight={400}
          totalSlides={products.products.length}
          visibleSlides={4}
          infinite
        > 
          <div className="buttons">
            <ButtonBack className="button-back"/>
            <ButtonNext className="button-next"/>
          </div>
          <div className="title">SHOP BEST SELLERS</div>
          <Slider>
            {items}
          </Slider>
        </CarouselProvider>


      </header>
    </div>
  );
}

export default App;
