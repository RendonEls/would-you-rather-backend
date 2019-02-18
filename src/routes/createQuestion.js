const express = require ('express')
const router = express.Router()

console.log('create question route ')

router.get("/", (req, res) =>{
    res.send("create question here")
})
router.post("/", (req, res) =>{
    res.send("POST route for create question")
})


module.exports = router