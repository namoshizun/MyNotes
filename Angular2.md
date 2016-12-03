# Angular 2

> And why it is so good  :D

## Component Interaction

* @Input() and Output() binding
* ngOnChanges
* Template reference binding
* ViewChild <= ohh this is lovely :D
* Shared Service (details below)

<u>**Shared Service**</u>: Components subscribe to their interested observables exist at a shared injectable service. Components also emits notification to the service. Good for interface separation .

## Dynamically Load Component

##### Use Case:

* Some subcomponents are initialised based on the current context.
* Each subcomponent has its own information. 

##### ComponentFactoryResolver:

<u>Use given clues to create component dynamically on the fly</u>! Note that DynamicComponentLoader and ComponentResolver are used in old Angular release but now deprecated. 

