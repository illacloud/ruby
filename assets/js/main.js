(function () {
    pagination(true);
    const share = document.querySelector('.social-media-share')
    const shareList = document.querySelector('.share-list')
    
    share &&  share.addEventListener('click', (event) => {
        shareList.style.display = 'block'
        event.stopPropagation()
    })
    window.addEventListener('click', () => {
        if(!shareList) return
        if(shareList.style.display === 'block')  {
            shareList.style.display = 'none'
        }
    })
})();
