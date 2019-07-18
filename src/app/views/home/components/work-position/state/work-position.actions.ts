import { WorkPosition } from './work-position';

export class UpdateWorkPosition {
    static readonly type = '[POSITION] Update';

    constructor(public updatedWorkPosition: WorkPosition) {}
}

export class InitWorkPosition {
    static readonly type = '[POSITION] Init';

    constructor() {}
}

export type Actions = UpdateWorkPosition | InitWorkPosition;
