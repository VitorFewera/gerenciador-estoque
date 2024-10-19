import { Routes } from '@angular/router';
import {HomeComponent} from 'app/modules/admin/home/home.component';
import { ArmazenarComponent } from './armazenar.component';


export default [
    {
        path     : '',
        component: HomeComponent,
    },
    {
        path     : '',
        component: ArmazenarComponent,
    },
] as Routes;
