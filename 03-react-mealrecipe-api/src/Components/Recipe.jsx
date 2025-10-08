import React, { useEffect, useState } from 'react'
import axios from "axios"
import './Recipe.css'

const Recipe = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
          setItems(response.data.meals)
        } catch (error) {
          console.log(error)
          setError(error.message)
        } finally {
          setLoading(false)
        }
      }
      fetchData();
    }, [])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    const itemslist = items.map(({ strMeal, strMealThumb, idMeal }) => {
      return (
        <section className="card" key={idMeal}>
          <img src={strMealThumb} alt={strMeal}/>
          <section className="content">
            <p>{strMeal}</p>
            <p>#{idMeal}</p>
          </section>
        </section>
      );
    });
  
    return <div className="items-container">{itemslist}</div>;
}

export default Recipe;