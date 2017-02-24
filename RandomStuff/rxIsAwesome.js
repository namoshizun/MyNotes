/**
 * Example code from 'Introduction to RxJS and preliminary application'
 *
 * a very interesting example to show how elegant Rx is in handling complex event streams.
 */

let Rx = require('rxjs');


// Make money is to buy house, and buy house is to make money...
const house$ = new Rx.Subject()
const houseCount$ = house$.scan((acc, num) => acc + num, 0).startWith(0)


// Salay never increses (sigh)
const salary$ = Rx.Observable.interval(100).mapTo(2)
const rent$ = Rx.Observable.interval(3000)
  .withLatestFrom(houseCount$)
  .map((salary, houseCount) => houseCount * 5)

// Money is all gone once the house is bought :( ...
const income$ = Rx.Observable.merge(salary$, rent$)
const cash$ = income$
  .scan((acc, num) => {
    const newHouse = Math.floor(newSum / 100)
    if (newHouse > 0) {
      house$.next(newHouse)
    }

    return newSum % 100
  }, 0)


// Make a lot of money and buy a lot of houses!!!
houseCount$.subscribe(num => console.log(`houseCount: ${num}`))
cash$.subscribe(num => console.log(`cash: ${num}`))