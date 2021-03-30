class Base {

    checkPlaceholder(field, expected) {
        expect($(field)).toHaveAttribute('placeholder', expected)
    } 
    
    errorMessageDisappears(field, errorMessage) {
        $(field).setValue('a') //Enter 'a' into the field
        $(errorMessage).waitForDisplayed({ reverse: true }) //reverse means waitForNotDisplayed
    }
}

export default Base;