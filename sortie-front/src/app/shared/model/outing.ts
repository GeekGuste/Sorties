export interface Outing {
    id: number;
    date: Date;
}

export interface OutingDeclaration {
    id?: number;
    date: Date;
    name: string;
    situation: string;
    details: string;
}