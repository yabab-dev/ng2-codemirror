import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodemirrorComponent } from './codemirror.component';

/**
 * CodemirrorModule
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CodemirrorComponent,
  ],
  exports: [
    CodemirrorComponent,
  ]
})

export class CodemirrorModule {}
