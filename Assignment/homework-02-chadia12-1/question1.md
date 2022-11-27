###
1. How Angular application boots, the starting point of any Angular web application is the index.html which refers to all the necessary javascript files for the application. And go in the main.ts which is the entry point for the application where you define the bootstrapModule which support platformBrowserDynamic. every app has at least one module. the module is loaded first when the app is loaded in root module.

2. All the meta-data passed to @NgModule factory decorator are:
declarations: which has all set of components, directives and pipes belong to this module.
imports: is the set of NgModules whose exported declarables are available to templates in this module.
provides: is the set of injectable objects that are available in the injector of this module.
bootstrap: is the set of component that bootstrapped when the module is bootstrapped.

3. the difference between the default Emulated style encapsulation and the ShadowDom is
Emulated: Angular asigning custom attributes by using foreign ghost to the elements affected by styles especially as some browsers do not support shadowDom.

ShadowDom: a shadow root is used at component level and it's supported by modern browser. 
