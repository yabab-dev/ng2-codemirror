import { NgModule } from '@angular/core';

import { CodemirrorComponent } from './codemirror.component';

/**
 * CodemirrorModule
 */
@NgModule({
  declarations: [
    CodemirrorComponent,
  ],
  exports: [
    CodemirrorComponent,
  ]
})

export class CodemirrorModule{}
