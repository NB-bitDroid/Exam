const student_name = document.getElementById("name");
const student_age = document.getElementById("age");
const school_member = document.getElementById("schoolMember");
let studentName = "";

function dothing(){
    updatestuff()
    studentName = student_name
    if (student_name == " ") {
        console.log("Please input a name")
    };
    console.log(studentName)
}

function updatestuff(){
    student_name.innerText = studentName

};