let people = [
    {
        name: "Sivatheking",
        id: 1,
        phonenumber: 9361213535
    },
    {
        name: "Sanjay",
        id: 2,
        phonenumber: 9876543210
    },
    {
        name: "Addwin",
        id: 3,
        phonenumber: 9123456780
    }
];
const todoRef = document.getElementById("tablebody");
const InputRef = document.getElementById("todoInput");
const InputRef1 = document.getElementById("todoInput1");
const AddRef = document.getElementById("Add");
let addid = 0;
window.addEventListener("load", ()=>{
    loadtheuser();
});
const loadtheuser = ()=>{
    let body = "";
    for (let todo of people)body += `<tr>
        <th>${todo.id}</th>
        <td>${todo.name}</td>
        <td>${todo.phonenumber}</td>
        <td><button class="bg-ligth rounded" onClick={handleEdit(${todo.id})}>Edit</button><button class="bg-danger rounded text-white ms-2" onClick={handleClick(${todo.id})}>Delete</button></td>
      </tr>`;
    todoRef.innerHTML = body;
};
const handleClick = (id)=>{
    people = people.filter((todo)=>{
        if (todo.id !== id) return todo;
    });
    loadtheuser();
};
const handleEdit = (id)=>{
    addid = id;
    people.find((todo)=>{
        AddRef.innerText = "Edit";
        if (todo.id === id) {
            InputRef.value = todo.name;
            InputRef1.value = String(todo.phonenumber);
        }
    });
};
AddRef.addEventListener("click", ()=>{
    if (InputRef.value !== "") {
        if (addid === 0) {
            people.push({
                name: InputRef.value,
                id: people.length + 1,
                phonenumber: parseInt(InputRef1.value)
            });
            InputRef.value = "";
            InputRef1.value = "";
        } else {
            people = people.map((todo)=>{
                if (todo.id == addid) return {
                    ...todo,
                    name: InputRef.value,
                    phonenumber: parseInt(InputRef1.value)
                };
                else return todo;
            });
            InputRef.value = "";
            InputRef1.value = "";
        }
        AddRef.innerText = "Add";
        loadtheuser();
    }
});

//# sourceMappingURL=index.86da7ba5.js.map
