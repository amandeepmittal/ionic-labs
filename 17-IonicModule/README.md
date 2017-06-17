# IonicModule
- an NgModule that bootstrap Ionic app.
- root component is passed

```typescript
Iimport { NgModule } from '@angular/core';

import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)      // MyApp is the root component
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: []
})
export class AppModule {}
```

- on passing root component, IonicModule avails Ionic framework's components, directives, providers to the root component.
- it act as a wrapper around the root component.
- contains modules such as FormModule
  * no need to import these modules separately in app's components
- provides access to native device funtionality
- access to cordova