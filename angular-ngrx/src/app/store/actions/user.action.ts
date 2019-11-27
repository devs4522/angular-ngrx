import { Action } from '@ngrx/store';
import { IUser } from '../../models/user.interface';

export enum EUserActions {
    GetUsers = '[User] Get Users',
    GetUser = '[User] Get User',
    GetUersSuccess = '[User] Get Users Success',
    GetUserSuccess = '[User] Get User Success'
}

export class GetUsers implements Action {
    public readonly type = EUserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
    public readonly type = EUserActions.GetUersSuccess;
    constructor(public payload: IUser[]) {}
}

export class GetUser implements Action {
    public readonly type = EUserActions.GetUser;
}

export class GetUserSuccess implements Action {
    public readonly type = EUserActions.GetUserSuccess;
    constructor( public payload: IUser) {}
}
export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess;
