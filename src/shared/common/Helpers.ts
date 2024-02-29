export function removeDups<Type> (array: Type[]): Type[]{
    return Array.from(new Set(array));
}