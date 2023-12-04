export declare global {
    interface ranking {
        win: number,
        lose: number,
        draw: number
    }
    interface tablaRanking {
        nombre: string,
        id: string,
        ranking: ranking
    }
}