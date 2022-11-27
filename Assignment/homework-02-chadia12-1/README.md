[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-9f69c29eadd1a2efcce9672406de9a39573de1bdf5953fef360cfc2c3f7d7205.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=9159453)
# CS569 Homework
### Question 1
Write in a new markdown file `hw2-question1.md` the answer of the following questions:
1. Explain how Angular application boots?
2. Expain all the meta-data passed to `@NgModule` factory decorator? Read more details on the [official Angular docs](https://angular.io/api/core/NgModule).
3. Explain the difference between the default Emulated style encapsulation and the ShadowDOM?

### Question 2 - Angular Hands-On Practice
* Create a new Angular Project using the CLI.
* Configure the CLI component schematics in `angular.json` file to use inline template and style, and without test files by default.
* Use Angular CLI to create the `child-one` and `child-two` components. 
* Render both components in `AppComponent` template (as direct children). 
* Both components will render a paragraph that binds to a `data` property to be displayed within the paragraph in the template. 
* Implement the following lifecycle hooks in both components: `onChanges`, `onInit`, `doCheck`, `afterViewInit`, `afterViewChecked` and print to the console a message that shows which hook is invoked from which component (For example: `Child 2: doCheck`).
* Create a timer in `child-one` component that changes the `data` property to another value after 5 seconds.
* Write down the console logs for the following: 
    * which lifecycle hooks were called on Mounting?
    * which lifecycle hooks were called after the timer callback function is triggered?
