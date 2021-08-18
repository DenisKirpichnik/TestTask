export const empty = (value: any) => value.length !== 0;

export const positive = (value: number) => value >= 0;

export const number = (value: number) => typeof value === 'number';
