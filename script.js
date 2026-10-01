/**
 * ============================================================================
 * CAMPAIGN BUILDER — CONFIGURATION & RECOMMENDATION ENGINE
 * ============================================================================
 * Clean, lightweight, dependency-free vanilla JavaScript for UK marketing agency.
 * All recommendation rules, service items, and card definitions are centralized
 * here for fast and easy future modification.
 */

/* ==========================================================================
   1. EDITABLE CONFIGURATION: CARD DEFINITIONS
   ========================================================================== */

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

  // Step 3: Level of Involvement (3 Large Cards)
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
  ],

  // Step 4: Budget Tiers
  budgetTiers: [
    {
      id: 'up-to-300',
      label: 'Up to £300',
      hint: 'Starter / Essential'
    },
    {
      id: '300-700',
      label: '£300–£700',
      hint: 'Growth / Core'
    },
    {
      id: '700-1500',
      label: '£700–£1,500',
      hint: 'Scale / Multi-channel'
    },
    {
      id: '1500-plus',
      label: '£1,500+',
      hint: 'Accelerated / Comprehensive'
    },
    {
      id: 'not-sure',
      label: 'Not sure yet',
      hint: 'Guidance required'
    }
  ]
};

/* ==========================================================================
   2. RECOMMENDATION RULES & LOGIC
   ========================================================================== */

/**
 * EXACT PRESET RULES
 * Define specific high-value combinations with their exact deliverable items.
 * Keys use the format: `${businessId}|${goalId}|${involvementId}|${budgetId}`
 * Wildcards (*) can be used if an exact match applies across budgets or goals.
 */
const PRESET_RULES = [
  // Example 1: Restaurant / Café + Get more local customers + I’ll take it from here + £300–£700
  {
    business: 'restaurant-cafe',
    goal: 'local-customers',
    involvement: 'self-managed',
    budget: '300-700',
    packageName: 'Local Foodie Content Essentials',
    deliverables: [
      { name: '1 short-form video', desc: 'Crafted for Instagram Reels & TikTok showcasing signature dish preparation.' },
      { name: '8 social media photos', desc: 'High-resolution food, interior ambience, and table photography.' },
      { name: '4 ready-to-post graphics', desc: 'Brand-styled menu specials, opening times, and event announcements.' }
    ]
  },

  // Example 2: Restaurant / Café + Get more local customers + Do it for me + £700–£1,500
  {
    business: 'restaurant-cafe',
    goal: 'local-customers',
    involvement: 'fully-managed',
    budget: '700-1500',
    packageName: 'Full Local Dining Footfall Engine',
    deliverables: [
      { name: '2 short-form videos', desc: 'Dynamic behind-the-scenes kitchen and chef feature videos.' },
      { name: '12 social media photos', desc: 'Complete seasonal menu photo shoot and beverage presentation.' },
      { name: '8 social posts', desc: 'Full caption copywriting, hashtag strategy, and scheduled publishing.' },
      { name: 'Meta Ads setup', desc: 'Geo-fenced Instagram and Facebook local dining advertising campaign.' },
      { name: 'Leaflet campaign', desc: 'Print-ready door drop design tailored for surrounding postal areas.' }
    ]
  },

  // Example 3: Estate Agent / Property + Promote a property + I’ll take it from here
  {
    business: 'estate-agent',
    goal: 'promote-property',
    involvement: 'self-managed',
    budget: '*', // applies across budgets
    packageName: 'Property Showcase Asset Pack',
    deliverables: [
      { name: 'Property photography', desc: 'Wide-angle interior and architectural photography with HDR mastering.' },
      { name: 'Video walkthrough', desc: 'Cinematic video tour highlighted for property portals and socials.' },
      { name: 'Drone exterior footage', desc: 'Elevated aerial photos and video illustrating boundary and locale.' },
      { name: '360 virtual tour', desc: 'Interactive digital walkthrough ready to embed on listing portals.' }
    ]
  },

  // Example 4: Beauty / Barber + Increase bookings + Do it for me
  {
    business: 'beauty-barber',
    goal: 'increase-bookings',
    involvement: 'fully-managed',
    budget: '*', // applies across budgets
    packageName: 'Client Booking Accelerator',
    deliverables: [
      { name: '2 short-form videos', desc: 'Transformation reels and client service showcases formatted for TikTok/IG.' },
      { name: '10 social photos', desc: 'Editorial finish before/after portfolio and treatment room photography.' },
      { name: 'Social content package', desc: 'Scheduled calendar, caption copywriting, and booking link integration.' },
      { name: 'Meta Ads campaign', desc: 'Targeted local ads driving direct traffic to your online booking software.' }
    ]
  },

  // Example 5: Trades & Local Services + Get more local customers + Do it for me
  {
    business: 'trades-services',
    goal: 'local-customers',
    involvement: 'fully-managed',
    budget: '*',
    packageName: 'Local Authority & Inquiries System',
    deliverables: [
      { name: 'Short promotional video', desc: 'Trust-building intro highlighting reliability, certifications, and work quality.' },
      { name: 'Service photography', desc: 'High-res photos of vans, team, equipment, and completed project sites.' },
      { name: 'Local social media content', desc: 'Weekly project progress posts and satisfied customer testimonials.' },
      { name: 'Leaflet campaign', desc: 'Neighbourhood card design for drops around active job sites.' },
      { name: 'Local paid ads', desc: 'Google search / Meta local service ads capturing high-intent quote inquiries.' }
    ]
  }
];

/**
 * DYNAMIC FALLBACK BUILDER
 * Generates an appropriate, sensible campaign package if no exact rule matches.
 */
function buildFallbackCampaign(businessId, goalId, involvementId, budgetId) {
  const deliverables = [];
  let packageName = 'Tailored Marketing Package';

  // 1. Core deliverables determined by Level of Involvement
  if (involvementId === 'self-managed') {
    packageName = 'Self-Publishing Content Asset Pack';
    deliverables.push({
      name: 'High-Resolution Photography',
      desc: 'Professional shoot covering your primary services, products, and premises.'
    });
    deliverables.push({
      name: 'Short-Form Video Asset',
      desc: 'Mobile-optimised video ready for Instagram Reels or TikTok with audio guidance.'
    });
    deliverables.push({
      name: 'Custom Social Graphic Templates',
      desc: 'Editable, on-brand graphic templates for your daily posts and stories.'
    });
  } else if (involvementId === 'co-managed') {
    packageName = 'Collaborative Growth Campaign';
    deliverables.push({
      name: 'Monthly Content Creation Pack',
      desc: 'Curated mix of edited video reels, photography, and promotional banners.'
    });
    deliverables.push({
      name: 'Content Calendar & Copywriting',
      desc: 'Full caption drafting, strategic hashtags, and optimal schedule planning.'
    });
    deliverables.push({
      name: 'Social Publishing Support',
      desc: 'Guidance and platform management to maintain consistent weekly posting.'
    });
  } else {
    // fully-managed
    packageName = 'Full-Service Campaign Engine';
    deliverables.push({
      name: 'Omni-Channel Content Production',
      desc: 'Comprehensive photography, video assets, and tailored creative concepts.'
    });
    deliverables.push({
      name: 'End-to-End Social Management',
      desc: 'Scheduling, customer inquiries response support, and profile optimisation.'
    });
    deliverables.push({
      name: 'Targeted Paid Advertising Setup',
      desc: 'Precision ad campaign on Meta or Google focused on qualified conversions.'
    });
    deliverables.push({
      name: 'Monthly Performance Analytics',
      desc: 'Clear, transparent monthly reporting on lead volume, reach, and ROI.'
    });
  }

  // 2. Budget scale adjustments
  if (budgetId === '700-1500' || budgetId === '1500-plus') {
    if (!deliverables.some(d => d.name.includes('Paid Advertising'))) {
      deliverables.push({
        name: 'Paid Media Budget Allocation',
        desc: 'Strategic ad placement focused specifically on target postal sectors.'
      });
    }
  }

  // 3. Goal specific adjustments
  if (goalId === 'increase-bookings') {
    deliverables.push({
      name: 'Booking Funnel Link Integration',
      desc: 'Optimised call-to-actions directly linking social traffic to your booking portal.'
    });
  } else if (goalId === 'launch-business') {
    deliverables.push({
      name: 'Grand Opening Announcement Suite',
      desc: 'High-impact launch teaser graphics, countdown stories, and press-ready copy.'
    });
  } else if (goalId === 'promote-property' && !deliverables.some(d => d.name.toLowerCase().includes('walkthrough'))) {
    deliverables.push({
      name: 'Virtual Walkthrough Asset',
      desc: 'Detailed interior visual overview formatted for listings and social promotion.'
    });
  }

  return {
    packageName,
    deliverables
  };
}

/**
 * REASONING GENERATOR
 * Generates an honest, grounded UK agency explanation ("Why we recommend this")
 * avoiding hype or exaggerated marketing claims.
 */
function generateRecommendationRationale(businessId, goalId) {
  const rationaleMap = {
    'restaurant-cafe': {
      'local-customers': 'For food and hospitality businesses, high-quality visual content triggers immediate craving, while geotargeted local advertising reaches diners who live or work within direct visiting distance.',
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

  // Fallback rationale
  return 'A balanced combination of professional creative assets and targeted local distribution provides the clearest path to reaching your target audience efficiently without wasted marketing spend.';
}

/* ==========================================================================
   3. APPLICATION STATE & CONTROLLER
   ========================================================================== */

const state = {
  currentStep: 1,
  totalSteps: 5,
  selections: {
    business: null,
    goal: null,
    involvement: null,
    budget: null
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
  wizardNavFooter: document.getElementById('wizardNavFooter'),

  // Step 1 - 4 Options Containers
  businessOptionsGroup: document.getElementById('businessOptionsGroup'),
  goalOptionsGroup: document.getElementById('goalOptionsGroup'),
  involvementOptionsGroup: document.getElementById('involvementOptionsGroup'),
  budgetOptionsGroup: document.getElementById('budgetOptionsGroup'),

  // Step 5 Containers
  selectionSummary: document.getElementById('selectionSummary'),
  campaignPackageBadge: document.getElementById('campaignPackageBadge'),
  deliverablesContainer: document.getElementById('deliverablesContainer'),
  rationaleText: document.getElementById('rationaleText'),
  btnRequestCampaign: document.getElementById('btnRequestCampaign'),
  btnModifyCampaign: document.getElementById('btnModifyCampaign'),

  // Modal elements
  enquiryModal: document.getElementById('enquiryModal'),
  btnCloseModal: document.getElementById('btnCloseModal'),
  enquiryForm: document.getElementById('enquiryForm'),
  modalCampaignRecap: document.getElementById('modalCampaignRecap'),
  enquirySuccessState: document.getElementById('enquirySuccessState'),
  successDetailsBox: document.getElementById('successDetailsBox'),
  btnFinishSuccess: document.getElementById('btnFinishSuccess')
};

/* ==========================================================================
   4. RENDERING FUNCTIONS
   ========================================================================== */

/**
 * Initialize dynamic cards for steps 1 - 4
 */
function renderAllOptionCards() {
  // 1. Business Cards
  DOM.businessOptionsGroup.innerHTML = CONFIG.businessTypes.map(item => `
    <label class="selection-card" data-key="business" data-val="${item.id}">
      <input type="radio" name="businessType" value="${item.id}" class="card-radio-input">
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
    <label class="selection-card" data-key="goal" data-val="${item.id}">
      <input type="radio" name="campaignGoal" value="${item.id}" class="card-radio-input">
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
    <label class="involvement-card" data-key="involvement" data-val="${item.id}">
      <input type="radio" name="involvementLevel" value="${item.id}" class="card-radio-input">
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

  // 4. Budget Cards
  DOM.budgetOptionsGroup.innerHTML = CONFIG.budgetTiers.map(item => `
    <label class="selection-card budget-card" data-key="budget" data-val="${item.id}">
      <input type="radio" name="budgetTier" value="${item.id}" class="card-radio-input">
      <div class="budget-tier-val">${item.label}</div>
      <div class="budget-tier-desc">${item.hint}</div>
      <div class="card-check-indicator" aria-hidden="true" style="margin-top:0.75rem;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
    </label>
  `).join('');

  // Attach card event handlers
  attachCardEvents();
}

/**
 * Attach click & change listeners to cards
 */
function attachCardEvents() {
  const allCards = document.querySelectorAll('.selection-card, .involvement-card');
  allCards.forEach(card => {
    const radio = card.querySelector('input[type="radio"]');

    card.addEventListener('click', () => {
      if (!radio.checked) {
        radio.checked = true;
      }
      handleCardSelection(card.dataset.key, card.dataset.val, card);
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

  // Visual active classes
  const siblings = selectedCardElement.parentElement.querySelectorAll('.selection-card, .involvement-card');
  siblings.forEach(el => el.classList.remove('selected'));
  selectedCardElement.classList.add('selected');

  // Enable continue button
  updateNavControls();
}

/**
 * Navigate to a specific step
 */
function goToStep(stepNumber) {
  if (stepNumber < 1 || stepNumber > state.totalSteps) return;

  // Hide all steps
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

  // If navigating to step 5, compute recommendations
  if (stepNumber === 5) {
    generateAndRenderCampaign();
    DOM.wizardNavFooter.style.display = 'none'; // hide step 1-4 nav
  } else {
    DOM.wizardNavFooter.style.display = 'flex';
  }

  // Scroll to top of wizard on step change
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
      btn.disabled = false; // allow clicking previous steps
    } else {
      // Future step
      btn.disabled = true;
    }
  });
}

/**
 * Update Back and Continue button states
 */
function updateNavControls() {
  // Step 1: Back disabled
  DOM.btnBack.disabled = state.currentStep === 1;

  // Determine if current step has a valid selection
  let hasSelection = false;
  if (state.currentStep === 1) hasSelection = Boolean(state.selections.business);
  else if (state.currentStep === 2) hasSelection = Boolean(state.selections.goal);
  else if (state.currentStep === 3) hasSelection = Boolean(state.selections.involvement);
  else if (state.currentStep === 4) hasSelection = Boolean(state.selections.budget);

  DOM.btnContinue.disabled = !hasSelection;
}

/* ==========================================================================
   5. CAMPAIGN RESOLVER & RESULTS RENDERER
   ========================================================================== */

/**
 * Resolve selections to match preset rule or generate fallback
 */
function resolveCampaign() {
  const { business, goal, involvement, budget } = state.selections;

  // 1. Search for exact preset match
  const exactMatch = PRESET_RULES.find(rule => {
    const matchBiz = (rule.business === '*' || rule.business === business);
    const matchGoal = (rule.goal === '*' || rule.goal === goal);
    const matchInv = (rule.involvement === '*' || rule.involvement === involvement);
    const matchBud = (rule.budget === '*' || rule.budget === budget);
    return matchBiz && matchGoal && matchInv && matchBud;
  });

  if (exactMatch) {
    return {
      packageName: exactMatch.packageName,
      deliverables: exactMatch.deliverables,
      rationale: generateRecommendationRationale(business, goal)
    };
  }

  // 2. Synthesize fallback
  const fallback = buildFallbackCampaign(business, goal, involvement, budget);
  return {
    packageName: fallback.packageName,
    deliverables: fallback.deliverables,
    rationale: generateRecommendationRationale(business, goal)
  };
}

/**
 * Lookup display titles for selections
 */
function getSelectionLabels() {
  const bizObj = CONFIG.businessTypes.find(b => b.id === state.selections.business);
  const goalObj = CONFIG.goals.find(g => g.id === state.selections.goal);
  const invObj = CONFIG.involvementTiers.find(i => i.id === state.selections.involvement);
  const budObj = CONFIG.budgetTiers.find(b => b.id === state.selections.budget);

  return {
    business: bizObj ? bizObj.title : 'Not specified',
    goal: goalObj ? goalObj.title : 'Not specified',
    involvement: invObj ? `${invObj.title} (${invObj.subtitle})` : 'Not specified',
    budget: budObj ? budObj.label : 'Not specified'
  };
}

/**
 * Generate and display Step 5 results
 */
function generateAndRenderCampaign() {
  const labels = getSelectionLabels();
  const campaign = resolveCampaign();

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
    <div class="summary-item">
      <span class="summary-label">Budget</span>
      <span class="summary-val" title="${labels.budget}">${labels.budget}</span>
    </div>
  `;

  // 2. Package Badge
  DOM.campaignPackageBadge.textContent = campaign.packageName;

  // 3. Deliverables List
  DOM.deliverablesContainer.innerHTML = campaign.deliverables.map(deliv => `
    <div class="deliverable-card">
      <div class="deliverable-icon-wrap" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div>
        <div class="deliverable-title">${deliv.name}</div>
        <div class="deliverable-meta">${deliv.desc}</div>
      </div>
    </div>
  `).join('');

  // 4. Rationale text
  DOM.rationaleText.textContent = campaign.rationale;
}

/* ==========================================================================
   6. MODAL & ENQUIRY WORKFLOW
   ========================================================================== */

function openEnquiryModal() {
  const labels = getSelectionLabels();
  const campaign = resolveCampaign();

  // Populate recap box inside modal
  DOM.modalCampaignRecap.innerHTML = `
    <div class="recap-title">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>Selected Package: <strong>${campaign.packageName}</strong></span>
    </div>
    <div class="recap-details">
      ${labels.business} &bull; ${labels.goal} &bull; ${labels.budget}
    </div>
  `;

  // Reset enquiry form view
  DOM.enquiryForm.hidden = false;
  DOM.enquirySuccessState.hidden = true;
  DOM.enquiryForm.reset();

  // Show native modal
  DOM.enquiryModal.showModal();
}

function closeEnquiryModal() {
  DOM.enquiryModal.close();
}

function handleEnquirySubmit(e) {
  e.preventDefault();

  const labels = getSelectionLabels();
  const name = document.getElementById('clientName').value;
  const business = document.getElementById('businessName').value;
  const email = document.getElementById('clientEmail').value;
  const phone = document.getElementById('clientPhone').value;

  // Build confirmation details
  DOM.successDetailsBox.innerHTML = `
    <p><strong>Client:</strong> ${name}</p>
    <p><strong>Business:</strong> ${business}</p>
    <p><strong>Contact:</strong> ${email} | ${phone}</p>
    <p style="margin-top:0.4rem; padding-top:0.4rem; border-top:1px dashed var(--color-border);">
      <strong>Campaign scope:</strong> ${labels.business} &bull; ${labels.goal} &bull; ${labels.budget}
    </p>
  `;

  DOM.enquiryForm.hidden = true;
  DOM.enquirySuccessState.hidden = false;
}

/* ==========================================================================
   7. EVENT LISTENERS & INITIALIZATION
   ========================================================================== */

function initApp() {
  // Render cards
  renderAllOptionCards();

  // Nav buttons
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

  // Top progress bar direct clicks for past steps
  DOM.progressTrack.addEventListener('click', (e) => {
    const btn = e.target.closest('.step-btn');
    if (!btn || btn.disabled) return;
    const targetStep = parseInt(btn.dataset.target, 10);
    if (!isNaN(targetStep) && targetStep <= state.currentStep) {
      goToStep(targetStep);
    }
  });

  // Step 5 Actions
  DOM.btnRequestCampaign.addEventListener('click', openEnquiryModal);
  DOM.btnModifyCampaign.addEventListener('click', () => {
    // Return to step 1 to allow modification with all selections saved
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

// Run on DOM content loaded
document.addEventListener('DOMContentLoaded', initApp);
