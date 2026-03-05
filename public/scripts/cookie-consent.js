(() => {
  if (window.__unCookieConsentBannerInitialized) return;
  window.__unCookieConsentBannerInitialized = true;

  const CONSENT_KEY = 'un_cookie_consent';
  const CONSENT_COOKIE = 'un_cookie_consent';
  const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

  const banner = document.getElementById('cookie-consent-banner');
  if (!banner) return;

  const readConsent = () => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored) return stored;
    } catch {
      // Ignore localStorage access errors
    }

    const match = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : null;
  };

  const persistConsent = (value) => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // Ignore localStorage access errors
    }

    document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(value)}; Max-Age=${ONE_YEAR_IN_SECONDS}; Path=/; SameSite=Lax`;
  };

  const showBanner = () => banner.classList.remove('hidden');
  const hideBanner = () => banner.classList.add('hidden');

  const syncBannerState = () => {
    const consent = readConsent();
    if (consent === 'accepted' || consent === 'rejected') {
      hideBanner();
    } else {
      showBanner();
    }
  };

  banner.querySelector('[data-cookie-accept]')?.addEventListener('click', () => {
    persistConsent('accepted');
    hideBanner();
    window.dispatchEvent(new Event('un:cookie-consent-accepted'));
  });

  const rejectConsent = () => {
    persistConsent('rejected');
    hideBanner();
    window.dispatchEvent(new Event('un:cookie-consent-rejected'));
  };

  banner.querySelector('[data-cookie-close]')?.addEventListener('click', rejectConsent);

  syncBannerState();
  document.addEventListener('astro:after-swap', syncBannerState);
})();
