import { Routes } from '@angular/router';
import {QuantidadeComponent} from 'app/modules/admin/cadastros/quantidade/quantidade.component';
import {HomeComponent} from 'app/modules/admin/home/home.component';
import {MarcaComponent} from 'app/modules/admin/cadastros/marca/marca.component'
import {TipoItemComponent} from 'app/modules/admin/cadastros/tipo-item/tipo-item.component'
import {ArmazenagemComponent} from 'app/modules/admin/cadastros/armazenagem/armazenagem.component'
import {CadastroQuantidadeComponent} from "./quantidade/cadastro-quantidade/cadastro-quantidade.component";
import {CadastroMarcaComponent} from "./marca/cadastro-marca/cadastro-marca.component";
import {CadastroTipoItemComponent} from "./tipo-item/cadastro-tipo-item/cadastro-tipo-item.component";
import {ArmazenagemCadastroComponent} from "./armazenagem/armazenagem-cadastro/armazenagem-cadastro.component";

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
        path     : 'quantidade/cadastro-quantidade',
        component: CadastroQuantidadeComponent,
    },
    {
        path     : 'quantidade/cadastro-quantidade/:id',
        component: CadastroQuantidadeComponent,
    },
    {
        path     : 'marca',
        component: MarcaComponent,
    },
    {
        path     : 'marca/cadastro-marca',
        component: CadastroMarcaComponent,
    },
    {
        path     : 'marca/cadastro-marca/:id',
        component: CadastroMarcaComponent,
    },
    {
        path     : 'tipo-item',
        component: TipoItemComponent,
    },
    {
        path     : 'tipo-item/cadastro-tipo-item',
        component: CadastroTipoItemComponent,
    },
    {
        path     : 'tipo-item/cadastro-tipo-item/:id',
        component: CadastroTipoItemComponent,
    },
    {
        path     : 'armazenagem',
        component: ArmazenagemComponent,
    },
    {
        path     : 'armazenagem/cadastro-armazenagem/',
        component: ArmazenagemCadastroComponent,
    },
    {
        path     : 'armazenagem/cadastro-armazenagem/:id',
        component: ArmazenagemCadastroComponent,
    },

] as Routes;
