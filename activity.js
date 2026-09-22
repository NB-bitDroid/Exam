function checkEveryThing(){
    const student_name = String(document.getElementById("name").value);
    const student_age = Number(document.getElementById("age").value);
    const school_member = (document.getElementById("schoolMember"));
    const radioOptions = (document.getElementsByName("radioBtn"));
    let discount = 0
    let fee = 0
    let is_member = "";
    let selectedClub;


    for (const radioButton of radioOptions) {
        if (radioButton.checked) {
            selectedClub = radioButton.value;
        }
    }

    
    if (selectedClub !== "Coding Club" & selectedClub !== "Game Design" & selectedClub !== "Robotics") {
        document.getElementById("whereTextGo").textContent = ("Please select a club")
    }if (student_age < 10) {
        document.getElementById("whereTextGo").textContent = ("Please Become older before filling out this form");
    }if (student_age == "") {
        document.getElementById("whereTextGo").textContent = ("Please Enter an Age");
    }if (student_name == "") {
        document.getElementById("whereTextGo").textContent = ("Please Enter a Name");
    }if (school_member.checked){
        discount = 5
    }else {
        is_member = " not"
    }if (selectedClub == "Coding Club") {
        fee = 20
        document.getElementById("whereTextGo").textContent = (`${student_name} is${is_member} a school member ($${discount} discount) and registered for ${selectedClub} ($${fee}). The final fee is $${fee - discount}. `);
    }if (selectedClub == "Game Design") {
        fee = 25
        document.getElementById("whereTextGo").textContent = (`${student_name} is${is_member} a school member ($${discount} discount) and registered for ${selectedClub} ($${fee}). The final fee is $${fee - discount}. `);
    }if (selectedClub == "Robotics") {
        fee = 30
        document.getElementById("whereTextGo").textContent = (`${student_name} is${is_member} a school member ($${discount} discount) and registered for ${selectedClub} ($${fee}). The final fee is $${fee - discount}. `);
    };
};