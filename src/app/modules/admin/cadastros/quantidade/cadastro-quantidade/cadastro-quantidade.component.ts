import {Component, OnInit} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {TelaBaseComponent} from "../../../../../layout/common/tela-base/tela-base.component";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CadastroBaseComponent} from "../../../../../layout/common/cadastro-base/cadastro-base.component";
import {FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceService} from "../../../../../core/services/service.service";
import {tap} from "rxjs";
import {ServiceMensagemService} from "../../../../../core/services/service-mensagem.service";
import {QuantidadeModel} from "../../../../../core/models/quantidade.model";
import {environment} from "../../../../../../environments/environment";
import {MatIconModule} from "@angular/material/icon";



@Component({
    selector: 'app-quantidade',
    standalone: true,
    imports: [
        CommonModule,
        TelaBaseComponent,
        CadastroBaseComponent,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatIconModule
    ],
    templateUrl: './cadastro-quantidade.component.html',
    styleUrl: './cadastro-quantidade.component.scss'
})
export class CadastroQuantidadeComponent implements OnInit {

    cadastroQuantidadeForm: UntypedFormGroup

    idRecuperado: any;
    URL = environment.quantidade;
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
        this.cadastroQuantidadeForm = this._formGroup.group({
            descricao: ['', Validators.required],
            quantidade: ['', Validators.required]
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
                    this.cadastroQuantidadeForm.patchValue(result);
                },
                error: (error) => {
                    console.error('Erro ao carregar dados:', error);
                }
            })
    }

    cadastrar() {
        if (this.cadastroQuantidadeForm.invalid) {
            this._serviceMensagem.menssagemPreencherDados();
            return;
        }

        this.cadastroQuantidadeForm.disable();

        this._service.cadastrar(this.URL, this.cadastroQuantidadeForm.value)
            .subscribe({
                next: (cadastro) => {
                    this._serviceMensagem.mensagemCadastroSucesso('Quantidade');
                    this._route.navigateByUrl('cadastros/quantidade');
                },
                error: (err) => {
                    this._serviceMensagem.mensagemErro(err);
                }
            })
    }

    alterar(){
        if (this.cadastroQuantidadeForm.invalid) {
            this._serviceMensagem.menssagemPreencherDados();
            return;
        }

        this.cadastroQuantidadeForm.disable();

        const url = `${this.URL}${String(this.idRecuperado)}/`
        this._service.alterar(url, this.cadastroQuantidadeForm.value)
            .subscribe({
                next: (alterar) => {
                    this._serviceMensagem.mensagemAlterarSucesso('Quantidade');
                    this._route.navigateByUrl('cadastros/quantidade');
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
