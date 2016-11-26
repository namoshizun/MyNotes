# Clean Code -- CH4~CH6

### **Chapter 4 - Comments**

> "Don't comment bad code - rewrite it!"

**Heads up!** The proper use of comment is to compensate for our failure to express ourselves in code. <u>*Comments are always failures*</u>!!! But we need them because we cannot always figure out how to express ourselves without them....:

* They (often) **lie**, because codes keep evolving and programmers forget to maintain them.
* It's **not a good investment** to spend much much effort in maintaining comments in a high state of repair, relevance and accuracy <== it's even better to not write them in the first place and put energy in making the code clean.
* **The only truth is in the code itself**

#### Necessary Comments

In some cases, comments can be worthy the bits they taken:

* When the code itself by nature hard to be clear (like regex)
* <u>Explanation of intent</u>. i.e, why this approach is taken? if it's a compromised solution or for some special purposes... 
* <u>Better clarification.</u> Sometimes there are codes inherited from system/external library that you cannot alert but lacks clarity.
* <u>Warning of consequence</u>.
* <u>TODOs</u>. 
* <u>Amplification</u>. If you have something really important that is worthy some description explanation to raise an awareness.

#### Bad Comments

* <u>Mumbling</u>: clueless words that implicate nothing but just appears in the codes ... 
* <u>Redundant</u>: kind of the uninformative comments that take more time to understand than just reading the code directly. 
* <u>Misleading</u>: telling the lies...
* <u>Mandated</u>: it is just plain silly to have a rule that says every function must have a doc string, or every variable must have a comment. 
* <u>Journal</u>:  this was the only good practice back to the era of no version control tools... 

> Don't use a comment when you can use a function or a variable!!

#### Some Tips:

Comments that are everywhere and provide trivial benefits can become noises. Readers dislike noises and they are ignored. 

<u>***Commenting-out code and leave them on the playground is odious***</u>!! Other developers don't have the courage to delete them, and the creators forgot to tidy them up, eventually they gather and smell..  **<u>*WE HAVE SOURCE CONTROL NOW*</u>**

If you write a comment, then make sure it describes the code it appears near o.o! i.e, **<u>*don't leave nonlocal information*</u>**. The following javadoc also tells the default value, which has nothing to do with the function's purpose. It also introduces the risk of stale comment when the default value is changed in the future. 

```java
/**
 * Port on which fitnesse would run. Default to <b>8082</b>
 */
public void setFitnessePort(int fitnessePort) {
  this.fitnessePort = fitnessePort
}
```

Don't need to write javadocs (or any other docstrings) for functions that are not intended for public consumptions. 



### **Chapter 6 - Objects and Data Structures**

> We want some class variables to be private, then why do we make so many getters and setters to make them look like public o.o?

#### Data Abstraction

> Hiding implementation is about abstractions!!

A few heuristics on good data abstraction:

* Exposed <u>***interfaces still unmistakably represent inner data structure***</u>
* Methods **<u>*enforces an access policy*</u>**
* Interface names do not convey implementation details. 

#### Data/Object Anti-Symmetry

**Important**:  Objects hide their data behind abstractions; Data structure expose their data and have no meaningful functions. 

^^^^^ THEY ARE VIRTUAL OPPOSITES (see the briliant example on ***pg95***) ^^^^^

|            | Procedural                               | object oriented                          |
| ---------- | :--------------------------------------- | ---------------------------------------- |
| Opposite   | makes it easy to add new functions without changing the existing data structures | makes it easy to add new classes without changing existing functions |
| Complement | makes it hard to add new data structures because all functions must change | makes it hard to add new functions because all the classes must change. |

**Even more Important**: 'Everything is an object' is a MYTH! Sometimes you really do want simple data structures with procedures operating on them. 

#### The Law of Demeter

> Talk to friends, not to strangers. 

Definition: A module should not know about the innards of the objects it manipulates.  Precisely,  a method *f* of a class *C* should only call the methods of these:

* C
* An object created by f
* An object passed as an argument to f
* An object held in an  instance variable of C

