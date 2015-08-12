var now = Date.now || function() { return new Date().getTime(); }

function debounce(func, wait, immediate) {
	var timeout, args, context, timestamp, result;

	var later = function() {
		var last = now() - timestamp;

		if (last < wait && last >= 0) {
			timeout = setTimeout(later, wait - last);
		} else {
			timeout = null;
			if (!immediate) {
				result = func.apply(context, args);
				if (!timeout) context = args = null;
			}
		}
	};

	return function() {
		context = this;
		args = arguments;
		timestamp = now();
		var callNow = immediate && !timeout;
		if (!timeout)
			timeout = setTimeout(later, wait);
		if (callNow) {
			result = func.apply(context, args);
			context = args = null;
		}

		return result;
	};
}

function formatDate(str) {
   var d = new Date(str);

	var day = d.getDate();
	var month = d.getMonth();
	var year = d.getFullYear();

	month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'][month];
	year = String(year).substr(-2);

	return `${day} ${month} ${year}`;
}

function checkResponse(response) {
   if (response.status == 200)
      return response;
   else
      throw Error('HTTP response status error code: ' + response.status);
}

module.exports = {
	debounce: debounce,
	now: now,
	formatDate: formatDate,
	checkResponse: checkResponse
};
