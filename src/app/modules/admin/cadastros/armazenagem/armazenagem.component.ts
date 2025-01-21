import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BotaoAcaoUnicaComponent} from "../../../../layout/common/botao-acao-unica/botao-acao-unica.component";
import {
    GridListagemSimplesComponent
} from "../../../../layout/common/grid-listagem-simples/grid-listagem-simples.component";
import {TelaBaseComponent} from "../../../../layout/common/tela-base/tela-base.component";
import {TipoItemModel} from "../../../../core/models/tipoItem.model";
import {environment} from "../../../../../environments/environment";
import {Router} from "@angular/router";
import {ServiceService} from "../../../../core/services/service.service";
import {ServiceMensagemService} from "../../../../core/services/service-mensagem.service";
import {ArmazenagemModel} from "../../../../core/models/armazenagem.model";

@Component({
  selector: 'app-armazenagem',
  standalone: true,
    imports: [CommonModule, BotaoAcaoUnicaComponent, GridListagemSimplesComponent, TelaBaseComponent],
  templateUrl: './armazenagem.component.html',
  styleUrl: './armazenagem.component.scss'
})
export class ArmazenagemComponent implements OnInit{

    valorData: ArmazenagemModel[];
    listarArmazenagem = environment.armazenagem
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
        this._service.listar(this.listarArmazenagem)
            .subscribe({
                next: (valor) => {
                    this.valorData = valor
                }, error: (err) => {
                    console.error(err)
                }
            });
    }

    navegar() {
        this._router.navigateByUrl('cadastros/armazenagem/cadastro-armazenagem/')
    }

    deletar(item){
        this._serviceMensagem.excluir(this.listarArmazenagem, 'a armazenagem', item.id)
    }

    alterar(valor){
        this._router.navigateByUrl(`cadastros/armazenagem/cadastro-armazenagem/${valor.id}`)
    }
}
