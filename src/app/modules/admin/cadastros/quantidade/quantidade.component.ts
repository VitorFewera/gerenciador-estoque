import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TelaBaseComponent} from "../../../../layout/common/tela-base/tela-base.component";
import {CadastroBaseComponent} from "../../../../layout/common/cadastro-base/cadastro-base.component";
import {FormsModule, ReactiveFormsModule, UntypedFormGroup} from "@angular/forms";
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
import {ServiceService} from "../../../../core/services/service.service";
import {QuantidadeModel} from "../../../../core/models/quantidade.model";
import {ServiceMensagemService} from "../../../../core/services/service-mensagem.service";
import {indexOf} from "lodash";
import {environment} from "../../../../../environments/environment";


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

    valorData: QuantidadeModel[];
    listarQuantidade = environment.quantidade
    itensTable = ['id', 'descricao', 'quantidade', 'funcoes'];

    constructor(
        private _router: Router,
        private _service: ServiceService,
        private _serviceMensagem: ServiceMensagemService
    ) {
    }

    ngOnInit() {
        this.listar();
    }

    listar() {
        this._service.listar(this.listarQuantidade)
            .subscribe({
                next: (valor) => {
                    this.valorData = valor
                }, error: (err) => {
                    console.error(err)
                }
            });
    }

    navegar() {
        this._router.navigateByUrl('cadastros/quantidade/cadastro-quantidade')
    }

    deletar(item){
        this._serviceMensagem.excluir(this.listarQuantidade, 'a quantidade', item.id)
    }

    alterar(valor){
        this._router.navigateByUrl(`cadastros/quantidade/cadastro-quantidade/${valor.id}`)
    }
}
