# Angular 2

> And why it is so good  :D



### Component Interaction

* @Input() and Output() binding
* ngOnChanges
* Template reference binding
* ViewChild <= ohh this is lovely :D
* Shared Service (details below)

<u>**Shared Service**</u>: Components subscribe to their interested observables exist at a shared injectable service. Components also emits notification to the service. Good for interface separation .



### Dynamic Component

##### Use Case:

* Some subcomponents are initialised based on the current context.
* Each subcomponent has its own information. 

##### ComponentFactoryResolver:

<u>Use given clues to create component dynamically on the fly</u>! Note that DynamicComponentLoader and ComponentResolver are used in old Angular release but now deprecated. 



### Dynamic Form

**Abstraction**: Form inputs => FormControl;  Form => FormGroup (a collection of form controls)

**FormControl**:

* Tracks the  value and validation status of an individual form control. We can use shared services to convert input types to form controls easily. 
* A template element gets guarded by declaring its directive *formControlName* to the key to its associated control, as registered in its form group. 

```
[state, Validator]
```



**FormGroup**: 

* A collection of form controls which defines a complete form. It tracks the value and validity state of its controls. FormGroup can be imagined as an auditor that keeps a registration book of individuals and their expected states. 


```
{ registeredKey: FormControl} []
```



**FormBuilder**:

* A more formal way of creating a dynamic form is by doing this:

  ```javascript
  let formGroup = new FormGoup({
    controlName: new FormControl(valueToTrack, ValidatorFunction)
  })
  ```

* which is a bit verbose :). So the FormBuilder serves as a helper class to simplify it a little bit (but personally I feel it trims too much details .... )

  ```javascript
  let formGroup = formBuilder.group({
    controlName: [defaultVal, ValidatorFunction]
  })
  ```



**Validator**:

* validator provides interfaces to create **ValidatorFunction**s, each of which takes a <u>*FormControl,*</u> returns <u>*null*</u> is the state is valid and returns a *<u>StringMap<string, any></u>* is there is an issue. The simplest validator is Angular's built-in *required ValidatorFunction*

```javascript
export class Validators {
  static required(c: FormControl): StringMap<string, boolean> {
    return isBlank(c.value) || c.value == "" ? { "required": true } : null;
  } // this explains why validators must return null if control is alright
}
```