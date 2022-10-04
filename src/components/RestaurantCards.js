import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function RestaurantCards ({restaurant}) {
    return (
        <CardGroup>
          <Card>
            <Card.Img variant="top" src= {restaurant.img} />
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