var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Koti' });
});

router.get('/varikokeilu' , function(req,res,next){
    res.render('varikokeilu', { title: 'Värikokeilu' });
    }
);

router.get('/yllapito' , function(req,res,next){
        res.render('ylläpito', { title: 'Ylläpito' });
    }
);

module.exports = router;
