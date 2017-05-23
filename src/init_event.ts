import * as CodeMirror from "codemirror";

export class InitEvent {
	codeMirrorInstance: CodeMirror.Editor


	constructor(codeMirrorInstance: CodeMirror.Editor) {
		this.codeMirrorInstance = codeMirrorInstance;
	}
}