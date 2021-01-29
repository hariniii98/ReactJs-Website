import {useState} from 'react';

const Useform = validate => {
    const[data,setData] = useState({
        username:"",
        number:"",
        email:"",
        message:""
    });

    const [errors,setErrors] = useState({});

    const handleChange = e => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(data));
    }

    return {handleChange, data, handleSubmit,errors };
}


export default Useform;