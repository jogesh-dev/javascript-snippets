## Angular d4 passing data and templates 

### Passing data betwwen template to component

> interpolation - 

  > One Way ts --> html
  > Example `<p>{{ someValue }}</p>`
  
> property binding 

   > One way ts --> html
   
   > example `<button [disabled]="booleanValue">click me </button>`
   
  > Class binding `<div [class.myClass]="booleanValue"></div>`
  
  > Style binding `<div [style.backgroundColor]="'red'"></div>`
  
  
> Event Binding

  > One way html --> ts 
  
  > Example `<button (click)="aFunction()">click me </button>`
  
> Two way binding

  > NEed to import of Formsmodule
  
  > `<button (click)="aFunction()" [(ngModel)]="data">click me </button>`
  
  

### Passing data between parent and child components

#### Input for data binding
child : 
`@Input('aliasName') name : string`

parent :
`<child-component [aliasName]="'Some string'"></child-component>`


#### Output for event binding
child : 
`@Output('aliasName') name = new EventEmitter()`
`name.emit(data)`

parent :
`<child-component (aliasName)="aFunction($event)"></child-component>`


### Passing template inside tags

#### content
child template
`<ng-content></ng-content>`

parent template
`<child-component> <div><p>Html to be passed to child for ng content directive</p><div></child-component>`

#### multiple content and select
child template
`<ng-content select=".first"></ng-content>`
`<ng-content select=".second"></ng-content>`

parent template
`<child-component> <div class="first"><p>Html to be passed to child for ng content directive</p><div> <div class="second">second content </div></child-component>`

parent template to just send textContent using ngContainer
`<child-component> <ng-container class="first"><p>Html to be passed to child for ng content directive</p></ng-container> <ng-container class="second">second content </ng-container></child-component>`
