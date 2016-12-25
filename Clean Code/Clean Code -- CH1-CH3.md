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

----

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

## Chapter 2 - Functions

---

>  They should be smaller than that

##### **The golden rule of function: SMALL!!** 

* Lines should not be 150 characters long ( possibly 80 the best?)
* Functions should not be 100 lines ling (it even should hardly ever be 20 lines long ... s)
* the blocks within *if, else, while* and so on should be one line long ....

======================= **DO ONE THING! =======================**

> Functions should do one thing. They should do it well. They should do it only.

But it does not mean the function should be only one line long :). It means the steps of the function are **<u>*one level abstraction below*</u>** the stated name of the function. 

Function that has multiple sections are considered not doing one thing. E.g, a function that declares, initializes and carries out the task <= LOL!

Mixing levels of abstraction within a function is always confusing (i.e, <u>*don't make*</u> *<u>concepts and details are all in one place</u>*). A perfect explanation of  symptom can be found at pg 67.  

***Another way to know that a function is doing more then "one thing" is if you can extract another function from it with a name that is not merely a restatement of its implementation.***



> **The Stepdown Rule:** <= It's importance can't be over-emphasized 
>
> We want every function to be **followed by those at the next level of abstraction** so that we can read the program, descending one level of abstraction at a time as we read down the list of functions. 

#### **Switch Statements**

It is a special case. By the nature of 'switch' statement, it's there to do N things. We can avoid using switch statements which could turn out to be infinitely complex and doing infinitely many things by using <u>POLYMORPHISM</u>. 

Rules to use switch structure:

* Only appear once
* Used to create polymorphic objects
* hidden behind an inheritance (Abstract Factory)

#### **Function Arguments**

> Mind blowing: Three arguments should be avoided where possible; More than three requires very special justification - and then shouldn't' be used anyway

The argument is at a different level of abstraction than the function name and <u>forces you to know a detail</u> that isn't particularly important at that point.

Another important reason to use less argument is from the <u>*testing point of view*</u>. Imagine the difficult of writing all the test cases to ensure that all the various combinations of arguments work properly ... 

Niladic function is the king, and Monadic function is considered better than higher ones. The benefits comes from readability (don't have to learn/unlearn inputs), semantics (more natural verb + noun form) and simplicity. 

* **Monadic Form**:
  * Querying on or Transforming [ return the result ];
  * Reacting to an event [ return nothing];
* **Dyadic Function**:  It is generally harder to understand than monadic form functions. The function becomes harder to reason and it's easier to put inputs in the correct order. 
* **Triads**: Man in the book "why would you do this :) ? ". In normal cases where special practices needed to carry out or traditional patterns must be followed, you should not use it ....

<u>Flag Arguments are UGLY</u> <= Another mind blowing statement lol! Why??!!! Well, it immediately loudly proclaim s that this function does AT LEAST TWO THINGS.

**Have No Side Effects**

> The side effects are lies. You function promises to do one thing, but it also does other hidden things (alerting the states unexpectedly)

They are the devious criminals creating strange temporal couplings. order dependencies and sometimes betrays reader's trusts on the function name. 

#### **Command Query Separation**

> Function should either DO SOMETHING or ANSWER SOMETHING, but not both

This another a bit mind blowing experience ... a function that sets something and returns a boolean to indicate success or fail can lead to confusions o.O. The solution is to separate the command and extract the checker code.

#### **Error handling**

<u>**Prefer Exceptions to returning error codes**</u>: 

* Returning an error code is actually a subtle violation to command query separation. 
* Also makes many if-else structure. 
* Requires the complete re-compling and redeploying of all codes dependent on the Error Code Enum once any new error is added.  

<u>**Error Handling is One Thing**</u>: So the error handling part should be extracted as a dedicated function, and it should just do the error handling! 

### **<u>Conclusion</u>**

Always Remember:

* Every system is built from a <u>*domain-specific language*</u> designed by the programmers to describe that system.  Programmers use that language to <u>*tell a story*</u>, using <u>*classes as nouns*</u> and <u>*functions as verbs*</u>



