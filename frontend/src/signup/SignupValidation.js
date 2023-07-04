function Validation(values) {
    let error = {}
    const email_pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.dni === "") {
        error.dni = "Name should not be empty"
    } else {
        error.dni = ""
    }

    if(values.nombre === "") {
        error.nombre = "Name should not be empty"
    } else {
        error.nombre = ""
    }

    if(values.email === "") {
        error.email = "Name should not be empty"
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email didn't match"
    } else {
        error.email = ""
    }

    if(values.rol === "") {
        error.rol = "Role should not be empty"
    } else {
        error.rol = ""
    }

    if(values.pass === "") {
        error.pass = "Password should not be empty"
    } else if (!password_pattern.test(values.pass)) {
        error.pass = "Password didn't match"
    } else {
        error.pass = ""
    }
    return error;
}

export default Validation;