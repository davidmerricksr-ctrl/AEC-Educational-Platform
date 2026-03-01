/* ═══════════════════════════════════════════
   THE VAULT — Configuration
   ═══════════════════════════════════════════ */

var mediaItems = [];  /* populated by category files */

var mediaShelves = [
  { id: "recent",    title: "Fresh Intelligence \u2014 Feb/Mar 2026",        icon: "\u26a1",       subtitle: "Just declassified" },
  { id: "films",     title: "Films & Television",                           icon: "\ud83c\udfac", subtitle: "On screen" },
  { id: "books",     title: "Landmark Books on Economic Crime",             icon: "\ud83d\udcda", subtitle: "Required reading" },
  { id: "podcasts",  title: "Podcast Deep Dives",                           icon: "\ud83c\udfa7", subtitle: "Listen in" },
  { id: "reports",   title: "Reports & Analysis",                           icon: "\ud83d\udcca", subtitle: "Intelligence briefs" }
];

var mediaThemes = [
  "Money Laundering", "Fraud", "Crypto Crime", "Wall Street", "Sanctions",
  "Corporate Fraud", "Organised Crime", "Cyber Crime", "Regulation", "Offshore",
  "Kleptocracy", "Investigation", "Banking", "Terrorism Financing", "Whistleblowing"
];

var mediaTypeLabels = {
  film: "Film", tv: "TV Series", documentary: "Documentary",
  book: "Book", podcast: "Podcast", "podcast-series": "Podcast Series", report: "Report"
};

var mediaTypeIcons = {
  film: "\ud83c\udfac", tv: "\ud83d\udcfa", documentary: "\ud83c\udfa5",
  book: "\ud83d\udcd6", podcast: "\ud83c\udfa7", "podcast-series": "\ud83c\udf99\ufe0f", report: "\ud83d\udcca"
};

var typeGroups = {
  all:      { label: "All Dossiers", types: null },
  films:    { label: "Films & TV",   types: ["film", "tv", "documentary"] },
  books:    { label: "Books",        types: ["book"] },
  podcasts: { label: "Podcasts",     types: ["podcast", "podcast-series"] },
  reports:  { label: "Reports",      types: ["report"] }
};
