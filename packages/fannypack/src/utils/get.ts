export function get(obj: any, path: string | number, fallback?: any, index?: number) {
  //@ts-ignore
  path = (path?.split?.('.') ?? [path]) as string;
  for (index = 0; index < path.length; index++) {
    obj = obj ? obj[path[index]] : undefined;
  }
  return obj === undefined ? fallback : obj;
}
