const submitBtn = document.querySelector("#submit-btn");
const clearBtn = document.querySelector("#clear-btn");

const fullName = document.querySelector("#full-name");
const email = document.querySelector("#email");
const orderNo = document.querySelector("#order-no");
const productCode = document.querySelector("#product-code");
const quantity = document.querySelector("#quantity");
const complaintsGroup = document.querySelector("#complaints-group");
const complaintDescription = document.querySelector("#complaint-description");
const solutionsGroup = document.querySelector("#solutions-group");
const solutionDescription = document.querySelector("#solution-description");


let objValidate = [
  {
    "full-name" : true,
},{
    "email" : true,
},{
    "order-no" : true,
},{
    "product-code" : true,
},{
    "quantity" : true,
},{
    "complaints-group" : true,
},{
    "complaint-descrtiption" : true,
},{
    "solutions-group" : true,
},{
    "solution-description" : true,
},
]

    const kondisiEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const kondisiProductCode = /[a-zA-z]{2}[\d]{2}-[a-zA-z]\d{3}-[a-zA-z]{2}[\d]/;
    const kondisiOrderNo = /^2024\d{6}/;

function validateForm (){
    const isFullNameValid =  fullName.value=="";
    const isEmailValid = kondisiEmail.test(email.value);
    const isOrderNoValid = kondisiOrderNo.test(orderNo.value);
    const isProductCodeValid = kondisiProductCode.test(productCode.value);
    const isQuantityValid = quantity.value>0?true:false;
    complaintsGroup.addEventListener("change",(e)=>{
        const isComplaintGroupValid=e.target.value==""?false:true;
        if(e.target.value=="other"){
            const isComplaintDescriptionValid = complaintDescription.value.length>=20
        }
    })
    solutionsGroup.addEventListener("change",(e)=>{
        const isSolutionGroupValid=e.target.value==""?false:true;
        if(e.target.value=="other"){
            const isSolutionDescriptionValid = solutionDescription.value.length>=20
        }
    })
    return 

    
    
}

function isValid () {
  
}


