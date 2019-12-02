import { Injectable, Inject } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { IConfig } from '../../models/config.interface';
import { ConfigService } from './../../services/config.service';
import { EConfigActions, GetConfig, GetConfigSuccess } from '../actions/config.actions';

@Injectable()
export class ConfigEffects {
    @Effect()
    getConfig$ = this._action$.pipe(
        ofType<GetConfig>(EConfigActions.GetConfig),
        switchMap(() => this._configService.getConfig()),
        switchMap((config: IConfig) => {
            return of(new GetConfigSuccess(config));
        })
    );

    constructor(
        // tslint:disable-next-line:variable-name
        private _configService: ConfigService,
        // tslint:disable-next-line:variable-name
        private _action$: Actions
    ) {}


}
