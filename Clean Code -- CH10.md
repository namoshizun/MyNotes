# Clean Code

### **Chapter 10: Classes**

##### Classes should be SMALL

But be aware the term 'small' here applies differently. In function chapter, small is measured by the lines of code, but for classes, we count **<u>*RESPONSIBILITIES*</u>** <= Not by lines or code, or number of functions. 

The name of a class should describe what responsibilities it fulfills <= **<u>*naming is probably the first way of helping determine class size*</u>**! Which comes to come tips:

* If we cannot derive a concise name for a class => it's likely too large
* The more ambiguous the class name, the more likely it has too many responsibilities. 
* **We should also be able to write a brief description of the class in about 25 words without using the words 'if', 'and', 'or', or 'but'**



###### The Single Responsibility Principle

> A class or module should have one, and only one , reason to change. 

