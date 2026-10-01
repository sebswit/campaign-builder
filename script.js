/**
 * ============================================================================
 * CAMPAIGN BUILDER — JAVASCRIPT CONTROLLER & RECOMMENDATION ENGINE
 * ============================================================================
 * Flow: Business -> Goal -> Involvement -> Campaign Strategy -> Choose Package
 * Fully vanilla JS, lightweight, responsive, accessible.
 */

// ============================================================================
// 1. EDITABLE CONFIGURATION: SELECTION OPTIONS
// ============================================================================

const CONFIG = {
  // Step 1: Business Types
  businessTypes: [
    {
      id: 'restaurant-cafe',
      title: 'Restaurant / Café',
      description: 'Dining, takeaway, coffee shops, and food venues seeking hungry local patrons.',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`
    },
    {
      id: 'beauty-barber',
      title: 'Beauty / Barber',
      description: 'Salons, barbers, aesthetics, wellness, and personal care specialists.',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>`
    },
    {
      id: 'trades-services',
      title: 'Trades & Local Services',
      description: 'Plumbing, electrical, builders, roofing, cleaning, and home maintenance.',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`
    },
    {
      id: 'estate-agent',
      title: 'Estate Agent / Property',
      description: 'Residential sales, lettings, commercial property, and developments.',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`
    },
    {
      id: 'automotive-detailing',
      title: 'Automotive / Detailing',
      description: 'Dealerships, vehicle repair, car detailing, wrapping, and MOT centres.',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`
    },
    {
      id: 'local-retail',
      title: 'Local Retail',
      description: 'Independent shops, boutiques, florists, and brick-and-mortar storefronts.',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`
    },
    {
      id: 'other',
      title: 'Other',
      description: 'Specialist services, fitness studios, B2B, consultancy, and new ventures.',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`
    }
  ],

  // Step 2: Campaign Goals
  goals: [
    {
      id: 'local-customers',
      title: 'Get more local customers',
      description: 'Drive high-intent local footfall and inquiries from your immediate catchment area.',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`
    },
    {
      id: 'increase-bookings',
      title: 'Increase bookings',
      description: 'Fill up your appointment book, reservation slots, or direct diary consults.',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`
    },
    {
      id: 'promote-service',
      title: 'Promote a new service',
      description: 'Introduce an expanded offering or premium service package to existing & new clients.',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`
    },
    {
      id: 'promote-product',
      title: 'Promote a product',
      description: 'Highlight hero items, seasonal inventory, or new product collections.',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>`
    },
    {
      id: 'brand-awareness',
      title: 'Build brand awareness',
      description: 'Elevate your local reputation, establish authority, and stay top of mind.',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`
    },
    {
      id: 'launch-business',
      title: 'Launch a new business',
      description: 'Make a memorable first impression with high-energy launch announcements.',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>`
    },
    {
      id: 'promote-property',
      title: 'Promote a property',
      description: 'Showcase high-value real estate listings, commercial premises, or new developments.',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="22.01"></line><line x1="15" y1="22" x2="15" y2="22.01"></line><line x1="12" y1="18" x2="12" y2="18.01"></line><line x1="12" y1="14" x2="12" y2="14.01"></line><line x1="12" y1="10" x2="12" y2="10.01"></line><line x1="12" y1="6" x2="12" y2="6.01"></line><line x1="16" y1="6" x2="16" y2="6.01"></line><line x1="8" y1="6" x2="8" y2="6.01"></line></svg>`
    }
  ],

  // Step 3: Level of Involvement (3 Large Prominent Cards)
  involvementTiers: [
    {
      id: 'self-managed',
      badge: 'Content Only',
      title: 'I’ll take it from here',
      subtitle: 'Content creation only',
      description: 'We create the content. You handle publishing and promotion yourself.',
      actionPrompt: 'Select Content Only'
    },
    {
      id: 'co-managed',
      badge: 'Hybrid Support',
      title: 'Help me manage it',
      subtitle: 'Content + management',
      description: 'We create your content and help manage scheduling, captions and your social media presence.',
      actionPrompt: 'Select Content + Management'
    },
    {
      id: 'fully-managed',
      badge: 'Full Turnkey Service',
      title: 'Do it for me',
      subtitle: 'Full campaign management',
      description: 'We plan, create and manage the full campaign, including content, advertising and distribution where appropriate.',
      actionPrompt: 'Select Full Campaign Management'
    }
  ]
};

// ============================================================================
// CAMPAIGN PRICING CONFIGURATION
// All prices in GBP (£). Easily adjustable for future agency rate adjustments.
// ============================================================================
const CAMPAIGN_PRICING = {
  'self-managed': {
    essential: 350,
    growth: 650,
    impact: 1100,
    complete: 1650
  },
  'co-managed': {
    essential: 550,
    growth: 950,
    impact: 1550,
    complete: 2250
  },
  'fully-managed': {
    essential: 750,
    growth: 1350,
    impact: 2150,
    complete: 3250
  }
};

// ============================================================================
// 2. CAMPAIGN STRATEGY & RATIONALE ENGINE (Step 4)
// ============================================================================

function generateRecommendationRationale(businessId, goalId) {
  const rationaleMap = {
    'restaurant-cafe': {
      'local-customers': 'Short-form video helps showcase your business visually, while local advertising and leaflet distribution can help reach potential customers in your area.',
      'increase-bookings': 'Highlighting signature dishes alongside a clear booking link converts casual browsers into confirmed table reservations without unnecessary friction.',
      'default': 'Hospitality thrives on authentic visual presentation. Regular photographic and video updates keep your venue front-of-mind when locals decide where to eat.'
    },
    'beauty-barber': {
      'increase-bookings': 'Before-and-after results and styling reels build rapid credibility. Pairing strong visual proof with local booking ads consistently fills empty diary slots.',
      'brand-awareness': 'Consistency in styling reels and client testimonials establishes your salon or barbershop as the premium destination in your area.',
      'default': 'Clients choose personal grooming based on visual trust. Showcasing actual client work gives prospective customers the confidence to book.'
    },
    'trades-services': {
      'local-customers': 'Homeowners and property managers require proof of craftsmanship and reliability. Combining real job-site visuals with targeted local search and social presence captures customers precisely when they need work done.',
      'promote-service': 'Educating your catchment area on specialized work (such as boiler upgrades or rewiring) positions your business as the verified local authority.',
      'default': 'Trust and proximity are the deciding factors for trades. Direct local visibility ensures your business is the first call for emergency or scheduled jobs.'
    },
    'estate-agent': {
      'promote-property': 'Premium property marketing relies heavily on immersive media. Combining crisp photography with video tours and aerial views attracts serious buyers and motivates sellers to instruct you.',
      'default': 'Professional property presentation not only attracts active buyers, but also demonstrates to prospective vendors that you market listings to the highest standard.'
    },
    'automotive-detailing': {
      'local-customers': 'Automotive enthusiasts and vehicle owners respond strongly to process videos, hydrophobic coating tests, and finish shots that demonstrate meticulous attention to detail.',
      'default': 'High-definition transformation reels clearly demonstrate the value of specialist vehicle care, helping convert car enthusiasts into repeat clients.'
    },
    'local-retail': {
      'local-customers': 'Independent shops benefit most from showcasing new arrivals and unique in-store experiences, encouraging nearby residents to choose local independent retail over online giants.',
      'promote-product': 'Spotlighting hero products through clean imagery and short feature reels drives impulse store visits and direct sales.',
      'default': 'Regular product spotlights and behind-the-scenes stories help independent retailers build loyal local community followings.'
    }
  };

  const businessRationale = rationaleMap[businessId];
  if (businessRationale) {
    if (businessRationale[goalId]) {
      return businessRationale[goalId];
    }
    if (businessRationale['default']) {
      return businessRationale['default'];
    }
  }

  return 'A balanced combination of professional creative assets and targeted local distribution provides the clearest path to reaching your target audience efficiently without wasted marketing spend.';
}

/**
 * Returns high-level core strategy focus for Step 4
 */
function getStrategyFocus(businessId, goalId, involvementId) {
  const items = [];

  if (involvementId === 'self-managed') {
    items.push({ name: 'High-Impact Content Assets', desc: 'Crafting premium video and photography tailored for easy self-publishing.' });
    items.push({ name: 'Ready-to-Post Creative Templates', desc: 'Brand-styled graphic assets ready for your immediate social updates.' });
    items.push({ name: 'Publishing Guidelines', desc: 'Practical tips on audio, hashtags, and optimal posting times.' });
  } else if (involvementId === 'co-managed') {
    items.push({ name: 'Collaborative Content Production', desc: 'Scheduled shoots providing a regular flow of fresh reels and images.' });
    items.push({ name: 'Captions & Calendar Management', desc: 'Professional copywriting and organized weekly schedule planning.' });
    items.push({ name: 'Profile & Feed Optimisation', desc: 'Consistent social presence maintained alongside your internal team.' });
  } else {
    items.push({ name: 'Turnkey Creative Production', desc: 'Full-service photo, video, and promotional asset creation.' });
    items.push({ name: 'Targeted Local Paid Distribution', desc: 'Geo-fenced digital ads or door-drop distribution capturing local intent.' });
    items.push({ name: 'Active Campaign Management & Analytics', desc: 'End-to-end execution with ongoing performance optimization.' });
  }

  // Goal adaptation
  if (goalId === 'increase-bookings') {
    items.push({ name: 'Direct Booking Funnel Focus', desc: 'Frictionless links and calls-to-action guiding prospects directly into reservations.' });
  } else if (goalId === 'promote-property' || businessId === 'estate-agent') {
    items.push({ name: 'Immersive Property Media', desc: 'Cinematic interior video walkthroughs and aerial exterior overviews.' });
  }

  return items;
}

// ============================================================================
// 3. FOUR-TIER PROGRESSIVE PACKAGE BUILDER (Step 5)
// ============================================================================

/**
 * Builds the 4 progressive packages (ESSENTIAL, GROWTH, IMPACT, COMPLETE)
 * strictly respecting the selected level of involvement and business context.
 */
function buildFourPackages(businessId, goalId, involvementId) {
  const prices = CAMPAIGN_PRICING[involvementId] || CAMPAIGN_PRICING['co-managed'];

  // Base assets customized by business/goal
  const isProperty = (businessId === 'estate-agent' || goalId === 'promote-property');
  const isFood = (businessId === 'restaurant-cafe');
  const isServiceOrTrade = (businessId === 'trades-services');

  let packages = [];

  if (involvementId === 'self-managed') {
    // ----------------------------------------------------
    // INVOLVEMENT: I'll take it from here (Content Only)
    // ----------------------------------------------------
    packages = [
      {
        id: 'essential',
        name: 'ESSENTIAL',
        subtitle: 'Core campaign essentials',
        price: prices.essential,
        services: [
          { text: isProperty ? 'Property photo shoot (10 HDR images)' : '1 short-form video (Reel / TikTok)', isNew: false },
          { text: isProperty ? '1 cinematic video walkthrough' : '8 social media photos', isNew: false },
          { text: '4 ready-to-post graphics', isNew: false },
          { text: 'Basic publishing & audio guide', isNew: false }
        ]
      },
      {
        id: 'growth',
        name: 'GROWTH',
        subtitle: 'More content and greater reach',
        price: prices.growth,
        services: [
          { text: isProperty ? 'Expanded property shoot (16 HDR images)' : '2 short-form videos', isNew: true },
          { text: isProperty ? 'Video walkthrough + drone exterior footage' : '14 social media photos', isNew: true },
          { text: '8 ready-to-post graphics & story templates', isNew: true },
          { text: 'Content publishing calendar & hashtag strategy', isNew: true },
          { text: 'High-resolution print-ready asset export', isNew: true }
        ]
      },
      {
        id: 'impact',
        name: 'IMPACT',
        subtitle: 'Multi-channel campaign',
        price: prices.impact,
        services: [
          { text: isProperty ? '360 virtual tour + full video suite' : '3 short-form videos', isNew: true },
          { text: '20 high-resolution photos', isNew: true },
          { text: '12 social graphic templates', isNew: true },
          { text: isFood || isServiceOrTrade ? 'Print-ready door-drop leaflet design' : 'Multi-format marketing creative suite', isNew: true },
          { text: 'Self-serve Meta Ad creative pack & copy variants', isNew: true }
        ]
      },
      {
        id: 'complete',
        name: 'COMPLETE',
        subtitle: 'Full campaign management',
        price: prices.complete,
        services: [
          { text: isProperty ? 'Full architectural photography, drone & 360 tour' : '5 short-form videos', isNew: true },
          { text: '30 professional content photos', isNew: true },
          { text: '16 branded graphic assets & story sets', isNew: true },
          { text: 'Quarterly content asset library with cloud delivery', isNew: true },
          { text: 'Multi-channel DIY campaign playbook & ad guidelines', isNew: true }
        ]
      }
    ];
  } else if (involvementId === 'co-managed') {
    // ----------------------------------------------------
    // INVOLVEMENT: Help me manage it (Content + Management)
    // ----------------------------------------------------
    packages = [
      {
        id: 'essential',
        name: 'ESSENTIAL',
        subtitle: 'Core campaign essentials',
        price: prices.essential,
        services: [
          { text: isProperty ? 'Property photography & walkthrough' : '1 short-form video', isNew: false },
          { text: '8 social media photos', isNew: false },
          { text: '4 ready-to-post graphics', isNew: false },
          { text: 'Full caption copywriting', isNew: false },
          { text: 'Content scheduling calendar', isNew: false }
        ]
      },
      {
        id: 'growth',
        name: 'GROWTH',
        subtitle: 'More content and greater reach',
        price: prices.growth,
        services: [
          { text: isProperty ? 'Video walkthrough + drone footage' : '2 short-form videos', isNew: true },
          { text: '12 social media photos', isNew: true },
          { text: '8 ready-to-post graphics', isNew: true },
          { text: 'Captions & strategic hashtag sets', isNew: false },
          { text: 'Social content scheduling (2 posts / week)', isNew: true },
          { text: 'Monthly performance summary', isNew: true }
        ]
      },
      {
        id: 'impact',
        name: 'IMPACT',
        subtitle: 'Multi-channel campaign',
        price: prices.impact,
        services: [
          { text: '3 short-form videos', isNew: true },
          { text: '18 social media photos', isNew: true },
          { text: '12 branded social graphics', isNew: true },
          { text: 'Active multi-platform scheduling (3 posts / week)', isNew: true },
          { text: isFood || isServiceOrTrade ? 'Print-ready leaflet design & print coordination' : 'Promotional flyer & banner designs', isNew: true },
          { text: 'Local social boosting setup & budget recommendation', isNew: true }
        ]
      },
      {
        id: 'complete',
        name: 'COMPLETE',
        subtitle: 'Full campaign management',
        price: prices.complete,
        services: [
          { text: '4 short-form videos', isNew: true },
          { text: '24 professional photos', isNew: true },
          { text: '16 branded graphics & carousel posts', isNew: true },
          { text: 'Comprehensive scheduling (4 posts / week)', isNew: true },
          { text: 'Inquiry response guidance & community monitoring', isNew: true },
          { text: 'Bi-weekly campaign optimization & analytics review', isNew: true }
        ]
      }
    ];
  } else {
    // ----------------------------------------------------
    // INVOLVEMENT: Do it for me (Full Campaign Management)
    // ----------------------------------------------------
    packages = [
      {
        id: 'essential',
        name: 'ESSENTIAL',
        subtitle: 'Core campaign essentials',
        price: prices.essential,
        services: [
          { text: '1 short-form video', isNew: false },
          { text: '8 social photos', isNew: false },
          { text: '4 branded graphics', isNew: false },
          { text: 'Meta Ads campaign setup', isNew: false },
          { text: 'Monthly performance report', isNew: false }
        ]
      },
      {
        id: 'growth',
        name: 'GROWTH',
        subtitle: 'More content and greater reach',
        price: prices.growth,
        services: [
          { text: '2 short-form videos', isNew: true },
          { text: '12 social media photos', isNew: true },
          { text: '8 ready-to-post graphics', isNew: true },
          { text: 'Meta Ads setup & active management', isNew: true },
          { text: isFood || isServiceOrTrade ? 'Leaflet campaign design' : 'Local lead-gen ad creatives', isNew: true },
          { text: 'Monthly campaign reporting & lead tracking', isNew: true }
        ]
      },
      {
        id: 'impact',
        name: 'IMPACT',
        subtitle: 'Multi-channel campaign',
        price: prices.impact,
        services: [
          { text: '3 short-form videos', isNew: true },
          { text: '18 social media photos', isNew: true },
          { text: '12 social posts with end-to-end management', isNew: true },
          { text: 'Multi-channel paid ads (Meta + Google Local)', isNew: true },
          { text: isFood || isServiceOrTrade ? 'Leaflet design & door-drop campaign' : 'Direct mail / promotional collateral setup', isNew: true },
          { text: 'Dedicated campaign manager & bi-weekly reports', isNew: true }
        ]
      },
      {
        id: 'complete',
        name: 'COMPLETE',
        subtitle: 'Full campaign management',
        price: prices.complete,
        services: [
          { text: '5 high-impact short-form videos', isNew: true },
          { text: '25 commercial-grade photos', isNew: true },
          { text: 'Complete social media presence management', isNew: true },
          { text: 'Full paid advertising management across Meta & Google', isNew: true },
          { text: 'Targeted postal leaflet distribution management', isNew: true },
          { text: 'Lead capture funnel & conversion tracking setup', isNew: true },
          { text: 'Weekly strategy sync & proactive campaign direction', isNew: true }
        ]
      }
    ];
  }

  return packages;
}

// ============================================================================
// 4. APPLICATION STATE & CONTROLLER
// ============================================================================

const state = {
  currentStep: 1,
  totalSteps: 5,
  highestStepReached: 1,
  selections: {
    business: null,
    goal: null,
    involvement: null,
    package: null
  }
};

// DOM References
const DOM = {
  progressTrack: document.getElementById('progressTrack'),
  campaignForm: document.getElementById('campaignForm'),
  steps: [
    null,
    document.getElementById('step1'),
    document.getElementById('step2'),
    document.getElementById('step3'),
    document.getElementById('step4'),
    document.getElementById('step5')
  ],
  btnBack: document.getElementById('btnBack'),
  btnContinue: document.getElementById('btnContinue'),
  btnContinueText: document.getElementById('btnContinueText'),
  wizardNavFooter: document.getElementById('wizardNavFooter'),

  // Step 1 - 3 Option Groups
  businessOptionsGroup: document.getElementById('businessOptionsGroup'),
  goalOptionsGroup: document.getElementById('goalOptionsGroup'),
  involvementOptionsGroup: document.getElementById('involvementOptionsGroup'),

  // Step 4 Elements
  selectionSummary: document.getElementById('selectionSummary'),
  campaignStrategyBadge: document.getElementById('campaignStrategyBadge'),
  deliverablesContainer: document.getElementById('deliverablesContainer'),
  rationaleText: document.getElementById('rationaleText'),

  // Step 5 Elements
  packageCardsGrid: document.getElementById('packageCardsGrid'),
  finalCampaignSummary: document.getElementById('finalCampaignSummary'),
  summaryBusinessVal: document.getElementById('summaryBusinessVal'),
  summaryGoalVal: document.getElementById('summaryGoalVal'),
  summaryInvolvementVal: document.getElementById('summaryInvolvementVal'),
  summaryPackageVal: document.getElementById('summaryPackageVal'),
  summaryPackageBadge: document.getElementById('summaryPackageBadge'),
  summaryServicesList: document.getElementById('summaryServicesList'),
  summaryCostVal: document.getElementById('summaryCostVal'),
  btnRequestCampaign: document.getElementById('btnRequestCampaign'),
  btnChangePackage: document.getElementById('btnChangePackage'),
  btnModifyCampaign: document.getElementById('btnModifyCampaign'),

  // Modal Elements
  enquiryModal: document.getElementById('enquiryModal'),
  btnCloseModal: document.getElementById('btnCloseModal'),
  enquiryForm: document.getElementById('enquiryForm'),
  modalCampaignRecap: document.getElementById('modalCampaignRecap'),
  enquirySuccessState: document.getElementById('enquirySuccessState'),
  successDetailsBox: document.getElementById('successDetailsBox'),
  btnFinishSuccess: document.getElementById('btnFinishSuccess')
};

// ============================================================================
// 5. RENDERING FUNCTIONS
// ============================================================================

/**
 * Renders selection cards for steps 1 - 3
 */
function renderAllOptionCards() {
  // 1. Business Cards
  DOM.businessOptionsGroup.innerHTML = CONFIG.businessTypes.map(item => `
    <label class="selection-card" data-key="business" data-val="${item.id}" tabindex="0" role="radio" aria-checked="false">
      <input type="radio" name="businessType" value="${item.id}" class="card-radio-input" tabindex="-1">
      <div class="card-icon-box" aria-hidden="true">${item.icon}</div>
      <div class="card-content">
        <div class="card-title">${item.title}</div>
        <div class="card-description">${item.description}</div>
      </div>
      <div class="card-check-indicator" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
    </label>
  `).join('');

  // 2. Goal Cards
  DOM.goalOptionsGroup.innerHTML = CONFIG.goals.map(item => `
    <label class="selection-card" data-key="goal" data-val="${item.id}" tabindex="0" role="radio" aria-checked="false">
      <input type="radio" name="campaignGoal" value="${item.id}" class="card-radio-input" tabindex="-1">
      <div class="card-icon-box" aria-hidden="true">${item.icon}</div>
      <div class="card-content">
        <div class="card-title">${item.title}</div>
        <div class="card-description">${item.description}</div>
      </div>
      <div class="card-check-indicator" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
    </label>
  `).join('');

  // 3. Involvement Cards (Three large prominent cards)
  DOM.involvementOptionsGroup.innerHTML = CONFIG.involvementTiers.map(item => `
    <label class="involvement-card" data-key="involvement" data-val="${item.id}" tabindex="0" role="radio" aria-checked="false">
      <input type="radio" name="involvementLevel" value="${item.id}" class="card-radio-input" tabindex="-1">
      <span class="involvement-badge">${item.badge}</span>
      <div class="involvement-header">
        <h3 class="involvement-title">${item.title}</h3>
        <span class="involvement-subtitle">${item.subtitle}</span>
      </div>
      <p class="involvement-description">${item.description}</p>
      <div class="involvement-footer">
        <span class="involvement-select-prompt">${item.actionPrompt}</span>
        <div class="card-check-indicator" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
      </div>
    </label>
  `).join('');

  // Attach card event handlers
  attachCardEvents();
}

/**
 * Attach click, change & keyboard listeners to cards
 */
function attachCardEvents() {
  const allCards = document.querySelectorAll('.selection-card, .involvement-card');
  allCards.forEach(card => {
    const radio = card.querySelector('input[type="radio"]');

    card.addEventListener('click', () => {
      radio.checked = true;
      handleCardSelection(card.dataset.key, card.dataset.val, card);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        radio.checked = true;
        handleCardSelection(card.dataset.key, card.dataset.val, card);
      }
    });

    radio.addEventListener('change', () => {
      handleCardSelection(card.dataset.key, card.dataset.val, card);
    });
  });
}

/**
 * Handle card selection update in state
 */
function handleCardSelection(key, val, selectedCardElement) {
  state.selections[key] = val;

  const siblings = selectedCardElement.parentElement.querySelectorAll('.selection-card, .involvement-card');
  siblings.forEach(el => {
    el.classList.remove('selected');
    el.setAttribute('aria-checked', 'false');
  });
  selectedCardElement.classList.add('selected');
  selectedCardElement.setAttribute('aria-checked', 'true');

  updateNavControls();
}

/**
 * Navigate to a specific step
 */
function goToStep(stepNumber) {
  if (stepNumber < 1 || stepNumber > state.totalSteps) return;

  state.highestStepReached = Math.max(state.highestStepReached, stepNumber);

  for (let i = 1; i <= state.totalSteps; i++) {
    const stepEl = DOM.steps[i];
    if (stepEl) {
      if (i === stepNumber) {
        stepEl.hidden = false;
        stepEl.classList.add('active');
      } else {
        stepEl.hidden = true;
        stepEl.classList.remove('active');
      }
    }
  }

  state.currentStep = stepNumber;
  updateProgressBar();
  updateNavControls();

  // If navigating to step 4 (Campaign Strategy)
  if (stepNumber === 4) {
    renderCampaignStrategy();
    DOM.wizardNavFooter.style.display = 'flex';
    DOM.btnContinueText.textContent = 'Choose Package';
  } else if (stepNumber === 5) {
    // If navigating to step 5 (Choose Package)
    renderPackages();
    DOM.wizardNavFooter.style.display = 'none'; // Package cards have their own select buttons
  } else {
    DOM.wizardNavFooter.style.display = 'flex';
    DOM.btnContinueText.textContent = 'Continue';
  }

  DOM.campaignForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Update top progress indicators
 */
function updateProgressBar() {
  const stepsList = DOM.progressTrack.querySelectorAll('.progress-step');
  stepsList.forEach((li, idx) => {
    const stepIdx = idx + 1;
    const btn = li.querySelector('.step-btn');

    li.classList.remove('active', 'completed');
    btn.removeAttribute('aria-current');

    if (stepIdx === state.currentStep) {
      li.classList.add('active');
      btn.setAttribute('aria-current', 'step');
      btn.disabled = false;
    } else if (stepIdx < state.currentStep) {
      li.classList.add('completed');
      btn.disabled = false;
    } else if (stepIdx <= state.highestStepReached) {
      li.classList.add('completed');
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  });
}

/**
 * Update Back and Continue button states
 */
function updateNavControls() {
  DOM.btnBack.disabled = state.currentStep === 1;

  let hasSelection = false;
  if (state.currentStep === 1) hasSelection = Boolean(state.selections.business);
  else if (state.currentStep === 2) hasSelection = Boolean(state.selections.goal);
  else if (state.currentStep === 3) hasSelection = Boolean(state.selections.involvement);
  else if (state.currentStep === 4) hasSelection = true; // can proceed to choose package

  DOM.btnContinue.disabled = !hasSelection;
}

/**
 * Look up readable display titles
 */
function getSelectionLabels() {
  const bizObj = CONFIG.businessTypes.find(b => b.id === state.selections.business);
  const goalObj = CONFIG.goals.find(g => g.id === state.selections.goal);
  const invObj = CONFIG.involvementTiers.find(i => i.id === state.selections.involvement);

  return {
    business: bizObj ? bizObj.title : 'Not specified',
    goal: goalObj ? goalObj.title : 'Not specified',
    involvement: invObj ? `${invObj.title} (${invObj.subtitle})` : 'Not specified'
  };
}

/**
 * Render Step 4: Campaign Strategy & Rationale
 */
function renderCampaignStrategy() {
  const labels = getSelectionLabels();
  const { business, goal, involvement } = state.selections;

  // 1. Render Summary Bar
  DOM.selectionSummary.innerHTML = `
    <div class="summary-item">
      <span class="summary-label">Business type</span>
      <span class="summary-val" title="${labels.business}">${labels.business}</span>
    </div>
    <div class="summary-item">
      <span class="summary-label">Campaign goal</span>
      <span class="summary-val" title="${labels.goal}">${labels.goal}</span>
    </div>
    <div class="summary-item">
      <span class="summary-label">Involvement level</span>
      <span class="summary-val" title="${labels.involvement}">${labels.involvement}</span>
    </div>
  `;

  // 2. Deliverables Focus Grid
  const strategyFocus = getStrategyFocus(business, goal, involvement);
  DOM.deliverablesContainer.innerHTML = strategyFocus.map(item => `
    <div class="deliverable-card">
      <div class="deliverable-icon-wrap" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div>
        <div class="deliverable-title">${item.name}</div>
        <div class="deliverable-meta">${item.desc}</div>
      </div>
    </div>
  `).join('');

  // 3. Rationale
  DOM.rationaleText.textContent = generateRecommendationRationale(business, goal);
}

/**
 * Render Step 5: 4-Package Comparison Grid
 */
function renderPackages() {
  const { business, goal, involvement } = state.selections;
  const packages = buildFourPackages(business, goal, involvement);

  DOM.packageCardsGrid.innerHTML = packages.map(pkg => `
    <div class="package-card ${state.selections.package === pkg.id ? 'selected' : ''}" data-pkg-id="${pkg.id}">
      <div class="package-card-header">
        <h3 class="package-tier-name">${pkg.name}</h3>
        <p class="package-tier-subtitle">${pkg.subtitle}</p>
      </div>
      <ul class="package-services-list">
        ${pkg.services.map(s => `
          <li class="package-service-item ${s.isNew ? 'newly-added' : ''}">
            <span class="service-check" aria-hidden="true">✓</span>
            <span>${s.text} ${s.isNew ? '<span class="new-badge">NEW</span>' : ''}</span>
          </li>
        `).join('')}
      </ul>
      <div class="package-card-footer">
        <div class="package-price-wrap">
          <span class="package-price-label">Estimated Price</span>
          <span class="package-price-value">£${pkg.price.toLocaleString()}</span>
        </div>
        <button type="button" class="btn-select-package" data-select-pkg="${pkg.id}">
          SELECT ${pkg.name}
        </button>
      </div>
    </div>
  `).join('');

  // Attach button click listeners
  DOM.packageCardsGrid.querySelectorAll('.btn-select-package').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pkgId = btn.dataset.selectPkg;
      selectPackage(pkgId, packages);
    });
  });

  // Also allow clicking the package card directly
  DOM.packageCardsGrid.querySelectorAll('.package-card').forEach(card => {
    card.addEventListener('click', () => {
      const pkgId = card.dataset.pkgId;
      selectPackage(pkgId, packages);
    });
  });

  // If a package was already selected in state, re-render the summary
  if (state.selections.package) {
    const currentPkg = packages.find(p => p.id === state.selections.package);
    if (currentPkg) {
      displayFinalSummary(currentPkg);
    }
  } else {
    DOM.finalCampaignSummary.hidden = true;
  }
}

/**
 * Handle package selection & show Final Summary
 */
function selectPackage(pkgId, packages) {
  state.selections.package = pkgId;

  // Highlight card
  DOM.packageCardsGrid.querySelectorAll('.package-card').forEach(card => {
    card.classList.toggle('selected', card.dataset.pkgId === pkgId);
  });

  const selectedPkg = packages.find(p => p.id === pkgId);
  if (selectedPkg) {
    displayFinalSummary(selectedPkg);
  }
}

/**
 * Display the Final Summary section per user specifications
 */
function displayFinalSummary(pkg) {
  const labels = getSelectionLabels();

  DOM.summaryBusinessVal.textContent = labels.business;
  DOM.summaryGoalVal.textContent = labels.goal;
  DOM.summaryInvolvementVal.textContent = labels.involvement;
  DOM.summaryPackageVal.textContent = `${pkg.name} — ${pkg.subtitle}`;
  DOM.summaryPackageBadge.textContent = `${pkg.name} Package`;

  DOM.summaryServicesList.innerHTML = pkg.services.map(s => `
    <li>${s.text}</li>
  `).join('');

  DOM.summaryCostVal.textContent = `£${pkg.price.toLocaleString()}`;

  DOM.finalCampaignSummary.hidden = false;

  // Smooth scroll to summary
  DOM.finalCampaignSummary.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ============================================================================
// 6. ENQUIRY MODAL WORKFLOW
// ============================================================================

function openEnquiryModal() {
  const labels = getSelectionLabels();
  const { business, goal, involvement } = state.selections;
  const packages = buildFourPackages(business, goal, involvement);
  const selectedPkg = packages.find(p => p.id === state.selections.package) || packages[0];

  DOM.modalCampaignRecap.innerHTML = `
    <div class="recap-title">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>Selected Package: <strong>${selectedPkg.name} (Estimated £${selectedPkg.price.toLocaleString()})</strong></span>
    </div>
    <div class="recap-details">
      ${labels.business} &bull; ${labels.goal} &bull; ${labels.involvement}
    </div>
  `;

  DOM.enquiryForm.hidden = false;
  DOM.enquirySuccessState.hidden = true;
  DOM.enquiryForm.reset();

  DOM.enquiryModal.showModal();
}

function closeEnquiryModal() {
  DOM.enquiryModal.close();
}

function handleEnquirySubmit(e) {
  e.preventDefault();

  const labels = getSelectionLabels();
  const { business, goal, involvement } = state.selections;
  const packages = buildFourPackages(business, goal, involvement);
  const selectedPkg = packages.find(p => p.id === state.selections.package) || packages[0];

  const name = document.getElementById('clientName').value;
  const businessName = document.getElementById('businessName').value;
  const email = document.getElementById('clientEmail').value;
  const phone = document.getElementById('clientPhone').value;

  DOM.successDetailsBox.innerHTML = `
    <p><strong>Client:</strong> ${name}</p>
    <p><strong>Business:</strong> ${businessName}</p>
    <p><strong>Contact:</strong> ${email} | ${phone}</p>
    <p style="margin-top:0.4rem; padding-top:0.4rem; border-top:1px dashed var(--color-border);">
      <strong>Package:</strong> ${selectedPkg.name} (£${selectedPkg.price.toLocaleString()}) &bull; ${labels.business} &bull; ${labels.goal}
    </p>
  `;

  DOM.enquiryForm.hidden = true;
  DOM.enquirySuccessState.hidden = false;
}

// ============================================================================
// 7. EVENT LISTENERS & INITIALIZATION
// ============================================================================

function initApp() {
  renderAllOptionCards();

  // Navigation button listeners
  DOM.btnContinue.addEventListener('click', () => {
    if (state.currentStep < state.totalSteps) {
      goToStep(state.currentStep + 1);
    }
  });

  DOM.btnBack.addEventListener('click', () => {
    if (state.currentStep > 1) {
      goToStep(state.currentStep - 1);
    }
  });

  // Top progress bar direct clicks
  DOM.progressTrack.addEventListener('click', (e) => {
    const btn = e.target.closest('.step-btn');
    if (!btn || btn.disabled) return;
    const targetStep = parseInt(btn.dataset.target, 10);
    if (!isNaN(targetStep) && targetStep <= state.highestStepReached) {
      goToStep(targetStep);
    }
  });

  // Step 5 Actions
  DOM.btnRequestCampaign.addEventListener('click', openEnquiryModal);

  DOM.btnChangePackage.addEventListener('click', () => {
    DOM.packageCardsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  DOM.btnModifyCampaign.addEventListener('click', () => {
    goToStep(1);
  });

  // Modal controls
  DOM.btnCloseModal.addEventListener('click', closeEnquiryModal);
  DOM.btnFinishSuccess.addEventListener('click', closeEnquiryModal);
  DOM.enquiryForm.addEventListener('submit', handleEnquirySubmit);

  // Close modal on backdrop click
  DOM.enquiryModal.addEventListener('click', (e) => {
    const rect = DOM.enquiryModal.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      closeEnquiryModal();
    }
  });

  // Initialize view on Step 1
  goToStep(1);
}

document.addEventListener('DOMContentLoaded', initApp);
