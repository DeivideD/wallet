// eslint-disable-next-line @typescript-eslint/ban-types
export function ownKeys<T extends object>(obj: T): (keyof T)[] {
  // eslint-disable-next-line no-prototype-builtins
  return Object.keys(obj).filter(k => obj.hasOwnProperty(k)) as (keyof T)[];
}
