import * as R from 'ramda';

function Colorize(elem, config){
  const { innerText = '' } = elem;
  const { colorMap = {} } = config;

  function flipColorMap(colorMap){
    const result = {};
    Object.keys(colorMap).forEach(key => {
      result[colorMap[key].toLowerCase()] = key;
    });
    return result;
  }

  function wrapInColor(word, color){
    return `<span style="color: ${color};">${word}</span>`;
  }

  function colorizeWord(tokenColorMap, word){
    const color = tokenColorMap[word.toLowerCase()];
    return color ? wrapInColor(word, color) : word;
  }

  function colorize(innerText, colorMap){
    const tokenColorMap = flipColorMap(colorMap);
    const colorizeFn = R.curry(colorizeWord)(tokenColorMap);
    return innerText.split(' ')
      .map(colorizeFn)
      .join(' ');
  }

  elem.innerHTML = colorize(innerText, colorMap);
}
window.Colorize = Colorize;
