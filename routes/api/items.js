const express = require('express')
const router = express.Router()


//Item Model 

const Items = require('../../moduls/item.js')

// Get api/item
// Get all 

router.get('/', (req, res)=>{
    Items.find()
    .sort({date:-1})
    .then(items => res.json(items))
})

router.post('/', (req,res) =>{
    const newItem = new Items ({
        name: req.body.name
    })
    newItem.save().then(item => res.json(item))
})


router.delete('/:id',(req,res)=>{
    Items.findById(req.params.id)
    .then(items => items.remove().then(()=> res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
})

module.exports = router;