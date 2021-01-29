export default function ValidateInfo(data) {

    let errors={};

    if(!data.username.trim()){
        errors.username="User Name is required";
    }

    if(!data.number){
        errors.number="Mobile Number is required";
    }else if((data.number.length<10)||(data.number.length>10)){
        errors.number="Mobile Number is invalid!";
    }

    if(!data.email){
        errors.email="E-Mail is required";
    }

    return errors;
}