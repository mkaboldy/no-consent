setTimeout(()=>{
  // frequent cookie consent popups
  const selectors = ['.fc-consent-root','.newsletter-layer','#gdpr-consent-tool-wrapper','#qc-cmp2-container','#cookie-banner']
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
},500);