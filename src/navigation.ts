import { getPermalink, getBlogPermalink } from './utils/permalinks';

const whatsappNumber = (import.meta.env.PUBLIC_WHATSAPP_NUMBER || '').replace(/\D/g, '');
const whatsappMessage = encodeURIComponent(
  'Hi Unified Networks, I am looking for help with internet or Wi-Fi setup in Drogheda, Dundalk, Navan, Dublin, or nearby areas.'
);
const whatsappHref = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  : getPermalink('/#contact');

export const headerData = {
  links: [
    {
      text: 'Services',
      href: getPermalink('/#services'),
    },
    {
      text: 'FAQ',
      href: getPermalink('/#faq'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/#contact'),
    },
  ],
  actions: [
    { text: 'Book Consultation', href: getPermalink('/#contact') },
    {
      text: 'WhatsApp',
      href: whatsappHref,
      target: whatsappNumber ? '_blank' : undefined,
      icon: 'tabler:brand-whatsapp',
    },
  ],
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
      title: 'Resources',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'FAQ', href: getPermalink('/#faq') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Contact', href: getPermalink('/#contact') },
        { text: 'WhatsApp', href: whatsappHref },
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
