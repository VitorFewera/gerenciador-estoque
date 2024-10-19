import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {Navigation} from 'app/core/navigation/navigation.types';
import {Observable, ReplaySubject, tap} from 'rxjs';

@Injectable({providedIn: 'root'})
export class NavigationService {
    private _httpClient = inject(HttpClient);
    private _navigation: ReplaySubject<Navigation> = new ReplaySubject<Navigation>(1);

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    // @ts-ignore
    /**
     * Getter for navigation
     */
    get navigation$(): Observable<Navigation> {
        return this._navigation.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get all navigation data
     */
    get(): Observable<Navigation> {
        return this._httpClient.get<Navigation>('api/common/navigation').pipe(
            tap((navigation) => {
                navigation.horizontal.push({
                    title: 'Home',
                    icon: 'heroicons_solid:home',
                    link: '/home',
                    type: 'basic'
                }),
                    navigation.horizontal.push({
                        title: 'Armazenar',
                        icon: 'heroicons_solid:arrow-up-on-square',
                        link: '/armazenar',
                        type: 'basic',
                        // children:[
                        //     {
                        //         title: 'Home',
                        //         icon: 'heroicons_solid:home',
                        //         link: '/home',
                        //         type: 'basic'
                        //     }
                        // ]
                    }),
                    navigation.horizontal.push({
                        title: 'Manutenção',
                        icon: 'mat_solid:build_circle',
                        type: 'group',
                        children: [
                            {
                                title: 'Estoque',
                                icon: 'mat_solid:inventory_2',
                                link: '/manutencao/estoque',
                                type: 'basic'
                            },
                            {
                                title: 'Item',
                                icon: 'mat_solid:shopping_bag',
                                link: '/manutencao/item',
                                type: 'basic'
                            }
                        ]
                    }),
                    navigation.horizontal.push({
                        title: 'Cadastros',
                        icon: 'mat_solid:library_add',
                        type: 'group',
                        children: [
                            {
                                title: 'Quantidade',
                                icon: 'mat_solid:view_in_ar',
                                link: '/cadastros/quantidade',
                                type: 'basic'
                            },
                            {
                                title: 'Marca',
                                icon: 'mat_solid:local_offer',
                                link: '/cadastros/marca',
                                type: 'basic'
                            },
                            {
                                title: 'Tipo de Item',
                                icon: 'mat_solid:bookmarks',
                                link: '/cadastros/tipo-item',
                                type: 'basic'
                            },
                            {
                                title: 'Armazenagem',
                                icon: 'heroicons_solid:wallet',
                                link: '/cadastros/armazenagem',
                                type: 'basic'
                            },

                        ]
                    })
                this._navigation.next(navigation);
            }),
        );
    }
}
