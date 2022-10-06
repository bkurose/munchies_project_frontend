import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

function TopRestaurants ({restaurant}) {
    const [ currentResto, setCurrentResto ] = useState({})
    const { id } = useParams()
    const [reviews, setReviews] = useState([])
    const [avReview, setAvReview] = useState("")

    useEffect(() => {
      fetch(`http://localhost:9292/restaurants/${id}`)
      .then(res => res.json())
      .then(resto => {
      setCurrentResto(resto)
      })
    }, [])
    
    useEffect(() => {
    fetch(`http://localhost:9292/restaurants/${id}/allreviews`)
      .then(res => res.json())
      .then(reviews => setReviews(reviews))
    }, [])

    useEffect(()=> {
    fetch(`http://localhost:9292/restaurants/${id}/averagerating`)
      .then(res => res.json())
      .then(data => setAvReview(data))
    }, [])

    function munchiesAmount (expr) {
      if (expr == 1) 
        { return <><span>🍴</span><span style={{opacity: "0.2"}}>🍴🍴🍴🍴</span></>}
        else if (expr == 2)
          { return <><span>🍴🍴</span><span style={{opacity: "0.2"}}>🍴🍴🍴</span></>}
        else if (expr == 3)
          { return <><span>🍴🍴🍴</span><span style={{opacity: "0.2"}}>🍴🍴</span></>}
        else if (expr == 4)
          { return <><span>🍴🍴🍴🍴</span><span style={{opacity: "0.2"}}>🍴</span></>}
        else
          { return <><span>🍴🍴🍴🍴🍴</span></>}
    }

    return (
    <div>
        <img src={restaurant.image_url} />
        <h3>Restaurant: {restaurant.name}</h3>
        <p>Description: {restaurant.description}</p>
        <h1>Average Munchie Rating: {munchiesAmount(avReview)}</h1>
        <ReviewForm restaurant={restaurant} />
        {reviews.map((review) => <ReviewCard restaurant={restaurant} review={review}/>)}
    </div>
    )
}

export default TopRestaurants;