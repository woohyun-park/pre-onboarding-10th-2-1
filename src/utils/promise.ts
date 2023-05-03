export async function wrapPromise(
  callback: Function,
  delay: number
): Promise<any> {
  await Promise.all([
    callback(),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(0);
      }, delay);
    }),
  ]);
}
