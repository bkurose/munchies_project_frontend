import React, {useState} from "react";
import Card from 'react-bootstrap/Card';


function RestaurantCards ({ restaurant, handleCardClick }) {
  const [topReview, setTopReview] = useState("")
  const [avReview, setAvReview] = useState("")
  
  fetch(`http://localhost:9292/restaurants/:${restaurant.id}/topreview`)
    .then(res => res.json())
    .then(data => setTopReview(data))

  fetch(`http://localhost:9292/restaurants/:${restaurant.id}/averagerating`)
    .then(res => res.json())
    .then(data => setAvReview(data))

  
  return (
       
          <Card onClick={() => handleCardClick(restaurant.id)}>
            <Card.Img variant="top" src={restaurant.image_url} />
            <Card.Body>
              <Card.Title>{restaurant.name}</Card.Title>
              <Card.Text>
              {topReview}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{avReview}</small>
            </Card.Footer>
            
          </Card>

          
    )
}

export default RestaurantCards;