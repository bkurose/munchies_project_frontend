import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import ReviewCard from "./ReviewCard";

function RestaurantCards ({ restaurant, handleCardClick }) {
  const [topReview, setTopReview] = useState("")
  const [avReview, setAvReview] = useState("")
  
  useEffect(() => {
    fetch(`http://localhost:9292/restaurants/${restaurant.id}/topreview`)
      .then(res => res.json())
      .then(data => setTopReview(data))

  fetch(`http://localhost:9292/restaurants/${restaurant.id}/averagerating`)
      .then(res => res.json())
      .then(data => setAvReview(data))
  }, [])
  function munchiesAmount (expr) {
    if (expr == 1) 
        {return "🍴"}
        else if (expr == 2)
            {return "🍴🍴"}
       else if (expr == 3)
            {return "🍴🍴🍴"}
          
        else if (expr == 4)
           { return "🍴🍴🍴🍴"}
         
        else
            {return "🍴🍴🍴🍴🍴"}   }
  return (
       
          <Card onClick={() => handleCardClick(restaurant.id)}>
            <Card.Img id = "img" variant="top" src={restaurant.image_url} />
            <Card.Body>
              <Card.Title class = "text">{restaurant.name}</Card.Title>
              <Card.Text>
              {munchiesAmount (avReview)}
              </Card.Text>
              <div class = "text">
                Top Review
              </div>
            </Card.Body>
            <ReviewCard review={topReview} restaurant={restaurant} />
            <Card.Footer>
              <small ></small>
            </Card.Footer>
            
          </Card>

          
    )
}

export default RestaurantCards;