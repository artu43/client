export function stringHash(str: string): number {
    let hash = 0;
    let chr = 0;
    if (str.length === 0) {
        return hash;
    }
    for (let i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    return hash < 0 ? hash * -2 : hash;
}
