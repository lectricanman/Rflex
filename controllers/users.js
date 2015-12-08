let Criminal = require('../models/User');

// get
function getAll(request, response) {
  Criminal.find(function(error, criminals) {
    if(error) response.json({message: 'Could not find any users'});

    response.json({users: users});
  })
}
