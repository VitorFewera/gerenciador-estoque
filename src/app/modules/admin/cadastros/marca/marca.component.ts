import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TelaBaseComponent} from "../../../../layout/common/tela-base/tela-base.component";
import {BotaoAcaoUnicaComponent} from "../../../../layout/common/botao-acao-unica/botao-acao-unica.component";
import {
    GridListagemSimplesComponent
} from "../../../../layout/common/grid-listagem-simples/grid-listagem-simples.component";
import {Router} from "@angular/router";
import {ServiceService} from "../../../../core/services/service.service";
import {environment} from "../../../../../environments/environment";
import {tap} from "rxjs";
import {MarcaModel} from "../../../../core/models/marca.model";
import {ServiceMensagemService} from "../../../../core/services/service-mensagem.service";


@Component({
    selector: 'app-marca',
    standalone: true,
    imports: [CommonModule, TelaBaseComponent, BotaoAcaoUnicaComponent, GridListagemSimplesComponent],
    templateUrl: './marca.component.html',
    styleUrl: './marca.component.scss'
})
export class MarcaComponent implements OnInit {

    valorData: MarcaModel[];
    listarMarca: string = environment.marca;
    itensTable = ['id', 'descricao', 'referencia', 'funcoes'];

    constructor(
        private _router: Router,
        private _service: ServiceService,
        private _serviceMensagem: ServiceMensagemService
    ) {
    }

    ngOnInit() {
        this.listar()
    }

    listar() {
        this._service.listar(this.listarMarca)
            .subscribe({
                next: (valor) => {
                    this.valorData = valor;
                }
            })
    }

    navegar() {
        this._router.navigateByUrl('cadastros/marca/cadastro-marca')
    }

    deletar(item) {
        this._serviceMensagem.excluir(this.listarMarca, 'a marca', item.id)
    }

    alterar(valor) {
        this._router.navigateByUrl(`cadastros/marca/cadastro-marca/${valor.id}`)
    }
}
