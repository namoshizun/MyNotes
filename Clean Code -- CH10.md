# Clean Code

## **Chapter 10: Classes**

#### Classes should be SMALL

But be aware the term 'small' here applies differently. In function chapter, small is measured by the lines of code, but for classes, we count **<u>*RESPONSIBILITIES*</u>** <= Not by lines or code, or number of functions. 

The name of a class should describe what responsibilities it fulfills <= **<u>*naming is probably the first way of helping determine class size*</u>**! Which comes to come tips:

* If we cannot derive a concise name for a class => it's likely too large
* The more ambiguous the class name, the more likely it has too many responsibilities. 
* **We should also be able to write a brief description of the class in about 25 words without using the words 'if', 'and', 'or', or 'but'**



#### The Single Responsibility Principle

> A class or module should have one, and only one , reason to change.

Reason to change <|==|> Responsibility

Some may argue that having many classes small in responsibility and code size makes bigger systems <== **<u>*Author's argumen*</u>**t: every sizable system will contain a large amount of logic and complexity; the primary goal in managing such complexity is to ***organize it so that developer knows where to look to find things, and need only understand the directly affected complexity at any given time***

#### Cohesion

*High cohesion:*

* methods and variables of the class are co-dependent and hang together as a  **<u>*logical whole*</u>**
* the more variables a method manipulates the more cohesive that method is to its class. 

^^^^^^^^^ BUT ^^^^^^^^^ 

As class *<u>variables accumulate</u>*, the more likely there is to be variables that exist solely to allow a few functions to share them and thence lose cohesion.

**<u>*When classes lose cohesion, split them!*</u>**

#### Organizing for Change

> Open/Close Principle:  software entities (classes, modules, functions, etc.) should be **open for extension**, but **closed for modification**

pg149 <== but isn't it over-engineering ... 



