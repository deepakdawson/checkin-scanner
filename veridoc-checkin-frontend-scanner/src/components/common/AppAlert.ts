import Swal from "sweetalert2";
import { toast } from "@heroui/react";
import { redirect } from "next/navigation";
export class AppAlert {
    public static error(message?: string) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            html: message,
        });
    }
    public static success(message?: string) {
        Swal.fire({
            icon: "success",
            title: "Success",
            html: message,
        });
    }

    public static successRedirect(message?: string, url?: string) {
        Swal.fire({
            icon: "success",
            title: "Success",
            html: message,
        }).then(() => {
            if(url){
                redirect(url);
            }
        });
    }

    public static errorToast(message?: string) {
        toast.danger(message, {
            timeout: 3000,
        });
    }
    public static successToast(message?: string) {
        toast.success(message, {
            timeout: 3000,
        });
    }
}