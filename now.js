const moment = require('moment')();

module.exports = ()=> ({
  full:moment.format('YYYY-MM-DD HH:mm:ss'),
  short:moment.format('YYYY-MM-DD')
});
