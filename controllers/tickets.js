const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    new: newTicket,
    create,
}

function newTicket(req, res) {
    Flight.find({})
    //Sort performers by their name
    .sort('name')
    .exec(function (err) {
      res.render('tickets/new', {
        title: 'Add Ticket',
        flightId: req.params.id,
      });
    });
}

function create(req, res) {
  req.body.flight = req.params.id
    Ticket.create(req.body, function(err, ticket) {
        if(err) {res.redirect(`/flights/${req.params.id}/tickets/new`)}
        console.log(ticket)
        res.redirect(`/flights/${req.params.id}`)
    })
}

