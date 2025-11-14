import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./Firebase";
import { Link } from "react-router-dom";


function Input() {


  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    imageUrl: "",
    cookingTime: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "recipes"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      alert(" Recipe added successfully!");
      setFormData({
        title: "",
        ingredients: "",
        instructions: "",
        imageUrl: "",
        cookingTime: "",
        category: "",
      });
    } catch (error) {
      console.error(" Error adding recipe:", error);
      alert("Error adding recipe. Check console.");
    }
  };


  return (
    <div className="inputt">
      <Container className="d-flex justify-content-center ">
        <Card style={{ width: "50%", padding: "2rem", boxShadow: "0 0 20px #ccc", marginTop: '50px', marginBottom: '50px' }}>
          <h3 className=" addrec text-center mb-4  fw-bold">
            Add a New Recipe
          </h3>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Recipe Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter recipe title"
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
                    placeholder="e.g. Dessert, Main Course"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Cooking Time (minutes)</Form.Label>
                  <Form.Control
                    type="number"
                    name="cookingTime"
                    value={formData.cookingTime}
                    onChange={handleChange}
                    placeholder="e.g. 30"
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
                placeholder="List ingredients separated by commas"
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
                placeholder="Write step-by-step instructions"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="Paste an image link"
              />
            </Form.Group>

            <div className="text-center ">

              < Button type="submit" size="lg" className="But mx-3"            >
                Add Recipe
              </Button>

              <Link to={'/list'}>
                <Button type="submit" size="lg" className="But"            >
                  View Recipe
                </Button>
              </Link>
            </div>
          </Form>
        </Card>
      </Container >
    </div >
  );
}

export default Input;
