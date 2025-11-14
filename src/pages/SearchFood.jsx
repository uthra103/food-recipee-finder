import React, { useState } from "react";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";


function SearchFood() {
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("");
  const data = useFetch(url);

  const handleSearch = () => {
    if (search.trim() === "") return;
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2 >Search <span>Any Dish</span></h2>


      <div style={{ display: "flex", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Search food name (ex: pasta,egg)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "70%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            backgroundColor: "#F49C19",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Search
        </button>


      </div>


      {!data && url && <p style={{ marginTop: "20px" }}>Loading...</p>}
      {data?.length === 0 && <p>No food found.</p>}


      {data && data[0] && (
        <div style={{ marginTop: "30px" }}>
          <h2 style={{ color: '#F49C19' }}>{data[0].strMeal}</h2>
          <h5>Category: {data[0].strCategory}</h5>
          <h5>Area: {data[0].strArea}</h5>

          <img
            src={data[0].strMealThumb}
            alt={data[0].strMeal}
            style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }}
          />

          <h3 style={{ marginTop: "20px" }}>Ingredients</h3>
          <ul>
            {Array.from({ length: 20 }).map((_, i) => {
              const ingredient = data[0][`strIngredient${i + 1}`];
              const measure = data[0][`strMeasure${i + 1}`];
              return (
                ingredient &&
                ingredient.trim() !== "" && (
                  <li key={i}>
                    {ingredient} — {measure}
                  </li>
                )
              );
            })}
          </ul>

          <h3>Instructions</h3>
          <p style={{ textAlign: "justify" }}>{data[0].strInstructions}</p>


          {data[0].strYoutube && (
            <>
              <h3 style={{ color: '#F49C19' }}>Watch on YouTube</h3>
              <a
                href={data[0].strYoutube}
                target="_blank"
                rel="noreferrer"
                style={{ color: "blue" }}
              >
                Click to watch video
              </a>
            </>
          )}
          <br /><br />

          <Link to={'/'}><button style={{ backgroundColor: '#F49C19', borderRadius: '10px', border: 'none', color: 'white' }} className="p-2">Back To Home</button></Link>






        </div>
      )
      }
    </div >
  );
}

export default SearchFood;

