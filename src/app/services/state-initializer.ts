import { UserDataService } from './user-data.service';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StateContext } from '@ngxs/store';

export class StateInitializer {
    static InitState<U>(ctx: StateContext<U>, stateName: string, userDataService: UserDataService): Observable<void> {
        return new Observable(resolve => {
            const pos = ctx.getState()[stateName];
            if (!pos) {
                userDataService.getData().pipe(first()).subscribe(backendData => {
                    ctx.patchState(backendData[stateName]);
                    resolve.complete();
                });
            } else {
                const data = {};
                data[stateName] = pos;
                ctx.patchState(data);
                resolve.complete();
            }
        });
    }
}