export function ownKeys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj).filter(k => obj.hasOwnProperty(k)) as (keyof T)[];
}
