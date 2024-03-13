function updatePreview() {
  try {
    var htmlCode = document.getElementById('htmlCode').value;
    var cssCode = document.getElementById('cssCode').value;
    var jsCode = document.getElementById('jsCode').value;

    new Function(jsCode)();

    var iframe = document.getElementById('previewFrame');
    var div_el = document.createElement('div');
    div_el.innerHTML = `<!DOCTYPE html><head><style>${cssCode}</style></head><body>${htmlCode}</body>`;
    iframe.contentWindow.document.body.innerHTML = '';
    iframe.contentWindow.document.body.appendChild(div_el);

    
  } catch (error) {
    alert(`JavaScript error: ${error.message}`);
  }
}