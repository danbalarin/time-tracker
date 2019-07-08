import { UpdatePosition, InitPosition } from './position.actions';
import { Action, State, StateContext } from '@ngxs/store';
import { patch, updateItem } from '@ngxs/store/operators';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


export interface PositionStateModel {
    position: Position;
}

@State({
    name: 'position'
})
export class PositionState {
    @Action(UpdatePosition)
    updatePosition(ctx: StateContext<PositionStateModel>, action: UpdatePosition): Observable<void> {
        console.log(ctx);
        return of();
    }

    @Action(InitPosition)
    initPosition(ctx: StateContext<PositionStateModel>, action: InitPosition): Observable<Position> {

        return of(ctx.getState().position);
    }
}
