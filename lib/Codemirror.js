'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodemirrorModule = exports.CodemirrorComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _dec7, _class4; // Imports


var _core = require('@angular/core');

var _forms = require('@angular/forms');

var _codemirror = require('codemirror');

var _codemirror2 = _interopRequireDefault(_codemirror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

/**
 * CodeMirror component
 * Usage :
 * <codemirror [(ngModel)]="data" [config]="{...}"></ckeditor>
 */
var CodemirrorComponent = exports.CodemirrorComponent = (_dec = (0, _core.Component)({
  selector: 'codemirror',
  providers: [{
    provide: _forms.NG_VALUE_ACCESSOR,
    useExisting: (0, _core.forwardRef)(function () {
      return CodemirrorComponent;
    }),
    multi: true
  }],
  template: '<textarea #host></textarea>'
}), _dec2 = (0, _core.Input)(), _dec3 = (0, _core.Output)(), _dec4 = (0, _core.ViewChild)('host'), _dec5 = (0, _core.Output)(), _dec6 = (0, _core.Input)(), _dec(_class = (_class2 = function () {

  /**
   * Constructor
   */

  function CodemirrorComponent() {
    _classCallCheck(this, CodemirrorComponent);

    _initDefineProp(this, 'config', _descriptor, this);

    _initDefineProp(this, 'change', _descriptor2, this);

    this.editor = this.editor;

    _initDefineProp(this, 'host', _descriptor3, this);

    this._value = '';

    _initDefineProp(this, 'instance', _descriptor4, this);
  }

  _createClass(CodemirrorComponent, [{
    key: 'ngOnDestroy',


    /**
     * On component destroy
     */
    value: function ngOnDestroy() {}

    /**
     * On component view init
     */

  }, {
    key: 'ngAfterViewInit',
    value: function ngAfterViewInit() {
      this.config = this.config || {};
      this.codemirrorInit(this.config);
    }

    /**
     * Initialize codemirror
     */

  }, {
    key: 'codemirrorInit',
    value: function codemirrorInit(config) {
      var _this = this;

      this.instance = _codemirror2.default.fromTextArea(this.host.nativeElement, config);
      this.instance.on('change', function () {
        _this.updateValue(_this.instance.getValue());
      });
    }

    /**
     * Value update process
     */

  }, {
    key: 'updateValue',
    value: function updateValue(value) {
      this.value = value;
      this.onChange(value);
      this.onTouched();
      this.change.emit(value);
    }

    /**
     * Implements ControlValueAccessor
     */

  }, {
    key: 'writeValue',
    value: function writeValue(value) {
      this._value = value || '';
      if (this.instance) {
        this.instance.setValue(this._value);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(_) {}
  }, {
    key: 'onTouched',
    value: function onTouched() {}
  }, {
    key: 'registerOnChange',
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
  }, {
    key: 'registerOnTouched',
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
  }, {
    key: 'value',
    get: function get() {
      return this._value;
    },
    set: function set(v) {
      if (v !== this._value) {
        this._value = v;
        this.onChange(v);
      }
    }
  }]);

  return CodemirrorComponent;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'config', [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return this.config;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'change', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return new _core.EventEmitter();
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'host', [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return this.host;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'instance', [_dec5], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, 'value'), _class2.prototype)), _class2)) || _class);

/**
 * CodemirrorModule
 */

var CodemirrorModule = exports.CodemirrorModule = (_dec7 = (0, _core.NgModule)({
  declarations: [CodemirrorComponent],
  exports: [CodemirrorComponent]
}), _dec7(_class4 = function CodemirrorModule() {
  _classCallCheck(this, CodemirrorModule);
}) || _class4);
//# sourceMappingURL=Codemirror.js.map
