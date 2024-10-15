import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Navigation } from 'app/core/navigation/navigation.types';
import { Observable, ReplaySubject, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class NavigationService
{
    private _httpClient = inject(HttpClient);
    private _navigation: ReplaySubject<Navigation> = new ReplaySubject<Navigation>(1);

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    // @ts-ignore
    /**
     * Getter for navigation
     */
    get navigation$(): Observable<Navigation>
    {
        return this._navigation.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get all navigation data
     */
    get(): Observable<Navigation>
    {
        return this._httpClient.get<Navigation>('api/common/navigation').pipe(
            tap((navigation) =>
            {
                navigation.horizontal.push({
                    title: 'Home',
                    icon: 'heroicons_solid:home',
                    link: '/home',
                    type: 'basic'
                }),
                    navigation.horizontal.push({
                        title: 'Home',
                        icon: 'heroicons_solid:home',
                        link: '/home',
                        type: 'group',
                        children:[
                            {
                                title: 'Home',
                                icon: 'heroicons_solid:home',
                                link: '/home',
                                type: 'basic'
                            }
                        ]
                    })


                this._navigation.next(navigation);
            }),
        );
    }
}
