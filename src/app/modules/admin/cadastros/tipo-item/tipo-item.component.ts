import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BotaoAcaoUnicaComponent} from "../../../../layout/common/botao-acao-unica/botao-acao-unica.component";
import {
    GridListagemSimplesComponent
} from "../../../../layout/common/grid-listagem-simples/grid-listagem-simples.component";
import {TelaBaseComponent} from "../../../../layout/common/tela-base/tela-base.component";
import {QuantidadeModel} from "../../../../core/models/quantidade.model";
import {environment} from "../../../../../environments/environment";
import {Router} from "@angular/router";
import {ServiceService} from "../../../../core/services/service.service";
import {ServiceMensagemService} from "../../../../core/services/service-mensagem.service";
import {TipoItemModel} from "../../../../core/models/tipoItem.model";

@Component({
  selector: 'app-tipo-item',
  standalone: true,
    imports: [CommonModule, BotaoAcaoUnicaComponent, GridListagemSimplesComponent, TelaBaseComponent],
  templateUrl: './tipo-item.component.html',
  styleUrl: './tipo-item.component.scss'
})
export class TipoItemComponent implements OnInit {

    valorData: TipoItemModel[];
    listarTipoItem = environment.tipoItem;
    itensTable = ['id', 'descricao', 'funcoes'];

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
        this._service.listar(this.listarTipoItem)
            .subscribe({
                next: (valor) => {
                    this.valorData = valor
                }, error: (err) => {
                    console.error(err)
                }
            });
    }

    navegar() {
        this._router.navigateByUrl('cadastros/tipo-item/cadastro-tipo-item/')
    }

    deletar(item){
        this._serviceMensagem.excluir(this.listarTipoItem, 'o tipo do item', item.id)
    }

    alterar(valor){
        this._router.navigateByUrl(`cadastros/tipo-item/cadastro-tipo-item/${valor.id}`)
    }
}
