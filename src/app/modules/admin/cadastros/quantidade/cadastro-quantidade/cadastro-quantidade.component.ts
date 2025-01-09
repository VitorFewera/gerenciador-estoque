import {Component, OnInit} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {TelaBaseComponent} from "../../../../../layout/common/tela-base/tela-base.component";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CadastroBaseComponent} from "../../../../../layout/common/cadastro-base/cadastro-base.component";
import {FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ServiceService} from "../../../../../core/services/service.service";
import {tap} from "rxjs";
import {ServiceMensagemService} from "../../../../../core/services/service-mensagem.service";
import {QuantidadeModel} from "../../../../../core/models/quantidade.model";


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
        MatInputModule
    ],
    templateUrl: './cadastro-quantidade.component.html',
    styleUrl: './cadastro-quantidade.component.scss'
})
export class CadastroQuantidadeComponent implements OnInit {

    cadastroQuantidadeForm: UntypedFormGroup

    constructor(
        private _formGroup: UntypedFormBuilder,
        private _route: Router,
        private _location: Location,
        private _service: ServiceService,
        private _serviceMensagem: ServiceMensagemService
    ) {
    }

    ngOnInit() {
        this.cadastroQuantidadeForm = this._formGroup.group({
            descricao: ['', Validators.required],
            quantidade: ['', Validators.required]
        })
    }

    cadastrar() {
        this._service.cadastrar(this.cadastroQuantidadeForm.value, 'quantidade')
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

    sair() {
        this._location.back();
    }
}
