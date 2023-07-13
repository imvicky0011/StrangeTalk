import * as store from './store.js'

export const updatePersonalCode = (personalCode) => {
    const personalCodeParagraph = document.getElementById('personal_code_paragraph')

    personalCodeParagraph.innerHTML = personalCode
}