(function () {
    const share = document.querySelector('.social-media-share')
    const shareList = document.querySelector('.share-list')
    const footerListContainer = document.querySelector('.footer-container')
    const socialMedia = document.querySelector('.social-media')
    const toolbar = document.querySelector('.toolbar')
    const threshold = 100 // 距离底部的距离
    const  throttle = (func, delay) => {
        let timer = null;
        let startTime = Date.now();
        return function(){
          let curTime = Date.now();
          let remaining = delay - (curTime - startTime);
          const context = this;
          const args = arguments;
          clearTimeout(timer);
          if(remaining <= 0){
            func.apply(context,args);
            startTime = Date.now();
          }else{
            timer = setTimeout(func, remaining);
          }
        }
      }

    // 触底去掉social-media部分, 与footer有重叠冲突
    const handleScroll = () => {
        const {scrollTop, clientHeight, scrollHeight} = document.documentElement
        const val = scrollTop + clientHeight + threshold
        if(!socialMedia && !toolbar) return
        if(val < scrollHeight) {
            if(toolbar) {
                toolbar.style.display = 'flex'
                return
            }
            if(socialMedia) {
                socialMedia.style.display = 'flex'
                return
            }
        } else {
            if(toolbar) {
                toolbar.style.display = 'none'
                return
            }
            if(socialMedia) {
                socialMedia.style.display = 'none'
                return
            }
        }
    }
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

    window.addEventListener('scroll', throttle(handleScroll, 200))

  const footerList = `
    <div class='footer-item-center'>
        {{#footerCenterContent}}
        <div class="footer-item">
            <div class="footer-title basic-font-color">{{title}}</div>
            <ul class="footer-href">
            {{#value}}
                <li>
                    <a class="no-change-opacity" href="{{url}}" target="__blank" {{#if downloadName}}download="{{downloadName}}"{{/if}}>{{name}}</a>
                </li >
            {{/value}}
        </div>
        {{/footerCenterContent}}
    </div>
    {{#footerRightContent}}
        <div class='footer-item footer-item-right'>
            <div class="footer-title">{{title}}</div>
            <ul class="footer-href">
            {{#value}}
            <li>
                <a class="no-change-opacity" href="{{url}}" target="__blank">
                    {{{icon}}}
                    <span>{{name}}</span>
                </a>
            </li>
            {{/value}}
            </ul>
    </div>
    {{/footerRightContent}}
    `

    const template = Handlebars.compile(footerList);
    const context = { footerRightContent, footerCenterContent }
    const footerTemplate = template(context);
    footerListContainer.innerHTML += footerTemplate;
    pagination(true);
})();
