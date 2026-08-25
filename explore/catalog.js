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
    id: "christian-muslim-state-maps",
    title: "Religion",
    shortTitle: "Religion",
    category: "Global Influence",
    description:
      "Compare broad national and state patterns in the recorded use of selected Christian/Biblical-associated and Muslim-associated names.",
    instructions:
      "Choose the National view for the two time-series curves or the State view for the animated maps. <b>The National graph uses dual y-axes:</b> read the Christian-name scale on the left and the Muslim-name scale on the right. In the State view, use the year slider or play controls and hover over states for details.",
    instructionsHtml:
      "Choose the National view for the two time-series curves or the State view for the animated maps. <b>The National graph uses dual y-axes:</b> read the Christian-name scale on the left and the Muslim-name scale on the right. In the State view, use the year slider or play controls and hover over states for details.",
    methodology:
      "These visualizations use curated Christian/Biblical and Muslim name lists. A person's name does not determine their religion, and these unofficial lists are likely incomplete. They were pieced together from religious texts and historical writings with the help of AI.",
    methodologyHtml:
      "These visualizations use curated <a href=\"./global-influence-name-lists.html#christian\" target=\"_blank\" rel=\"noopener\">Christian/Biblical</a> and <a href=\"./global-influence-name-lists.html#muslim\" target=\"_blank\" rel=\"noopener\">Muslim</a> name lists. A person's name does not determine their religion, and these unofficial lists are likely incomplete. The lists were pieced together from religious texts and historical writings with the help of AI. National percentages use all observed U.S. births in each year as the denominator and combine male and female frequencies.",
    dataThrough: 2025,
    iframeHeight: 760,
    embedMode: "scale",
    embedWidth: 1200,
    variants: [
      {
        id: "national",
        label: "Christian and Muslim National",
        path: "../visualizations/showcase/christian-muslim-national.html",
        iframeHeight: 700,
        embedMode: "scale",
        embedWidth: 1200
      },
      {
        id: "state",
        label: "Christian and Muslim by State",
        path: "../visualizations/showcase/christian-muslim-state-maps.html",
        iframeHeight: 780,
        embedMode: "scale",
        embedWidth: 1250
      }
    ]
  },
  {
    id: "migration-global-influence",
    title: "Migration",
    shortTitle: "Migration",
    category: "Global Influence",
    description:
      "Compare how the recorded share of selected German-associated and Irish-associated names has changed across U.S. birth years.",
    instructions:
      "<b>This graph uses dual y-axes:</b> read the German-name scale on the left and the Irish-name scale on the right. The curves are directly labeled; use the Plotly toolbar if you want to save a high-resolution image.",
    instructionsHtml:
      "<b>This graph uses dual y-axes:</b> read the German-name scale on the left and the Irish-name scale on the right. The curves are directly labeled; use the Plotly toolbar if you want to save a high-resolution image.",
    methodology:
      "This visualization uses curated Irish and German name lists. A person's name does not determine ancestry, nationality, or migration history, and these unofficial lists are likely incomplete. The lists were assembled from historical naming references with the help of AI.",
    methodologyHtml:
      "This visualization uses curated <a href=\"./global-influence-name-lists.html#irish\" target=\"_blank\" rel=\"noopener\">Irish</a> and <a href=\"./global-influence-name-lists.html#german\" target=\"_blank\" rel=\"noopener\">German</a> name lists. A person's name does not determine ancestry, nationality, or migration history, and these unofficial lists are likely incomplete. The lists were assembled from historical naming references with the help of AI. Percentages use all observed U.S. births in each year as the denominator and combine male and female frequencies.",
    dataThrough: 2025,
    iframeHeight: 700,
    embedMode: "scale",
    embedWidth: 1200,
    variants: [
      {
        id: "national",
        label: "Irish and German National",
        path: "../visualizations/showcase/irish-german-national.html"
      }
    ]
  },
  {
    id: "first-letter-patterns",
    title: "First and Last Letters",
    shortTitle: "First and last letters",
    category: "Structural Patterns",
    description:
      "Explore how first and last letters are distributed across names and how strongly different letter patterns lean female or male.",
    instructions:
      "First letter popularity compares the share of male and female births beginning with each letter across time; hover over a cell to see the five leading names for that sex, letter, and period. Sex Balance compares female and male usage for both first and last letters.",
    methodology:
      "The first-letter heatmap summarizes recorded SSA births separately by sex and period. Its hover lists show the five highest-frequency names for the selected first letter, with each name's share of all births for that sex and period. The Sex Balance view compares female and male shares among recorded births for names beginning or ending with each letter.",
    dataThrough: 2025,
    iframeHeight: 700,
    embedMode: "scale",
    embedWidth: 1200,
    variants: [
      {
        id: "first-letter",
        label: "First letter popularity",
        path: "../visualizations/showcase/first-letter-patterns.html",
        iframeHeight: 690,
        embedMode: "scale",
        embedWidth: 1150
      },
      {
        id: "sex-balance",
        label: "Sex Balance",
        path: "../visualizations/showcase/sex-balance-name-structure.html",
        iframeHeight: 700,
        embedMode: "scale",
        embedWidth: 1200
      }
    ]
  },
  {
    id: "scrabble-score",
    title: "Scrabble Score",
    shortTitle: "Scrabble score",
    category: "Structural Patterns",
    description:
      "Compare the frequency-weighted average Scrabble score of U.S. baby names across years and states.",
    instructions:
      "Average score over time shows Combined, Male, and Female national curves. Hover a curve/year to see the five highest-scoring names above the selected birth threshold for that year; changing the threshold does not change the curves. Average score by state uses the Sex dropdown and the year slider, with All time at the far left.",
    methodology:
      "Each name receives the standard English-language Scrabble letter score, ignoring non-letter characters. National and state averages weight each name's score by recorded birth frequency. The national hover threshold uses births in the hovered year only. The state map uses all observed names in each state/year (or all years for All time). Combined, Male, and Female use separate purple, blue, and pink single-hue gradients. All time has its own within-sex color range, while all individual years share a second within-sex range so year-to-year comparisons remain consistent.",
    dataThrough: 2025,
    iframeHeight: 750,
    embedMode: "scale",
    embedWidth: 1200,
    variants: [
      {
        id: "over-time",
        label: "Average score over time",
        path: "../visualizations/showcase/scrabble-score-over-time.html",
        iframeHeight: 725,
        embedMode: "scale",
        embedWidth: 1200
      },
      {
        id: "by-state",
        label: "Average score by state",
        path: "../visualizations/showcase/scrabble-score-by-state.html",
        iframeHeight: 750,
        embedMode: "scale",
        embedWidth: 1050
      }
    ]
  },
  {
    id: "unisex-name-evolution",
    title: "Unisex Name Evolution",
    shortTitle: "Unisex evolution",
    category: "Structural Patterns",
    description:
      "Explore how names move between female- and male-leaning usage over time, how all recorded births are distributed by a name's sex balance, and the complete all-time name table.",
    instructions:
      "Evolution Scatter Plot uses the existing generation control and hover behavior. Distribution Histogram lets you switch between births and distinct-name counts, choose 1%, 2%, 4%, or 10% male-share bins, and use a linear or logarithmic y-axis; hover a bar for its five most popular names. In the Table view, search for a name, set a minimum all-time-birth threshold, or move the Table order slider from All Female to All Male.",
    methodology:
      "The Evolution Scatter Plot compares male and female birth frequencies for selected prominent unisex names on logarithmic axes. The Distribution Histogram groups names by the share of their recorded all-time births that are male, then either sums births or counts distinct names within each group. Bin labels show boundaries: for example, 48–52% male means [48, 52), so 48% is included and 52% is not; the final bin includes 100%. The colors move from female-leaning pink through neutral to male-leaning blue. The Table uses the same all-time male/female totals and percentages.",
    dataThrough: 2025,
    iframeHeight: 850,
    embedMode: "scale",
    embedWidth: 1100,
    variants: [
      {
        id: "scatter",
        label: "Evolution Scatter Plot",
        path: "../visualizations/showcase/unisex-name-evolution.html",
        iframeHeight: 800,
        embedMode: "scale",
        embedWidth: 760
      },
      {
        id: "histogram",
        label: "Distribution Histogram",
        path: "../visualizations/showcase/unisex-name-distribution-histogram.html",
        iframeHeight: 700,
        embedMode: "scale",
        embedWidth: 1100
      },
      {
        id: "table",
        label: "Table",
        path: "../visualizations/showcase/unisex-name-evolution-table.html",
        iframeHeight: 850,
        embedMode: "fluid"
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
    id: "state-over-under-representation",
    title: "Over/Underrepresentation by State",
    shortTitle: "Over/underrepresentation",
    category: "States and geography",
    description:
      "Find the names that are unusually common—or unusually uncommon—in each state compared with the nation as a whole.",
    instructions:
      "Choose All Sexes, Male, or Female; choose All time or a generation; and choose the minimum national all-time births (5,000 by default). Each state is labeled with its most overrepresented qualifying name. Hover over a state to see its five most overrepresented and five most underrepresented qualifying names, along with the representation ratio and the recorded births for that name in the selected state and period.",
    methodology:
      "Representation compares a name's share of recorded births in a state with its share of recorded births nationally over the same selected period. A value of 2.0× means the name represents twice as large a share of births in that state as it does nationally; 0.5× means half the national share. The minimum-birth control is based on the name's national all-time recorded births for the selected sex. The Births column in the hover is the recorded number of births for that name in the selected state, generation, and sex. Underrepresentation lists include only names with recorded births in that state and period because SSA suppresses state-level counts below five; a missing observation is therefore not treated as a confirmed zero. Map shading reflects each state's strongest qualifying overrepresentation.",
    dataThrough: 2025,
    iframeHeight: 790,
    embedMode: "scale",
    embedWidth: 1100,
    variants: [
      {
        id: "default",
        label: "Open visualization",
        path: "../visualizations/showcase/over-under-representation-by-state.html"
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
