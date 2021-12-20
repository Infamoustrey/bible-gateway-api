export type ExtendedConstructor<T = {}> = new (...args: any[]) => T;

export type AnyFunction<A = any> = (...input: any[]) => A
export type AnyConstructor<A = object> = new (...input: any[]) => A
export type Mixin<T extends AnyFunction> = InstanceType<ReturnType<T>>
