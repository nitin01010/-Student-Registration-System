let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#LastName");
let classId = document.querySelector("#Class");
let email = document.querySelector("#Email");
let RollNo = document.querySelector("#RollNo");


let ShowStudentTable = document.querySelector(".ShowStudentTable");

const ValidaterFun = (StudentObj) => {
    if (StudentObj.firstName === "") {
        alert("Please enter a First Name");
        return false;
    } else if (StudentObj.lastName === "") {
        alert("Please enter a Last Name");
        return false;
    } else if (StudentObj.classId === "") {
        alert("Please enter a valid Class Id");
        return false;
    } else if (StudentObj.email === "") {
        alert("Please enter a valid email");
        return false;
    } else if (StudentObj.RollNo === "") {
        alert("Please enter a valid Roll No");
        return false;
    } else {
        return true;
    }
};

const Handlefrom = (e) => {
    e.preventDefault();
    const StudentObj = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        classId: classId.value.trim(),
        email: email.value.trim(),
        RollNo: RollNo.value.trim(),
    };

    const isValid = ValidaterFun(StudentObj);
    if (!isValid) return;
    ValidaterFun(StudentObj);

    let tableReady = document.createElement("tr");


    let trCreated1 = document.createElement("td");
    let trCreated2 = document.createElement("td");
    let trCreated3 = document.createElement("td");
    let trCreated4 = document.createElement("td");
    let trCreated5 = document.createElement("td");
    let trCreated6 = document.createElement("button");
    let trCreated7 = document.createElement("button");
    let trCreated8 = document.createElement("td");


    trCreated6.innerHTML = 'Delete';
    trCreated7.innerHTML = 'Edit';
    trCreated6.classList.add("Btn")
    trCreated7.classList.add("Btn")
    trCreated8.classList.add("ButtonSection")

    trCreated1.innerHTML = StudentObj.firstName;
    trCreated2.innerHTML = StudentObj.lastName;
    trCreated3.innerHTML = StudentObj.classId;
    trCreated4.innerHTML = StudentObj.email;
    trCreated5.innerHTML = StudentObj.RollNo;

    tableReady.appendChild(trCreated1);
    tableReady.appendChild(trCreated2);
    tableReady.appendChild(trCreated3);
    tableReady.appendChild(trCreated4);
    tableReady.appendChild(trCreated5);
    tableReady.appendChild(trCreated7);
    tableReady.appendChild(trCreated6);
    trCreated8.append(trCreated6);
    trCreated8.append(trCreated7);
    tableReady.appendChild(trCreated8);

    ShowStudentTable.appendChild(tableReady);

    trCreated6.addEventListener("click", () => {
        tableReady.remove();
    })

    trCreated7.addEventListener("click", () => {
        firstName.value = trCreated1.innerText;
        lastName.value = trCreated2.innerText;
        classId.value = trCreated3.innerText;
        email.value = trCreated4.innerText;
        RollNo.value = trCreated5.innerText;
        currentEditRow = tableReady;
        tableReady.remove();
    });

    e.target.reset();
};
