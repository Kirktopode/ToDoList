function dateString(){
  var date = new Date()
  return " - Created " + date.toLocaleTimeString() + " " + date.toLocaleDateString()
}

export default dateString
