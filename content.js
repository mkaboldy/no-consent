setTimeout(()=>{
  // frequent cookie consent popups
  const selectors = ['#cookie_alert','.js-consent-banner', '#alert18', '.truste_box_overlay', '.truste_overlay', '.fc-consent-root','.newsletter-layer','#gdpr-consent-tool-wrapper','#qc-cmp2-container','#cookie-banner']
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
},500);