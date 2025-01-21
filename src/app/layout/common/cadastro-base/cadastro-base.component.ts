import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FormsModule,
    NgForm,
    ReactiveFormsModule,
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators
} from '@angular/forms';
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-cadastro-base',
  standalone: true,
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ],
  templateUrl: './cadastro-base.component.html',
  styleUrl: './cadastro-base.component.scss'
})
export class CadastroBaseComponent implements OnInit{
    @ViewChild('cadastroNgForm') cadastroNgForm: NgForm;

    @Input() cadastroForm: UntypedFormGroup;
    @Input() alterando = false;
    @Output() sair = new EventEmitter<any>();
    @Output() cadastrar = new EventEmitter<any>();
    @Output() alterar = new EventEmitter<any>();

    constructor(
        private _formBuilder: UntypedFormBuilder
    ) {
    }

    ngOnInit(): void {
        this.cadastroForm = this._formBuilder.group({
           descricao: ['', Validators.required]
        })
    }

    botaoSair(){
        this.sair.emit();
    }

    botaoCadastrar(){
        this.cadastrar.emit();
    }

    botaoAlterar(){
        this.alterar.emit();
    }


}
