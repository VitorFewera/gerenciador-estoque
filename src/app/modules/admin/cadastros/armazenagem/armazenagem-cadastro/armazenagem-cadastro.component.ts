import {Component, OnInit} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {CadastroBaseComponent} from "../../../../../layout/common/cadastro-base/cadastro-base.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {TelaBaseComponent} from "../../../../../layout/common/tela-base/tela-base.component";
import {environment} from "../../../../../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceService} from "../../../../../core/services/service.service";
import {ServiceMensagemService} from "../../../../../core/services/service-mensagem.service";

@Component({
  selector: 'app-armazenagem-cadastro',
  standalone: true,
    imports: [CommonModule, CadastroBaseComponent, MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule, TelaBaseComponent],
  templateUrl: './armazenagem-cadastro.component.html',
  styleUrl: './armazenagem-cadastro.component.scss'
})
export class ArmazenagemCadastroComponent implements OnInit{
    cadastroArmazenagemForm: UntypedFormGroup

    idRecuperado: any;
    URL = environment.armazenagem;
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
        this.cadastroArmazenagemForm = this._formGroup.group({
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
                    this.cadastroArmazenagemForm.patchValue(result);
                },
                error: (error) => {
                    console.error('Erro ao carregar dados:', error);
                }
            })
    }

    cadastrar() {
        if (this.cadastroArmazenagemForm.invalid) {
            this._serviceMensagem.menssagemPreencherDados();
            return;
        }

        this.cadastroArmazenagemForm.disable();

        this._service.cadastrar(this.URL, this.cadastroArmazenagemForm.value)
            .subscribe({
                next: (cadastro) => {
                    this._serviceMensagem.mensagemCadastroSucesso('Tipo do Item');
                    this._route.navigateByUrl('cadastros/armazenagem');
                },
                error: (err) => {
                    this._serviceMensagem.mensagemErro(err);
                }
            })
    }

    alterar(){
        if (this.cadastroArmazenagemForm.invalid) {
            this._serviceMensagem.menssagemPreencherDados();
            return;
        }

        this.cadastroArmazenagemForm.disable();

        const url = `${this.URL}${String(this.idRecuperado)}/`
        this._service.alterar(url, this.cadastroArmazenagemForm.value)
            .subscribe({
                next: (alterar) => {
                    this._serviceMensagem.mensagemAlterarSucesso('Armazenagem');
                    this._route.navigateByUrl('cadastros/armazenagem');
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
