// NGRX
import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
// CRUD
import { Course as User } from '../_models/course.model';
// Models
import { QueryParamsModel } from '../../_base/crud';

export enum CourseActionTypes {
    AllUsersRequested = '[Users Module] All Users Requested',
    AllUsersLoaded = '[Users API] All Users Loaded',
    UserOnServerCreated = '[Edit User Component] User On Server Created',
    UserCreated = '[Edit User Dialog] User Created',
    UserUpdated = '[Edit User Dialog] User Updated',
    UserDeleted = '[Users List Page] User Deleted',
    UsersPageRequested = '[Users List Page] Users Page Requested',
    UsersPageLoaded = '[Users API] Users Page Loaded',
    UsersPageCancelled = '[Users API] Users Page Cancelled',
    UsersPageToggleLoading = '[Users] Users Page Toggle Loading',
    UsersActionToggleLoading = '[Users] Users Action Toggle Loading'
}

export class UserOnServerCreated implements Action {
    readonly type = CourseActionTypes.UserOnServerCreated;
    constructor(public payload: { user: User }) { }
}

export class UserCreated implements Action {
    readonly type = CourseActionTypes.UserCreated;
    constructor(public payload: { user: User }) { }
}


export class UserUpdated implements Action {
    readonly type = CourseActionTypes.UserUpdated;
    constructor(public payload: {
        partialUser: Update<User>,
        user: User
    }) { }
}

export class UserDeleted implements Action {
    readonly type = CourseActionTypes.UserDeleted;
    constructor(public payload: { id: number }) {}
}

export class UsersPageRequested implements Action {
    readonly type = CourseActionTypes.UsersPageRequested;
    constructor(public payload: { page: QueryParamsModel }) { }
}

export class UsersPageLoaded implements Action {
    readonly type = CourseActionTypes.UsersPageLoaded;
    constructor(public payload: { users: User[], totalCount: number, page: QueryParamsModel  }) { }
}


export class UsersPageCancelled implements Action {
    readonly type = CourseActionTypes.UsersPageCancelled;
}

export class UsersPageToggleLoading implements Action {
    readonly type = CourseActionTypes.UsersPageToggleLoading;
    constructor(public payload: { isLoading: boolean }) { }
}

export class UsersActionToggleLoading implements Action {
    readonly type = CourseActionTypes.UsersActionToggleLoading;
    constructor(public payload: { isLoading: boolean }) { }
}

export type CourseActions = UserCreated
| UserUpdated
| UserDeleted
| UserOnServerCreated
| UsersPageLoaded
| UsersPageCancelled
| UsersPageToggleLoading
| UsersPageRequested
| UsersActionToggleLoading;
