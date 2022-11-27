###
1. The lifecycle hooks that were called in mounting are:
Child 1: OnInit child-one.component.ts:36:12
Child 1: DoCheck child-one.component.ts:26:12
Child 2: onInit child-two.component.ts:31:12
Child 2: Docheck child-two.component.ts:24:12
Child 1: AfterViewInit child-one.component.ts:29:12
Child 1: AfterViewChecked child-one.component.ts:32:12
Child 2: AfterViewInit child-two.component.ts:27:12
Child 2: AfterViewChecked child-two.component.ts:18:12
Angular is running in development mode. Call enableProdMode
Child 1: DoCheck child-one.component.ts:26:12
Child 2: Docheck child-two.component.ts:24:12
Child 1: AfterViewChecked child-one.component.ts:32:12
Child 2: AfterViewChecked

2. The lifecycle hooks that were called after the timer callback function are:
Hello changed to Welcom  child-one.component.ts:19:13
Child 1: DoCheck  child-one.component.ts:26:12
Child 2: Docheck  child-two.component.ts:24:12
Child 1: AfterViewChecked  child-one.component.ts:32:12
Child 2: AfterViewChecked