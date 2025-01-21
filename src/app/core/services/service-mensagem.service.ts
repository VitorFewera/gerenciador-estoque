import {Injectable} from '@angular/core';
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import {ServiceService} from "./service.service";
import {tap} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ServiceMensagemService {

    constructor(
        private _router: Router,
        private _service: ServiceService,
    ) {
    }

    mensagemCadastroSucesso(tipo) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: false,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: `${tipo} cadastrada com sucesso!`
        });
    }

    mensagemAlterarSucesso(tipo) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: false,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: `${tipo} alterada com sucesso!`
        });
    }

    mensagemErro(response): void {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            showCloseButton: true,
            timer: 5000,
            timerProgressBar: false,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "error",
            title: `${response.error}`
        });
    }

    menssagemPreencherDados(): void {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: false,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "error",
            title: "Preencha todos os campos corretamente."
        });
    }

    excluir(url: string, mensagem: string, id) {
        console.log(id, url)
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "rounded-full bg-amber-500 text-white",
                cancelButton: "rounded-full bg-[#9ca3af] border-transparent focus:outline-none"
            },
            buttonsStyling: true
        });
        swalWithBootstrapButtons.fire({
            title: `Deseja apagar ${mensagem} ?`,
            text: "Após sua exclusão, suas informações serão perdidas.",
            icon: "warning",
            focusConfirm: false,
            returnFocus: false,
            focusDeny: true,
            showCancelButton: true,
            confirmButtonText: "Sim, apague!",
            cancelButtonText: "Cancelar",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                this._service.excluir(url, id).subscribe(
                    {
                        next: () => {
                            const Toast = Swal.mixin({
                                toast: true,
                                position: "top-end",
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: false,
                                didOpen: (toast) => {
                                    toast.onmouseenter = Swal.stopTimer;
                                    toast.onmouseleave = Swal.resumeTimer;
                                }
                            });
                            Toast.fire({
                                icon: "success",
                                title: `Apagado com sucesso!`
                            });
                        },
                        error: (err) => {
                            swalWithBootstrapButtons.fire({
                                title: "Cancelado!",
                                text: "Erro ao apargar: " + err,
                                icon: "error"
                            });
                        }
                    }
                );
            }
        })
    }
}
