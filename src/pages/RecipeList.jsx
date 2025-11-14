import React, { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./Firebase";
import { Container, Row, Col, Card, Spinner, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";



function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");//search bar
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const q = query(collection(db, "recipes"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const fetchedRecipes = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecipes(fetchedRecipes);
      } catch (error) {
        console.error(" Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="success" />
      </div>
    );
  }




  // searchbar
  const filteredRecipes = recipes.filter((recipe) => {
    const search = searchTerm.toLowerCase();
    return (
      recipe.title.toLowerCase().includes(search) ||
      recipe.category.toLowerCase().includes(search)
    );
  });













  return (
    <Container className="mt-5">
      <h2 className="text-center  fw-bold mb-4" style={{ color: '#F49C19' }}>
        All Added Recipes
      </h2>



      {/* Search Bar */}
      <div className="d-flex justify-content-center mb-4">
        <FormControl
          type="text"
          placeholder="Search by recipe name or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "350px", marginRight: "10px" }}
        />

        <Button
          style={{ backgroundColor: "#F49C19", border: "none" }}
          onClick={() => setSearchTerm(searchTerm)}
        >
          Search
        </Button>
      </div>













      {recipes.length === 0 ? (
        <h5 className="text-center text-muted">No recipes found.</h5>
      ) : (
        <Row className="g-4">
          {filteredRecipes.map((recipe) => (
            <Col key={recipe.id} md={4}>
              <Link
                to={`/recipe/${recipe.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card
                  className="shadow-sm border-0 h-100"
                  style={{ borderRadius: "15px" }}
                >
                  {recipe.imageUrl ? (
                    <Card.Img
                      variant="top"
                      src={recipe.imageUrl}
                      alt={recipe.title}
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        borderTopLeftRadius: "15px",
                        borderTopRightRadius: "15px",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        height: "200px",
                        backgroundColor: "#e9ecef",
                        borderTopLeftRadius: "15px",
                        borderTopRightRadius: "15px",
                      }}
                      className="d-flex align-items-center justify-content-center text-muted"
                    >
                      No Image
                    </div>
                  )}
                  <Card.Body>
                    <Card.Title className="fw-bold" style={{ color: '#F49C19' }}>
                      {recipe.title}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {recipe.cookingTime} mins | 📂 {recipe.category}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      )}
      <br /><br />
      <div className="butt" style={{ marginLeft: '500px' }} >
        <Link to={'/'}>
          <Button className="mx-3 " style={{ backgroundColor: '#F49C19', border: 'none' }}>Back To Home</Button>
        </Link >
        <Link to={'/input'}>
          <Button style={{ backgroundColor: '#F49C19', border: 'none' }}> Add Recipee</Button>
        </Link >
      </div>

      <br /><br />

    </Container >

  );
}

export default RecipeList;
