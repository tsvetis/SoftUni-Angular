/** Comparison between promise and observable */
// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(100);
//     resolve(200);
//     resolve(300);
//   });
// });
// promise.then((data) => console.log('promise', data));
// const observable = new Observable((observable) => {
//   setTimeout(() => {
//     observable.next(100);
//     observable.next(200);
//     observable.next(300);
//   });
// });
// const subscription = observable.subscribe((data) =>
//   console.log('observable', data)
// );
// subscription.unsubscribe();

// HOT OBSERVABLE
// const o = new Observable((observable) => {
//   // generate data here
//   return observable.next(Math.random());
// });
// COLD OBSERVABLE
// const rand = Math.random();
// const o = new Observable((observable) => {
//   return observable.next(rand);
// });
// o.subscribe((data) => console.log('subscription 1: ', data));
// o.subscribe((data) => console.log('subscription 2: ', data));
// o.subscribe((data) => console.log('subscription 2: ', data));
// o.subscribe((data) => console.log('subscription 2: ', data));
// o.subscribe((data) => console.log('subscription 2: ', data));
