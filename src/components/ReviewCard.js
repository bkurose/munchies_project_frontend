import React, {useEffect, useState} from "react";
import Card from 'react-bootstrap/Card';
import UpdateReview from "./UpdateReview";
import Button from 'react-bootstrap/Button';


function ReviewCard ({review, restaurant}) {
    const [ reviewUser, setReviewUser ] = useState({})


    useEffect(()=>{
        fetch(`http://localhost:9292/users/${review.user_id}`)
        .then(res => res.json())
        .then(user => setReviewUser(user))
    }, [])

    function handleDelete () {
        fetch(`http://localhost:9292/reviews/${review.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            }
          })
          alert("Review Deleted!")
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{review.munchie_rating}🍴 munchies!</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Review by: {reviewUser.first_name}</Card.Subtitle>
                <Card.Text>
                    {review.review_text}
                </Card.Text>
                <UpdateReview review={review} restaurant={restaurant} user={reviewUser} />
                <Button variant="outline-dark" onClick={handleDelete}>Delete?</Button>
            </Card.Body>
            
        </Card>
    )
}


export default ReviewCard;