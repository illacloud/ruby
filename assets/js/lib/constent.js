const footerCenterContent = [
  {
    title: 'Produce',
    value: [
      {
        name: 'ILLA Builder',
        url: 'https://github.com/illacloud/illa-builder'
      },
      {
        name: 'ILLA Design',
        url: 'https://github.com/illacloud/illa-design'
      }
    ]
  },
  {
    title: 'Resources',
    value: [
      {
        name: 'MySQL',
        url: 'https://www.mysql.com/'
      },
      {
        name: 'Rest API',
        url: 'https://restfulapi.net/'
      }
    ]
  },
  {
    title: 'Company',
    value: [
      {
        name: 'Careers',
        url: 'https://www.illacloud.com/hire'
      },
      {
        name: 'Media Kit',
        url: 'https://illa-cloud-storage.illacloud.com/system-assets/media-kit/illa_media_kit.20230228.zip',
        downloadName: 'illa_media_kit'
      }
    ]
  },
]
const footerRightContent = {
  title: 'Comunity',
  value: [
    {
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1389_1381)">
      <path d="M0 10.8211C0 15.5473 3.07837 19.5657 7.36881 21.0409C7.94686 21.1853 7.85878 20.7791 7.85878 20.5046V18.6295C4.52258 19.0141 4.38954 16.8419 4.16382 16.4799C3.71056 15.7188 2.64253 15.5247 2.96092 15.1627C3.72065 14.7781 4.49506 15.2602 5.39058 16.5648C6.03929 17.51 7.30458 17.3502 7.94778 17.1922C8.08582 16.6325 8.38159 16.1224 8.8011 15.7206C5.34562 15.1121 3.90416 13.0366 3.90416 10.5674C3.90416 9.37027 4.30604 8.26974 5.09238 7.38138C4.5914 5.91702 5.13917 4.66482 5.21166 4.47884C6.6412 4.35245 8.12395 5.48548 8.23956 5.57395C9.05159 5.35818 9.97739 5.24443 11.0133 5.24443C12.0547 5.24443 12.986 5.36179 13.8026 5.58027C14.0779 5.37263 15.4561 4.4003 16.7847 4.51947C16.8553 4.70545 17.3902 5.92876 16.9195 7.37235C17.7169 8.26252 18.1225 9.37298 18.1225 10.5737C18.1225 13.0465 16.6727 15.1239 13.2072 15.7252C13.504 16.0128 13.7396 16.3558 13.9003 16.734C14.0609 17.1122 14.1435 17.5181 14.1431 17.928V20.65C14.1623 20.8676 14.1431 21.0833 14.5128 21.0833C18.8657 19.6397 22 15.5915 22 10.8229C22 4.84268 17.0737 1.13532e-06 11.0014 1.13532e-06C4.92172 -0.0027073 0 4.84087 0 10.8211Z" fill="#1D2129"/>
      </g>
      <defs>
      <clipPath id="clip0_1389_1381">
      <rect width="22" height="22" fill="white"/>
      </clipPath>
      </defs>
      </svg>`,
      name: 'Github',
      url: 'https://github.com/illacloud/illa-builder'
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.9236 4.23357C21.1201 4.58019 20.2456 4.82964 19.345 4.9268C20.2745 4.37274 20.9809 3.49833 21.3144 2.45849C20.4557 2.97053 19.4841 3.34603 18.4732 3.54034C17.6539 2.66593 16.4907 2.125 15.2014 2.125C12.7199 2.125 10.7243 4.13642 10.7243 6.60473C10.7243 6.95135 10.7663 7.29796 10.8345 7.63145C7.11894 7.43713 3.80509 5.66204 1.60199 2.94427C1.21336 3.61124 0.992784 4.37274 0.992784 5.20514C0.992784 6.75966 1.78317 8.13036 2.98844 8.9365C2.2532 8.90762 1.55997 8.70017 0.9639 8.36669V8.42183C0.9639 10.5987 2.50266 12.4026 4.55346 12.8175C4.17796 12.9147 3.7762 12.9698 3.37445 12.9698C3.08298 12.9698 2.80726 12.941 2.52892 12.9016C3.0961 14.6767 4.74778 15.966 6.71455 16.008C5.17579 17.2132 3.2484 17.9222 1.15559 17.9222C0.780089 17.9222 0.433474 17.9091 0.0737305 17.8671C2.05889 19.1406 4.41429 19.8759 6.95088 19.8759C15.1856 19.8759 19.6916 13.0539 19.6916 7.13253C19.6916 6.93822 19.6916 6.7439 19.6785 6.54959C20.5502 5.9115 21.3144 5.12112 21.9236 4.23357Z" fill="#1D2129"/>
      </svg>
      `,
      name: 'Twitter',
      url: 'https://twitter.com/illacloudhq'
    },
    {
      icon: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.5599 4.11923C18.5539 4.10753 18.5439 4.09836 18.5317 4.09336C17.1226 3.44684 15.6355 2.98582 14.1078 2.72183C14.0939 2.71925 14.0796 2.72112 14.0668 2.72715C14.0541 2.73319 14.0435 2.7431 14.0367 2.75547C13.8343 3.12298 13.6504 3.50048 13.486 3.88652C11.8392 3.63653 10.1641 3.63653 8.5173 3.88652C8.35177 3.4995 8.16501 3.12191 7.95787 2.75547C7.95077 2.74337 7.94019 2.73369 7.9275 2.72769C7.91482 2.72169 7.90062 2.71965 7.88676 2.72183C6.35887 2.98526 4.87175 3.44632 3.46281 4.0934C3.45075 4.09851 3.44057 4.10724 3.43368 4.11838C0.616076 8.32611 -0.155772 12.4304 0.22287 16.4838C0.223935 16.4937 0.226987 16.5034 0.231845 16.5121C0.236703 16.5208 0.243267 16.5285 0.251146 16.5346C1.89181 17.7494 3.72691 18.6767 5.67815 19.2768C5.69189 19.281 5.70656 19.2808 5.72019 19.2763C5.73383 19.2718 5.74576 19.2633 5.7544 19.2518C6.17348 18.6816 6.54482 18.0778 6.86464 17.4465C6.86903 17.4379 6.87154 17.4284 6.872 17.4187C6.87246 17.409 6.87085 17.3993 6.8673 17.3902C6.86374 17.3812 6.8583 17.373 6.85135 17.3662C6.8444 17.3595 6.83609 17.3542 6.82697 17.3509C6.2414 17.1268 5.6745 16.8567 5.13158 16.5431C5.12172 16.5373 5.11344 16.5292 5.10747 16.5194C5.10149 16.5097 5.09802 16.4986 5.09734 16.4872C5.09666 16.4758 5.09881 16.4644 5.10359 16.454C5.10837 16.4436 5.11564 16.4345 5.12475 16.4276C5.23899 16.3423 5.35125 16.2543 5.46144 16.1638C5.4711 16.1558 5.48279 16.1507 5.4952 16.1491C5.50761 16.1474 5.52024 16.1492 5.53166 16.1543C9.08852 17.7776 12.9393 17.7776 16.454 16.1543C16.4655 16.1489 16.4783 16.1468 16.4908 16.1483C16.5034 16.1499 16.5153 16.1549 16.5252 16.1629C16.6355 16.2539 16.748 16.3422 16.8627 16.4276C16.8719 16.4344 16.8792 16.4434 16.884 16.4538C16.8889 16.4641 16.8911 16.4755 16.8905 16.487C16.8899 16.4984 16.8865 16.5095 16.8806 16.5193C16.8748 16.5291 16.8665 16.5373 16.8567 16.5431C16.315 16.8594 15.7476 17.1293 15.1605 17.35C15.1514 17.3535 15.1431 17.3588 15.1362 17.3657C15.1293 17.3726 15.1239 17.3809 15.1204 17.39C15.1169 17.3991 15.1154 17.4089 15.116 17.4186C15.1165 17.4283 15.1191 17.4379 15.1235 17.4465C15.4487 18.0743 15.8195 18.6774 16.2329 19.2508C16.2413 19.2626 16.2532 19.2714 16.2669 19.2761C16.2806 19.2807 16.2954 19.281 16.3092 19.2767C18.2639 18.6786 20.1022 17.7513 21.7449 16.5346C21.7529 16.5288 21.7596 16.5213 21.7645 16.5127C21.7694 16.5041 21.7723 16.4945 21.7732 16.4847C22.2265 11.7985 21.0143 7.72783 18.5599 4.11923ZM7.39582 14.0157C6.32495 14.0157 5.44258 13.033 5.44258 11.8261C5.44258 10.6192 6.30784 9.63638 7.39582 9.63638C8.49231 9.63638 9.36614 10.6277 9.34903 11.826C9.34903 13.033 8.48374 14.0157 7.39582 14.0157ZM14.6175 14.0157C13.5467 14.0157 12.6643 13.033 12.6643 11.8261C12.6643 10.6192 13.5296 9.63638 14.6175 9.63638C15.7141 9.63638 16.5879 10.6277 16.5708 11.826C16.5708 13.033 15.7141 14.0157 14.6175 14.0157Z" fill="#1D2129"/>
      </svg>
      `,
      name: 'Discord',
      url: 'https://discord.com/invite/illacloud'
    },
    {
      icon:`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11 22C17.0748 22 22 17.0748 22 11C22 4.92479 17.0748 0 11 0C4.92479 0 0 4.92442 0 11C0 17.0748 4.92442 22 11 22ZM9.35 11H12.4664C12.6831 11 12.8977 10.9573 13.0978 10.8744C13.298 10.7915 13.4799 10.6699 13.6331 10.5167C13.7864 10.3635 13.9079 10.1816 13.9908 9.98143C14.0737 9.78124 14.1164 9.56668 14.1164 9.35C14.1164 9.13332 14.0737 8.91876 13.9908 8.71857C13.9079 8.51838 13.7864 8.33649 13.6331 8.18327C13.4799 8.03006 13.298 7.90852 13.0978 7.8256C12.8977 7.74268 12.6831 7.7 12.4664 7.7H9.35V11ZM7.15 5.5H12.4664C14.5927 5.5 16.3164 7.22373 16.3164 9.35C16.3164 11.4763 14.5927 13.2 12.4664 13.2H9.35V16.5H7.15V5.5Z" fill="#1D2129"/>
      </svg>
      `,
      name: 'Product Hunt',
      url: 'https://www.producthunt.com/posts/illa'
    }
  ]
}
