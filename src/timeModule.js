export function dateString(){
  var date = new Date()
  return " - Created " + date.toLocaleTimeString() + " " + date.toLocaleDateString()
}
export function appendDateString(){
  var date = new Date()
  return " - Time Appended " + date.toLocaleTimeString() + " " + date.toLocaleDateString()
}
