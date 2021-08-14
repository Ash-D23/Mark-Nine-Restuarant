import React,{useState} from "react";
import './App.css';

const restaurantsDB = {
  Vegetarian: [
    {
      name: "Sangeetha",
      rating: "4/5"
    },
    {
      name: "Gupta Bhavan",
      rating: "3.5/5"
    },
    {
      name: "Punjabi Dhaba",
      rating: "3.5/5"
    },
    {
      name: "Singh Kitchen",
      rating: "3.5/5"
    },
    {
      name: "Indian Cusine",
      rating: "3.5/5"
    }
  ],

  NonVeg: [
    {
      name: "Barbeque Nation",
      rating: "5/5"
    },
    {
      name: "Currys N Crunch",
      rating: "4.5/5"
    }
  ],
  FastFood: [
    {
      name: "Dominos",
      rating: "4.5/5"
    },
    {
      name: "Burger King",
      rating: "3.5/5"
    }
  ]
};

function App() {

  const [selectedRestaurant, setRestaurant] = useState("Vegetarian");
  function genreClickHandler(genre) {
    setRestaurant(genre);
  }

  return (
    <div className="App">
    <h1> Restaurants Near you </h1>
    <p>
      Checkout my favourite Restaurants. Select type of restaurant
    </p>

    <div className="button-container">
      {Object.keys(restaurantsDB).map((genre) => (
        <button
          onClick={() => genreClickHandler(genre)}
          className="btn"
        >
          {genre}
        </button>
      ))}
    </div>
    <hr />

      <div className="cards">
        {restaurantsDB[selectedRestaurant].map((book) => (
          <div
            key={book.name}
            className="card"
          >
          <h4 class="card-title">{book.name}</h4>
          <p class="card-description">Reviews: {book.rating}</p>
          <a class="btn card-btn" href="">View</a>
          </div>
        ))}
      </div>
    </div>

  );
}

export default App;
