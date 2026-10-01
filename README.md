# Campaign Builder

A fast, lightweight, and modern web application built for a UK marketing agency to help prospective clients configure and receive tailored marketing campaign packages.

Designed with vanilla web standards (HTML5, CSS3, JavaScript ES6+) for zero dependencies, instant loading, and effortless hosting on **GitHub Pages**.

---

## 🎨 Design System & Brand Palette

The interface features an authoritative, clean UK agency aesthetic:

| Role | Colour | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Main Colour** | Dark Navy | `#121742` | Headers, active nav, primary text, prominent elements |
| **Secondary Accent** | Royal Navy | `#2f3ba3` | Selected card borders, badges, rationale accents |
| **Primary Action** | Agency Orange | `#d44a0c` | "Continue" button, "REQUEST THIS CAMPAIGN", active step dots |
| **Subtle Accent** | Electric Blue | `#03b4f7` | Focus outlines, subtle borders, status indicators |
| **Light Surface** | Off-White | `#f2f1ed` | Page background, subtle neutral surfaces |

---

## 🚀 Application Flow

1. **Step 1 — Business Type**:
   * *Restaurant / Café*, *Beauty / Barber*, *Trades & Local Services*, *Estate Agent / Property*, *Automotive / Detailing*, *Local Retail*, *Other*.
2. **Step 2 — Campaign Goal**:
   * *Get more local customers*, *Increase bookings*, *Promote a new service*, *Promote a product*, *Build brand awareness*, *Launch a new business*, *Promote a property*.
3. **Step 3 — Level of Involvement** (3 large, prominent cards):
   * **I’ll take it from here** (Content creation only)
   * **Help me manage it** (Content + management)
   * **Do it for me** (Full campaign management)
4. **Step 4 — Budget**:
   * *Up to £300*, *£300–£700*, *£700–£1,500*, *£1,500+*, *Not sure yet*.
5. **Step 5 — Recommended Campaign**:
   * **Selection Summary**: Clear summary chips showing chosen Business, Goal, Involvement, and Budget.
   * **Recommended Deliverables**: Clean cards detailing recommended videos, photography, graphics, and ad management.
   * **Why We Recommend This**: Grounded, professional UK marketing rationale tailored to the business and objective without hyperbole.
   * **Actions**:
     * **Request This Campaign**: Opens the interactive modal enquiry form (`Name`, `Business name`, `Email`, `Phone`, `Message`). Submitting displays `"Thank you. Your campaign enquiry has been prepared."`
     * **Modify Campaign**: Returns user to Step 1 with existing selections safely preserved.

---

## ⚙️ Editing Rules & Deliverables

All rules, budget tiers, and deliverable items are located in the top section of [`script.js`](script.js):

### Adding or Modifying Exact Preset Rules
In `PRESET_RULES`, define rule objects matching the 4 selection keys:
```javascript
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
}
```
*You can also use wildcards (`'*'`) for `budget` or `goal` to match across all budgets/goals for a given business.*

### Fallback Generator
If no exact preset matches, `buildFallbackCampaign()` automatically synthesizes an appropriate scope based on:
1. Level of involvement (sets base deliverables: self-posting assets vs full ads management).
2. Budget tier (scales volume and paid ads allocation).
3. Business & Goal modifiers (e.g. adding property walkthroughs for estate agents, booking link integrations for salons).

---

## 🌐 How to Host on GitHub Pages

1. Push this repository or directory to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Campaign Builder"
   git branch -M main
   git remote add origin https://github.com/<your-username>/campaign-builder.git
   git push -u origin main
   ```
2. In your GitHub repository:
   * Go to **Settings** → **Pages**.
   * Under **Branch**, select `main` branch and `/ (root)`.
   * Click **Save**.
3. Your site will be published at `https://<your-username>.github.io/campaign-builder/`.

---

## ♿ Accessibility & Responsive Testing

* **Screen Readers & Keyboard Nav**: Form inputs use semantic `<fieldset>`, `<legend>`, and `<input type="radio">` wrapped inside interactive labels with visible focus indicators.
* **Modal Accessibility**: Utilises native HTML5 `<dialog>` with focus trap, backdrop click, and `Escape` key support.
* **Responsive Breakpoints**:
  * `375px` (Mobile portrait)
  * `768px` (Tablet / mobile landscape)
  * `1440px` (Desktop / large display)
