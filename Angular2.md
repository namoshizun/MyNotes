# Angular 2

> And why it is so good  :D



### Component Interaction

* @Input() and Output() binding
* ngOnChanges
* Template reference binding
* ViewChild <= ohh this is lovely :D
* Shared Service (details below)

<u>**Shared Service**</u>: Components subscribe to their interested observables exist at a shared injectable service. Components also emits notification to the service. Good for interface separation .



### Dynamically Load Component

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

* ```json
  [ state, Validator ]
  ```

**FormGroup**: 

* A collection of form controls which defines a complete form. It tracks the value and validity state of its controls. FormGroup can be imagined as an auditor that keeps a registration book of individuals and their expected states. 

* ```JSON
  { registeredKey: FormControl} []
  ```

