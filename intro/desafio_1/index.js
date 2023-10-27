function sum(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
console.log(sum(4, 6));
function returnNewMessage(message) {
    return message;
}
var returnMessage = function (message) {
    return message;
};
var message = 'learning typescript';
var newMessage = 'testing typescript';
console.log(returnNewMessage(newMessage));
console.log(returnMessage(message));
