function submitData(name, email) {
  const body = document.querySelector("body");


  const submittedData = {
    name: name,
    email: email
  };
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(submittedData)
  };


  return fetch("http://localhost:3000/users", configObj)
  .then( resp => resp.json() )
  .then( json => {
    console.log(json);
    body.append(json.id);
  })
  .catch( error => {
    alert("Bad JUJU");
    console.log(error);
    body.append(error);
  });
}

function getData(id) {
  return fetch(`http://localhost:3000/users/${id}`)
  .then( resp => resp.json() )
  .then( json => console.log(json))
  .catch( error => console.log(error));
}
