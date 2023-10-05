
function verifyPassword() {
    const pw1 = document.getElementById('pw1').value;
    const pw2 = document.getElementById('pw2').value;
    const pw1Input = document.getElementById('pw1');
    const pw2Input = document.getElementById('pw2');
    const testing = document.getElementById('form-5');

    console.log(testing);
    console.log(pw1);
    console.log(pw2);
    if (pw1 !== pw2) {
        event.preventDefault();
        pw1Input.classList.add('error');
        pw2Input.classList.add('error');
        testing.classList.add('error-message');
        console.log('ERROR TEST SUCCESSFUL');
        console.log(pw1Input.classList);    
    };
}







/*
Define the form
Build function that checks whether pw are the same
   If not, adds the error class. 
       I think with CSS, can use the ::after and add the text?
    If match, remove the error class?
Trigger this when...?? button pushed?  Both fields are filled out would be the best....

Is there a way to stop the button push until both pw match/

*/