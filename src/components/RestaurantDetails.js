import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import ReviewForm from "./ReviewForm";

function RestaurantDetails () {
    const [ currentResto, setCurrentResto ] = useState({})
    const { id } = useParams()

    useEffect(() => {
      fetch(`http://localhost:9292/restaurants/${id}`)
      .then(res => res.json())
      .then(resto => {
      setCurrentResto(resto)
      })
    }, [])
    return (
    <div>
        <img src={currentResto.image_url} />
        <h3>Restaurant: {currentResto.name}</h3>
        <p>Description: {currentResto.description}</p>
        <h1>Average Star Rating: </h1>
        <ReviewForm restaurant={currentResto} />
    </div>
    )
}

export default RestaurantDetails;