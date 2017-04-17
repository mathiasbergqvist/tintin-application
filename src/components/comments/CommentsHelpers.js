export function simpleInputValidation(input) {
  var regex = new RegExp("^[a-zA-Z0-9_ ]*$");
  if(regex.test(input)){
    return true;
  } else {
    return false;
  }
}
