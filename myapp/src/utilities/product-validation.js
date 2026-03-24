

export const validateProductForm = (fieldname, fieldvalue) => {

    let errors = {};

    if (fieldname === "productName") {

        if (!fieldvalue.length) {
            errors.title = "Product Name Required";
        }
        else {
            delete errors.title;
        }
    }

    return errors;
}