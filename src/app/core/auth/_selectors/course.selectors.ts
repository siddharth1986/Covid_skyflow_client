// NGRX
import { createFeatureSelector, createSelector } from '@ngrx/store';
// CRUD
import { QueryResultsModel, HttpExtenstionsModel } from '../../_base/crud';
// State
import { CoursesState } from '../_reducers/course.reducers';
import { each } from 'lodash';
import { Course } from '../_models/course.model';

export const selectUsersState = createFeatureSelector<CoursesState>('courses');

export const selectUserById = (userId: number) => createSelector(
    selectUsersState,
    usersState => usersState.entities[userId]
);

export const selectUsersPageLoading = createSelector(
    selectUsersState,
    usersState => {
        return usersState.listLoading;
    }
);

export const selectUsersActionLoading = createSelector(
    selectUsersState,
    usersState => usersState.actionsloading
);

export const selectLastCreatedUserId = createSelector(
    selectUsersState,
    usersState => usersState.lastCreatedUserId
);

export const selectUsersPageLastQuery = createSelector(
    selectUsersState,
    usersState => usersState.lastQuery
);

export const selectUsersInStore = createSelector(
    selectUsersState,
    usersState => {
        const items: Course[] = [];
        each(usersState.entities, element => {
            items.push(element);
        });
        const httpExtension = new HttpExtenstionsModel();
        const result: Course[] = httpExtension.sortArray(items, usersState.lastQuery.sortField, usersState.lastQuery.sortOrder);
        return new QueryResultsModel(result, usersState.totalCount, '');
    }
);

export const selectUsersShowInitWaitingMessage = createSelector(
    selectUsersState,
    usersState => usersState.showInitWaitingMessage
);

export const selectHasUsersInStore = createSelector(
    selectUsersState,
    queryResult => {
        if (!queryResult.totalCount) {
            return false;
        }

        return true;
    }
);
