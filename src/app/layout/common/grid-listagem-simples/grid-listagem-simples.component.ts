import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DxDataGridModule} from "devextreme-angular";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {MatTableModule} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-grid-listagem-simples',
  standalone: true,
    imports: [CommonModule, DxDataGridModule, MatButtonModule, MatIconModule, MatTableModule],
  templateUrl: './grid-listagem-simples.component.html',
  styleUrl: './grid-listagem-simples.component.scss'
})
export class GridListagemSimplesComponent {

    @ViewChild('recentTransactionsTable', {read: MatSort}) recentTransactionsTableMatSort: MatSort;
    @Input() dataSource: any;
    @Input() itensTable: string[];
    @Input() quantidade: boolean;
    @Output() editarItem: EventEmitter<any> = new EventEmitter();
    @Output() apagarItem: EventEmitter<any> = new EventEmitter();

    editar(id){
        this.editarItem.emit();
    }
    apagar(id){
        this.apagarItem.emit(id);
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

}
