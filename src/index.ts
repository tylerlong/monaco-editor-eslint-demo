import * as monaco from 'monaco-editor';

import './index.css';
import lint from './lint';

const container = document.createElement('div');
document.body.appendChild(container);

const editor = monaco.editor.create(container, {
  value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
  language: 'typescript',
});

const model = editor.getModel()!;
model.onDidChangeContent((event) => {
  console.log(lint(model.getValue()));
});
