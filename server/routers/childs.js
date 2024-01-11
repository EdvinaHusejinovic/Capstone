import { Router } from "express";
import Child from "../models/Child.js";

const router = Router();

// Create Child route handles "/child/"
router.post("/", async (request, response) => {
  try {
    const newChild = new Child(request.body);

    const data = await newChild.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all Child route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Child.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single Child by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Child.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Delete a Child by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Child.findByIdAndRemove(request.params.id, {});

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Update a single Child by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Child.findByIdAndUpdate(
      request.params.id, //find the record
      {
        //provide the new data to update the record with
        $set: {
          name: body.name,
          age: body.age,
          gender: body.gender,
          grade: body.grade,
          activities: body.activities
        }
      },
      {
        //return new updated record
        new: true
      }
    );

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
