function headerModification(){
    const path = window.location.href;

    const pathArray = path.split('/');

    const link = pathArray[pathArray.length-1];

    if(link === 'home') {
        let ulist = document.getElementById('navList');

        ulist.removeChild(ulist.childNodes[7]);
        ulist.removeChild(ulist.childNodes[8]);
    }

    if(link === 'rankings') {
        let ulist = document.getElementById('navList');

        ulist.removeChild(ulist.childNodes[5]);
        ulist.removeChild(ulist.childNodes[6]);
        ulist.removeChild(ulist.childNodes[7]);
    }

    if(link === 'login' || link === '') {
      let ulist = document.getElementById('navList');

      ulist.removeChild(ulist.childNodes[5]);
      ulist.removeChild(ulist.childNodes[6]);
    }

    if(link === 'signup') {
        let ulist = document.getElementById('navList');

        ulist.removeChild(ulist.childNodes[5]);
        ulist.removeChild(ulist.childNodes[8]);
    }
}
