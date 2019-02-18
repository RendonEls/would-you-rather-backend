const express = require ('express')
const router = express.Router()

console.log('edit question routes ')

router.get("/", (req, res) =>{
    res.send("This is a edit question page")
})
router.put("/", (req, res) =>{
    res.send("This is PUT question route")
})
router.delete("/", (req, res) =>{
    res.send("This is a Delete question route")
})



module.exports = router