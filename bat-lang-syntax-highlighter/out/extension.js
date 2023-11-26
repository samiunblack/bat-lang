const vscode = require('vscode');
const path = require('path');

function activate(context) {
  // Register your TextMate grammar for syntax highlighting
  const languageId = 'bat-lang';
  const grammarPath = path.join(context.extensionPath, 'syntaxes', 'bat-lang.tmLanguage.json');

  const grammar = vscode.languages.createDiagnosticCollection(languageId, grammarPath);

  context.subscriptions.push(
    vscode.languages.registerDocumentSemanticTokensProvider({ language: languageId }, {
      provideDocumentSemanticTokens: (document) => {
        // Return semantic tokens here if needed, but for basic syntax highlighting, this can be left empty.
        return new vscode.SemanticTokens(new Uint32Array());
      }
    })
  );

  console.log('Congratulations, your extension "your-language-highlighter" is now active!');
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
