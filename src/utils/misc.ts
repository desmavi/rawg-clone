export function objectHasNonNullValues<T extends object>(obj: T): boolean {
    return Object.values(obj).some(value => value !== null || value !== "");
}

export function capitalizeWords(str: string): string {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
