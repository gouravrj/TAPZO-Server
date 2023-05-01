const express = require('express')
const routes = express.Router()
const bikeController = require('../controllers/bike.controller')
const auth = require('../middleware/auth')
const multer = require('multer')
const upload = multer({dest:"uploads/"})

//Doesn't require authentication
routes.get('/get',bikeController.listBikes)
routes.get('/getbyID/:id', bikeController.getbyID)
routes.get('/getbyName/:name', bikeController.getbyName)

//Requires Authentication
routes.post('/post',auth, bikeController.createBike)
routes.put('/updatebyID/:id' ,auth, bikeController.updateBike)
routes.delete('/deletebyID/:id',auth, bikeController.deleteBike)
routes.get('/:lenderid',auth, bikeController.getBikeByLender) 

routes.post('/upload',upload.single('imageFile'),(req,res)=>{
    res.status(200).json({
        details:req.file
    })
})

module.exports = routes;