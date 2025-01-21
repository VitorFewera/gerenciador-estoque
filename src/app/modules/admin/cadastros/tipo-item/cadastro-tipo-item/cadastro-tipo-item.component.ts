import { Component } from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {CadastroBaseComponent} from "../../../../../layout/common/cadastro-base/cadastro-base.component";
import {FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {TelaBaseComponent} from "../../../../../layout/common/tela-base/tela-base.component";
import {environment} from "../../../../../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceService} from "../../../../../core/services/service.service";
import {ServiceMensagemService} from "../../../../../core/services/service-mensagem.service";

@Component({
  selector: 'app-cadastro-tipo-item',
  standalone: true,
    imports: [CommonModule, CadastroBaseComponent, FormsModule, MatFormFieldModule, MatIconModule, MatInputModule, TelaBaseComponent, ReactiveFormsModule],
  templateUrl: './cadastro-tipo-item.component.html',
  styleUrl: './cadastro-tipo-item.component.scss'
})
export class CadastroTipoItemComponent {
    cadastroTipoItemForm: UntypedFormGroup

    idRecuperado: any;
    URL = environment.tipoItem;
    alterando: boolean = false;

    constructor(
        private _formGroup: UntypedFormBuilder,
        private _route: Router,
        private _location: Location,
        private _service: ServiceService,
        private _serviceMensagem: ServiceMensagemService,
        private _activedRoute: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.cadastroTipoItemForm = this._formGroup.group({
            descricao: ['', Validators.required],
        })

        this.idRecuperado = this._activedRoute.snapshot.paramMap.get('id');
        if(this.idRecuperado){
            this.alterando = true;
            let endereco = `${this.URL}${this.idRecuperado}`
            this.listar(endereco)
        }
    }

    listar(url){
        this._service.listar(url)
            .subscribe({
                next: result => {
                    this.cadastroTipoItemForm.patchValue(result);
                },
                error: (error) => {
                    console.error('Erro ao carregar dados:', error);
                }
            })
    }

    cadastrar() {
        if (this.cadastroTipoItemForm.invalid) {
            this._serviceMensagem.menssagemPreencherDados();
            return;
        }

        this.cadastroTipoItemForm.disable();

        this._service.cadastrar(this.URL, this.cadastroTipoItemForm.value)
            .subscribe({
                next: (cadastro) => {
                    this._serviceMensagem.mensagemCadastroSucesso('Tipo do Item');
                    this._route.navigateByUrl('cadastros/tipo-item');
                },
                error: (err) => {
                    this._serviceMensagem.mensagemErro(err);
                }
            })
    }

    alterar(){
        if (this.cadastroTipoItemForm.invalid) {
            this._serviceMensagem.menssagemPreencherDados();
            return;
        }

        this.cadastroTipoItemForm.disable();

        const url = `${this.URL}${String(this.idRecuperado)}/`
        this._service.alterar(url, this.cadastroTipoItemForm.value)
            .subscribe({
                next: (alterar) => {
                    this._serviceMensagem.mensagemAlterarSucesso('Tipo do Item');
                    this._route.navigateByUrl('cadastros/tipo-item');
                },
                error: (err) => {
                    console.log(err)
                    this._serviceMensagem.mensagemErro(err);
                }
            })
    }

    sair() {
        this._service.sair()
    }
}
