'use strict';
function successResult(result) {
  return {
    code: 200,
    data: result,
  };
}
exports.successResult = successResult;
function errorResult(msg) {
  return {
    code: 400,
    msg,
  };
}
exports.errorResult = errorResult;

