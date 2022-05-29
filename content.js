ids = ['#gdpr-consent-tool-wrapper','#qc-cmp2-container','#cookie-banner']
ids.forEach (id => {
  try {
    popup = document.querySelector(id);
    if (popup) {
      popup.remove();
      console.log(id + ' removed');
    }    
  } catch (e) {
    console.error(e,id);
  }  
}); 
