const ImageKit = require("@imagekit/nodejs");

const client = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,   // ✅ Add this
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: "https://ik.imagekit.io/tzieqwdnh"
});

async function uploadFile(buffer) {
  try {
    console.log("Uploading to ImageKit...");

    const result = await client.files.upload({
      file: buffer.toString("base64"),
      fileName: `image_${Date.now()}.jpg`  // ✅ Unique filename to avoid conflicts
    });

    console.log("IMAGEKIT RESULT:", result);
    return result;

  } catch (error) {
    console.error("Upload failed:", error);
    throw error;
  }
}

module.exports = uploadFile;

//bufffer : the actual binary data of the uploaded image file

// It comes from Multer

//bufffer : the actual binary data of the uploaded image file

// It comes from Multer


// this whole code is a referance of imagekit.docs  .

//IDE stands for Integrated Development Environment.
// It's basically a software application where you write, edit, run, and debug your code — all in one place.

