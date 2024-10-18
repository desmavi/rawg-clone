//check if an object has some values not null or undefined
export function objectHasNonNullValues<T extends object>(obj: T): boolean {
    return Object.values(obj).some(value => value !== null || value !== "");
}

//capitalize first letter of a word
export function capitalizeWords(str: string): string {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

//return an object of params, excluding those ""
export function buildParamsObj<T extends object>(params: T) : Record<string, any> {
    const newParams: Record<string, any> = {};  

    Object.entries(params).forEach(([key, value]) => {
        if (value !== "") { 
            newParams[key] = value;
        }
    });

    return newParams; 
}

//text trucation
const CHAR_MAX_LENGTH = 400

export function truncateText(text: string | undefined, isExpanded: boolean) {

    if (text && text.length > CHAR_MAX_LENGTH && !isExpanded) {
        return text.substring(0, CHAR_MAX_LENGTH) +  "..."
    } else if (text && text.length > CHAR_MAX_LENGTH && isExpanded) {
        return text
    } else {
        return text
    }
}

