const form = document.querySelector('form');
  const list = document.getElementById("employeeList");

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const fName = formData.get("firstname");
    const lName = formData.get("lastname");
    const email = formData.get("email");
    const date = formData.get("hire_date");
    const photo = formData.get('photo')


    const tr = document.createElement("tr");

    const tdPhoto = document.createElement("td");
    const tdFName = document.createElement("td");
    const tdLName = document.createElement("td");
    const tdEmail = document.createElement("td");
    const tdDate = document.createElement("td");
    const tdActions = document.createElement("td");

    const rowIndex = list.querySelectorAll('tr').length;
    tr.style.backgroundColor = (rowIndex % 2 === 0) ? 'white' : 'silver';

    const img = document.createElement("img");
    img.src =  URL.createObjectURL(photo);
    img.alt = "photo";
    img.style.width = "50px";
    img.style.height = "50px";
    tdPhoto.appendChild(img);

    tdFName.textContent = fName;
    tdLName.textContent = lName;
    tdEmail.textContent = email;
    tdDate.textContent = date;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', function() {
        if (confirm('Are you sure you want to delete this employee?')) {
          list.removeChild(tr);
        }
      });

    tr.appendChild(tdPhoto);
    tr.appendChild(tdFName);
    tr.appendChild(tdLName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdDate);
    tr.appendChild(tdActions);
    tdActions.appendChild(deleteButton);

    list.appendChild(tr);


    reader.readAsDataURL(photo);
    form.reset();
  });
