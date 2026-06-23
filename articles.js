const ARTICLES = [
  {
    category: "Patent Strategy",
    date: "June 2026",
    title: "AI Prior Art Search vs Traditional Keyword Search - What Actually Changed",
    intro: "Prior-art search is where AI has made the most immediate difference to patent work. The shift from keyword matching to semantic, meaning-based search is real and worth understanding - but it changes how you search, not whether you still need to think.",
    points: [
      { label: "The old limitation", text: "Traditional search relies on keywords and classification codes. If an earlier inventor described the same idea in different words, a keyword search can miss it entirely - and a missed reference is exactly what surfaces later to invalidate a patent." },
      { label: "What semantic search changes", text: "AI-driven search compares the meaning of an invention against a corpus, surfacing conceptually similar prior art regardless of the exact wording used. It catches relevant references that keyword strategies overlook, and it does so across far larger volumes of documents." },
      { label: "Faster and broader, not infallible", text: "Wider nets also pull in noise, and no tool guarantees the single closest reference has been found. The value is in covering far more ground quickly, then applying expert review to separate what truly anticipates the invention from what merely looks similar." },
      { label: "How we use it", text: "We run AI-assisted semantic search to widen coverage, then have a patent agent assess relevance, map references against the claims, and decide what they mean for patentability. The tool finds candidates; the agent draws the conclusion." }
    ],
    closing: "Better search is one of AI's clearest wins in patent work - we use it to make our patentability assessments more thorough, not to replace the judgment behind them."
  },
  {
    category: "Patent Strategy",
    date: "June 2026",
    title: "Patenting AI Inventions vs Using AI to File Patents - Two Different Things",
    intro: "Two very different questions get tangled together whenever AI and patents come up. One is whether you can patent an AI invention; the other is whether AI can be used to prepare and file patents. They have different answers, and confusing them leads to poor decisions.",
    points: [
      { label: "Patenting an AI invention", text: "AI and machine-learning inventions can be patented in India, but they face the Section 3(k) test for computer-related inventions. Success depends on framing the invention around a genuine technical effect rather than an abstract algorithm or business method - which is a drafting and strategy question." },
      { label: "Using AI to file patents", text: "Separately, AI tools can assist in searching, drafting, and analysing applications for any field of invention - not just AI inventions. This is about how the work is done, and it is already standard practice in efficient firms." },
      { label: "Who counts as the inventor", text: "Patent offices and courts in India, the US, the UK and Europe have held that an inventor must be a natural person. An AI system cannot be named as the inventor, even where AI tools contributed heavily to conceiving or drafting the invention. A human must be identified." },
      { label: "Why the distinction matters", text: "You can use AI to help file a patent on a mechanical invention that has nothing to do with AI. And you can patent an AI invention drafted entirely by hand. Treating these as the same question leads to misjudging both patentability and process." }
    ],
    closing: "We handle both sides: drafting AI and computer-implemented inventions to clear Section 3(k), and using AI tools responsibly to prepare filings across every domain we work in."
  },
  {
    category: "Patent Strategy",
    date: "May 2026",
    title: "How AI Is Changing Patent Work - And Where It Still Needs a Human",
    intro: "AI is reshaping how patent work gets done, and we are firmly in favour of it. Used well, these tools make prior-art search faster, drafting tighter, and landscape analysis sharper. But the same tools mislead anyone who treats them as a substitute for judgment. The firms that win are the ones that pair AI's speed with human strategy - not the ones that pick a side.",
    points: [
      { label: "Where AI genuinely helps", text: "Semantic prior-art search across millions of documents in minutes, first-draft specifications and claim sets, citation and family analysis, and patent-landscape mapping. Work that once took days of skilled time now takes hours, which means more thorough searches and faster turnarounds at lower cost." },
      { label: "Where it still needs a human", text: "Claim strategy, inventive-step arguments, designing around Section 3(k), and responding to an examiner are judgment calls grounded in law and prosecution experience. AI can draft a claim; it cannot decide which claim scope is worth fighting for, or which fallback positions to keep in reserve." },
      { label: "The risks of using it blindly", text: "Generative tools can hallucinate prior art that does not exist, miss the closest reference, or produce claims that read well but collapse under examination. Confidentiality matters too - inventions should never be fed into tools that train on or retain your input." },
      { label: "Our position", text: "We use AI to do more, faster, for our clients - broader searches, quicker drafts, better landscape views. Every output is then checked, shaped, and owned by a registered patent agent. The technology raises the floor; experienced judgment still sets the ceiling." }
    ],
    closing: "We are proponents of AI in patent practice, used the right way: as a force multiplier for skilled agents, never as an unsupervised replacement for them."
  },
  {
    category: "Patent Strategy",
    date: "May 2026",
    title: "Freedom-to-Operate vs Patentability - Two Searches, Two Different Questions",
    intro: "Founders often assume that holding a patent means they are free to sell their product. They are separate questions. Patentability asks whether your invention can be protected; freedom-to-operate asks whether selling it would infringe someone else's rights. You can have one without the other.",
    points: [
      { label: "What a patentability search answers", text: "It looks at prior art to assess whether your invention is novel and inventive enough to be granted. It is about getting your own patent." },
      { label: "What an FTO search answers", text: "It looks at live, enforceable patents others hold in your target market to assess whether making or selling your product would infringe them. It is about not being sued." },
      { label: "Why a granted patent is not a shield", text: "Your patent gives you the right to stop others using your invention - it does not grant you the right to practise it if doing so reads onto a broader patent someone else owns. Both can be true at once." },
      { label: "When to run an FTO", text: "Before a product launch, a market entry, or a significant investment - while there is still room to design around a blocking patent or seek a licence, rather than after you are committed." }
    ],
    closing: "We run patentability and freedom-to-operate searches as distinct exercises, so you know both what you can protect and what you can safely sell."
  },
  {
    category: "Trademark",
    date: "May 2026",
    title: "Do a Trademark Search Before You Name Your Startup",
    intro: "Naming is one of the earliest and most expensive decisions a startup gets wrong. A clearance search before the name goes public is a fraction of the cost of a rebrand, an opposition, or a cease-and-desist after launch.",
    points: [
      { label: "Why search first", text: "Adopting a name that is identical or confusingly similar to an existing mark risks rejection at examination, opposition after publication, or an infringement claim once you are in the market and invested in the brand." },
      { label: "What a proper search covers", text: "Not just identical names. A clearance search looks at phonetically and visually similar marks across the relevant Nice classes, so 'sounds-alike' and 'looks-alike' conflicts surface before you commit." },
      { label: "Pick the right classes", text: "India follows the 45-class Nice Classification, and you file per class. Searching and filing in the wrong class leaves gaps competitors can exploit and may miss conflicts that matter." },
      { label: "Search beyond the register", text: "Common-law use of a name, even unregistered, can support an objection. A thorough search considers existing market use, not only the trademark register." }
    ],
    closing: "We run trademark clearance searches across the relevant classes before a name is announced - get the search done before the brand goes public, not after."
  },
  {
    category: "Filing Updates",
    date: "April 2026",
    title: "Foreign Filing Licence in India - What Every Applicant Must Know",
    intro: "Before filing a patent application outside India for an invention developed in India, prior approval from the Indian Patent Office (Controller of Patents) is mandatory under Section 39 of the Patents Act.",
    points: [
      { label: "Who needs it", text: "Any person resident in India who wishes to file a patent application in a foreign jurisdiction for an invention conceived or developed in India, without first filing in India." },
      { label: "The alternative route", text: "File first in India, then wait six weeks. If no secrecy directions are issued within that period, you may proceed with foreign filing without a separate FFL - the Indian filing itself serves as deemed permission." },
      { label: "When to apply for an express FFL", text: "When you need to file abroad before six weeks have elapsed from an Indian filing, or when filing internationally without any prior Indian application." },
      { label: "Timelines", text: "Express FFL requests are typically decided within 21 days." },
      { label: "Penalty for non-compliance", text: "Filing abroad without a required FFL can result in the Indian application being treated as abandoned, and may expose foreign applications to validity challenges." }
    ],
    closing: "FFL compliance is assessed as part of our filing workflow at the point of invention disclosure - before any application is filed."
  },
  {
    category: "Filing Updates",
    date: "April 2026",
    title: "Form 27 - India's Patent Working Statement After the 2024 Amendments",
    intro: "Under Section 146(2) of the Indian Patents Act, every patent holder and licensee must file a statement of working of the patented invention in India using Form 27.",
    points: [
      { label: "Key change - 2024 Amendments", text: "Filing frequency extended from annually to once every three financial years, commencing from the financial year immediately after the patent is granted. The deadline for filing is September 30 following the close of each three-year period." },
      { label: "Current deadline", text: "For all patents granted on or before March 31, 2023, the current three-year filing window closes September 30, 2026. This is an active compliance obligation for most Indian patent holders right now." },
      { label: "What changed in the form", text: "Exact sales figures are no longer required - approximate revenue is sufficient. A single Form 27 can now be filed for multiple related patents granted to the same patentee, reducing the reporting burden for portfolio holders." },
      { label: "Penalty for non-compliance", text: "Non-filing attracts a penalty under Section 122 that may extend to one lakh rupees for a first instance, with a further penalty of one thousand rupees for every day of continued failure." }
    ],
    closing: "We track Form 27 deadlines as part of our portfolio maintenance services - across three-year cycles, not as a last-minute reminder."
  },
  {
    category: "Trademark",
    date: "April 2026",
    title: "Trademark Filing in India and Abroad - A Practical Starting Point",
    intro: "A trademark protects what makes your brand recognisable - a name, a logo, a tagline, or a combination. Unlike a patent, which protects how something works, a trademark protects how something is identified in the market. Registration is not mandatory in India, but an unregistered mark offers significantly weaker legal protection and makes enforcement far more difficult.",
    points: [
      { label: "Filing in India", text: "Applications are filed with the Trade Marks Registry under the CGPDTM. India follows the Nice Classification system - goods and services are divided into 45 classes, and you file separately for each class relevant to your business. Getting the class selection right matters: filing in the wrong class leaves gaps that competitors can exploit. The process moves through examination, publication in the Trade Marks Journal, and a four-month opposition window before registration is granted. Expect 18 to 36 months, though expedited examination is available." },
      { label: "Filing abroad", text: "The Madrid Protocol allows a single international application through WIPO, designating multiple member countries at once - cost-effective when covering several jurisdictions. Direct national filing through local agents remains better for jurisdictions with specific requirements or where prosecution strategy matters more than speed. Your Indian registration or application serves as the base for a Madrid filing." },
      { label: "Before you file", text: "A trademark search is not optional. Filing without a clearance search risks rejection on grounds of similarity to an existing mark, or a costly opposition after publication. A proper search covers identical and phonetically or visually similar marks across relevant classes." }
    ],
    closing: "We conduct trademark searches and manage filings across India and international jurisdictions. If you are building a brand, get the search done before the name is announced publicly."
  },
  {
    category: "Filing Updates",
    date: "March 2026",
    title: "Expedited Patent Examination Under Rule 24C - Who Qualifies and When It Helps",
    intro: "Ordinary examination in India can take years from the request being filed. Rule 24C offers a faster track for eligible applicants, with grants in some cases issued within a year. Knowing whether you qualify can reshape your filing strategy.",
    points: [
      { label: "Who is eligible", text: "Expedited examination is open to DPIIT-recognised startups, small entities, female natural-person applicants, government departments and government-owned bodies, and PCT applicants who named India as the ISA or IPEA. The request is filed on Form 18A." },
      { label: "Eligibility is checked at filing", text: "Your qualifying status - for example startup recognition - must be valid on the date Form 18A is filed, with the appropriate declaration attached. Plan recognition and filing together." },
      { label: "When it is worth it", text: "Expedited examination makes sense when you need a granted patent to raise funding, deter a competitor, or support licensing talks. A pending application has limited enforcement value; a granted one changes the conversation." },
      { label: "The trade-off", text: "Expedited examination carries higher official fees and compresses your response timelines. It rewards applicants who are ready to prosecute quickly, not those still refining the invention." }
    ],
    closing: "We assess Rule 24C eligibility at the filing stage and use it where speed to grant genuinely advances your commercial position."
  },
  {
    category: "Patent Strategy",
    date: "March 2026",
    title: "Patent or Trade Secret - How to Decide What to Protect and How",
    intro: "Not every invention should be patented. A patent trades disclosure for a 20-year monopoly; a trade secret trades confidentiality for protection that lasts only as long as the secret holds. Choosing wrongly can give away your advantage or leave it unprotected.",
    points: [
      { label: "Patents publish your invention", text: "In exchange for exclusive rights, the full specification is published. If your edge can be reverse-engineered from a product anyway, a patent secures it. If it cannot be detected, publication may simply hand it to competitors." },
      { label: "Trade secrets last only while secret", text: "There is no expiry, but no protection against independent discovery or reverse engineering either. Protection depends entirely on the confidentiality measures you maintain - contracts, access controls, and process discipline." },
      { label: "Detectability is the deciding factor", text: "Ask whether infringement would be visible. A mechanism evident in a shipped product favours a patent, because you could detect and enforce. A back-end process or formulation that never leaves your control often favours a trade secret." },
      { label: "You can combine both", text: "Many strong portfolios patent the detectable, claimable elements and keep adjacent know-how - parameters, tuning, manufacturing detail - as trade secrets." }
    ],
    closing: "We help weigh disclosure against secrecy for each invention, so the protection method fits how the advantage actually works in your business."
  },
  {
    category: "Filing Updates",
    date: "March 2026",
    title: "Filing Patents Internationally - PCT vs Direct National Filing",
    intro: "Once you want protection beyond India, the choice is between the PCT route and filing directly in each country. Both have their place, and the right call depends on how many jurisdictions you need and how settled your strategy is.",
    points: [
      { label: "The PCT route", text: "A single international application preserves your filing date across all member states and defers the expensive national-phase decisions. It buys time - national phase entry is generally due 30 to 31 months from the priority date - to assess markets and budget before committing." },
      { label: "India national phase", text: "Where India is entered through the PCT, national phase entry and the request for examination both fall due at 31 months from the priority date, so docket them together." },
      { label: "Direct national filing", text: "Filing directly in target countries can be faster and cheaper when you only need one or two jurisdictions, or where local prosecution strategy matters more than deferring cost. It commits you sooner, but without PCT intermediary fees." },
      { label: "Clear the FFL first", text: "For inventions developed in India, foreign filing - whether PCT or direct - requires the Foreign Filing Licence position to be settled before you file abroad." }
    ],
    closing: "We map the jurisdictions that matter to your business and choose the route - PCT or direct - that protects them without overspending."
  },
  {
    category: "Patent Strategy",
    date: "February 2026",
    title: "Can You Patent Software in India? What Section 3(k) Really Means",
    intro: "Section 3(k) of the Patents Act excludes 'a computer programme per se' and algorithms from patentability. This is the single most misunderstood provision for software and AI founders - it does not mean software is unpatentable, but it does mean how you frame the invention is everything.",
    points: [
      { label: "What 'per se' changes", text: "The exclusion targets a computer programme claimed on its own. An invention that uses software to achieve a technical effect or solve a technical problem - beyond the ordinary running of a program on general hardware - can be patentable." },
      { label: "The technical effect test", text: "Examiners look for a demonstrable technical contribution: improved hardware performance, better resource utilisation, enhanced security, or a real-world technical result. Claims framed purely as business logic or abstract steps tend to fall foul of 3(k)." },
      { label: "Drafting matters most", text: "The same underlying invention can be granted or refused depending on how the specification and claims are written. Anchoring the invention in its technical architecture and effect is what carries it through examination." },
      { label: "AI and ML inventions", text: "Machine-learning inventions face the same test. A novel model applied to produce a concrete technical improvement is on firmer ground than a claim to the algorithm itself." }
    ],
    closing: "We draft computer-implemented and AI inventions around their technical effect from the first line, because with Section 3(k) the framing decides the outcome."
  },
  {
    category: "Patent Strategy",
    date: "February 2026",
    title: "A Founder's Guide to IP - What to Protect Before You Raise",
    intro: "Investors run IP diligence, and gaps surface at the worst possible moment - mid-raise. Sorting out ownership and protection early is far cheaper than fixing it under a term sheet deadline. Here is what to have in order before you fundraise.",
    points: [
      { label: "Confirm who owns the IP", text: "Inventions created by founders before incorporation, or by contractors without a written assignment, may not belong to the company. Ensure every inventor and contractor has assigned rights to the entity in writing." },
      { label: "File before you disclose", text: "Pitching, demoing, or publishing before filing can destroy novelty. If you must disclose, do it under an NDA, and ideally after at least a provisional application is on record." },
      { label: "Match protection to the asset", text: "Patents protect how something works, trademarks protect your brand identity, copyright protects code and content, and trade secrets protect what you can keep confidential. Most startups need a mix." },
      { label: "Mind the Foreign Filing Licence", text: "If your invention was developed in India and you intend to file abroad, clear the FFL position first. Filing overseas without it can jeopardise both the Indian and foreign applications." }
    ],
    closing: "We run IP readiness reviews for startups ahead of a raise, so diligence confirms your position instead of exposing it."
  },
  {
    category: "Filing Updates",
    date: "February 2026",
    title: "Patent and Trademark Renewals in India - The Deadlines You Cannot Miss",
    intro: "Rights are won at filing but kept through renewals. Missing a renewal can lapse a patent or remove a trademark from the register - and recovery, where possible, is costly and uncertain. A tracked calendar is the cheapest insurance in IP.",
    points: [
      { label: "Patent annuities", text: "A granted patent must be renewed every year from the third year onward, for a 20-year term, with fees rising over time. Renewals can be paid in advance, which can also reduce cost." },
      { label: "Restoring a lapsed patent", text: "If an annuity is missed, there is a grace period to pay with a surcharge. Beyond that the patent lapses, and restoration is only possible within a limited window and on showing the lapse was unintentional - never something to rely on." },
      { label: "Trademark renewals", text: "A registered trademark is renewed every ten years. There is a grace window to renew late with a surcharge, and a further limited period to restore a removed mark, but lapses create real risk to your brand rights." },
      { label: "Portfolio tracking", text: "For anything beyond a single right, the danger is administrative, not legal - a missed date in a spreadsheet. Active docketing across the whole portfolio is what prevents avoidable loss." }
    ],
    closing: "We track renewal and annuity deadlines across patents and trademarks, in India and abroad, as an ongoing service - not a last-minute reminder."
  },
  {
    category: "Patent Strategy",
    date: "January 2026",
    title: "How to File a Patent in India - The Process from Disclosure to Grant",
    intro: "Filing a patent in India follows a defined sequence, and missing a step or a deadline can cost you the application. Here is the path from first disclosure to grant, and where most first-time applicants lose ground.",
    points: [
      { label: "Start with disclosure", text: "Document the invention fully before anything is published, demonstrated, or sold. Public disclosure before filing can destroy novelty. If the invention was developed in India, a Foreign Filing Licence must be cleared before filing abroad." },
      { label: "Provisional or complete", text: "A provisional specification secures a priority date while claims are still evolving; the complete specification must follow within 12 months. If the invention is fully developed, filing a complete specification directly saves time." },
      { label: "Publication and examination", text: "Applications are published 18 months after filing, or earlier on request via Form 9. Examination is not automatic - you must file a Request for Examination on Form 18 within 31 months of the priority date, or the application is treated as withdrawn." },
      { label: "Responding to the FER", text: "The First Examination Report raises objections on novelty, inventive step, or Section 3 exclusions. You have a defined window to put the application in order and, if needed, attend a hearing. The quality of this response often decides whether the patent is granted." },
      { label: "Startup advantage", text: "Recognised startups, small entities, and individual applicants pay reduced official fees and can request expedited examination under Rule 24C, shortening grant timelines from years to months." }
    ],
    closing: "We manage this sequence end to end - from disclosure and FFL clearance to FER responses - and flag at the outset whether a filing is worth pursuing."
  },
  {
    category: "Patent Strategy",
    date: "January 2026",
    title: "What Filing a Patent in India Actually Costs - A Startup Budget Guide",
    intro: "Patent cost is the first question most founders ask, and the honest answer is that official government fees are the smaller part of the picture. Understanding where money goes helps you budget across the full life of an application, not just the filing day.",
    points: [
      { label: "Three fee categories", text: "The Patent Office charges by applicant type. Natural persons, recognised startups, and small entities sit in the lowest bracket and pay roughly a fifth of what large entities pay for the same actions. Confirming your category before filing avoids overpaying." },
      { label: "Fees come in stages", text: "Costs are spread across filing, request for examination, responding to objections, and grant - not a single lump sum. The request for examination is one of the larger official fees, and it is mandatory to move forward." },
      { label: "Professional fees", text: "Drafting and prosecution by a patent agent is usually the largest line item, and it is where value is created or lost. A weak, cheap draft that cannot withstand examination costs far more than it saves." },
      { label: "Renewals are a long-term cost", text: "A granted patent must be renewed annually from the third year, with fees rising over the 20-year term. Budget for the portfolio, not just the application." }
    ],
    closing: "We give a clear, staged cost estimate up front and will tell you when a filing is not worth the spend - before you commit to it."
  },
  {
    category: "Patent Strategy",
    date: "January 2026",
    title: "When to file a provisional vs. complete specification in India",
    intro: "The choice between provisional and complete specifications is not just about timeline - it is about strategic positioning.",
    points: [
      { label: "Provisional specs work when", text: "Your invention is evolving rapidly, you need priority date protection while refining claims, or you are testing market fit before full commitment." },
      { label: "Complete specs make sense when", text: "Your invention is fully developed, claims are clear, and you want faster examination. You also skip the 12-month conversion deadline." },
      { label: "Common mistake", text: "Filing provisionals that are too vague. A provisional must enable the invention - thin descriptions will not support strong claims later. The 12-month window is for refinement, not invention." },
      { label: "India-specific", text: "Provisional specs do not undergo examination, but the complete spec must be filed within 12 months. Plan your timeline accordingly." }
    ],
    closing: "The right choice depends on your development stage, budget, and competitive landscape. We assess this as part of every patentability evaluation."
  }
];
