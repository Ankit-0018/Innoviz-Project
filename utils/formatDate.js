module.exports = function formatDate(dateString, timeOnly = false) {
    const options = timeOnly
      ? { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' }
      : { dateStyle: 'full', timeStyle: 'short', timeZone: 'Asia/Kolkata' };
  
    return new Date(dateString).toLocaleString('en-IN', options);
  };
  