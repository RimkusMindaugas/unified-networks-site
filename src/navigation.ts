import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      href: getPermalink('/#services'),
    },
    {
      text: 'Contact',
      href: getPermalink('/#contact'),
    },
  ],
  actions: [{ text: 'Book Consultation', href: getPermalink('/#contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Network Design', href: getPermalink('/#services') },
        { text: 'Wi-Fi Optimization', href: getPermalink('/#services') },
        { text: 'Starlink Installation', href: getPermalink('/#services') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'Contact', href: getPermalink('/#contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: 'Unified Networks. All rights reserved.',
};
