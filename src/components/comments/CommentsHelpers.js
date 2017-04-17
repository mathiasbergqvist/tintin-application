export default function simpleInputValidation(input) {
  const regex = new RegExp('^[a-zA-Z0-9_ ]*$');
  if (regex.test(input)) {
    return true;
  }
  return false;
}
