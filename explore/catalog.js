export const visualizations = [
  {
    id: "trendy-vs-timeless",
    title: "Trendy vs. Timeless",
    shortTitle: "Trendy vs. timeless",
    category: "Trendiness",
    description:
      "Compare names whose popularity is concentrated in a short burst with names whose usage is spread more evenly across generations.",
    instructions:
      "Choose Trendy Names or Timeless Names for the curve illustration and enter your own name/sex pairs above the chart if desired. The Table view lets you search, filter, classify, and sort all name/sex pairs with at least 5,000 observed all-time births.",
    methodology:
      "Trendiness is measured separately by sex as the percentage of a name's observed all-time births that occurred during its strongest consecutive 10-year window. Missing name-years are treated as zero and exact window ties use the earliest window. Table percentiles are computed within sex among name/sex pairs with at least 5,000 observed births.",
    dataThrough: 2025,
    iframeHeight: 835,
    embedMode: "scale",
    embedWidth: 1200,
    variants: [
      {
        id: "trendy",
        label: "Trendy Names",
        path: "../visualizations/showcase/trendiness-trendy.html",
        iframeHeight: 835,
        embedMode: "scale",
        embedWidth: 1200
      },
      {
        id: "timeless",
        label: "Timeless Names",
        path: "../visualizations/showcase/trendiness-timeless.html",
        iframeHeight: 835,
        embedMode: "scale",
        embedWidth: 1200
      },
      {
        id: "table",
        label: "Table",
        path: "../visualizations/showcase/trendiness-table.html",
        iframeHeight: 850,
        embedMode: "fluid"
      }
    ]
  },
  {
    id: "cultural-name-waves",
    title: "Cultural Influence",
    shortTitle: "Cultural influence",
    category: "Trendiness",
    description:
      "See how cultural moments and associations can create distinctive waves in the popularity of selected names.",
    instructions:
      "Use the controls in the visualization to change the displayed group or view. Hover over the heatmap for the underlying year and value.",
    methodology:
      "The figure uses U.S. Social Security Administration baby-name records through 2025. The displayed names are curated cultural examples rather than a complete classification of every name.",
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
    id: "comeback-names",
    title: "Comeback Names",
    shortTitle: "Comeback names",
    category: "Trendiness",
    description:
      "Find names whose recorded births are spread broadly across time, often reflecting durability or multiple waves of popularity.",
    instructions:
      "Comeback Names starts with the source example and lets you enter your own name/sex pairs, switch between Frequency and Percentage, and adjust the pre/post split year. The Table view supports searching, threshold filters, percentile categories, and sorting.",
    methodology:
      "The comeback score is the weighted population standard deviation of birth year, using observed SSA frequency as the weight and computed separately by sex. Larger values indicate births spread more broadly across time; this can reflect long durability or multiple popularity waves. The default illustration marks peaks before and after 1960.",
    dataThrough: 2025,
    iframeHeight: 835,
    embedMode: "scale",
    embedWidth: 1200,
    variants: [
      {
        id: "comeback",
        label: "Comeback Names",
        path: "../visualizations/showcase/comeback-names.html",
        iframeHeight: 835,
        embedMode: "scale",
        embedWidth: 1200
      },
      {
        id: "table",
        label: "Table",
        path: "../visualizations/showcase/comeback-table.html",
        iframeHeight: 850,
        embedMode: "fluid"
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
      "Compare closely related names—or male and female usage of the same name—across states and generations. Preset examples are included, or build your own comparison with up to three names.",
    instructions:
      "Choose a preset or Custom names above the visualization. In the custom tool, one entered name automatically compares male vs. female usage; two or three entered names compare combined usage. Use the generation control inside the map and hover over a state for local balance and frequency information.",
    methodology:
      "The maps compare recorded birth counts among the displayed choices within each state and period. The custom tool loads only the requested names from the compact state packets. Missing state-name-year observations are treated as zero, consistent with the preset visualizations; SSA suppresses state-year counts below five.",
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
      },
      {
        id: "custom",
        label: "Custom names",
        path: "../visualizations/showcase/name-balance-custom.html",
        iframeHeight: 980,
        embedMode: "scale",
        embedWidth: 1150
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
    id: "name-correlation-explorer",
    title: "Name Correlation Explorer",
    shortTitle: "Name correlations",
    category: "Correlations",
    description:
      "Explore correlation in baby-name popularity over time, either for a chosen pair of names or by finding the names most and least correlated with a target name.",
    instructions:
      "Choose Two-name explorer to compare any pair of names with the interactive scatter/time-series view. Choose Top/bottom correlates to find the five strongest and five weakest combined-frequency correlates for a target name among the 3,000 most common U.S. names of all time.",
    methodology:
      "The two-name view uses national SSA name packets and recalculates Pearson correlation for the selected sex and metric. The top/bottom view uses an annually precomputed Pearson-correlation lookup among the 3,000 most common names of all time; correlations use combined-sex national frequency curves over the full national year range with missing name-years treated as zero. The plotted curves themselves still come from the standard national name packets.",
    dataThrough: 2025,
    iframeHeight: 900,
    embedMode: "scale",
    embedWidth: 1100,
    variants: [
      {
        id: "pair",
        label: "Two-name explorer",
        path: "../visualizations/showcase/name-correlation-explorer.html"
      },
      {
        id: "correlates",
        label: "Top/bottom correlates",
        path: "../visualizations/showcase/name-correlation-correlates.html"
      }
    ]
  },
  {
    id: "top-names-over-time",
    title: "Top Names Over Time",
    shortTitle: "Top names over time",
    category: "Overall Patterns",
    description:
      "Explore how dominant the most popular names have been, from the changing cumulative leaders to the yearly share captured by the Top 10 and Top 100 and the overall concentration of the name distribution.",
    instructions:
      "Choose a view above the visualization. Cumulative Top 10 is an animated bar race through the historical record. Top 10 / Top 100 shows the yearly share of male and female births captured by the most popular names. Name concentration shows how cumulative share and individual-name frequency fall as all-time rank increases.",
    methodology:
      "The three views summarize different aspects of name concentration. The cumulative race ranks names by recorded births accumulated from 1880 through each year. The Top 10 / Top 100 view ranks names separately within each year and sex and divides the selected names' births by all recorded births for that year/sex. The concentration view ranks names by all-time recorded frequency and shows cumulative share together with the frequency at each rank.",
    dataThrough: 2025,
    iframeHeight: 750,
    embedMode: "scale",
    embedWidth: 1100,
    variants: [
      {
        id: "cumulative",
        label: "Cumulative Top 10",
        path: "../visualizations/showcase/cumulative-name-bar-race.html",
        iframeHeight: 750,
        embedMode: "scale",
        embedWidth: 1100
      },
      {
        id: "top-share",
        label: "Top 10 / Top 100",
        path: "../visualizations/showcase/top10-top100-share-by-sex.html",
        iframeHeight: 650,
        embedMode: "scale",
        embedWidth: 1050
      },
      {
        id: "concentration",
        label: "Name concentration",
        path: "../visualizations/showcase/name-concentration.html",
        iframeHeight: 650,
        embedMode: "scale",
        embedWidth: 1050
      }
    ]
  },
  {
    id: "name-guessing-game",
    title: "Name Guessing Game",
    shortTitle: "Name guessing game",
    category: "Interactive tools",
    description:
      "Guess baby names from their historical popularity curves, then inspect the same names through sex-specific trends and state geography.",
    instructions:
      "Single curve gives one hidden name with four choices across five increasing difficulty levels. Match asks you to match three numbered curves to three names. Custom accepts any 2–6 names available in the packet data. Use the View, Sex, Y, Scale, and generation controls to inspect the evidence before answering.",
    methodology:
      "Rounds 1–4 are precomputed from the 1,000 most common U.S. names of all time, using curve shape, popularity, peak timing, sex balance, and geographic differentiation to tune difficulty. Round 5 uses curated themed name groups. The website stores only the compact round banks; national curves and state maps are loaded on demand from the standard name packets. Custom mode is unrestricted by the round-bank universe.",
    dataThrough: 2025,
    iframeHeight: 900,
    embedMode: "fluid",
    variants: [
      {
        id: "game",
        label: "Play game",
        path: "../visualizations/showcase/name-guessing-game.html"
      }
    ]
  },
  {
    id: "yearbook-guesser",
    title: "Yearbook Guesser",
    shortTitle: "Yearbook guesser",
    category: "Interactive tools",
    description:
      "Estimate a shared birth year from a group of first names using their historical national popularity patterns.",
    instructions:
      "Choose one of the three example groups or Custom input above the visualization. The examples use fixed name lists; the custom tool accepts names separated by commas, semicolons, or line breaks. Use the Frequency/Percentage dropdown inside the chart to change how the individual name curves are displayed.",
    methodology:
      "The model uses combined-sex national SSA name frequencies. Individual name curves receive light 3-year weighted smoothing, then a floor of four births prevents zero probabilities. For each candidate year, the model combines P(name | birth year) across all entered names, normalizes the likelihood curve, and reports its median year. Duplicate names count multiple times.",
    dataThrough: 2025,
    iframeHeight: 820,
    embedMode: "scale",
    embedWidth: 1100,
    variants: [
      {
        id: "mambo5",
        label: "Mambo No. 5",
        path: "../visualizations/showcase/yearbook-mambo5.html"
      },
      {
        id: "dream-team",
        label: "USA Dream Team",
        path: "../visualizations/showcase/yearbook-dream-team.html"
      },
      {
        id: "friends",
        label: "Friends Cast",
        path: "../visualizations/showcase/yearbook-friends.html"
      },
      {
        id: "custom",
        label: "Custom input",
        path: "../visualizations/showcase/yearbook-custom.html"
      }
    ]
  },
  {
    id: "draw-name-curve",
    title: "Draw a Name Curve",
    shortTitle: "Draw a curve",
    category: "Correlations",
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
