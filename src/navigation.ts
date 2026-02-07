import { getPermalink, getBlogPermalink } from './utils/permalinks';

const defaultContactNumber = '353874118332';
const contactNumber = (
  import.meta.env.PUBLIC_CONTACT_PHONE ||
  import.meta.env.PUBLIC_WHATSAPP_NUMBER ||
  defaultContactNumber
).replace(/\D/g, '');
const whatsappNumber = (import.meta.env.PUBLIC_WHATSAPP_NUMBER || contactNumber).replace(/\D/g, '');
const whatsappMessage = encodeURIComponent(
  'Hi Unified Networks, I am looking for help with internet or Wi-Fi setup.'
);
const phoneHref = `tel:+${contactNumber}`;
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

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
    { text: 'Call Now', href: phoneHref, icon: 'tabler:phone-call' },
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
        { text: 'Call', href: phoneHref },
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
