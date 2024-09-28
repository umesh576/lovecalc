//

const btn = document.querySelector("#submit-btn")
const container22 = document.querySelector(".form-label")
const container23 = document.querySelector(".form-label2")
const message = document.getElementById("details")
// const container21 = document.querySelector("#input2")
const loaderbut = document.querySelector(".loader")

//function doing after clicking in the submit button
btn.addEventListener("click",() => {
    btn.innerText = "loading..."//change the inner text of submit button
    //
    const valuemale = document.querySelector(".form-label input").value.trim();
    const valuefemale = document.querySelector(".form-label2 input").value.trim();
    const resultval = document.querySelector("#result-text")
    const reloadbtn = document.getElementById("reload-btn")
    // setInterval{function()=>}
        //changing the style of the element after click in the submit button
    container22.style.display = "none"
    container23.style.display = "none"
    loaderbut.style.display = "block"

    if(valuemale == ""){//checking the texet entered in the male input space or not
        alert("please enter the male name for continue")
        btn.style.display = "none"
        loaderbut.style.display = "none"
        container22.style.display = "block"
        container23.style.display = "block"
        reloadbtn.style.display = "block"
        message.innerText = "Please enter the correct text."
        message.style.color = "black"
        reloadbtn.addEventListener("click",()=>{
            location.reload();
        })

    }
    //if value in input in the male name box then check the female name was entered or not
    else{
        if(valuefemale == ""){
            alert("Please enter the female name for continue")//if female name not entered
            btn.style.display = "none"
            loaderbut.style.display = "none"
            container22.style.display = "block"
            container23.style.display = "block"
            reloadbtn.style.display = "block"
            message.innerText = "Please enter the correct text."
            message.style.color = "black"
            reloadbtn.addEventListener("click",()=>{
                location.reload();//reload the page after press the reload button
            })

        }
        else{
            setTimeout(function() {
                btn.style.display = "none"
                reloadbtn.style.display = "block"
                loaderbut.style.display = "none"
                resultval.innerText = "your % of love is "
                resultval.style.fontSize = "25px"
                resultval.style.marginTop = "50px"
                resultval.style.marginLeft = "60px"
                const randIdx = Math.floor(Math.random() * 100);//creating the random number under 100
                console.log(randIdx);
                const shwpercentage = document.getElementById("Percentage")
                shwpercentage.innerText = randIdx + "%"
                shwpercentage.style.margin = "20px 100px"
                shwpercentage.style.color = "red"
                shwpercentage.style.fontSize = "3rem"

                btn.innerText = "Reset"
            }, 2000)
            reloadbtn.addEventListener("click",()=>{
                location.reload();//reload after press the reload button
            })
        }
    }
    
    console.log(valuemale);//not necessary code
    console.log(valuefemale);//not necessary code
})