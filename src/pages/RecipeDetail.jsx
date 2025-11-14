import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "./Firebase";
import { Container, Card, Spinner, Button } from "react-bootstrap";

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); // for navigation
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false); // loading state for delete

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const docRef = doc(db, "recipes", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setRecipe({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error(" Recipe not found");
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      try {
        setDeleting(true);
        await deleteDoc(doc(db, "recipes", id));
        alert(" Recipe deleted successfully!");
        navigate("/list");
      } catch (error) {
        console.error(" Error deleting recipe:", error);
        alert("Failed to delete recipe. Check console.");
      } finally {
        setDeleting(false);
      }
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="success" />
      </div>
    );
  }

  if (!recipe) {
    return <h3 className="text-center mt-5 text-danger">Recipe not found.</h3>;
  }

  return (
    <Container className="mt-5">
      <Card className="shadow-lg border-0 p-4" style={{ borderRadius: "15px" }}>
        {recipe.imageUrl && (
          <Card.Img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="mb-4"
            style={{
              height: "300px",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />
        )}
        <Card.Body>
          <Card.Title className="fw-bold  fs-3 mb-3" style={{ color: '#F49C19' }}>
            {recipe.title}
          </Card.Title>
          <Card.Subtitle className="mb-3 text-muted">
            🕒 {recipe.cookingTime} mins | 📂 {recipe.category}
          </Card.Subtitle>
          <Card.Text>
            <strong>Ingredients:</strong>
            <br />
            {recipe.ingredients}
          </Card.Text>
          <Card.Text>
            <strong>Instructions:</strong>
            <br />
            {recipe.instructions}
          </Card.Text>

          <div className="d-flex gap-2 mt-3">
            <Link to="/list">
              <Button style={{ border: '1px solid #F49C19', background: 'none', color: '#F49C19' }}> Back to Recipes</Button>
            </Link>

            <Button
              variant="primary"
              onClick={() => navigate(`/edit/${id}`, { state: recipe })}
            >
              Edit Recipe
            </Button>


            <Button
              variant="danger"
              onClick={handleDelete}
              disabled={deleting}
            >
              {deleting ? "Deleting..." : " Delete Recipe"}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default RecipeDetail;
