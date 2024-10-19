import { Routes } from '@angular/router';
import {QuantidadeComponent} from 'app/modules/admin/cadastros/quantidade/quantidade.component';
import {HomeComponent} from 'app/modules/admin/home/home.component';
import {MarcaComponent} from 'app/modules/admin/cadastros/marca/marca.component'
import {TipoItemComponent} from 'app/modules/admin/cadastros/tipo-item/tipo-item.component'
import {ArmazenagemComponent} from 'app/modules/admin/cadastros/armazenagem/armazenagem.component'

export default [
    {
        path     : '',
        component: HomeComponent,
    },
    {
        path     : 'quantidade',
        component: QuantidadeComponent,
    },
    {
        path     : 'marca',
        component: MarcaComponent,
    },
    {
        path     : 'tipo-item',
        component: TipoItemComponent,
    },
    {
        path     : 'armazenagem',
        component: ArmazenagemComponent,
    }
] as Routes;
