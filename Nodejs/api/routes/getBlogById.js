const express = require("express");
const router = express.Router();
const connection = require("../databse/sql"); 


router.get("/:id", async (req, res) => {
  const blogId = req.params.id; // Get the blog ID from the URL parameters

  try {
    const query = "SELECT * FROM Blog WHERE id = ?"; 
    connection.query(query, [blogId], (err, result) => {
      if (err) {
        console.error("Error fetching blog:", err);
        res.status(500).json({ error: "Failed to fetch the blog" });
      } else {
        if (result.length === 0) {
          res.status(404).json({ error: "Blog not found" });
        } else {
          const blog = result[0]; 
          res.json(blog);
        }
      }
    });
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).json({ error: "Failed to fetch the blog" });
  }
});

module.exports = router;
