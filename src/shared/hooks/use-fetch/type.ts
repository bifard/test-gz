export type ResponseTypePromise<T extends (...args: any) => any> = Awaited<ReturnType<T>>;

type ArgsType<T> = T extends (...args: infer U) => any ? U : never;

export type UseFetchType = <T, A>(
  fetchFunction: (args: A) => Promise<T>,
  options: ArgsType<typeof fetchFunction>
) => [T | null, boolean];
