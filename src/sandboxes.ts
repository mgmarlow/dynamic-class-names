export function getSandboxMenuItems() {
return [{"key":"./app/parent/child-with-hostbinding/child-with-hostbinding.component.sandbox","searchKey":"ChildWithHostbindingComponent","name":"ChildWithHostbindingComponent","label":"","scenarioMenuItems":[{"key":1,"description":"Default"}]}];
}
export function getSandbox(path: string) {
switch(path) {
case './app/parent/child-with-hostbinding/child-with-hostbinding.component.sandbox':
return import('./app/parent/child-with-hostbinding/child-with-hostbinding.component.sandbox').then(sandbox => { return sandbox.default.serialize('./app/parent/child-with-hostbinding/child-with-hostbinding.component.sandbox'); });
}}
