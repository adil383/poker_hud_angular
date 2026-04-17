export interface Player {
    id: number;
    name: string;
    position: number;
    initialChips: number;
    isActive: boolean;
    stats: {
        handsPlayed: number;
        callPreflop: number;
        raisePreflop: number;
        foldPreflop: number;
        callPostflop: number;
        raisePostflop: number;
        foldPostflop: number;
        vpip: number;
        pfr: number;
        aggressionFactor: number;
    };
}