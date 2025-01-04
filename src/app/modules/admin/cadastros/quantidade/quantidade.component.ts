import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TelaBaseComponent} from "../../../../layout/common/tela-base/tela-base.component";
import {CadastroBaseComponent} from "../../../../layout/common/cadastro-base/cadastro-base.component";
import {FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {Router} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {BotaoAcaoUnicaComponent} from "../../../../layout/common/botao-acao-unica/botao-acao-unica.component";

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
        MatIconModule,
        MatButtonModule,
        BotaoAcaoUnicaComponent
    ],
  templateUrl: './quantidade.component.html',
  styleUrl: './quantidade.component.scss'
})
export class QuantidadeComponent implements OnInit{

    cadastroQuantidadeForm: UntypedFormGroup

    constructor(
        private _formGroup: UntypedFormBuilder,
        private _router: Router
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
navegar(){
        this._router.navigateByUrl('cadastros/quantidade/cadastro-quantidade')
}
}
