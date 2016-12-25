# Angular2 Style Guide - Excerpts

Official Doc: [Angular Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html)

Following is a brief summary of some important rules must follow:



### **Code Size**

**Function**: <= 75 lines

**Class**: <= 400 lines (and make sure the single responsibility principle is applied)



### **Naming**

**Consistency**:  

* Do follow a pattern that describes the symbol's ***feature then its type***. eg. 'home.component.ts', 'graph.types.ts', 'auth.service.ts', 'safe.pipe.ts'
* Do use ***dashes*** in 
  * file names to separate words. eg,  SparroAdwordsComponent => sparro-adwords.component.ts
  * selector names.

​            ==========> **UpperCamelCase**: for *classes*, interface  < ==========

 ==========> **lowerCamelCase**: for *directives*, properties, methods < ==========

**Events & Observables**:

* Do name *events without the prefix* ***on***.
* Do name *event handler methods with the prefix on* followed by the event name



### **Structure**

**Spacing**:

* between third party imports and application imports;
* between curly braces and imported object names. e.g, import { XX } from YY,

**Folder**:

* Do create folders named for the *feature area they represent* with specialised *modules*.
* Do extract template and styles to their own files

**Module**:

* Do create a feature module named ***ShareModule*** in a *shared* folder to put common components, directives, pipes and other widgets can be imported by other components. 
* Do collect single-use classes inside ***CoreModule*** in a *core* folder. 
  * The shared single services should be placed there as well. 
  * Only AppModule should import the CoreModule



### **Design Conventions**

* Do use @**Input** and @**Output** decorates instead of inputs and outputs properties of the component/directive decorators. And do avoid renaming them!!!!!!
* Do use @**HostListener** and @**HostBinding** to the host property. 
* Do put reusable logics (such as data requests) to common services and limit the logic in a component code. 
* **<u>*USE DIRECTIVES TO ENHANCE AN EXISTING ELEMENT*</u>**



