const list = document.getElementById("employeeList")
const tr = document.createElement("tr")
const td = document.createElement("td")
const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
  e.preventDefault()
  const formData = new FormData(form)
  const fName = formData.get("firstname");
  const lName = formData.get("lastname");
  const email = formData.get("email");
  const date = formData.get("hire_date");
  const photo = form.get('photo').files[0];

  const tdPhoto = document.createElement("td");
  const tdFName = document.createElement("td");
  const tdLName = document.createElement("td");
  const tdEmail = document.createElement("td");
  const tdDate = document.createElement("td");

  tdFName.textContent = fName;
  tdLName.textContent = lName;
  tdEmail.textContent = email;
  tdDate.textContent = date;
  const img = document.createElement("img");
  img.src = e.target.result;
  img.alt = "Profile Photo";
  img.style.width = "50px";
  img.style.height = "50px";
  tdPhoto.appendChild(img);


  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener('click', function() {
    if (confirm('Are you sure you want to delete this employee?')) {
      list.removeChild(tr);
    }
  });
  tdActions.appendChild(deleteButton);
  tr.appendChild(tdFName)
  tr.appendChild(tdLName)
  tr.appendChild(tdEmail)
  tr.appendChild(tdDate)

  list.appendChild(tr)

})