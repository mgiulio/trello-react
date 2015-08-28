function formatDate(str) {
   var d = new Date(str);

	var day = d.getDate();
	var month = d.getMonth();
	var year = d.getFullYear();

	month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'][month];
	year = String(year).substr(-2);

	return `${day} ${month} ${year}`;
}

function formatDateTime(str) {
   var d = new Date(str);

	var day = d.getDate();
	var month = d.getMonth();
	var year = d.getFullYear();

	month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'][month];
	year = String(year).substr(-2);

   var
      hh = d.getHours(),
      mm = d.getMinutes()//,
      //ss = d.getSeconds()
   ;

	return `${day} ${month} ${year} @ ${hh}:${mm}`;
}


module.exports = {
   formatDateTime: formatDateTime,
   formatDate: formatDate
};
