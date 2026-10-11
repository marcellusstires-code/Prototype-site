/* =========================================================
   Project portfolio data
   ---------------------------------------------------------
   The two restaurant entries reflect real client work (add specific locations,
   dates and photos when available). The rest are SAMPLE placeholders.
   - category: "residential" | "commercial"  (main filter)
   - millwork: true    -> also shows under the "Millwork" filter
   - restaurant: true  -> also shows under the "Restaurants" filter
   - image:    path to a real photo, e.g. "assets/img/projects/hoboken-kitchen.jpg".
               If left empty, a drawn illustration based on `art` is shown.
   - art:      "kitchen" | "library" | "ceiling" | "desk" | "bar" | "booth" | "stair"
   ========================================================= */
window.PROJECTS = [
  {
    id: "olive-garden",
    title: "Olive Garden Restaurants",
    location: "Multiple locations · for Darden Restaurants",
    category: "commercial",
    restaurant: true,
    millwork: true,
    art: "booth",
    image: "",
    summary: "We've done a number of projects for Darden Restaurants at Olive Garden locations, including build-outs, remodels and millwork. Each one is built to Darden's brand standards and scheduled so the restaurant reopens on time.",
    scope: "Restaurant build-outs, remodels, booths, host stands, millwork",
    duration: "",
    materials: ""
  },
  {
    id: "nyc-fine-dining",
    title: "High-End NYC Restaurants",
    location: "New York, NY",
    category: "commercial",
    restaurant: true,
    millwork: true,
    art: "bar",
    image: "",
    summary: "Interiors for some of New York City's high-end restaurants: statement bars, custom banquettes, wall paneling and detailed millwork, built to the standards of the city's top designers and coordinated with tight Manhattan job sites.",
    scope: "Interior construction, bar and back-bar millwork, banquettes, paneling",
    duration: "",
    materials: ""
  },
  {
    id: "brownstone-kitchen",
    title: "Brownstone Kitchen",
    location: "Hoboken, NJ",
    category: "residential",
    millwork: true,
    art: "kitchen",
    image: "",
    summary: "A full kitchen renovation in a 19th-century brownstone. We built inset painted cabinetry up to the ceiling, a walnut island and a hidden pantry wall.",
    scope: "Demolition, framing, custom cabinetry, finish carpentry",
    duration: "10 weeks",
    materials: "Painted maple, rift white oak, walnut"
  },
  {
    id: "library-built-ins",
    title: "Library Built-ins",
    location: "Montclair, NJ",
    category: "residential",
    millwork: true,
    art: "library",
    image: "",
    summary: "Floor-to-ceiling bookcases with a rolling ladder, integrated lighting and a fireplace surround. All of it was drawn, built and finished in our shop.",
    scope: "Design, shop drawings, fabrication, install",
    duration: "6 weeks",
    materials: "Quartersawn white oak, brass hardware"
  },
  {
    id: "office-reception",
    title: "Corporate Reception",
    location: "Jersey City, NJ",
    category: "commercial",
    millwork: true,
    art: "desk",
    image: "",
    summary: "A sculpted reception desk and slatted feature wall for a professional office lobby. We built it off-site, then installed it over one weekend so the office never had to close.",
    scope: "Commercial millwork, install, coordination with GC",
    duration: "5 weeks",
    materials: "White oak veneer, solid surface, steel"
  },
  {
    id: "townhouse-renovation",
    title: "Townhouse Gut Renovation",
    location: "Brooklyn, NY",
    category: "residential",
    millwork: false,
    art: "stair",
    image: "",
    summary: "A complete gut renovation of a three-story townhouse. The work included structural repairs, new systems, a rebuilt staircase and finishes on every floor.",
    scope: "General contracting, structural, MEP coordination, finishes",
    duration: "7 months",
    materials: "Red oak stair, plaster, custom trim package"
  }
];
