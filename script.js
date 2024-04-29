function mainMenu() {
    let status = document.getElementById('main-menu');
    if (status.classList.contains('d-none')) {
        status.classList.replace('d-none', 'd-block');
    } else if (status.classList.contains('d-block')) {
        status.classList.replace('d-block', 'd-none');
    }
}

function searchBar() {
    let nav = document.getElementById('nav-hide');
    let srch = document.getElementById('search-bar');
    if (srch.classList.contains('d-none')) {
        srch.classList.replace('d-none', 'd-block');
        nav.classList.replace('show', 'hide');
    } else if (srch.classList.contains('d-block')) {
        srch.classList.replace('d-block', 'd-none');
        nav.classList.replace('hide', 'show');
    }
}

function threeDot() {
    let threeDot = document.getElementById('three-dot-menu');
    if (threeDot.classList.contains('d-none')) {
        threeDot.classList.replace('d-none', 'd-block');
    } else if (threeDot.classList.contains('d-block')) {
        threeDot.classList.replace('d-block', 'd-none');
    }
}

function openContents() {
    let contents = document.getElementById('contents-menu');
    if (contents.classList.contains('d-none')) {
        contents.classList.replace('d-none', 'd-flex');
    } else contents.classList.replace('d-flex', 'd-none');
}

function historySubMenu() {
    let hsm = document.getElementById('history-sub-menu');
    let ddIconHistory = document.getElementById('dd-icon-history');
    if (hsm.classList.contains('d-none')) {
        hsm.classList.replace('d-none', 'd-flex');
        ddIconHistory.classList.add('rotate-90deg');
    } else {
        hsm.classList.replace('d-flex', 'd-none');
        ddIconHistory.classList.remove('rotate-90deg');
    }
}

function markupSubMenu() {
    let mrk = document.getElementById('markup-sub-menu');
    let ddIconMarkup = document.getElementById('dd-icon-markup');
    if (mrk.classList.contains('d-none')) {
        mrk.classList.replace('d-none', 'd-flex');
        ddIconMarkup.classList.add('rotate-90deg');
    } else {
        mrk.classList.replace('d-flex', 'd-none');
        ddIconMarkup.classList.remove('rotate-90deg');
    }
}

function deliverySubMenu() {
    let dlv = document.getElementById('delivery-sub-menu');
    let ddIconDelivery = document.getElementById('dd-icon-delivery');
    if (dlv.classList.contains('d-none')) {
        dlv.classList.replace('d-none', 'd-flex');
        ddIconDelivery.classList.add('rotate-90deg');
    } else {
        dlv.classList.replace('d-flex', 'd-none');
        ddIconDelivery.classList.remove('rotate-90deg');
    }
}

function html4VSubMenu() {
    let htmlv4 = document.getElementById('html4v-sub-menu');
    let ddIconHtml4v = document.getElementById('dd-icon-html4v');
    if (htmlv4.classList.contains('d-none')) {
        htmlv4.classList.replace('d-none', 'd-flex');
        ddIconHtml4v.classList.add('rotate-90deg');
    } else {
        htmlv4.classList.replace('d-flex', 'd-none');
        ddIconHtml4v.classList.remove('rotate-90deg');
    }
}

function contentsSubMenuReset() {
    let hsm = document.getElementById('history-sub-menu');
    let hsmActive = hsm.classList.contains('d-block');
    let mrk = document.getElementById('markup-sub-menu');
    let mrkActive = mrk.classList.contains('d-block');
    let dlv = document.getElementById('delivery-sub-menu');
    let dlvActive = dlv.classList.contains('d-block');
    let htmlv4 = document.getElementById('html4v-sub-menu');
    let htmlv4Active = htmlv4.classList.contains('d-block');
    if (hsmActive || mrkActive || dlvActive || htmlv4Active == true) {
        hsm.classList.replace('d-block', 'd-none');
        mrk.classList.replace('d-block', 'd-none');
        dlv.classList.replace('d-block', 'd-none');
        htmlv4.classList.replace('d-block', 'd-none');
    }
}

function openLanguages() {
    let lang = document.getElementById('languages-menu');
    let langDd = document.getElementById('lang-dd-icon');
    if (lang.classList.contains('d-none')) {
        lang.classList.replace('d-none', 'd-block');
        langDd.classList.add('rotate-180deg');
    } else {
        lang.classList.replace('d-block', 'd-none');
        langDd.classList.remove('rotate-180deg');
    }
}

function openTalk() {
    let article = document.getElementById('article');
    let talk = document.getElementById('talk');
    if (article.classList.contains('active')) {
        article.classList.remove('active');
        talk.classList.add('active');
    }
}

function openArticle() {
    let article = document.getElementById('article');
    let talk = document.getElementById('talk');
    if (talk.classList.contains('active')) {
        talk.classList.remove('active');
        article.classList.add('active');
    }
}

function openTools() {
    let tools = document.getElementById('tools-menu');
    let ddIcon = document.getElementById('dd-icon-tools');
    if (tools.classList.contains('d-none')) {
        tools.classList.replace('d-none', 'd-block');
        ddIcon.classList.add('rotate-180deg');
    } else {
        tools.classList.replace('d-block', 'd-none');
        ddIcon.classList.remove('rotate-180deg');
    }
}