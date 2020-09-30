let TextAreaMain = getElement('id', 'MAINTEXT', true)
let FontChoice = getElement('id', 'FontChoice', true)
const textInfoHTML = {
     wordHTML: getElement('id', 'WordHTML', true),
     letterHTML: getElement('id', 'LettersHTML', true),
     allWordList: getElement('id', 'allWordHTML', true),
     allWordCount: getElement('id', 'WordAllHTML', true),
     allLetterCount: getElement('id', 'LettersAllHTML', true),
}
let words = TextAreaMain.value;
let letters;
const textInfo = {
     wordCount: 2,
     letterCount: 8,
}
let wordALL = [];

textAreaChange()
setInterval(() => textAreaChange(), 1)


function textAreaChange() {
     letters = [];
     words = getElement('id', 'MAINTEXT').value.trim();
     allTheWords = words.split(' ')
     for (let i = 0; i < allTheWords.length; i++) {
          for (let j = 0; j < allTheWords[i].length; j++) {
               letters.push(allTheWords[i].charAt(j));
          }
     }
     if (words.trim() === '') {
          textInfo.wordCount = 0;
     } else {
          textInfo.wordCount = allTheWords.length;
     }
     textInfo.letterCount = letters.length;
     textInfoHTML.wordHTML.innerHTML = `Words: ${textInfo.wordCount}`
     textInfoHTML.letterHTML.innerHTML = `Letters: ${textInfo.letterCount}`
     TextAreaMain.style.fontFamily = FontChoice.value
}