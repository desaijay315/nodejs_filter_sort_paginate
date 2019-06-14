const mongoose = require('mongoose');

//mongodb://<dbuser>:<dbpassword>@ds235947.mlab.com:35947/nodeauth
mongoose.connect('mongodb://nodeauth:nodeauth123@ds235947.mlab.com:35947/nodeauth',{
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() =>{
  console.log('connected to database');
}).catch(() =>{
  console.log('failed connected to database');
});