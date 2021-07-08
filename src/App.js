import React from "react";

const foodLive = [
  {
    id:1,
    name: "kimchi",
    image: "https://cdn.pixabay.com/photo/2019/07/25/01/35/kimchi-4361465_960_720.jpg",
    rating: 5,
  },
  {
    id:2,
    name: "raman",
    image: "https://cdn.pixabay.com/photo/2019/11/23/15/26/ramen-4647408_960_720.jpg",
    rating: 4.9,
  },
  {
    id:3,
    name: "kimbap",
    image: "https://cdn.pixabay.com/photo/2019/01/25/15/46/riceroll-3954777_960_720.jpg",
    rating: 4.8,
  },
  {
    id:4,
    name: "chicken",
    image: "https://cdn.pixabay.com/photo/2016/11/29/05/32/rooster-1867562_960_720.jpg",
    rating: 4.7,
  },
  {
    id:5,
    name: "nangman",
    image: "https://cdn.pixabay.com/photo/2017/07/10/06/04/korean-food-2489214_960_720.jpg",
    rating: 4.6,
  },
]


function Food({ name, picture }){ //props(매개변수).fav = { fav } 두게는 같음
  return (
    <div>
      <h2>i like {name}</h2>
      <img src={picture} alt={name}/>
    </div>
  )
}

function App() {
  return (
    <div>
      {foodLive.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
    
  );
}

export default App;
