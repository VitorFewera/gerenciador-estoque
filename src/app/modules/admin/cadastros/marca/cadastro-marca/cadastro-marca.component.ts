import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {TelaBaseComponent} from "../../../../../layout/common/tela-base/tela-base.component";
import {CadastroBaseComponent} from "../../../../../layout/common/cadastro-base/cadastro-base.component";
import {ServiceService} from "../../../../../core/services/service.service";
import {ServiceMensagemService} from "../../../../../core/services/service-mensagem.service";
import {ActivatedRoute, Router} from "@angular/router";
import {
    FormBuilder,
    FormGroup, NgForm,
    ReactiveFormsModule,
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators
} from "@angular/forms";
import {environment} from "../../../../../../environments/environment";
import {tap} from "rxjs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";

@Component({
    selector: 'app-cadastro-marca',
    standalone: true,
    imports: [CommonModule, TelaBaseComponent, CadastroBaseComponent, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatIconModule],
    templateUrl: './cadastro-marca.component.html',
    styleUrl: './cadastro-marca.component.scss'
})
export class CadastroMarcaComponent implements OnInit {
    @ViewChild('marcaNgForm') marcaNgForm: NgForm;

    marcaForm: UntypedFormGroup;
    idRecuperado: any;
    URL = environment.marca;
    alterando: boolean = false;

    constructor(
        private _service: ServiceService,
        private _serviceMensagem: ServiceMensagemService,
        private _router: Router,
        private _formBuilder: UntypedFormBuilder,
        private _activedRoute: ActivatedRoute,
        private _location: Location
    ) {
    }

    ngOnInit() {
        this.marcaForm = this._formBuilder.group({
            descricao: ['', Validators.required],
            referencia: ['', Validators.required]
        })

        this.idRecuperado = this._activedRoute.snapshot.paramMap.get('id');
        if (this.idRecuperado) {
            this.alterando = true;
            let endereco = `${this.URL}${this.idRecuperado}`
            this.listar(endereco)
        }
    }

    listar(url){
        this._service.listar(url)
            .subscribe({
                next: result => {
                    this.marcaForm.patchValue(result);
                },
                error: (error) => {
                    console.error('Erro ao carregar dados:', error);
                }
            })
    }

    cadastrar(){

        if (this.marcaForm.invalid) {
            this._serviceMensagem.menssagemPreencherDados();
            return;
        }

        this.marcaForm.disable();

        this._service.cadastrar(this.URL, this.marcaForm.value)
            .subscribe({
                next: (cadastro) => {
                    this._serviceMensagem.mensagemCadastroSucesso('Marca');
                    this._router.navigateByUrl('cadastros/marca');
                },
                error: (err) => {
                    this.marcaForm.enable()
                    this._serviceMensagem.mensagemErro(err);
                }
            })
    }

    alterar(){
        if (this.marcaForm.invalid) {
            this._serviceMensagem.menssagemPreencherDados();
            return;
        }

        this.marcaForm.disable();

        const url = `${this.URL}${String(this.idRecuperado)}/`
        this._service.alterar(url, this.marcaForm.value)
            .subscribe({
                next: (alterar) => {
                    this._serviceMensagem.mensagemAlterarSucesso('Marca');
                    this._router.navigateByUrl('cadastros/marca');
                },
                error: (err) => {
                    this.marcaForm.enable()
                    console.log(err)
                    this._serviceMensagem.mensagemErro(err);
                }
            })
    }

    sair() {
       this._service.sair();
    }
}
