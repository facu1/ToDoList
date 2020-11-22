exports.success = (res, message, status) => {
  res.status(status).send({
    error: '',
    body: message,
  });
}

exports.error = (res, message, status, details) => {
  console.error('[response error]' + details);

  res.status(status).send({
    error: message,
    body: '',
  });
}