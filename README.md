# Angular - Codemirror component

Use the [CodeMirror (5.x)](http://codemirror.net/) code editor in your Angular application.

**Demo** : https://embed.plnkr.co/8e9gxss9u10VeFrv29Zt/

### <a name="install"></a>Installation

- Include Codemirror javascript files in your application (with files for modes)
- Install ng2-codemirror
  - JSPM : `jspm install npm:ng2-codemirror`
  - NPM : `npm install ng2-codemirror`

### <a name="dependencies"></a>Dependencies
CodeMirror library is required for this component :
  - Install via NPM : `npm install codemirror`
  - Install via JSPM : `jspm install npm:codemirror`

CodeMirror need to be accessible by `import 'codemirror'`

Then you need to include base CSS of codemirror located in `codemirror/lib/codemirror.css`

### <a name="sample"></a>Sample

Include `CodemirrorModule` in your main module :

```javascript
import { CodemirrorModule } from 'ng2-codemirror';

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
import { Component } from 'angular2/core';

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
