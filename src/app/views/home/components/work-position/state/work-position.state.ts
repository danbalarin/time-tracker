import { StateInitializer } from '../../../../../services/state-initializer';
import { UserDataService } from '../../../../../services/user-data.service';
import { UpdateWorkPosition, InitWorkPosition } from './work-position.actions';
import { Action, State, StateContext } from '@ngxs/store';
import { WorkPosition } from './work-position';
import { Observable, of } from 'rxjs';
import { first } from 'rxjs/operators';


export interface WorkPositionStateModel {
    workPosition: WorkPosition;
}

@State({
    name: 'workPosition'
})
export class WorkPositionState {
    constructor(private userDataService: UserDataService) {}

    @Action(UpdateWorkPosition)
    updatePosition(ctx: StateContext<WorkPositionStateModel>, action: UpdateWorkPosition): Observable<void> {
        ctx.patchState({ workPosition: action.updatedWorkPosition });
        this.userDataService.saveData({});
        return of();
    }

    @Action(InitWorkPosition)
    initWorkPosition(ctx: StateContext<WorkPositionStateModel>, action: InitWorkPosition): Observable<void> {
        return StateInitializer.InitState<WorkPositionStateModel>(ctx, 'workPosition', this.userDataService);
    }
}
