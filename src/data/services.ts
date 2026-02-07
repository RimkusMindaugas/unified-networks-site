export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceFaq {
  title: string;
  description: string;
}

export interface ServicePageData {
  slug: string;
  title: string;
  icon: string;
  cardDescription: string;
  metadataTitle: string;
  metadataDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introBody: string;
  outcomes: string[];
  features: ServiceFeature[];
  faqs: ServiceFaq[];
}

export const coverageSummary =
  'Dublin, Fingal, South Dublin, Dun Laoghaire-Rathdown, Meath, Kildare, Wicklow, Louth, Westmeath, Cavan, Monaghan, and Laois';

export const services: ServicePageData[] = [
  {
    slug: 'wifi-installation-and-setup-dublin',
    title: 'Wi-Fi Installation and Setup (Homes and Businesses)',
    icon: 'tabler:network',
    cardDescription:
      'Full Wi-Fi installation with proper router, switch, and access point placement for stable coverage and speed.',
    metadataTitle: 'Wi-Fi Installation and Setup in Dublin and Surrounding Areas | Unified Networks',
    metadataDescription:
      'Professional Wi-Fi installation and setup for homes and businesses in Dublin and surrounding areas. Reliable coverage, clean setup, and practical advice.',
    heroTitle: 'Wi-Fi Installation and Setup in Dublin and Surrounding Areas',
    heroSubtitle:
      'We design and install reliable Wi-Fi systems for homes and businesses, with clean setup and practical coverage planning.',
    introTitle: 'Build Wi-Fi That Works Everywhere You Need It',
    introBody:
      'Most weak Wi-Fi issues come from poor layout, not just weak internet. We plan the network around your building and usage so streaming, calls, office tools, and smart devices stay stable.',
    outcomes: [
      'Consistent signal in day-to-day use areas',
      'Cleaner setup with less trial-and-error hardware spending',
      'Improved reliability for work calls, streaming, and connected devices',
    ],
    features: [
      {
        title: 'Site and Usage Review',
        description: 'We map where Wi-Fi is needed most and how your devices are actually used.',
        icon: 'tabler:map-pin',
      },
      {
        title: 'Router, Switch, and AP Setup',
        description: 'We configure hardware correctly so the whole network works as one system.',
        icon: 'tabler:router',
      },
      {
        title: 'Coverage and Performance Tuning',
        description: 'We optimize channel use, placement, and settings for stable real-world performance.',
        icon: 'tabler:wifi',
      },
      {
        title: 'Handover and Recommendations',
        description: 'You get clear advice for future upgrades and ongoing reliability.',
        icon: 'tabler:clipboard-check',
      },
    ],
    faqs: [
      {
        title: 'Can you work with existing equipment?',
        description:
          'Yes. Where possible we improve what you already have and only recommend upgrades when there is a real performance reason.',
      },
      {
        title: 'Do you cover both homes and businesses?',
        description:
          'Yes. We install and optimize Wi-Fi for domestic and business environments across Dublin and surrounding areas.',
      },
      {
        title: 'Will one router be enough?',
        description:
          'In many properties, no. We design layout and access point placement so coverage is stable in the spaces you use most.',
      },
    ],
  },
  {
    slug: 'wifi-dead-zone-fixes-dublin',
    title: 'Wi-Fi Dead Zone Fixes and Coverage Improvement',
    icon: 'tabler:wifi',
    cardDescription:
      'Fix weak-signal rooms and blackspots with better Wi-Fi layout, access point placement, and practical tuning.',
    metadataTitle: 'Wi-Fi Dead Zone Fixes in Dublin and Surrounding Areas | Unified Networks',
    metadataDescription:
      'Eliminate Wi-Fi blackspots in homes and businesses with professional coverage planning and optimization across Dublin and nearby counties.',
    heroTitle: 'Wi-Fi Blackspot Elimination for Homes and Businesses',
    heroSubtitle:
      'If your internet is fast near the router but weak in key rooms, we fix the coverage problem at the source.',
    introTitle: 'Stop Living With Wi-Fi Dead Zones',
    introBody:
      'Dead zones are usually caused by layout, interference, and signal obstruction. We diagnose what is causing weak coverage and apply the right fixes so service is strong where people actually use it.',
    outcomes: [
      'Fewer dropouts in bedrooms, offices, and TV areas',
      'More stable roaming as you move through the building',
      'Less dependence on random extenders and temporary fixes',
    ],
    features: [
      {
        title: 'Blackspot Diagnosis',
        description: 'We identify where and why signal fails, including interference and layout constraints.',
        icon: 'tabler:search',
      },
      {
        title: 'Access Point Repositioning',
        description: 'We improve device placement to cover weak rooms properly.',
        icon: 'tabler:arrows-shuffle',
      },
      {
        title: 'Radio and Channel Optimization',
        description: 'We tune settings for cleaner airtime and better consistency.',
        icon: 'tabler:wave-sine',
      },
      {
        title: 'Validation Testing',
        description: 'We test after changes so you can see coverage improvement in real use areas.',
        icon: 'tabler:chart-bar',
      },
    ],
    faqs: [
      {
        title: 'Do repeaters always solve dead zones?',
        description:
          'Not always. Repeaters can help in simple cases but often reduce throughput. Proper AP planning gives better long-term results.',
      },
      {
        title: 'Can you fix one room only?',
        description:
          'Yes. We can target one problematic area, but we also check whether broader layout changes would prevent new blackspots later.',
      },
      {
        title: 'Will this help call drops on Wi-Fi?',
        description:
          'Yes. Better coverage and roaming behavior usually improves call stability on Wi-Fi calling and app-based calls.',
      },
    ],
  },
  {
    slug: 'wifi-site-survey-and-heatmap-dublin',
    title: 'Wi-Fi Site Survey and Heatmap Reports',
    icon: 'tabler:activity',
    cardDescription:
      'Formal survey and heatmap-based planning before upgrades, relocations, or new installations.',
    metadataTitle: 'Wi-Fi Site Survey and Heatmap Reports in Dublin | Unified Networks',
    metadataDescription:
      'Get a professional Wi-Fi site survey with heatmap reporting and practical upgrade recommendations in Dublin and surrounding areas.',
    heroTitle: 'Wi-Fi Site Surveys and Heatmap Reports',
    heroSubtitle:
      'Make network decisions based on measured data, not guesswork. Ideal before major upgrades or fit-outs.',
    introTitle: 'Measure First, Upgrade With Confidence',
    introBody:
      'A formal survey shows where signal is strong, weak, or noisy. That gives you a clear plan for access point placement, capacity, and upgrade priorities.',
    outcomes: [
      'Data-backed decisions for installations and upgrades',
      'Clear visibility of weak coverage zones',
      'Better budget control by avoiding unnecessary purchases',
    ],
    features: [
      {
        title: 'On-Site Signal Measurements',
        description: 'We collect real coverage and performance data across priority areas.',
        icon: 'tabler:map-2',
      },
      {
        title: 'Heatmap Reporting',
        description: 'You get visual maps showing usable coverage and weak zones.',
        icon: 'tabler:temperature',
      },
      {
        title: 'Interference and Channel Review',
        description: 'We identify congestion and overlap that can degrade performance.',
        icon: 'tabler:wifi-2',
      },
      {
        title: 'Action Plan',
        description: 'We provide practical recommendations with priority order.',
        icon: 'tabler:list-check',
      },
    ],
    faqs: [
      {
        title: 'Is this only for large businesses?',
        description:
          'No. Surveys are useful for homes, offices, hospitality sites, and any location where reliable Wi-Fi matters.',
      },
      {
        title: 'Do I receive a report after the survey?',
        description:
          'Yes. We provide a clear report with findings and practical recommendations you can act on.',
      },
      {
        title: 'Can this be done before installation?',
        description:
          'Yes. Doing a survey before installation often reduces rework and improves first-time setup quality.',
      },
    ],
  },
  {
    slug: 'structured-cabling-cat6-cat6a-fibre-dublin',
    title: 'Structured Cabling (Cat6/Cat6a/Fibre)',
    icon: 'tabler:network',
    cardDescription:
      'Standalone structured cabling service with clean runs, termination, and reliable wired backbone setup.',
    metadataTitle: 'Structured Cabling Cat6 Cat6a Fibre in Dublin | Unified Networks',
    metadataDescription:
      'Structured cabling for homes and businesses in Dublin and surrounding areas, including Cat6, Cat6a, and fibre backbone planning.',
    heroTitle: 'Structured Cabling for Homes and Businesses',
    heroSubtitle:
      'Cat6, Cat6a, and fibre-ready backbone cabling for stable long-term network performance.',
    introTitle: 'The Backbone Behind Reliable Wi-Fi and Internet',
    introBody:
      'Good Wi-Fi depends on good cabling. Clean, planned cabling supports access points, office devices, cameras, and future upgrades without messy retrofits.',
    outcomes: [
      'Stable wired backhaul for better Wi-Fi performance',
      'Cleaner network layout and easier fault finding',
      'Future-ready infrastructure for new devices and upgrades',
    ],
    features: [
      {
        title: 'Cable Route Planning',
        description: 'We plan practical pathways for clean runs and future expansion.',
        icon: 'tabler:route',
      },
      {
        title: 'Termination and Testing',
        description: 'We terminate and test runs so links are stable and usable from day one.',
        icon: 'tabler:plug-connected',
      },
      {
        title: 'Patch Panel and Cabinet Organization',
        description: 'We keep the core tidy and labeled for simpler maintenance.',
        icon: 'tabler:server',
      },
      {
        title: 'Home and Business Fit',
        description: 'Standalone cabling available for domestic and commercial projects.',
        icon: 'tabler:building',
      },
    ],
    faqs: [
      {
        title: 'Can I order cabling without a full Wi-Fi install?',
        description:
          'Yes. Structured cabling is available as a standalone service for homes and businesses.',
      },
      {
        title: 'Is Cat6 enough or should I use Cat6a?',
        description:
          'It depends on distance, speed goals, and environment. We recommend the right option after reviewing your layout.',
      },
      {
        title: 'Do you install comms cabinets?',
        description:
          'Yes. We can plan and install a tidy central cabinet setup for easier management and upgrades.',
      },
    ],
  },
  {
    slug: 'managed-wifi-plan-monthly-dublin',
    title: 'Managed Wi-Fi Plan (Monthly)',
    icon: 'tabler:settings-cog',
    cardDescription:
      'Monthly Wi-Fi management with monitoring, optimization, and ongoing support as your setup changes.',
    metadataTitle: 'Managed Wi-Fi Monthly Plan in Dublin | Unified Networks',
    metadataDescription:
      'Monthly managed Wi-Fi support for homes and businesses in Dublin and surrounding areas, including monitoring and ongoing optimization.',
    heroTitle: 'Managed Wi-Fi Support on a Monthly Plan',
    heroSubtitle:
      'Keep performance stable over time with proactive monitoring, tuning, and practical support.',
    introTitle: 'Ongoing Wi-Fi Performance Without Guesswork',
    introBody:
      'Networks drift over time as usage changes, devices increase, and layouts move. A managed plan keeps your Wi-Fi tuned and reliable instead of waiting for outages.',
    outcomes: [
      'Faster issue resolution before problems become disruptive',
      'Steadier performance as device counts grow',
      'Clear guidance when upgrades are actually needed',
    ],
    features: [
      {
        title: 'Health Monitoring',
        description: 'Regular checks help spot performance issues early.',
        icon: 'tabler:heartbeat',
      },
      {
        title: 'Configuration Optimization',
        description: 'We tune settings to match your current usage and environment.',
        icon: 'tabler:adjustments',
      },
      {
        title: 'Change Support',
        description: 'We help when you add devices, rooms, teams, or services.',
        icon: 'tabler:refresh',
      },
      {
        title: 'Practical Advisory',
        description: 'You get clear recommendations, not vague technical noise.',
        icon: 'tabler:message-circle',
      },
    ],
    faqs: [
      {
        title: 'Is this only for businesses?',
        description:
          'No. Monthly managed Wi-Fi can be useful for both homes and businesses where connectivity is mission-critical.',
      },
      {
        title: 'Can I start after an installation?',
        description:
          'Yes. Many clients start managed support after setup to keep performance consistent.',
      },
      {
        title: 'Do you include upgrade advice?',
        description:
          'Yes. We recommend upgrades only when they are genuinely needed for performance or growth.',
      },
    ],
  },
  {
    slug: 'guest-wifi-packages-dublin',
    title: 'Guest Wi-Fi Packages (Staff and Guest Separation)',
    icon: 'tabler:shield-check',
    cardDescription:
      'Guest network setup with proper separation from staff systems for safer access and smoother visitor experience.',
    metadataTitle: 'Guest Wi-Fi Setup Packages in Dublin | Unified Networks',
    metadataDescription:
      'Guest Wi-Fi packages for businesses and venues in Dublin and surrounding areas with secure staff and guest network separation.',
    heroTitle: 'Guest Wi-Fi Setup for Businesses and Venues',
    heroSubtitle:
      'Give visitors reliable internet access while protecting internal business systems with proper network separation.',
    introTitle: 'Safer Guest Access Without Compromising Operations',
    introBody:
      'A shared single network increases risk and can create performance issues. We set up separate guest and staff access so visitors get internet while business systems remain protected.',
    outcomes: [
      'Better security posture for business devices and data',
      'Improved visitor and customer connectivity experience',
      'Reduced congestion impact on internal operations',
    ],
    features: [
      {
        title: 'Staff and Guest Segmentation',
        description: 'We separate traffic so guest use does not expose internal systems.',
        icon: 'tabler:shield-lock',
      },
      {
        title: 'Guest Access Controls',
        description: 'We configure practical rules for safer and more predictable usage.',
        icon: 'tabler:key',
      },
      {
        title: 'Venue-Ready Coverage Planning',
        description: 'Coverage and capacity tuned for reception areas, waiting rooms, and events.',
        icon: 'tabler:users-group',
      },
      {
        title: 'Performance Balancing',
        description: 'We prevent guest traffic from crushing business-critical use.',
        icon: 'tabler:gauge',
      },
    ],
    faqs: [
      {
        title: 'Can guest Wi-Fi slow down our staff network?',
        description:
          'It can, unless configured correctly. We separate and tune networks to keep operations stable.',
      },
      {
        title: 'Do you support hospitality and event venues?',
        description:
          'Yes. We provide guest Wi-Fi setups for many business types, including higher-footfall locations.',
      },
      {
        title: 'Can this be added to an existing network?',
        description:
          'Usually yes. We assess current infrastructure and implement the right separation model.',
      },
    ],
  },
  {
    slug: 'starlink-installation-and-integration-dublin',
    title: 'Starlink Installation and Network Integration',
    icon: 'tabler:satellite',
    cardDescription:
      'Starlink installation, mounting, alignment, and full integration into your internal Wi-Fi network.',
    metadataTitle: 'Starlink Installation in Dublin and Surrounding Areas | Unified Networks',
    metadataDescription:
      'Professional Starlink installation and network integration for homes and businesses in Dublin and surrounding areas, including clean mounting and setup.',
    heroTitle: 'Starlink Installation and Integration Done Properly',
    heroSubtitle:
      'We handle mounting, cable routing, alignment, and internal Wi-Fi integration so Starlink performs across your full property.',
    introTitle: 'From Starlink Box to Fully Usable Network',
    introBody:
      'Many Starlink issues are installation and in-home distribution problems, not satellite problems. We install it safely and make sure performance reaches the rooms where it is needed.',
    outcomes: [
      'Cleaner permanent installation with safer cable routing',
      'Better day-to-day performance throughout the property',
      'Reduced setup mistakes that cause avoidable instability',
    ],
    features: [
      {
        title: 'Mounting and Placement',
        description: 'We install in a practical location with clear sky view and cable safety in mind.',
        icon: 'tabler:mountain',
      },
      {
        title: 'Cable Entry and Internal Routing',
        description: 'Proper cable entry and tidy routing for long-term reliability.',
        icon: 'tabler:plug-connected',
      },
      {
        title: 'Router and Wi-Fi Integration',
        description: 'We connect Starlink into your internal network so coverage is usable indoors.',
        icon: 'tabler:wifi',
      },
      {
        title: 'Testing and Handover',
        description: 'We validate setup and explain key operating points.',
        icon: 'tabler:test-pipe',
      },
    ],
    faqs: [
      {
        title: 'Do you install only Starlink or full Wi-Fi too?',
        description:
          'Both. We can install Starlink only, or build out full property Wi-Fi coverage around it.',
      },
      {
        title: 'Can Starlink be integrated with existing network gear?',
        description:
          'Yes. We regularly integrate Starlink into existing router, switch, and AP setups.',
      },
      {
        title: 'Do you support homes and business sites?',
        description:
          'Yes. We provide Starlink installs for domestic and commercial environments.',
      },
    ],
  },
  {
    slug: 'event-wifi-setup-and-rental-dublin',
    title: 'Event Wi-Fi Setup, Temporary Broadband, and Rental',
    icon: 'tabler:calendar-event',
    cardDescription:
      'Managed internet and Wi-Fi for festivals, conferences, and high-attendance events with rental or buy options.',
    metadataTitle: 'Event Wi-Fi Setup and Rental in Dublin | Unified Networks',
    metadataDescription:
      'Temporary broadband, managed Wi-Fi deployment, and rental solutions for events in Dublin and surrounding areas.',
    heroTitle: 'Event Wi-Fi and Temporary Broadband for High-Demand Use',
    heroSubtitle:
      'Connectivity planning and deployment for festivals, conferences, venues, and large temporary operations.',
    introTitle: 'Reliable Connectivity for Busy Event Environments',
    introBody:
      'Events need more than basic Wi-Fi. We design coverage, capacity, and resilience for crowded environments where payment systems, operations, and attendees all depend on connectivity.',
    outcomes: [
      'More stable internet under heavy attendee load',
      'Practical setup for vendors, staff, production, and guests',
      'Flexible rental or permanent hardware approach',
    ],
    features: [
      {
        title: 'Event Network Planning',
        description: 'We plan coverage and capacity based on attendee density and operations.',
        icon: 'tabler:map-pins',
      },
      {
        title: 'Temporary Broadband and Wi-Fi Deployment',
        description: 'Managed install for short-term events with setup and teardown options.',
        icon: 'tabler:plug',
      },
      {
        title: 'Rental or Buy Model',
        description: 'Rent for one-off events or purchase hardware for permanent use.',
        icon: 'tabler:repeat',
      },
      {
        title: 'Operational Support',
        description: 'On-site and pre-event support available for critical workflows.',
        icon: 'tabler:lifebuoy',
      },
    ],
    faqs: [
      {
        title: 'Can you handle large attendance events?',
        description:
          'Yes. We design for high-demand environments and operational reliability.',
      },
      {
        title: 'Can we rent equipment just for the event?',
        description:
          'Yes. Rental is available for temporary events, with buy options for permanent setups.',
      },
      {
        title: 'Do you support business-critical event systems?',
        description:
          'Yes. We can prioritize operational traffic for ticketing, payments, staff, and production.',
      },
    ],
  },
  {
    slug: 'internet-failover-and-backup-connectivity-dublin',
    title: 'Internet Failover and Backup Connectivity',
    icon: 'tabler:shield-check',
    cardDescription:
      'Automatic failover between primary and backup links to reduce downtime when broadband fails.',
    metadataTitle: 'Internet Failover Solutions in Dublin | Unified Networks',
    metadataDescription:
      'Failover internet setup for businesses and high-dependency sites in Dublin and surrounding areas with automatic backup switching.',
    heroTitle: 'Failover Internet That Keeps You Online',
    heroSubtitle:
      'When the main line drops, traffic switches to backup connectivity so work can continue.',
    introTitle: 'Protect Operations From Broadband Outages',
    introBody:
      'If uptime matters, one internet line is a risk. We set up failover between primary and backup links so downtime impact is reduced when an outage happens.',
    outcomes: [
      'Reduced outage impact on business operations',
      'Automatic switching between primary and backup links',
      'More resilient setup for payments, calls, and cloud tools',
    ],
    features: [
      {
        title: 'Primary and Backup Link Design',
        description: 'We choose and configure practical link combinations for resilience.',
        icon: 'tabler:hierarchy-2',
      },
      {
        title: 'Automatic Failover Configuration',
        description: 'Traffic shifts to backup when the main path fails.',
        icon: 'tabler:switch-2',
      },
      {
        title: 'Policy and Priority Tuning',
        description: 'Critical services can be prioritized during degraded conditions.',
        icon: 'tabler:list-details',
      },
      {
        title: 'Failover Testing',
        description: 'We test failover behavior to confirm expected operation.',
        icon: 'tabler:checkup-list',
      },
    ],
    faqs: [
      {
        title: 'Is failover only for large companies?',
        description:
          'No. Any business or site that loses revenue during outages can benefit from failover.',
      },
      {
        title: 'What can be used as backup internet?',
        description:
          'Common options include fibre plus 4G/5G, dual fixed lines, or satellite plus fixed broadband.',
      },
      {
        title: 'Will sessions drop during failover?',
        description:
          'Some sessions may briefly reset depending on service behavior, but the goal is to keep operations running with minimal interruption.',
      },
    ],
  },
  {
    slug: 'point-to-point-wireless-links-dublin',
    title: 'Point-to-Point Links for Outbuildings and Remote Offices',
    icon: 'tabler:antenna-bars-5',
    cardDescription:
      'Stable point-to-point wireless links for sheds, outbuildings, yards, and remote office spaces.',
    metadataTitle: 'Point-to-Point Wireless Links in Dublin | Unified Networks',
    metadataDescription:
      'Point-to-point wireless links for connecting remote buildings and outbuildings in Dublin and surrounding areas when cabling is not practical.',
    heroTitle: 'Point-to-Point Wireless Links for Hard-to-Reach Buildings',
    heroSubtitle:
      'Connect sheds, workshops, remote offices, and outbuildings without long trenching projects.',
    introTitle: 'Extend Connectivity Beyond the Main Building',
    introBody:
      'When cable runs are costly or impractical, point-to-point links can deliver reliable connectivity between buildings. We design and align links for stable operation.',
    outcomes: [
      'Usable connectivity in remote structures',
      'Lower disruption than long-distance trenching in many cases',
      'Reliable link performance for office, camera, and operational use',
    ],
    features: [
      {
        title: 'Line-of-Sight Assessment',
        description: 'We validate viability based on path, obstructions, and mounting options.',
        icon: 'tabler:binoculars',
      },
      {
        title: 'Link Design and Hardware Setup',
        description: 'We choose suitable equipment and configure link stability.',
        icon: 'tabler:antenna',
      },
      {
        title: 'Alignment and Throughput Tuning',
        description: 'Fine alignment improves performance and reliability.',
        icon: 'tabler:target-arrow',
      },
      {
        title: 'Integration With Internal Network',
        description: 'The remote side is integrated cleanly into your existing network.',
        icon: 'tabler:topology-ring-3',
      },
    ],
    faqs: [
      {
        title: 'Can this replace digging a cable trench?',
        description:
          'In many scenarios, yes. It depends on distance, line of sight, and throughput requirements.',
      },
      {
        title: 'Will weather affect the link?',
        description:
          'Properly designed links are generally stable, but extreme conditions can impact performance. We design with resilience in mind.',
      },
      {
        title: 'Can remote buildings have full Wi-Fi too?',
        description:
          'Yes. We can combine point-to-point links with local Wi-Fi setup in the remote building.',
      },
    ],
  },
  {
    slug: 'internet-and-wifi-troubleshooting-dublin',
    title: 'Internet and Wi-Fi Troubleshooting',
    icon: 'tabler:activity',
    cardDescription:
      'Targeted troubleshooting for unstable internet, poor Wi-Fi speed, call drops, and device connectivity issues.',
    metadataTitle: 'Internet and Wi-Fi Troubleshooting in Dublin | Unified Networks',
    metadataDescription:
      'Professional internet and Wi-Fi troubleshooting for homes and businesses in Dublin and surrounding areas, with clear diagnosis and practical fixes.',
    heroTitle: 'Internet and Wi-Fi Troubleshooting That Finds the Real Cause',
    heroSubtitle:
      'We diagnose bottlenecks, interference, coverage issues, and configuration problems, then implement clear fixes.',
    introTitle: 'Fix the Root Cause, Not Just the Symptoms',
    introBody:
      'Slow or unstable network performance can come from ISP issues, bad in-home Wi-Fi layout, device limits, or misconfiguration. We isolate the bottleneck and fix what is actually wrong.',
    outcomes: [
      'Clear diagnosis of where performance is breaking down',
      'Practical fixes with measurable improvement',
      'Less downtime and frustration for home or business users',
    ],
    features: [
      {
        title: 'Broadband vs Wi-Fi Isolation',
        description: 'We separate ISP problems from internal Wi-Fi issues.',
        icon: 'tabler:git-compare',
      },
      {
        title: 'Interference and Capacity Analysis',
        description: 'We check channel congestion, overlap, and device load impacts.',
        icon: 'tabler:chart-donut',
      },
      {
        title: 'Configuration Correction',
        description: 'We fix routing, SSID, roaming, and hardware configuration issues.',
        icon: 'tabler:tool',
      },
      {
        title: 'Actionable Follow-Up Plan',
        description: 'You get clear next steps and upgrade priorities where needed.',
        icon: 'tabler:list-numbers',
      },
    ],
    faqs: [
      {
        title: 'Can you test if the ISP line is the issue?',
        description:
          'Yes. We check base connectivity and local Wi-Fi behavior separately so you know exactly where the fault is.',
      },
      {
        title: 'Do you help with call drops and unstable meetings?',
        description:
          'Yes. We troubleshoot roaming, latency, and local coverage issues that commonly impact calls.',
      },
      {
        title: 'Will I get a clear recommendation after troubleshooting?',
        description:
          'Yes. We provide practical advice and prioritized actions, not generic suggestions.',
      },
    ],
  },
];

export const servicesBySlug = new Map(services.map((service) => [service.slug, service]));

const serviceRelatedPostSlugs: Record<string, string[]> = {
  'wifi-installation-and-setup-dublin': [
    'how-to-tell-slow-internet-vs-weak-wifi',
    'best-ways-to-boost-wifi-signal-at-home',
    'business-wifi-installation-mistakes-ireland',
  ],
  'wifi-dead-zone-fixes-dublin': [
    'best-ways-to-boost-wifi-signal-at-home',
    'how-to-tell-slow-internet-vs-weak-wifi',
    '2-4ghz-vs-5ghz-wifi-which-one-to-use',
  ],
  'wifi-site-survey-and-heatmap-dublin': [
    'wifi-site-survey-heatmap-guide-ireland',
    'business-wifi-installation-mistakes-ireland',
    'how-to-tell-slow-internet-vs-weak-wifi',
  ],
  'structured-cabling-cat6-cat6a-fibre-dublin': [
    'cat6-vs-cat6a-ireland',
    'new-build-homes-wifi-blackspots-cat6-planning',
    'point-to-point-wireless-links-ireland',
  ],
  'managed-wifi-plan-monthly-dublin': [
    'managed-wifi-monthly-plan-ireland',
    'business-wifi-installation-mistakes-ireland',
    'guest-wifi-for-business-ireland',
  ],
  'guest-wifi-packages-dublin': [
    'guest-wifi-for-business-ireland',
    'event-wifi-guide-ireland',
    'managed-wifi-monthly-plan-ireland',
  ],
  'starlink-installation-and-integration-dublin': [
    'starlink-order-and-installation-guide-ireland',
    'how-starlink-changed-rural-internet-in-ireland',
    'choosing-right-broadband-in-ireland-urban-vs-rural',
  ],
  'event-wifi-setup-and-rental-dublin': [
    'event-wifi-guide-ireland',
    'guest-wifi-for-business-ireland',
    'internet-failover-guide-ireland',
  ],
  'internet-failover-and-backup-connectivity-dublin': [
    'internet-failover-guide-ireland',
    'business-wifi-installation-mistakes-ireland',
    'choosing-right-broadband-in-ireland-urban-vs-rural',
  ],
  'point-to-point-wireless-links-dublin': [
    'point-to-point-wireless-links-ireland',
    'event-wifi-guide-ireland',
    'cat6-vs-cat6a-ireland',
  ],
  'internet-and-wifi-troubleshooting-dublin': [
    'how-to-tell-slow-internet-vs-weak-wifi',
    'best-ways-to-boost-wifi-signal-at-home',
    'business-wifi-installation-mistakes-ireland',
  ],
};

const postRelatedServiceSlugs: Record<string, string[]> = {
  'business-wifi-installation-mistakes-ireland': [
    'wifi-installation-and-setup-dublin',
    'internet-and-wifi-troubleshooting-dublin',
    'managed-wifi-plan-monthly-dublin',
  ],
  'internet-failover-guide-ireland': [
    'internet-failover-and-backup-connectivity-dublin',
    'managed-wifi-plan-monthly-dublin',
    'starlink-installation-and-integration-dublin',
  ],
  'new-build-homes-wifi-blackspots-cat6-planning': [
    'structured-cabling-cat6-cat6a-fibre-dublin',
    'wifi-installation-and-setup-dublin',
    'wifi-dead-zone-fixes-dublin',
  ],
  'starlink-order-and-installation-guide-ireland': [
    'starlink-installation-and-integration-dublin',
    'wifi-installation-and-setup-dublin',
    'internet-failover-and-backup-connectivity-dublin',
  ],
  'how-to-tell-slow-internet-vs-weak-wifi': [
    'internet-and-wifi-troubleshooting-dublin',
    'wifi-dead-zone-fixes-dublin',
    'wifi-installation-and-setup-dublin',
  ],
  'choosing-right-broadband-in-ireland-urban-vs-rural': [
    'internet-and-wifi-troubleshooting-dublin',
    'starlink-installation-and-integration-dublin',
    'internet-failover-and-backup-connectivity-dublin',
  ],
  'managed-wifi-monthly-plan-ireland': [
    'managed-wifi-plan-monthly-dublin',
    'guest-wifi-packages-dublin',
    'internet-and-wifi-troubleshooting-dublin',
  ],
  'guest-wifi-for-business-ireland': [
    'guest-wifi-packages-dublin',
    'managed-wifi-plan-monthly-dublin',
    'event-wifi-setup-and-rental-dublin',
  ],
  'wifi-site-survey-heatmap-guide-ireland': [
    'wifi-site-survey-and-heatmap-dublin',
    'wifi-installation-and-setup-dublin',
    'internet-and-wifi-troubleshooting-dublin',
  ],
  'event-wifi-guide-ireland': [
    'event-wifi-setup-and-rental-dublin',
    'guest-wifi-packages-dublin',
    'internet-failover-and-backup-connectivity-dublin',
  ],
  'cat6-vs-cat6a-ireland': [
    'structured-cabling-cat6-cat6a-fibre-dublin',
    'wifi-installation-and-setup-dublin',
    'point-to-point-wireless-links-dublin',
  ],
  'point-to-point-wireless-links-ireland': [
    'point-to-point-wireless-links-dublin',
    'structured-cabling-cat6-cat6a-fibre-dublin',
    'wifi-installation-and-setup-dublin',
  ],
  'best-ways-to-boost-wifi-signal-at-home': [
    'wifi-dead-zone-fixes-dublin',
    'wifi-installation-and-setup-dublin',
    'internet-and-wifi-troubleshooting-dublin',
  ],
  '2-4ghz-vs-5ghz-wifi-which-one-to-use': [
    'wifi-dead-zone-fixes-dublin',
    'wifi-installation-and-setup-dublin',
    'internet-and-wifi-troubleshooting-dublin',
  ],
  'how-starlink-changed-rural-internet-in-ireland': [
    'starlink-installation-and-integration-dublin',
    'internet-failover-and-backup-connectivity-dublin',
    'wifi-installation-and-setup-dublin',
  ],
  'use-wifi-calling-to-fix-missed-mobile-calls': [
    'wifi-dead-zone-fixes-dublin',
    'internet-and-wifi-troubleshooting-dublin',
    'wifi-installation-and-setup-dublin',
  ],
};

export const getRelatedPostSlugsForService = (serviceSlug: string): string[] =>
  serviceRelatedPostSlugs[serviceSlug] || [];

export const getRelatedServicesForPostSlug = (postSlug: string): ServicePageData[] => {
  const mappedServiceSlugs = postRelatedServiceSlugs[postSlug] || [
    'internet-and-wifi-troubleshooting-dublin',
    'wifi-installation-and-setup-dublin',
  ];
  return mappedServiceSlugs
    .map((slug) => servicesBySlug.get(slug))
    .filter((service): service is ServicePageData => Boolean(service));
};
