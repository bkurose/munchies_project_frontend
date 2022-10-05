import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function RestaurantCards ({ restaurant, handleCardClick }) {
    return (
        <CardGroup>
          <Card onClick={() => handleCardClick(restaurant.id)}>
            <Card.Img variant="top" src={restaurant.image_url} />
            <Card.Body>
              <Card.Title>{restaurant.name}</Card.Title>
              <Card.Text>
               maybe do top review here 
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{restaurant.rating}</small>
            </Card.Footer>
            
          </Card>

          </CardGroup>
    )
}

export default RestaurantCards;