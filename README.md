# Angular2 - Codemirror component

Use the [CodeMirror (5.x)](http://codemirror.net/) code editor in your Angular2 application.

### <a name="install"></a>Installation

- Include Codemirror javascript files in your application (with files for modes)
- Install ng2-codemirror
  - JSPM/Gihtub : `jspm install ng2-codemirror=github:chymz/ng2-codemirror`
  - JSPM/NPM : `jspm install npm:ng2-codemirror`
  - NPM : `npm install ng2-codemirror`

### <a name="dependencies"></a>Dependencies
CodeMirror library is required for this component :
  - Install via NPM : `npm install codemirror`
  - Install via JSPM : `jspm install npm:codemirror`

CodeMirror need to be accessible by `import 'codemirror'`

Then you need to include base CSS of codemirror located in `codemirror/lib/codemirror.css`

### <a name="sample"></a>Sample (ES2016+)

Include `CodemirrorModule` in your main module :

```javascript
import {CodemirrorModule} from 'ng2-codemirror';

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
import {Component} from 'angular2/core';

@Component({
  selector: 'sample',
  template: `<codemirror [(ngModel)]="code" [config]="{...}"></codemirror>`
})
export class Sample{
  constructor(){
    this.code = `// Some code...`;
  }
}
```

Other samples :
- ES2016 and JSPM : https://github.com/chymz/angular2-jspm-seed/tree/ng2-codemirror (outdated)
- Plunker : https://embed.plnkr.co/npuRw0/ (outdated)

### <a name="config"></a>Configuration

* `config` : The configuration object for CodeMirror see http://codemirror.net/doc/manual.html#config
