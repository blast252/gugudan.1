const ulDOM = document.getElementById("gugudan-result__list")
const btn1 = document.getElementById("btn_1")
const btn2 = document.getElementById("btn_2")
const btn3 = document.getElementById("btn_3")
const btn4 = document.getElementById("btn_4")
const btn5 = document.getElementById("btn_5")
const btn6 = document.getElementById("btn_6")
const btn7 = document.getElementById("btn_7")
const btn8 = document.getElementById("btn_8")
const btn9 = document.getElementById("btn_9")
const btn10 = document.getElementById("btn_10")
const btn11 = document.getElementById("btn_11")
const btn12 = document.getElementById("btn_12")


const gugudan_btn_click = (dan) => {
    ulDOM.innerHTML = "";

    const first_value = 1;
    const last_value = 12;

    for(let i = first_value; i <= last_value; i++) {
        const li_tag = document.createElement("li");
        li_tag.textContent = `${dan} X ${i} = ${dan * i}`;

        ulDOM.appendChild(li_tag);
    }

    const compareValue = event.target.id;
    if(compareValue === "btn_1") {
        btn1.classList.add("active");
        btn2.classList.remove("active");
        btn3.classList.remove("active");
        btn4.classList.remove("active");
        btn5.classList.remove("active");
        btn6.classList.remove("active");
        btn7.classList.remove("active");
        btn8.classList.remove("active");
        btn9.classList.remove("active");
        btn10.classList.remove("active");
        btn11.classList.remove("active");
        btn12.classList.remove("active");
    } else if (compareValue === "btn_2") {
        btn1.classList.remove("active");
        btn2.classList.add("active");
        btn3.classList.remove("active");
        btn4.classList.remove("active");
        btn5.classList.remove("active");
        btn6.classList.remove("active");
        btn7.classList.remove("active");
        btn8.classList.remove("active");
        btn9.classList.remove("active");
        btn10.classList.remove("active");
        btn11.classList.remove("active");
        btn12.classList.remove("active");
    } else if (compareValue === "btn_3") {
        btn1.classList.remove("active");
        btn2.classList.remove("active");
        btn3.classList.add("active");
        btn4.classList.remove("active");
        btn5.classList.remove("active");
        btn6.classList.remove("active");
        btn7.classList.remove("active");
        btn8.classList.remove("active");
        btn9.classList.remove("active");
        btn10.classList.remove("active");
        btn11.classList.remove("active");
        btn12.classList.remove("active");
    } else if (compareValue === "btn_4") {
        btn1.classList.remove("active");
        btn2.classList.remove("active");
        btn3.classList.remove("active");
        btn4.classList.add("active");
        btn5.classList.remove("active");
        btn6.classList.remove("active");
        btn7.classList.remove("active");
        btn8.classList.remove("active");
        btn9.classList.remove("active");
        btn10.classList.remove("active");
        btn11.classList.remove("active");
        btn12.classList.remove("active");
    } else if (compareValue === "btn_5") {
        btn1.classList.remove("active");
        btn2.classList.remove("active");
        btn3.classList.remove("active");
        btn4.classList.remove("active");
        btn5.classList.add("active");
        btn6.classList.remove("active");
        btn7.classList.remove("active");
        btn8.classList.remove("active");
        btn9.classList.remove("active");
        btn10.classList.remove("active");
        btn11.classList.remove("active");
        btn12.classList.remove("active");
    } else if (compareValue === "btn_6") {
        btn1.classList.remove("active");
        btn2.classList.remove("active");
        btn3.classList.remove("active");
        btn4.classList.remove("active");
        btn5.classList.remove("active");
        btn6.classList.add("active");
        btn7.classList.remove("active");
        btn8.classList.remove("active");
        btn9.classList.remove("active");
        btn10.classList.remove("active");
        btn11.classList.remove("active");
        btn12.classList.remove("active");
    } else if (compareValue === "btn_7") {
        btn1.classList.remove("active");
        btn2.classList.remove("active");
        btn3.classList.remove("active");
        btn4.classList.remove("active");
        btn5.classList.remove("active");
        btn6.classList.remove("active");
        btn7.classList.add("active");
        btn8.classList.remove("active");
        btn9.classList.remove("active");
        btn10.classList.remove("active");
        btn11.classList.remove("active");
        btn12.classList.remove("active");
    } else if (compareValue === "btn_8") {
        btn1.classList.remove("active");
        btn2.classList.remove("active");
        btn3.classList.remove("active");
        btn4.classList.remove("active");
        btn5.classList.remove("active");
        btn6.classList.remove("active");
        btn7.classList.remove("active");
        btn8.classList.add("active");
        btn9.classList.remove("active");
        btn10.classList.remove("active");
        btn11.classList.remove("active");
        btn12.classList.remove("active");
    } else if (compareValue === "btn_9") {
        btn1.classList.remove("active");
        btn2.classList.remove("active");
        btn3.classList.remove("active");
        btn4.classList.remove("active");
        btn5.classList.remove("active");
        btn6.classList.remove("active");
        btn7.classList.remove("active");
        btn8.classList.remove("active");
        btn9.classList.add("active");
        btn10.classList.remove("active");
        btn11.classList.remove("active");
        btn12.classList.remove("active");
    } else if (compareValue === "btn_10") {
        btn1.classList.remove("active");
        btn2.classList.remove("active");
        btn3.classList.remove("active");
        btn4.classList.remove("active");
        btn5.classList.remove("active");
        btn6.classList.remove("active");
        btn7.classList.remove("active");
        btn8.classList.remove("active");
        btn9.classList.remove("active");
        btn10.classList.add("active");
        btn11.classList.remove("active");
        btn12.classList.remove("active");
    } else if (compareValue === "btn_11") {
        btn1.classList.remove("active");
        btn2.classList.remove("active");
        btn3.classList.remove("active");
        btn4.classList.remove("active");
        btn5.classList.remove("active");
        btn6.classList.remove("active");
        btn7.classList.remove("active");
        btn8.classList.remove("active");
        btn9.classList.remove("active");
        btn10.classList.remove("active");
        btn11.classList.add("active");
        btn12.classList.remove("active");
    } else if (compareValue === "btn_12") {
        btn1.classList.remove("active");
        btn2.classList.remove("active");
        btn3.classList.remove("active");
        btn4.classList.remove("active");
        btn5.classList.remove("active");
        btn6.classList.remove("active");
        btn7.classList.remove("active");
        btn8.classList.remove("active");
        btn9.classList.remove("active");
        btn10.classList.remove("active");
        btn11.classList.remove("active");
        btn12.classList.add("active");
    }
}