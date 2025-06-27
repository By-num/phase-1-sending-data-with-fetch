function submitData(name, email) {
  const formData = {
    name: name,
    email: email,
  };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      const newId = object.id;
      const body = document.querySelector("body");
      body.append(newId);
    })
    .catch(function (error) {
      const body = document.querySelector("body");
      body.append(error.message);
    });
}
