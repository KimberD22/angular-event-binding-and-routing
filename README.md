# angular-directives-event-binding-and-services

## Angular directives, event binding, and services

### Learning Objectives - Routing
* What is routing?
* How could we implement routing in Angular?
* When could we use it?
* How could we use it with Angular?
* How do I choose which components to render?

### Learning Objectives - Event binding
* What is event binding? (Review)
* How do we use event binding with Angular?
* When could it become useful?

### Learning Objectives - Angular Directives
* What are angular directives? (Review)
* What is `*ngFor`? (Review)
* What is `*ngIf` and how could we use it?
    * What if I want to render a placeholder? - An else statement for `*ngIf`.

### Learning Objectives - Services
* What are Angular services?
* When to use them?
* How to create them?
* How to use them?

### Angular Routing
In all front end applications we have the ability to route our pages.

What this means is that we could change the path/url of the website in order to deliver gradually more specfic content in the same website.
For example, facebook.com and facebook.com/messages will most likely render completely different information. (facebook.com/messages might not exist but we could take a guess as to what is rendering).

Every front end library or framework has a way to route the applications itself. For Angular we have built in modules that we could use in order to create the routing functionality.

In order to use this module/functionality we have to run a command in our Angular application that will generate the imports for us and the files we need to create the routing functionality and settings.

`ng generate module app-routing --module=app`
What this does is generate the files used for Angular routing and import the modules that we need into the array of AppModule.

One of the files that were generated was the `app-routing.module.ts` file. It currently carries some boilerplate code (most of which we don't need) that looks like this.

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
```

We are going to replace the file with something that looks _like_ this (but not exactly this).
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

In the code snippet above we imported the RouterModule and Routes classes from the `@angular/router` module. This will allow use to make use of the Angular code base in order to streamline our code editing process.

What the RouterModule does is take in all of the information we give it and let our application know of all the choices we made in order to declare how our application routing is going to work. We need the Routes class in order to be able to declare what each individual route (url path) is going be. And which component is going to be rendered at each route.

We are going to make a sorta kinda navigation bar for our star-wars Angular application that we'll use today. I will make the first Route and then you will create the other 2.

I create
* Home route - path = "/"

You create
* A route for ships that renders the ships component - path = "/ships"
* A route for planets that renders the planets component - path = "/planets"

### Event binding
As we remember from previous lectures in Module 1 we discussed that most of what web applications do in the browser is react to some user actions. These actions could be described as events. We use events, event listeners, and event binding in the entirety of front end development. It is framework agnostic (meaning that these terms aren't exclusive to a framework or library). Since Angular also works to create the front end of websites. Angular also has it's own way to create and bind events. We don't have to type out as much code as we did when we used Javascript or jQuery.

We still have access to the same events we used before. The type of events available to us aren't dependent on the framework as they are defined by the DOM. And once again, all front end frameworks interact with the DOM. [Here](https://developer.mozilla.org/en-US/docs/Web/Events) is a list of all the events we could use.

In order to bind events to our Angular code we attach it directly to an element in our template file.

<details open>
<summary>Here is a quick example of event binding with Angular</summary>

If you want a live example run `git checkout event-example` and look at the `ships` component.
```html
<!-- example-component.component.html -->
<p (click)="sayHello()">Click me to say hello!</p>
```
```typescript
// example-component.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.css']
})
export class ExampleComponent implements OnInit {
  sayHello() {
    alert("You clicked the tag! And now I say... Hello");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
```
</details>
If you take a quick look at the example you'll notice that we chose an element in our template file, chose an event (in this case click), and then inside of the quotes we put in a function invokation. The function that runs has to be created within the class file of the component.

This is just a very simple example of event binding and doesn't do too much. For our class mostly all we're going to do is choose an item from a list of items. And then modify it. For now we have to be able to choose a single item. Let's start the code for that.

Let's run `git checkout event-code-along` and I will run through a quick example of rendering information with *ngFor and binding a more useful event, and then you will have your turn to render information then attach an event to the DOM.

I do - ships
* Render the ships from the array using *ngFor
* Attach an event to each of the items rendered
* Create a variable that when I click one of the items, will carry the clicked item
* Console log the item chosen

You do - planets

### Angular Directives - *ngIf
Angular comes prepackaged with a lot of features that are useful for our web applications. Streamlining the development process so that we re-use a lot of common techniques needed to develop a website. One of those features are _Angular Directives_. There are 2 types of directives
1) Structural Directives
2) Attribute Directives

We have learned structural directives like `*ngFor`. Today we're going to learn about another important directive called `*ngIf`. What this directive lets us do is conditionally render some information onto the page AFTER the evaluation of an expression to be either true or false. There is also an option to render something if the expression is evaluated to false (the equivalent of an else statement). If you don't include an else statement than the default behavior of this directive is to render nothing.

That's a whole lot of text to imagine nothing!
Here are some code snippets with an example of how conditional rendering is used in Angular.
<details open>
<summary>Quick example of conditional rendering</summary>

```html
<div *ngFor="let item of items"
  (click)="chooseItem()">
  {{ item.name }}
</div>

<div *ngIf="chosenItem; else elseBlock">
  <h1>{{ chosenItem.name }}</h1>
  <p>{{ chosenItem.description }}</p>
</div>
<ng-template #elseBlock>Please choose an item from the list above</ng-template>
```
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  items = [
    {
      name: "first items name",
      description: "first items description"
    },
    {
      name: "second items name",
      description: "second items description"
    },
    {
      name: "third items name",
      description: "third items description"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  chosenItem = null;
  chooseItem(item) {
    this.chosenItem = item;
  }
}

```
</details>

Let's jump into building out some examples...
Run `git checkout conditional-rendering` to get to the correct placement in our code!

If we take a look at the code in the `conditional-rendering` branch. We'll notice that we have all of the code needed in order to choose an item from a list of rendered objects. Currently we are only console logging the object that we choose from the DOM. Let's make it show up in a new section below the list of objects!
