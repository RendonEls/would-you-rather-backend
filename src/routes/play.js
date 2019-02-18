const express = require ('express')
const router = express.Router()

console.log('play page ')

router.get("/", (req, res) =>{
    res.send("Hello from play page")
})
router.post("/", (req, res) =>{
    res.send("POST ON PLAY page")
})


module.exports = router