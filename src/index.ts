import * as monaco from 'monaco-editor';

import './index.css';

const container = document.createElement('div');
document.body.appendChild(container);

monaco.editor.create(container, {
  value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
  language: 'javascript',
});
