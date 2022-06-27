const express = require("express");
const fs = require("fs");
const path = require("path");
const pdfParser = require("pdf-parse");

const app = express();

const pdf = path.join(__dirname, "app.js");

app.get("/readFile", async (req, res) => {
  try {
    let pdfbuffer = null;
    let parsedPdf = "";
    if (fs.existsSync(pdf)) {
      pdfbuffer = fs.readFileSync("sample.pdf");
      parsedPdf = await pdfParser(pdfbuffer);
    }
    res.status(200).json({ result: parsedPdf });
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(3000, () => console.log("rinning on port 3000"));
