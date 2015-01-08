var logger = require('./logger');

require('date-utils');

var ndrUrlGenerator = function(startDate){
	logger.debug('Instantiating ndrUrlGenerator');	

	if(!startDate) throw { msg: 'startDate is not set' }

	return {
		currentDate: new Date(startDate.valueOf()),
		next: function(){
			if(this.currentDate.isAfter(new Date())) return null;
      var oldDate = new Date(this.currentDate);
      this.currentDate.setUTCHours(this.currentDate.getUTCHours() + 1);
			var year = oldDate.toFormat('YYYY'); var month = oldDate.toFormat('MM'); var day = oldDate.toFormat('DD'); var hour = oldDate.toFormat('HH24');
			return 'http://www.ndr.de/ndr2/programm/titelliste1202.html?date='+year+'-'+month+'-'+day+'&hour='+hour+'&search_submit=Anzeigen';
		}
	}
};

module.exports = ndrUrlGenerator;