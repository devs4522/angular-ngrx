import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IAppState } from './store/state/app.state';
import { GetConfig, ConfigActions } from './store/actions/config.actions';
import { selectConfig } from './store/selectors/config.selector';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx';
  config$ = this._store.pipe(select(selectConfig));

  // tslint:disable-next-line:variable-name
  constructor(private _store: Store<IAppState>, private _configService: ConfigService) {}

  ngOnInit() {
    this._store.dispatch(new GetConfig());
    this._configService.getConfig().subscribe(res => console.log(res));
  }
}
