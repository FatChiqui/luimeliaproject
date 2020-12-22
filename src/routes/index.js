const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {

  res.render('index.html');
  });
  
  
router.get('/personajes', (req,res) => {
  
    res.render('personajes.html');
    
    });
    
router.get('/redes', (req,res) => {
  
    res.render('redes.html');
    
    });

router.get('/temporada1', (req,res) => {
  
    res.render('temporada1.html');
    
    });

router.get('/temporada2', (req,res) => {
  
    res.render('temporada2.html');
    
    });

module.exports = router;