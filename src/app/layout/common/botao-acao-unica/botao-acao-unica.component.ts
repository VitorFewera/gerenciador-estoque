import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-botao-acao-unica',
  standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './botao-acao-unica.component.html',
  styleUrl: './botao-acao-unica.component.scss'
})
export class BotaoAcaoUnicaComponent {

    @Input() nomeBotao: string;
    @Input() iconeBotao: string;
    @Output() acaoUnica: EventEmitter<any> = new EventEmitter();

    navegar(){
    this.acaoUnica.emit();
    }

}
