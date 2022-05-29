setTimeout(()=>{
  // frequent cookie consent popups
  ids = ['#gdpr-consent-tool-wrapper','#qc-cmp2-container','#cookie-banner']
  ids.forEach (id => {
    try {
      let popup = document.querySelector(id);
      if (popup) {
        popup.remove();
        console.log(id + ' removed');
      }    
    } catch (e) {
      console.error(e,id);
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