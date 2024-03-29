setTimeout(()=>{
  // frequent cookie consent popups
  const selectors = ['#vip2-info-layer','#otherm3','#otherm2','#gdpr-new-container','.global-gdpr-container','.app-newsletter-popup','.app-newsletter-modal','.cookie-consent-modal','#onetrust-consent-sdk','#ez-cookie-dialog-wrapper','.eu-cookie-compliance-banner', '#twcc__mechanism','#CybotCookiebotDialog','#qc-cmp2-container','._iph_brk', '#cookie-notice','#onetrust-consent-sdk','#cookie_alert','.js-consent-banner', '#alert18', '.truste_box_overlay', '.truste_overlay', '.fc-consent-root','.newsletter-layer','#gdpr-consent-tool-wrapper','#qc-cmp2-container','#cookie-banner']
  selectors.forEach (selector => {
    try {
      let popup = document.querySelector(selector);
      if (popup) {
        popup.remove();
        console.log(selector + ' removed');
      }    
    } catch (e) {
      console.error(e,selector);
    }  
  });
  // HTML block-scroll
  const html = document.getElementsByTagName("HTML")[0];
  if (html) {
    html.classList.remove('block-scroll');
  }
  // Body overflow generic
  const body = document.getElementsByTagName("BODY")[0];
  if (body) {
    body.style.overflow = "visible !important";
    body.classList.remove('modal-open');
  }
  
  popup = document.querySelector('#gdpr-consent-modal');
  // MKB bank
  popup = document.querySelector('#gdpr-consent-modal');
  if (popup) {
    popup.remove();
    document.querySelector('body').classList.remove('sf-is-modal-overflow-hidden');
    console.log('gdpr-consent-modal removed');
  }
  // port.hu
  if (location.href.includes('port.hu')) {
    document.querySelector('body').classList.remove('no-touch');
    document.querySelector('body').style = '';
  }
  // babanet.hu
  if (location.href.includes('babanet.hu')) {
    document.querySelector('body').style = '';
  }
  // ingatlan.com
  if (location.href.includes('ingatlan.com')) {
    setTimeout(()=> {
      document.querySelector('body').style = '';
      document.querySelector('#CybotCookiebotDialog').remove();
      document.querySelector('#CybotCookiebotDialogBodyUnderlay').remove();
      console.log('CybotCookiebotDialog removed');  
    },2000);
  }
},500);