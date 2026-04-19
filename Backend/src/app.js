const express = require('express');
const multer = require('multer');
const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post('/create-post', upload.single("image"), async (req, res) => {
  try {
    console.log("STEP 1: Route hit");

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    console.log("STEP 2: File received");

    const result = await uploadFile(req.file.buffer);

    console.log("STEP 3: Upload done");

    // ✅ Moved postModel.create BEFORE the return
    const post = await postModel.create({
      image: result.url,
      caption: req.body.caption || "No caption"
    });

    console.log("STEP 4: Post saved to DB");

    // ✅ Single final response
    return res.status(201).json({
      message: "post created successfully",
      post
    });

  } catch (error) {
    console.log("STEP ERROR:", error.message);
    return res.status(500).json({
      message: "failed",
      error: error.message
    });
  }
});

app.get("/posts", async (req, res) => {
    const posts = await postModel.find()


    return res.status(200).json({
      message: "posts fetched successfully",
      posts
      
    })

})

module.exports = app;