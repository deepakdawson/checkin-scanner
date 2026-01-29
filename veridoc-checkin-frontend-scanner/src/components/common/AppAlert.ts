import Swal from "sweetalert2";

export class AppAlert {
    public static error(message: string) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            html: message,
        });
    }
    public static success(message: string) {
        Swal.fire({
            icon: "success",
            title: "Success",
            html: message,
        });
    }
}