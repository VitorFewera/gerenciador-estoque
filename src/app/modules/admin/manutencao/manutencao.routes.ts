import { Routes } from '@angular/router';
import {EstoqueComponent} from 'app/modules/admin/manutencao/estoque/estoque.component';
import {ItemComponent} from 'app/modules/admin/manutencao/item/item.component';
import { HomeComponent } from '../home/home.component';



export default [
    {
        path     : '',
        component: HomeComponent,
    },
    {
        path     : 'estoque',
        component: EstoqueComponent,
    },
    {
        path     : 'item',
        component: ItemComponent,
    }
] as Routes;
