# WIP - Angular4 - Codemirror component

Use the [CodeMirror (5.x)](http://codemirror.net/) code editor in your Angular2 application.

### <a name="install"></a>Installation

- Include Codemirror javascript files in your application (with files for modes)
- Install ng4-codemirror
  - JSPM : `jspm install npm:ng4-codemirror`
  - NPM : `npm install ng4-codemirror`

### <a name="dependencies"></a>Dependencies
CodeMirror library is required for this component :
  - Install via NPM : `npm install codemirror`
  - Install via JSPM : `jspm install npm:codemirror`

CodeMirror need to be accessible by `import 'codemirror'`

Then you need to include base CSS of codemirror located in `codemirror/lib/codemirror.css`

### <a name="sample"></a>Sample

Include `CodemirrorModule` in your main module :

```javascript
import { CodemirrorModule } from 'ng4-codemirror';

@NgModule({
  // ...
  imports:      [
    CodemirrorModule
  ],
  // ...
})
export class AppModule { }
```

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'sample',
  template: `
    <codemirror [(ngModel)]="code"
      [config]="{...}"
      (focus)="onFocus()"
      (blur)="onBlur()">
    </codemirror>
  `
})
export class Sample{
  constructor(){
    this.code = `// Some code...`;
  }
}
```

### <a name="config"></a>Configuration

* `config` : The configuration object for CodeMirror see http://codemirror.net/doc/manual.html#config

### <a name="licence"></a>Licence
See `LICENSE` file

### Forked from
https://github.com/chymz/ng2-codemirror all credits to chymz
