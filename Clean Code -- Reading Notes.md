# Clean Code -- Reading Notes

> Small Things Matter

A piece of code should be where you expect to find it -- and, if not, you should re-factor to get it there. 

## Introduction

> You must learn the knowledge of principles, patterns, practices, and heuristics that a craftsman knows, and you must also grind that knowledge into your fingers, eyes and guts by working hard and practicing. 

##### How this book is going to work?

The author will not just teaching the 'feel good' principles. You will *read codes* -- lots of codes, including the bad codes so that you are driven to think about what's right and wrong. The book is divided into three components, each is based off  the preceding. 

1. Principles and patterns 
2. Case studies with some ever-increasing complexity
3. Heuristics and smells gathered while creating the case studies

<u>Important to know</u>: *It is not the heuristics themselves that are so valuable, it isthe relationship between those heuristics and the discrete decisions we made while cleaning up the code in the case studies* 



## Chapter 1: Clean Code

##### Why good code matters?

* **There will be code**! The code is the indispensable language we need to describe specifications (especially detailed spec). 
* Bad code will bring the company down. 
* Unbearable **COST!!**  Mess is a red flag of  survival!!! It will eventually kill the productivity and attempts in hopes to clean up the mess can potentially lead to new messes

Get over this excuse!! " I don't have time not to make my code a bit messy because I need to rush to meet deadline!!!". This is a false statement. 

> You will not make the deadline by making the mess. Indeed, the mess will slow you down instantly and will force you to miss the deadline.

##### Some agreed characteristics to clean code

* **elegant** <= it's pleasing to read such code.
* **minimal dependencies** <= and explicit
* **readable** <= well-written code should clearly expose the tensions in the problem to be solved. It should build those tensions to a climax and then give the reader that 'Aha! OF COURSE!" as the issues and tensions are resolved in the revelation of an obvious solution
* **be with tests** <= no matter how elegant or readable it is!!!
* **minimal** <= the number of entities such as classes, methods, functions and the like should be minimized. 
* **expressive** <= meaningful names, 
* **common sense** <= no surprises!!! Don't make reading the code like solving a bizarre puzzle. 

##### The Boy Scout Rule

> "Leave the campground cleaner than you found it" <= code has to be left clean even over time. 

The reason why our code rots is because every time is checked in, it becomes a little untidier. It will be such a better world if codes can simply got better as time passed! 