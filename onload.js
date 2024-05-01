function linkNewAccount() {
    let newAcc = document.getElementsByClassName('create-account');
    if(newAcc.href = '#') {
        newAcc.setAttribute('href', 'https://en.wikipedia.org/w/index.php?title=Special:CreateAccount&returnto=HTML');
    }
}