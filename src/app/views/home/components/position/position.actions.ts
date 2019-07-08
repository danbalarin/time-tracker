export class UpdatePosition {
    static readonly type = '[POSITION] Update';

    constructor(public updatedPosition: Position) {}
}

export class InitPosition {
    static readonly type = '[POSITION] Init';

    constructor() {}
}

export type Actions = UpdatePosition | InitPosition;
