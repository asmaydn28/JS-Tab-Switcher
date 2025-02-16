document.getElementById("tab1-button").classList.add("activeButton1");

function firstContent(){
    let contentOne = document.getElementById("tab1-content");
    contentOne.classList.remove("content");

    let removeTab2 = document.getElementById("tab2-content");
    removeTab2.classList.add("content");

    let removeTab3 = document.getElementById("tab3-content");
    removeTab3.classList.add("content");

    document.getElementById("tab1-button").classList.add("activeButton1");
    document.getElementById("tab2-button").classList.remove("activeButton2");
    document.getElementById("tab3-button").classList.remove("activeButton3");

}
    
function secondContent(){
    let contentTwo = document.getElementById("tab2-content");
    contentTwo.classList.remove("content");

    let removeTab1 = document.getElementById("tab1-content");
    removeTab1.classList.add("content");

    let removeTab3 = document.getElementById("tab3-content");
    removeTab3.classList.add("content");

    document.getElementById("tab2-button").classList.add("activeButton2");
    document.getElementById("tab1-button").classList.remove("activeButton1");
    document.getElementById("tab3-button").classList.remove("activeButton3");
}

function thirdContent(){
    let contentThree = document.getElementById("tab3-content");
    contentThree.classList.remove("content");

    let removeTab1 = document.getElementById("tab1-content");
    removeTab1.classList.add("content");

    let removeTab2 = document.getElementById("tab2-content");
    removeTab2.classList.add("content");

    document.getElementById("tab3-button").classList.add("activeButton3");
    document.getElementById("tab1-button").classList.remove("activeButton1");
    document.getElementById("tab2-button").classList.remove("activeButton2");
}