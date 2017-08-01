
customers.results.forEach(function(e){

  let template =
  `
  <img src= ${e.picture.large}>
  <div class = "names">${e.name.first} ${e.name.last}</div>
  <br>
  <div class = "email">${e.email}</div>
  <br>
  <div class = "street">${e.location.street}</div>
  <div class = "city-state-code">${e.location.city}, ${e.location.state} ${e.location.postcode}</div>
  <div class = "phonenumber">${e.phone}</div>
  <br>
  <br>
  <div class = "ssn">${e.id.value}</div>`

  let user = document.createElement('div');
  user.className = 'user';
  user.innerHTML = template;
  let shell = document.querySelector('.container');
  shell.appendChild(user);

});
// let results =
//
//
//
