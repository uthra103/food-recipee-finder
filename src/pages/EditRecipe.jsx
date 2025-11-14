import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./Firebase";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import './input.css'
function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    imageUrl: "",
    cookingTime: "",
    category: "",
  });

  useEffect(() => {
    if (location.state) {
      setFormData(location.state);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "recipes", id), { ...formData });
      alert("Recipe updated successfully!");
      navigate(`/recipe/${id}`);
    } catch (error) {
      console.error(" Error updating recipe:", error);
      alert("Failed to update recipe. Check console.");
    }
  };

  return (
    <div className="inputt">
      <Container className="d-flex justify-content-center ">
        <Card style={{ width: "50%", padding: "2rem", boxShadow: "0 0 20px #ccc", marginTop: '50px', marginBottom: '50px' }}>
          <h3 className="addrec text-center mb-4  fw-bold"> Edit Recipe</h3>
          <Form onSubmit={handleUpdate}>
            <Form.Group className="mb-3">
              <Form.Label>Recipe Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Cooking Time (mins)</Form.Label>
                  <Form.Control
                    type="number"
                    name="cookingTime"
                    value={formData.cookingTime}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Instructions</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="text-center">
              <Button type="submit" style={{ backgroundColor: '#F49C19', border: 'none' }}>
                Update Recipe
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default EditRecipe;
