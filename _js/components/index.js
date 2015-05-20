module.exports = function(ngModule) {
    require('./mm-me')(ngModule);
    require('./mm-person')(ngModule);
    require('./mm-interviewer')(ngModule);
}