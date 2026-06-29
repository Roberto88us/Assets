// ---- Shared SVG icons ----
const check = (cls) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="${cls}"><path d="M20 6 9 17l-5-5"></path></svg>`;

// ---- Benefit cards ----
const benefits = [
  {
    title: "24/7 Telehealth",
    badge: "$0",
    desc: "Free, unlimited virtual urgent care — English & Spanish, anywhere in the U.S. & Puerto Rico.",
    icon: '<path d="m22 8-6 4 6 4V8Z"></path><rect width="14" height="12" x="2" y="6" rx="2"></rect>',
  },
  {
    title: "Virtual Primary Care",
    badge: "$0",
    desc: "A dedicated provider for preventive care, chronic conditions, prescriptions and referrals — no per-visit fee.",
    icon: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>',
  },
  {
    title: "Dental Savings",
    badge: "Cleanings from $47",
    desc: "Nationwide Careington network — discounted exams, X-rays, fillings, crowns and root canals.",
    icon: '<path d="M12 5.5c-2-1.8-5.5-2-7-.5-1.7 1.7-1 5 0 8 .7 2 .8 4.5 1.5 6 .5 1 1.8 1 2.2-.2.5-1.6.6-3.8 1.3-3.8s.8 2.2 1.3 3.8c.4 1.2 1.7 1.2 2.2.2.7-1.5.8-4 1.5-6 1-3 1.7-6.3 0-8-1.5-1.5-5-1.3-7 .5Z"></path>',
  },
  {
    title: "Lab Services",
    badge: "Up to 60% off",
    desc: "Hundreds of lab tests at reduced member pricing through a nationwide certified lab network.",
    icon: '<path d="M9 3h6"></path><path d="M10 3v6.3a1 1 0 0 1-.2.6L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3l-5.3-8.1a1 1 0 0 1-.2-.6V3"></path><path d="M6.5 15h11"></path>',
  },
  {
    title: "Diagnostic Imaging",
    badge: "Up to 60% off",
    desc: "Savings on MRIs, CT scans, X-rays, EKGs and ultrasounds at accredited imaging centers.",
    icon: '<path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path>',
  },
  {
    title: "Pharmacy Savings",
    badge: "Up to 80% off",
    desc: "Save on brand-name & generic medications at 70,000+ pharmacies nationwide.",
    icon: '<path d="m10.5 20.5-7-7a4.95 4.95 0 1 1 7-7l7 7a4.95 4.95 0 1 1-7 7Z"></path><path d="m8.5 8.5 7 7"></path>',
  },
  {
    title: "Hospital Bill Advocacy",
    badge: "Bills over $300",
    desc: "We negotiate eligible medical bills on your behalf — hospital stays, ER visits and surgeries.",
    icon: '<path d="M4 2v20l2-1.5L8 22l2-1.5L12 22l2-1.5L16 22l2-1.5L20 22V2l-2 1.5L16 2l-2 1.5L12 2l-2 1.5L8 2 6 3.5 4 2Z"></path><path d="M8 8h8M8 12h8"></path>',
  },
  {
    title: "Care Navigators",
    badge: "A real person",
    desc: "Help finding providers, understanding your membership and booking visits — by phone, text or email.",
    icon: '<circle cx="12" cy="12" r="10"></circle><path d="m16.2 7.8-2.9 6.3-6.3 2.9 2.9-6.3 6.3-2.9Z"></path>',
  },
];

const delays = [0, 70, 140, 210, 0, 70, 140, 210];

const benefitGrid = document.getElementById("benefit-grid");
benefitGrid.innerHTML = benefits
  .map(
    (b, i) => `
  <div class="reveal" style="transition-delay:${delays[i]}ms">
    <article class="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(8,42,60,0.5)]">
      <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-gradient text-white"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="h-6 w-6">${b.icon}</svg></span>
      <h3 class="mt-5 text-xl text-navy">${b.title}</h3>
      <p class="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal">${check("h-4 w-4")} ${b.badge}</p>
      <p class="mt-3 text-sm leading-relaxed text-body">${b.desc}</p>
    </article>
  </div>`
  )
  .join("");

// ---- FAQ ----
const faqs = [
  {
    q: "Is this insurance?",
    a: "No. MedBlue is a healthcare membership, not health insurance, and it's not a substitute for major medical insurance. It's a simple membership that makes everyday care — like talking to a doctor, filling a prescription, or getting lab work — affordable and easy to use.",
  },
  {
    q: "What does it cost?",
    a: "The National Plan is $40 per month, or $336 per year if you'd rather pay annually. That's one flat price for the whole membership — no per-visit fees for your telehealth and virtual primary care.",
  },
  {
    q: "When do my benefits start?",
    a: "Your member benefits activate three days after you enroll. As soon as they're live, we'll send you everything you need to start using your telehealth, savings networks, and care navigator.",
  },
  {
    q: "Where does it work?",
    a: "Your virtual care and savings networks work in all 50 states and Puerto Rico. Talk to a doctor 24/7 from anywhere, and tap discounted dental, lab, imaging, and pharmacy partners across the country.",
  },
  {
    q: "Who is it for?",
    a: "MedBlue is built for self-employed and underinsured people in Miami — gig workers, freelancers, independent contractors, tradespeople, restaurant owners, realtors, and the families who count on them. If you don't have a group plan waiting for you, this is for you.",
  },
  {
    q: "How do I talk to a doctor?",
    a: "Through your membership's $0 24/7 telehealth, you can connect with a licensed provider any time of day or night — in English or Spanish — for free, with no per-visit fee. For ongoing needs, your dedicated virtual primary care provider is there too.",
  },
];

const chevron = (open) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="h-5 w-5 shrink-0 text-teal transition-transform duration-300 ${open ? "rotate-180" : ""}"><path d="m6 9 6 6 6-6"></path></svg>`;

const faqList = document.getElementById("faq-list");
faqList.innerHTML = faqs
  .map(
    (f, i) => `
  <div class="reveal" style="transition-delay:${i * 50}ms">
    <div class="faq-item overflow-hidden rounded-2xl border transition ${i === 0 ? "border-teal/30 bg-white shadow-sm" : "border-line bg-white/60"}">
      <button type="button" aria-expanded="${i === 0}" class="faq-btn flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal/20 sm:px-6 sm:py-5">
        <span class="text-[17px] font-semibold text-navy">${f.q}</span>
        ${chevron(i === 0)}
      </button>
      <div class="faq-panel grid transition-all duration-300 ease-out ${i === 0 ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}">
        <div class="overflow-hidden"><p class="px-5 pb-5 leading-relaxed text-body sm:px-6">${f.a}</p></div>
      </div>
    </div>
  </div>`
  )
  .join("");

faqList.querySelectorAll(".faq-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const panel = item.querySelector(".faq-panel");
    const icon = btn.querySelector("svg");
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    if (open) {
      panel.classList.remove("grid-rows-[1fr]", "opacity-100");
      panel.classList.add("grid-rows-[0fr]", "opacity-0");
      item.classList.remove("border-teal/30", "bg-white", "shadow-sm");
      item.classList.add("border-line", "bg-white/60");
      icon.classList.remove("rotate-180");
    } else {
      panel.classList.add("grid-rows-[1fr]", "opacity-100");
      panel.classList.remove("grid-rows-[0fr]", "opacity-0");
      item.classList.add("border-teal/30", "bg-white", "shadow-sm");
      item.classList.remove("border-line", "bg-white/60");
      icon.classList.add("rotate-180");
    }
  });
});

// ---- Forms ----
const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-navy placeholder:text-sage/70 outline-none transition focus:border-teal focus:ring-4 focus:ring-teal/15";

function buildForm(form) {
  const cta = form.getAttribute("data-cta") || "Get Started";
  form.innerHTML = `
    <div class="grid grid-cols-2 gap-3">
      <input type="text" required autocomplete="given-name" placeholder="First name" aria-label="First name" class="${inputCls}" name="firstName" />
      <input type="text" required autocomplete="family-name" placeholder="Last name" aria-label="Last name" class="${inputCls}" name="lastName" />
    </div>
    <input type="email" required autocomplete="email" placeholder="Email address" aria-label="Email address" pattern="[^\\s@]+@[^\\s@]+\\.[^\\s@]+" class="${inputCls}" name="email" />
    <div>
      <input type="tel" required inputmode="numeric" autocomplete="tel" pattern="\\(\\d{3}\\) \\d{3}-\\d{4}" placeholder="Phone number" aria-label="Phone number" class="${inputCls}" name="phone" />
    </div>
    <div class="relative">
      <select name="membershipUnderstanding" required aria-label="Please confirm you understand that MedBlue is a healthcare membership, not health insurance." class="${inputCls} appearance-none pr-10 text-sage/70">
        <option value="" disabled selected>I understand MedBlue is a membership, not insurance…</option>
        <option value="Yes, I understand" class="text-navy">Yes, I understand</option>
        <option value="No, I do not understand" class="text-navy">No, I do not understand</option>
      </select>
      <svg class="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-sage" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6"></path></svg>
    </div>
    <p class="text-[11px] leading-relaxed text-sage">By providing your phone number and clicking submit, you agree to be contacted by MedBlue by phone call, text message, and email at the number provided — including via automated technology and AI-assisted calls — for membership information, even if your number is on a Do Not Call list. Consent is not a condition of purchase. Message and data rates may apply.</p>
    <button type="submit" class="group flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-4 text-base font-semibold text-cream shadow-lg shadow-navy/20 transition hover:bg-navy-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal/40 disabled:cursor-not-allowed disabled:opacity-60">${cta}</button>
    <p class="flex items-center justify-center gap-1.5 text-center text-xs text-sage"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="h-3.5 w-3.5"><rect width="18" height="11" x="3" y="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Your information stays private. No spam, ever.</p>
  `;

  // Phone number formatting
  const phone = form.querySelector('input[name="phone"]');
  phone.addEventListener("input", () => {
    const d = phone.value.replace(/\D/g, "").slice(0, 10);
    let out = d;
    if (d.length > 6) out = `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
    else if (d.length > 3) out = `(${d.slice(0, 3)}) ${d.slice(3)}`;
    else if (d.length > 0) out = `(${d}`;
    phone.value = out;
  });

  // Keep select text muted until a real choice is made
  const sel = form.querySelector("select");
  sel.addEventListener("change", () => {
    sel.classList.toggle("text-sage/70", sel.value === "");
    sel.classList.toggle("text-navy", sel.value !== "");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = "Thank you! We'll be in touch.";
  });
}

document.querySelectorAll("#hero-form, #get-started-form").forEach(buildForm);

// ---- Scroll reveal ----
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// ---- Header & sticky mobile bar on scroll ----
const header = document.getElementById("site-header");
const mobileBar = document.getElementById("mobile-bar");

function onScroll() {
  const y = window.scrollY;
  if (y > 10) {
    header.classList.remove("bg-transparent");
    header.classList.add("bg-cream/90", "backdrop-blur-md", "shadow-sm");
  } else {
    header.classList.add("bg-transparent");
    header.classList.remove("bg-cream/90", "backdrop-blur-md", "shadow-sm");
  }

  const past = y > window.innerHeight * 0.6;
  mobileBar.classList.toggle("translate-y-full", !past);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
