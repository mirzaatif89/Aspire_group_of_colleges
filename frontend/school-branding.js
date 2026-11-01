// Preserve sessions and school records while migrating only the school identity.
(() => {
  const name = 'Aspire Group of Colleges';
  const address = 'Haji Bazar Chowk, Tehsil Road Jand.';
  window.SCHOOL_BRANDING = Object.freeze({name, address, phone:'+92 300 5203469', logo:'images/logo.png'});
  try {
    const settings = JSON.parse(localStorage.getItem('eduCore_settings') || '{}') || {};
    if (!settings.aspireBrandingVersion) {
      Object.assign(settings, {schoolName:name, schoolTitle:name, address, schoolAddress:address, phone:'+92 300 5203469', logoDataUrl:'', aspireBrandingVersion:1});
      localStorage.setItem('eduCore_settings', JSON.stringify(settings));
    }
  } catch (_) { /* The static branding also works when storage is disabled. */ }
})();
