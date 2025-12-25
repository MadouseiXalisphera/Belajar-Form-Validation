const submitBtn = document.querySelector("#submit-btn");
const clearBtn = document.querySelector("#clear-btn");

const form = document.getElementById("form");

const fullName = document.querySelector("#full-name");
const email = document.querySelector("#email");
const orderNo = document.querySelector("#order-no");
const productCode = document.querySelector("#product-code");
const quantity = document.querySelector("#quantity");
const complaintsGroup = document.querySelector("#complaints-group");
const complaintDescription = document.querySelector("#complaint-description");
const solutionsGroup = document.querySelector("#solutions-group");
const solutionDescription = document.querySelector("#solution-description");

 const otherComplaintCheckbox = document.querySelector("#other-complaint"); 
  const complaintText = document.querySelector("#complaint-description");

const otherSolutionRadio = document.querySelector("#other-solution");
  const solutionText = document.querySelector("#solution-description");

  const complaintContainer = document.querySelector("#complaint-description-container")
  const solutionContainer = document.querySelector("#solution-description-container")

const listInput = [fullName,email,orderNo,productCode,quantity,complaintDescription,solutionDescription];
const listCheckBox = [complaintsGroup,solutionsGroup];



    const kondisiEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const kondisiProductCode = /[a-zA-z]{2}[\d]{2}-[a-zA-z]\d{3}-[a-zA-z]{2}[\d]/;
    const kondisiOrderNo = /^2024\d{6}/;

function validateForm() {
  const isFullNameValid = fullName.value !== ""; 
  const isEmailValid = kondisiEmail.test(email.value);
  const isOrderNoValid = kondisiOrderNo.test(orderNo.value);
  const isProductCodeValid = kondisiProductCode.test(productCode.value);
  const isQuantityValid = Number(quantity.value) > 0; 

  const complaintsCheck = document.querySelector('input[name="complaint"]:checked');
  const isComplaintsGroupValid = complaintsCheck !== null;


  const solutionsCheck = document.querySelector('input[name="solutions"]:checked');
  const isSolutionsGroupValid = solutionsCheck !== null;


let isComplaintDescValid = true; 
if (otherComplaintCheckbox.checked) {

    isComplaintDescValid = complaintText.value.length >= 20;
}


let isSolutionDescValid = true;

if (otherSolutionRadio.checked) {
    isSolutionDescValid = solutionText.value.length >= 20;
}
  


  
  return {
    "full-name": isFullNameValid,
    "email": isEmailValid,
    "order-no": isOrderNoValid,
    "product-code": isProductCodeValid,
    "quantity": isQuantityValid,
    "complaints-group": isComplaintsGroupValid,
    "complaint-description": isComplaintDescValid,
    "solutions-group": isSolutionsGroupValid,
    "solution-description": isSolutionDescValid
  };
}

function isValid (obj) {
      for (const key in obj) {
          if(!obj[key]){
              return false
          }
      }
  
  return true
}


listInput.forEach((inputan)=>{
    inputan.addEventListener("change",()=>{
        const laporan = validateForm();
        const idInput = inputan.id;
        const status = laporan[idInput];
        status?inputan.style.borderColor = "green":inputan.style.borderColor = "red"
    })
})

complaintsGroup.addEventListener("change",()=>{
    const laporan = validateForm();
        const idInput = complaintsGroup.id;
        const status = laporan[idInput];
        if(status) {
            complaintsGroup.style.borderColor = "green"
        }else{
            complaintsGroup.style.borderColor = "red"
        }
})
solutionsGroup.addEventListener("change",()=>{
    const laporan = validateForm();
        const idInput = solutionsGroup.id;
        const status = laporan[idInput];
        if(status) {
            solutionsGroup.style.borderColor = "green"
        }else{
            solutionsGroup.style.borderColor = "red"
        }
})
otherComplaintCheckbox.addEventListener("change",(e)=>{
    e.target.checked?complaintContainer.hidden = false:complaintContainer.hidden = true
})
otherSolutionRadio.addEventListener("change",(e)=>{
    e.target.checked?solutionContainer.hidden = false:solutionContainer.hidden = true
})

// GANTI 'submitBtn' JADI 'form'
// GANTI "click" JADI "submit"
form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const laporan = validateForm(); 
  const formAman = isValid(laporan); 

  // ... (SISA KODENYA SAMA PERSIS, GAK USAH DIUBAH) ...
  
  for (const key in laporan) {
    const statusPerItem = laporan[key]; 
    const elemen = document.getElementById(key);

    if (elemen) {
      if (statusPerItem === false) {
        elemen.style.borderColor = "red";
      } else {
        elemen.style.borderColor = "green";
      }
    }
  }

  const messageBox = document.getElementById("message-box");
  if (formAman) {
    messageBox.textContent = "Form successfully submitted!";
    messageBox.style.color = "green";
  } else {
    messageBox.textContent = "Please, fill out the required fields correctly before submitting.";
    messageBox.style.color = "red";
  }
});