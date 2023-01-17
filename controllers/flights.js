const Flight = require('../models/flight')

module.exports = {
    index,
    show,
    new: newFlight,
    create,
}

function index(req, res) {
    Flight.find({}, function(err, flights){
        res.render('flights/index', { flights })
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      res.render('flights/show', { title: 'Flight Detail', flight });
    });
  }

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add New Flight' })
}

function create(req, res) {
    const flight = new Flight(req.body)
    flight.save(function(err) {
        if (err) console.log(err)
        if (err) return res.redirect('/flights/new')
        console.log(flight)
        res.redirect('/flights')
})}