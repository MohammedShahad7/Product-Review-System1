import mongoose from "mongoose";

/* ----------------- Product Schema ----------------- */
const productSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Product’s display name
  category: { 
    type: String, 
    required: true, 
    enum: ["electronics", "fashion", "home", "books"] // Product classification
  },
  price: { 
    type: Number, 
    required: true, 
    min: 1 // Price in INR, minimum 1
  },
  inStock: { 
    type: Boolean, 
    default: true // Availability of product
  },
  releaseDate: { 
    type: Date // Optional launch date
  },
  reviews: [
    { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Review" // References Review documents
    }
  ]
});

const Product = mongoose.model("Product", productSchema);

/* ----------------- Review Schema ----------------- */
const reviewSchema = new mongoose.Schema({
  reviewerName: { type: String, required: true }, // Name of reviewer
  rating: { 
    type: Number, 
    required: true, 
    min: 1, 
    max: 5 // Rating between 1–5
  },
  comment: { type: String }, // Optional text feedback
  createdAt: { 
    type: Date, 
    default: Date.now // Auto timestamp
  },
  product: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Product", 
    required: true // Product being reviewed
  }
});

const Review = mongoose.model("Review", reviewSchema);

/* ----------------- Exports ----------------- */
export { Product, Review };
