import {Component, OnInit} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {TelaBaseComponent} from "../../../../../layout/common/tela-base/tela-base.component";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {CadastroBaseComponent} from "../../../../../layout/common/cadastro-base/cadastro-base.component";
import {FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


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
export class CadastroQuantidadeComponent implements OnInit{

    cadastroQuantidadeForm: UntypedFormGroup

    constructor(
        private _formGroup: UntypedFormBuilder,
        private _route: Router,
        private _location: Location
    ) {
    }

    ngOnInit() {
        this.cadastroQuantidadeForm = this._formGroup.group({
            descricao:['', Validators.required],
            quantidade:['', Validators.required]
        })
    }

    cadastrar(){
        console.log(this.cadastroQuantidadeForm.value)
    }

    sair(){
        this._location.back();
    }
}
