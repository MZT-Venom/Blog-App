const express = require("express");
const router = express.Router();
const multer = require("multer");
const connection = require("../databse/sql");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

var upload = multer({ storage });
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const day = String(currentDate.getDate()).padStart(2, "0");
const formattedDate = `${year}-${month}-${day}`;

router.post("/", upload.single("cover"), (req, res) => {
  const title = req.body.title;
  const category = req.body.category;
  const subCategory = req.body.subCategory;
  const description = req.body.description;
  const authorName = req.body.authorName;
  const file = req.file.filename;
  // console.log(title, category, subCategory, description, authorName);

  const data = {
    title: title,
    category: category,
    subCategory: subCategory,
    description: description,
    authorName: authorName,
    createdAt: formattedDate,
    cover: file,
  }
  connection.query("INSERT into Blog SET ?", data, (err, result) => {
    if (err) {
        console.error("Error storing data:", err);
        throw err;
    } else {
        console.log("Data stored....");
        res.redirect("http://localhost:3000");
    }
});

})

module.exports = router;
