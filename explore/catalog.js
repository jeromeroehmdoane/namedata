export const visualizations = [
  {
    id: "cultural-name-waves",
    title: "Cultural Name Waves",
    shortTitle: "Cultural waves",
    category: "Names over time",
    description:
      "Explore how selected groups of culturally connected names rose and fell across U.S. birth years.",
    instructions:
      "Use the controls in the visualization to change the displayed group or view. Hover over the heatmap for the underlying year and value.",
    methodology:
      "The figure uses U.S. Social Security Administration baby-name records through 2025. The displayed names are curated examples rather than a complete classification of every name.",
    dataThrough: 2025,
    iframeHeight: 930,
    embedMode: "scale",
    embedWidth: 900,
    variants: [
      {
        id: "default",
        label: "Open visualization",
        path: "../visualizations/showcase/cultural-name-waves.html"
      }
    ]
  },
  {
    id: "unisex-name-evolution",
    title: "Unisex Name Evolution",
    shortTitle: "Unisex evolution",
    category: "Names over time",
    description:
      "Follow how prominent unisex names move between male- and female-leaning usage across generations.",
    instructions:
      "Use the generation control to move through time. Hover over a point to identify the name and compare its male and female birth frequencies.",
    methodology:
      "Each point represents a selected unisex name. Position compares male and female birth frequencies on logarithmic axes using U.S. Social Security Administration records through 2025.",
    dataThrough: 2025,
    iframeHeight: 840,
    embedMode: "scale",
    embedWidth: 760,
    variants: [
      {
        id: "default",
        label: "Open visualization",
        path: "../visualizations/showcase/unisex-name-evolution.html"
      }
    ]
  },
  {
    id: "first-letter-patterns",
    title: "First-Letter Patterns",
    shortTitle: "First-letter patterns",
    category: "Name structure",
    description:
      "Compare how the first letters of male and female baby names are distributed across the alphabet.",
    instructions:
      "Hover over a heatmap cell to see the letter and percentage. Compare the male and female panels for concentrations and contrasts.",
    methodology:
      "Percentages are based on recorded U.S. Social Security Administration births through 2025 and summarize the distribution of name initials separately by sex.",
    dataThrough: 2025,
    iframeHeight: 690,
    embedMode: "scale",
    embedWidth: 1150,
    variants: [
      {
        id: "default",
        label: "Open visualization",
        path: "../visualizations/showcase/first-letter-patterns.html"
      }
    ]
  },
  {
    id: "sex-balance-name-structure",
    title: "Sex Balance by Name Structure",
    shortTitle: "Sex balance by structure",
    category: "Name structure",
    description:
      "See which first and last letters are most strongly associated with female or male name usage.",
    instructions:
      "Hover over a cell to inspect the letter and sex balance. Compare the first-letter and last-letter panels.",
    methodology:
      "The color scale compares female and male shares among recorded births for names beginning or ending with each letter in U.S. Social Security Administration data through 2025.",
    dataThrough: 2025,
    iframeHeight: 700,
    embedMode: "scale",
    embedWidth: 1200,
    variants: [
      {
        id: "default",
        label: "Open visualization",
        path: "../visualizations/showcase/sex-balance-name-structure.html"
      }
    ]
  },
  {
    id: "christian-muslim-state-maps",
    title: "Christian and Muslim Names by State",
    shortTitle: "Religious name patterns",
    category: "States and geography",
    description:
      "Compare the recorded share of selected Christian-associated and Muslim-associated names across states and years.",
    instructions:
      "Use the year slider or play controls to move through time. Hover over either map to inspect the state and displayed share.",
    methodology:
      "The maps use curated lists of names associated with Christian and Muslim traditions. They describe aggregate naming patterns and do not identify any individual person's religion or fully classify every culturally shared name.",
    dataThrough: 2025,
    iframeHeight: 780,
    embedMode: "scale",
    embedWidth: 1250,
    variants: [
      {
        id: "default",
        label: "Open visualization",
        path: "../visualizations/showcase/christian-muslim-state-maps.html"
      }
    ]
  },
  {
    id: "top-name-by-state",
    title: "Top Name by State",
    shortTitle: "Top name by state",
    category: "States and geography",
    description:
      "Watch the most common female or male baby name change across states and years.",
    instructions:
      "Choose Female or Male above the visualization. Use the year control inside the map to move through time, and hover over a state for details.",
    methodology:
      "Each state is colored by its highest-frequency name for the selected sex and year in the U.S. Social Security Administration state files. Ties follow the ranking logic used when the visualization was generated.",
    dataThrough: 2025,
    iframeHeight: 720,
    embedMode: "scale",
    embedWidth: 950,
    variants: [
      {
        id: "female",
        label: "Female",
        path: "../visualizations/showcase/top-name-by-state/female.html"
      },
      {
        id: "male",
        label: "Male",
        path: "../visualizations/showcase/top-name-by-state/male.html"
      }
    ]
  },
  {
    id: "name-balance-by-state",
    title: "Name Balance by State",
    shortTitle: "Name balance by state",
    category: "States and geography",
    description:
      "Compare closely related names—or male and female usage of the same name—across states and generations.",
    instructions:
      "Choose an example above the visualization, then use the generation control inside the map. Hover over a state for the local balance and frequency information.",
    methodology:
      "Each example compares the relative recorded frequencies of the displayed names within each state. Low counts are subject to the Social Security Administration's suppression of state-year values below five.",
    dataThrough: 2025,
    iframeHeight: 940,
    embedMode: "scale",
    embedWidth: 1150,
    variants: [
      {
        id: "aspen-forrest",
        label: "Aspen vs. Forrest",
        path: "../visualizations/showcase/name-balance-aspen-forrest.html"
      },
      {
        id: "casey",
        label: "Casey: male vs. female",
        path: "../visualizations/showcase/name-balance-casey.html"
      },
      {
        id: "dwayne",
        label: "Dwayne / Dewayne / Duane",
        path: "../visualizations/showcase/name-balance-dwayne.html"
      },
      {
        id: "summer-autumn",
        label: "Summer vs. Autumn",
        path: "../visualizations/showcase/name-balance-summer-autumn.html"
      }
    ]
  },
  {
    id: "place-names-state-national",
    title: "Place Names: State vs. National",
    shortTitle: "Place names",
    category: "States and geography",
    description:
      "Compare how strongly place-related names are used in their associated state versus nationwide.",
    instructions:
      "Hover over either endpoint of a barbell to compare the in-state and national rates for each place-related name.",
    methodology:
      "Rates are shown as recorded births per 100,000 and compare a selected name's use in an associated state with its national use. The horizontal axis uses a base-2 logarithmic scale.",
    dataThrough: 2025,
    iframeHeight: 800,
    embedMode: "scale",
    embedWidth: 900,
    variants: [
      {
        id: "default",
        label: "Open visualization",
        path: "../visualizations/showcase/place-names-state-vs-national.html"
      }
    ]
  },
  {
    id: "leading-lagging-states",
    title: "Leading and Lagging States",
    shortTitle: "Leading and lagging states",
    category: "States and geography",
    description:
      "Explore whether naming trends tend to appear earlier or later in individual states than they do nationally, then test the pattern for a name and state of your choice.",
    instructions:
      "Choose National overview for the state-level summary, or Custom name + state to compare one state with the national trend. The custom tool starts with Kayden in Utah; enter any name and state, then move the shift slider to see how alignment changes. For another interesting example, try Deloris in South Carolina.",
    methodology:
      "Positive shifts indicate that a state's naming pattern appears earlier than the national pattern; negative shifts indicate later patterns. The overview combines many name-level shifts using the weighting defined when it was generated. The custom tool uses the selected name's packet data, 5-year centered smoothing, and the strongest correlation across shifts from -20 to +20 years.",
    dataThrough: 2025,
    variants: [
      {
        id: "overview",
        label: "National overview",
        path: "../visualizations/showcase/state-lead-lag-map.html",
        iframeHeight: 730,
        embedMode: "scale",
        embedWidth: 1000
      },
      {
        id: "custom",
        label: "Custom name + state",
        path: "../visualizations/showcase/leading-lagging-explorer.html",
        iframeHeight: 735,
        embedMode: "fluid"
      }
    ]
  },
  {
    id: "geographic-name-distance",
    title: "Geographic Distance vs. Name Distance",
    shortTitle: "Geographic vs. name distance",
    category: "States and geography",
    description:
      "Investigate whether states that are geographically close also have more similar baby-name distributions.",
    instructions:
      "Choose centroid or minimum geographic distance, hover over state pairs, or enter a two-letter state abbreviation to highlight all pairs involving that state.",
    methodology:
      "Each point represents a pair of states. Geographic distance is measured either between state centroids or as minimum separation, while name distance is derived from the similarity of the states' baby-name distributions.",
    dataThrough: 2025,
    iframeHeight: 790,
    embedMode: "scale",
    embedWidth: 1100,
    heavy: true,
    variants: [
      {
        id: "default",
        label: "Open visualization",
        path: "../visualizations/showcase/geographic-name-distance.html"
      }
    ]
  },
  {
    id: "draw-name-curve",
    title: "Draw a Name Curve",
    shortTitle: "Draw a curve",
    category: "Interactive tools",
    description:
      "Draw a popularity curve and find historical baby names whose trajectories most closely match it.",
    instructions:
      "Draw directly in the chart area, select the comparison settings, and run the matcher. The application contains its own controls and results panel.",
    methodology:
      "The matcher compares the shape you draw with precomputed name-popularity trajectories from U.S. Social Security Administration records through 2025. Similarity describes curve shape, not name meaning or demographic identity.",
    dataThrough: 2025,
    iframeHeight: 980,
    embedMode: "fluid",
    heavy: true,
    variants: [
      {
        id: "default",
        label: "Open interactive tool",
        path: "../visualizations/showcase/drawn-curve-matcher.html"
      }
    ]
  }
];

export function getVisualization(id) {
  return visualizations.find(item => item.id === id) ?? null;
}

export function getVariant(item, variantId) {
  if (!item) return null;
  return (
    item.variants.find(variant => variant.id === variantId) ??
    item.variants[0] ??
    null
  );
}
