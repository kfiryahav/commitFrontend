import Swal from 'sweetalert2';

export const showError = (text) => {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: text || "Operation failed",
    });
};

export const showSuccess = (title, text) => {
    Swal.fire({
        title: title || "Success",
        text: text || "Operation successful",
        icon: "success"
    });
};
