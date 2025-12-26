const form = document.querySelector("#mahasigma-form");

const submitBtn = document.querySelector("#submit-button");
const resetBtn = document.querySelector("#reset-button");

const nama = document.querySelector("#nama");
const nim = document.querySelector("#nim");
const kelas = document.querySelector("#kelas");
const email = document.querySelector("#email");
const keterangan = document.querySelector("#keterangan-text")

const keperluan = document.querySelector("#keperluan");
const lainnyaValue = document.querySelector("#lainnya");

const pesan = document.querySelector("#message");

const listInputan = [nama,nim,kelas,email,keterangan,keperluan];

function validationCheck (){
    const kelasRegex = /^\d-[A-Z]$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const keperluanChecked = document.querySelector("input[name=\"keperluan\"]:checked");
    let isKeteranganValid = true;

    const isNamaValid = nama.value.length>0;
    const isNimValid = nim.value.length==7;
    const isKelasValid = kelasRegex.test(kelas.value)
    const isEmailValid = emailRegex.test(email.value)
    const isKeperluanValid = keperluanChecked!==null;

    if(lainnyaValue.checked){
        isKeteranganValid= keterangan.value.length>=20;
    }

    return {
            "nama":isNamaValid,
        
            "nim":isNimValid,
        
            "kelas":isKelasValid,
        
            "email":isEmailValid,
        
            "keperluan":isKeperluanValid,
        
            "keterangan-text":isKeteranganValid,
        }
    ;
}

function isValid(obj){
    for (const key in obj){
        if(!obj[key]){
            return false
        }
    }
    return true;
}

listInputan.forEach(inputan=>{
    inputan.addEventListener("change",()=>{
        const laporan = validationCheck();
        const idInputan = inputan.id;
        const status = laporan[idInputan];
        status?inputan.style.borderColor = "green":inputan.style.borderColor = "red";
    })
})

lainnyaValue.addEventListener("change",(e)=>{
    e.target.checked?document.querySelector("#keterangan").hidden= false:document.querySelector("#keterangan").hidden= true;
})



form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    const laporan = validationCheck();
    const status = isValid(laporan);

    for (const key in laporan){
        const statusPerElemen = laporan[key];
        const elemen = document.getElementById(key);

        if (elemen){
            statusPerElemen?elemen.style.borderColor = "green":elemen.style.borderColor = "red";

        }
    }
    status?pesan.textContent="berhasil":pesan.textContent="isi yang bener coeg"
})

