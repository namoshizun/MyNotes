# Angular 2

> And why it is so good  :D

### Dependency Injection ([Cookbook](https://angular.io/docs/ts/latest/cookbook/dependency-injection.html))

#### Problem it solves:

decouple dependers and dependees  so that they can both vary without affecting the implementation details of another; 

* Separation of concerns
* WRITE EXTREMELY TESTABLE CODE  :D  ( it appears to me the various provider definition options are there genuinely to make testing easier ...  )



#### How DI solves it:

* **Injector**:  Something that knows how to create a registered class and maintains only one instance of that class. It then feeds appropriate instances other objects who claims its dependencies. 
  * Injectors can be nested: if the injector cannot find a provider for the requested token at its level, it delegates the request to its parent  injector until the provider is found or evidently missing.  
* **@Injectable**: marks a class as available to an injector for instantiation. Interestingly, it is actually the super-type of @Component, @Directive and @Pipe ...
* **Leverage typing**: it is easy to reason about which class to create by referring to the type declared in constructor (thanks to Typescript!)
* **providers**: provides the concrete, runtime version of a dependency value on which the injector replies. 



#### How to use DI:

*  <u>**Providers</**u> list

```javascript
privders: [Car]
// OR manually giving the token and the definition object. 
[{provideL Car, useClass Car}]
```

* Get the dependee from <u>**Injector**</u> using the token of that dependee (if constructor injection is allowed):

```javascript
constructor(private injector: Injector) {
 this.car = injector.get(Car);
}
```

* <u>**Creates**</u> a dedicated **<u>injector</u>** manually (not recommended ... )

```javascript
// the array order should be in respect of the dependency hierachy. 
injector = ReflectiveInjector.resolveAndCreate([Car, Engine, Tires]);
let car = injector.get(Car);
```

* **<u>Aliases</u>** class providers using '<u>**useExisting**</u>' ( when depender cannot update its constructor signature to use the newer dependee ...  )

```javascript
[NewDependee, { provide: OldDependee, useExisting: NewDependee }]
```

* <u>**Factory Providers**</u>: creates dependers at runtime if the dependees cannot be passed to the constructor directly, so an intermediate factory is needed.

```typescript
// service-provider.ts
let serviceFactory = (logger: Logger, user: UserService) => new Service(logger, user.isActive)
export let serviceProvder = {
  provide: Service,
  useFactory: serviceFactory, // indicates the implementer. 
  deps: [Logger, UserService]
}

```

* **<u>Injection Tokens:</u>** low level programming, but essential for using non-class dependencies. class name is a valid token so Angular can take care of that, but interfaces are not. 

```typescript
// app.config.ts
export interface AppConfig { apiEndpoint: string }
export const CAR_DI_CONFIG: AppConfig = { apiEndpoint: '10086.com' }
// app.tokens.ts
export let APP_CONFIG = new OpaqueToken('app.config');
// app.module.ts
providers: [{ provide: APP_CONFIG, useValue: CAR_DI_CONFIG }];
// car.component.ts
constructor(@Inject(APP_CONFIG) config: AppConfig) { /* ... */ }
```



#### Tricks ( 'smart' workarounds but probably not good design.. )

**Globalize the application Injector** 

When a class has dependencies but cannot declare them in the constructor. Maybe the class is instantiated at runtime by some other class, and the creator doesn't want to make its own code any more complicated by supplying correct dependencies. 

The solution is to store the Injector singleton somewhere and make it globally accessible :D! [CODE](http://plnkr.co/edit/SF8gsYN1SvmUbkosHjqQ?p=preview)

 **Find a parent component by Injection** (excerpt from the Cookbook)

There have been Query, ViewChildren and ContentChildren to get the reference of child component(s), but there is not public API to get the parent component...  The workaround is consulting the Injector !

1. If the parent component can be told from the child component. 

```typescript
export class ChildComponent {
  constructor(@Optional() public parent: ParentComponet) {
    // test if parent exists, then you got its reference ... 
  }
}
```

2. Otherwise.... oh it's getting so hairy and I don't want the details for now. Probably later on some day Anuglar will give an API for referencing parent components.. But there is an interesting function that worth noting, the *forwardRef* can be used to break circular referencing. 




------

### Component Interaction

* @Input() and Output() binding
* ngOnChanges
* Template reference binding
* ViewChild <= ohh this is lovely :D
* Shared Service (details below)

<u>**Shared Service**</u>: Components subscribe to their interested observables exist at a shared injectable service. Components also emits notification to the service. Good for interface separation .



------

### Dynamic Component

##### Use Case:

* Some subcomponents are initialised based on the current context.
* Each subcomponent has its own information. 

##### ComponentFactoryResolver:

<u>Use given clues to create component dynamically on the fly</u>! Note that DynamicComponentLoader and ComponentResolver are used in old Angular release but now deprecated. 



------

### Dynamic Form([Cookbook](https://angular.io/docs/ts/latest/cookbook/dynamic-form.html))

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
------

### Lifecyle Hooks ( [Cookbook](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html#!#hooks-purpose-timing) )

**Important facts:**

* Hook methods are called for a component **as well as its directives**!
* Unidirectional data flow  forbids updates to the view after it is composed. So if a change source causes some changes to else where, that side effect should wait for a tick or we have to fire a change detection  for that side effect. 
* The [impotence](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#idempotence) principle of template must not be violated by change detection!!!

| Hook                | Purpose                                  |
| ------------------- | ---------------------------------------- |
| OnChanges           | When re(sets) data-bound **input** properties |
| OnInit              | When initializes directive/component     |
| DoCheck             | **Called after every change detection cycle**, even when these changes happened in unrelated components; Use it to detect a change that Angular overlooked |
| AfterContentInit    | After external **content** is projected into the component's view (after ng-content is set) |
| AfterContentChecked | After external content is projected **and checked** |
| AfterViewInit       | After **views and child views** are initialized |
| AfterViewChecked    | After views and child views are initialized **and checked**; eg. called when a form control state has changed from pristine to touched ... |
| OnDestroy           | Just before the directive/component is destroyed; Do cleanup (unsubscription, detach listeners, nullify instances ...) here! |



----

### Change Detection

> 诸行无常，是生灭法 ...

**How does it work**

Angular2 has a best friend called zoneJs :D , actually, it is ngZone, a vairance of zonejs. This can be  depicted in code  (yay!):

```typescript
class ApplicationRef { // very simplified version of actual source
  changeDetectorRefs:ChangeDetectorRef[] = [];
  constructor(private zone: NgZone) {
    this.zone.onTurnDone
      .subscribe(() => this.zone.run(() => this.tick());
  }s
  tick() {
    this.changeDetectorRefs
      .forEach((ref) => ref.detectChanges());
  }
}
```

Every component has its own change detector (created at runtime), making it possible to fine-tune change detection strategies. In Angular2, because date flow is unidirectional, change  detection is done by traversing a ***change detector TREE***, meaning that there is no need to re-checking some states and hence a lot more efficient and predictable !

**Optimization?**

We can tell Angular to be a bit more relaxed by marking the parts of the application that changed their state. 

* Use Immutable Data Type:
  * Some components reply on its input properties besides which there is no other source of changes, so you can tell Angular to only trace the input for this component while firing change detections, and hence dramatically reduces the states to be verified. 
  * Letting Angular to only further inspect the changes along this subtree if the dependent reference is changed.
* Use Observable:
  * That observable's reference wouldn't change at all and it just emits events! 
  * Manually mark the path to be checked when a value is emitted from subscribed observable



**Readings:**

* [angular2中数据状态管理方案有哪些](https://www.zhihu.com/question/46662780)
* [Zones in Angular](http://blog.thoughtram.io/angular/2016/02/01/zones-in-angular-2.html)
* [ANGULAR CHANGE DETECTION EXPLAINED](http://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html)
* [How I optimized Minesweeper using Angular 2 and Immutable.js to make it insanely fast](http://www.jvandemo.com/how-i-optimized-minesweeper-using-angular-2-and-immutable-js-to-make-it-insanely-fast/#)
* [Change And Its Detection In JavaScript Frameworks](http://teropa.info/blog/2015/03/02/change-and-its-detection-in-javascript-frameworks.html)
* [Immutability vs Encapsulation](https://vsavkin.com/immutability-vs-encapsulation-90549ab74487#.e9n68j42h)

-----

### Shadow DOM



------

