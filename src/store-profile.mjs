// Store-submission facts. Nulls stay out of public pages until the owner supplies them.
// These checks are preparation metadata, not claims that a store has approved the site.
export const publisher = {
  brand: 'Oyri Games',
  legalName: 'Esra Oyri',
  country: 'Türkiye',
  postalAddress: 'Yakacık Çarşı Mah. Serdar Sok. Kartal/İstanbul',
  publicPhone: '+905369473930',
};
export const storeVerification = {
  publisherConfirmed: true,
  supportEmailActive: true,
  publicHttpsVerified: false,
  submittedBuildVerified: false,
};
export const appProfiles = {
  pixelheist: {
    storeName: 'Pixel Heist',
    releaseConfirmed: true,
    accounts: false,
    advertising: true,
    analytics: false,
    purchases: true,
    subscriptions: true,
    cloudSaves: false,
    targetAudience: 'general; not specifically directed at children',
    retention: { analytics: null, purchases: 'Provider retention policies and legal obligations', support: 'Up to 12 months after closure, except legally required records', deletionRequests: 'Up to 12 months after closure, except legally required records' },
  },
  mapbop: {
    storeName: 'MapBop: Geography Game',
    releaseConfirmed: true,
    accounts: false,
    advertising: true,
    analytics: false,
    purchases: true,
    subscriptions: true,
    cloudSaves: false,
    targetAudience: 'general; not specifically directed at children',
    retention: { analytics: null, purchases: 'Provider retention policies and legal obligations', support: 'Up to 12 months after closure, except legally required records', deletionRequests: 'Up to 12 months after closure, except legally required records' },
  },
};
