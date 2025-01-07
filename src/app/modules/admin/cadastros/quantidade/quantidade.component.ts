import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TelaBaseComponent} from "../../../../layout/common/tela-base/tela-base.component";
import {CadastroBaseComponent} from "../../../../layout/common/cadastro-base/cadastro-base.component";
import {FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {Router} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {BotaoAcaoUnicaComponent} from "../../../../layout/common/botao-acao-unica/botao-acao-unica.component";
import {DxDataGridModule} from "devextreme-angular";
import {
    GridListagemSimplesComponent
} from "../../../../layout/common/grid-listagem-simples/grid-listagem-simples.component";
import {MatTableModule} from "@angular/material/table";
import {QuantidadeModel} from "./quantidade.model";
import {MatSort} from "@angular/material/sort";

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
        BotaoAcaoUnicaComponent,
        DxDataGridModule,
        GridListagemSimplesComponent,
        MatTableModule
    ],
    templateUrl: './quantidade.component.html',
    styleUrl: './quantidade.component.scss'
})

export class QuantidadeComponent implements OnInit {

    cadastroQuantidadeForm: UntypedFormGroup

    itensTable = ['id', 'descricao', 'quantidade', 'funcoes'];

    constructor(
        private _router: Router
    ) {
    }

    ngOnInit() {
    }


    data: QuantidadeModel[] = [
        {id: 1, descricao: 'Unidade', quantidade: 1},
        {id: 2, descricao: 'Caixa com 10 unidade', quantidade: 10},
        {id: 3, descricao: 'Caixa com 20 unidade', quantidade: 20},
        {id: 4, descricao: 'Caixa com 30 unidade', quantidade: 30},
    ];


    cadastrar() {
        console.log(this.cadastroQuantidadeForm.value)
    }

    navegar() {
        this._router.navigateByUrl('cadastros/quantidade/cadastro-quantidade')
    }


}
