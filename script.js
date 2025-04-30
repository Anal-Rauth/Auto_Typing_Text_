const span = document.querySelector('span')
const wordsList = ['Student.', 'Coder.', 'Developer.','Learner.']
let wordIndex = 0
let characterIndex = 0
let skipUpdate = 0
let reverseType = false
const interValId = setInterval(() =>{
    if(skipUpdate){
        skipUpdate --
        return
    }
    if (!reverseType) {
        skipUpdate =  2
        span.innerText = span.innerText + wordsList[wordIndex][characterIndex]
        characterIndex++
    } else {
        span.innerText = span.innerText.slice(0, span.innerText.length - 1)
        characterIndex --
    }

    if (characterIndex === wordsList[wordIndex].length) {
        skipUpdate = 6
        reverseType = true
    }

    if(span.innerText.length === 0 && reverseType){
        reverseType = false
        // characterIndex = 0
        wordIndex++
    }

    if(wordIndex === wordsList.length){
        wordIndex = 0
    }
},100) 