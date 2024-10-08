export function objectHasNonNullValues<T extends object>(obj: T): boolean {
    return Object.values(obj).some(value => value !== null && value !== undefined);
}
