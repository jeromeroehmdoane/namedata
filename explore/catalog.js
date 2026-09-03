export const visualizations = [
  {
    "id": "cumulative-top-10",
    "title": "Cumulative Top 10",
    "shortTitle": "Cumulative Top 10",
    "category": "Top Names Over Time",
    "description": "Watch the names with the most accumulated U.S. births rise, fall, and trade places across the historical record.",
    "instructions": "Use the play and year controls to move through time. The bars show the leading names based on all recorded births accumulated up to the selected year.",
    "methodology": "For each year, names are ranked by their cumulative recorded U.S. births from the beginning of the national Social Security baby-name data through that year.",
    "iframeHeight": 750,
    "embedMode": "scale",
    "embedWidth": 1100,
    "variants": [
      {
        "id": "default",
        "label": "Open visualization",
        "path": "../visualizations/showcase/cumulative-name-bar-race.html"
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/cumulative-top-10--y1880.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/cumulative-top-10--y1880.webp",
        "duration": 1000
      },
      {
        "src": "../assets/thumbnails/explore/cumulative-top-10--y1920.webp",
        "duration": 1000
      },
      {
        "src": "../assets/thumbnails/explore/cumulative-top-10--y1960.webp",
        "duration": 1000
      },
      {
        "src": "../assets/thumbnails/explore/cumulative-top-10--y2000.webp",
        "duration": 1000
      },
      {
        "src": "../assets/thumbnails/explore/cumulative-top-10--y2025.webp",
        "duration": 1000
      }
    ]
  },
  {
    "id": "top-10-and-100-proportions",
    "title": "Top 10 and 100 Proportions",
    "shortTitle": "Top 10 and 100 Proportions",
    "category": "Top Names Over Time",
    "description": "See how much of each year's naming is captured by the 10 and 100 most popular names.",
    "instructions": "Hover over the curves to see the top names for each year.",
    "methodology": "Within each year and sex, names are ranked by recorded births. The chart shows the share of births within the specified sex represented by the Top 10 and Top 100 names for each year.",
    "iframeHeight": 650,
    "embedMode": "scale",
    "embedWidth": 1050,
    "variants": [
      {
        "id": "default",
        "label": "Open visualization",
        "path": "../visualizations/showcase/top10-top100-share-by-sex.html"
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/top-10-and-100-proportions.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/top-10-and-100-proportions.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "top-name-concentrations",
    "title": "Top Name Concentrations",
    "shortTitle": "Top Name Concentrations",
    "category": "Top Names Over Time",
    "description": "Explore how quickly births become concentrated among the most common names and how frequency decays with all-time rank.",
    "instructions": "Hover along the curves to see individual names or input a name to highlight it. Click and drag to zoom in on a specific part of the graph.",
    "methodology": "Names are ranked by their all-time recorded U.S. births. The visualization compares the cumulative share of births accounted for by the highest-ranked names with the birth count of names at each rank.",
    "iframeHeight": 650,
    "embedMode": "scale",
    "embedWidth": 1050,
    "variants": [
      {
        "id": "default",
        "label": "Open visualization",
        "path": "../visualizations/showcase/name-concentration.html"
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/top-name-concentrations.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/top-name-concentrations.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "top-name-by-state-and-year",
    "title": "Top Name by State and Year",
    "shortTitle": "Top Name by State and Year",
    "category": "States and Geography",
    "description": "See which baby name ranked first in each state and how those leaders changed over time.",
    "instructions": "Choose Male or Female above the visualization, then use the year control in the map. Hover over a state for its leading name and local details.",
    "methodology": "For each state, year, and selected sex, the displayed name is the one with the highest recorded birth count in the Social Security state data.",
    "iframeHeight": 720,
    "embedMode": "scale",
    "embedWidth": 950,
    "variants": [
      {
        "id": "male",
        "label": "Male",
        "path": "../visualizations/showcase/top-name-by-state/male.html"
      },
      {
        "id": "female",
        "label": "Female",
        "path": "../visualizations/showcase/top-name-by-state/female.html"
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/top-name-by-state-and-year--y1910.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/top-name-by-state-and-year--y1910.webp",
        "duration": 1000
      },
      {
        "src": "../assets/thumbnails/explore/top-name-by-state-and-year--y1940.webp",
        "duration": 1000
      },
      {
        "src": "../assets/thumbnails/explore/top-name-by-state-and-year--y1970.webp",
        "duration": 1000
      },
      {
        "src": "../assets/thumbnails/explore/top-name-by-state-and-year--y2000.webp",
        "duration": 1000
      },
      {
        "src": "../assets/thumbnails/explore/top-name-by-state-and-year--y2025.webp",
        "duration": 1000
      }
    ]
  },
  {
    "id": "places-and-people",
    "title": "Places and People",
    "shortTitle": "Places and People",
    "category": "States and Geography",
    "description": "Compare place-related names with the places they are associated with and see whether they are unusually common there.",
    "instructions": "Hover over either endpoint for a place-related name to compare its birth rate in the associated state with its national birth rate.",
    "methodology": "The chart compares recorded births per 100,000 in an associated state with the national rate for the same name. The horizontal scale is logarithmic so large and small differences can be viewed together.",
    "iframeHeight": 800,
    "embedMode": "scale",
    "embedWidth": 900,
    "variants": [
      {
        "id": "default",
        "label": "Open visualization",
        "path": "../visualizations/showcase/place-names-state-vs-national.html"
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/places-and-people.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/places-and-people.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "leading-and-lagging-states",
    "title": "Leading and Lagging States",
    "shortTitle": "Leading and Lagging States",
    "category": "States and Geography",
    "description": "Explore which states tend to experience baby-name trends earlier or later than the national pattern.",
    "instructions": "Hover over the map to compare states. Positive values indicate that naming trends tend to appear earlier in the state; negative values indicate that they tend to appear later.",
    "methodology": "The overview compares the timing of many state-level name trends with their national patterns. State results summarize whether local popularity curves tend to lead or lag the corresponding national curves. See the Individual view for examples.",
    "iframeHeight": 730,
    "embedMode": "scale",
    "embedWidth": 1000,
    "variants": [
      {
        "id": "default",
        "label": "Open visualization",
        "path": "../visualizations/showcase/state-lead-lag-map.html"
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/leading-and-lagging-states.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/leading-and-lagging-states.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "over-under-representation",
    "title": "Over/Under Representation",
    "shortTitle": "Over/Under Representation",
    "category": "States and Geography",
    "description": "Find names that account for a much larger—or much smaller—share of births in a state than they do nationally.",
    "instructions": "Choose sex, generation, and a minimum national all-time birth count. Each state is labeled with its most overrepresented qualifying name. Hover over a state for the five most overrepresented and five most underrepresented names, their ratios, and local birth counts.",
    "methodology": "Representation compares a name's share of recorded births in a state with its share nationally over the same period. A value of 2× means the name's share is twice as large in that state; 0.5× means half as large. Names missing from the state data are not treated as confirmed zeroes because very small state-year counts are suppressed.",
    "iframeHeight": 790,
    "embedMode": "scale",
    "embedWidth": 1100,
    "variants": [
      {
        "id": "default",
        "label": "Open visualization",
        "path": "../visualizations/showcase/over-under-representation-by-state.html"
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/over-under-representation.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/over-under-representation.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "geographic-vs-name-distance",
    "title": "Geographic vs. Name Distance",
    "shortTitle": "Geographic vs. Name Distance",
    "category": "States and Geography",
    "description": "Test whether states that are geographically close also tend to have more similar baby-name distributions.",
    "instructions": "Choose the geographic-distance definition, hover over state pairs, or enter a two-letter state abbreviation to highlight every pair involving that state.",
    "methodology": "Each point represents a pair of states. The horizontal axis measures physical distance between the states; the vertical axis measures how different their baby-name distributions are.",
    "iframeHeight": 790,
    "embedMode": "scale",
    "embedWidth": 1100,
    "variants": [
      {
        "id": "default",
        "label": "Open visualization",
        "path": "../visualizations/showcase/geographic-name-distance.html"
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/geographic-vs-name-distance.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/geographic-vs-name-distance.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "scrabble-scores-by-state",
    "title": "Scrabble Scores by State",
    "shortTitle": "Scrabble Scores by State",
    "category": "States and Geography",
    "description": "Compare the average Scrabble letter score of baby names across states.",
    "instructions": "Choose All Sexes, Male, or Female and use the year slider. Hover over a state to see its average score.",
    "methodology": "Each name receives the standard English-language Scrabble letter score. State averages weight each name's score by its recorded births.",
    "iframeHeight": 750,
    "embedMode": "scale",
    "embedWidth": 1050,
    "variants": [
      {
        "id": "default",
        "label": "Open visualization",
        "path": "../visualizations/showcase/scrabble-score-by-state.html"
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/scrabble-state.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/scrabble-state.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "states-connected-pairs-and-trios",
    "title": "Connected Pairs and Trios",
    "shortTitle": "Connected Pairs and Trios",
    "category": "States and Geography",
    "description": "Compare closely related names—or male and female usage of the same name—across states.",
    "instructions": "Choose a preset comparison or Custom names above the visualization. For custom comparisons, one name compares male and female usage; two or three names compare combined usage. Use the period control in the map and hover over states for local details.",
    "methodology": "The maps compare recorded birth counts among the displayed choices within each state and period. Very small state-year counts are suppressed in the source data, so missing observations may represent either zero or fewer than five recorded births.",
    "iframeHeight": 940,
    "embedMode": "scale",
    "embedWidth": 1150,
    "variants": [
      {
        "id": "aspen-forrest",
        "label": "Aspen vs. Forrest",
        "path": "../visualizations/showcase/name-balance-aspen-forrest.html"
      },
      {
        "id": "casey",
        "label": "Casey: male vs. female",
        "path": "../visualizations/showcase/name-balance-casey.html"
      },
      {
        "id": "dwayne",
        "label": "Dwayne / Dewayne / Duane",
        "path": "../visualizations/showcase/name-balance-dwayne.html"
      },
      {
        "id": "summer-autumn",
        "label": "Summer vs. Autumn",
        "path": "../visualizations/showcase/name-balance-summer-autumn.html"
      },
      {
        "id": "custom",
        "label": "Custom names",
        "path": "../visualizations/showcase/name-balance-custom.html",
        "iframeHeight": 980,
        "embedMode": "scale",
        "embedWidth": 1150
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/aspen-forrest.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/aspen-forrest.webp",
        "duration": 3000
      },
      {
        "src": "../assets/thumbnails/explore/casey.webp",
        "duration": 3000
      },
      {
        "src": "../assets/thumbnails/explore/dwayne.webp",
        "duration": 3000
      },
      {
        "src": "../assets/thumbnails/explore/summer-autumn.webp",
        "duration": 3000
      },
      {
        "src": "../assets/thumbnails/explore/custom-connected.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "first-and-last-letters",
    "title": "First and Last Letters",
    "shortTitle": "First and Last Letters",
    "category": "Structural Patterns",
    "description": "Explore how the letters at the beginning and end of names relate to popularity and sex balance.",
    "instructions": "In First Letter Popularity, hover over the heatmap to see leading names for each letter, sex, and period. In Sex Balance, compare how strongly first- and last-letter patterns lean female or male.",
    "methodology": "The first-letter view summarizes recorded births by sex, letter, and time period. The sex-balance view compares female and male shares among names beginning or ending with each letter. Boxes are sized according to total births.",
    "iframeHeight": 700,
    "embedMode": "scale",
    "embedWidth": 1200,
    "variants": [
      {
        "id": "first-letter",
        "label": "First Letter Popularity",
        "path": "../visualizations/showcase/first-letter-patterns.html",
        "iframeHeight": 690,
        "embedMode": "scale",
        "embedWidth": 1150
      },
      {
        "id": "sex-balance",
        "label": "Sex Balance",
        "path": "../visualizations/showcase/sex-balance-name-structure.html",
        "iframeHeight": 700,
        "embedMode": "scale",
        "embedWidth": 1200
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/first-letter.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/first-letter.webp",
        "duration": 3000
      },
      {
        "src": "../assets/thumbnails/explore/sex-balance.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "scrabble-scores",
    "title": "Scrabble Scores",
    "shortTitle": "Scrabble Scores",
    "category": "Structural Patterns",
    "description": "Use Scrabble letter values as a playful way to compare the changing structure of U.S. baby names.",
    "instructions": "Average Score Over Time compares national trends for All Sexes, Male, and Female; hover a year for high-scoring names above the selected birth threshold. Average Score by State lets you choose sex and year and compare states on a map.",
    "methodology": "Each name receives the standard English-language Scrabble score. Averages are weighted by recorded births, so common names contribute more than rare names.",
    "iframeHeight": 750,
    "embedMode": "scale",
    "embedWidth": 1200,
    "variants": [
      {
        "id": "over-time",
        "label": "Average Score Over Time",
        "path": "../visualizations/showcase/scrabble-score-over-time.html",
        "iframeHeight": 725,
        "embedMode": "scale",
        "embedWidth": 1200
      },
      {
        "id": "by-state",
        "label": "Average Score by State",
        "path": "../visualizations/showcase/scrabble-score-by-state.html",
        "iframeHeight": 750,
        "embedMode": "scale",
        "embedWidth": 1050
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/scrabble-time.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/scrabble-time.webp",
        "duration": 3000
      },
      {
        "src": "../assets/thumbnails/explore/scrabble-state.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "names-and-gender",
    "title": "Names and Gender",
    "shortTitle": "Names and Gender",
    "category": "Structural Patterns",
    "description": "Explore how names are shared between male and female births, from individual names to the overall distribution.",
    "instructions": "Use the Unisex Name Scatter Plot to compare prominent names across generations. The Distribution Histogram shows how names are distributed by male/female balance within a selected generation. Unisex Names Over Time follows the yearly share of eligible names or births that fall within male-share ranges. The Table lets you search and sort all-time name totals by sex balance.",
    "methodology": "Sex balance is based on the share of recorded births for each name that are male or female. The histogram recalculates each name's balance within the selected generation. Names in the scatter plot were the names with the maximum over all individual years of the minimum of male and female births.  Very small counts omitted from the source data can slightly affect yearly sex shares when a name is rare.",
    "iframeHeight": 850,
    "embedMode": "scale",
    "embedWidth": 1100,
    "variants": [
      {
        "id": "scatter",
        "label": "Unisex Name Scatter Plot",
        "path": "../visualizations/showcase/unisex-name-evolution.html",
        "iframeHeight": 800,
        "embedMode": "scale",
        "embedWidth": 760
      },
      {
        "id": "histogram",
        "label": "Distribution Histogram",
        "path": "../visualizations/showcase/unisex-name-distribution-histogram.html",
        "iframeHeight": 700,
        "embedMode": "scale",
        "embedWidth": 1100
      },
      {
        "id": "over-time",
        "label": "Unisex Names Over Time",
        "path": "../visualizations/showcase/unisex-names-over-time.html",
        "iframeHeight": 700,
        "embedMode": "scale",
        "embedWidth": 1100
      },
      {
        "id": "table",
        "label": "Table",
        "path": "../visualizations/showcase/unisex-name-evolution-table.html",
        "iframeHeight": 850,
        "embedMode": "fluid"
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/names-and-gender--scatter-y1880.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/names-and-gender--scatter-y1880.webp",
        "duration": 1000
      },
      {
        "src": "../assets/thumbnails/explore/names-and-gender--scatter-y1920.webp",
        "duration": 1000
      },
      {
        "src": "../assets/thumbnails/explore/names-and-gender--scatter-y1960.webp",
        "duration": 1000
      },
      {
        "src": "../assets/thumbnails/explore/names-and-gender--scatter-y2000.webp",
        "duration": 1000
      },
      {
        "src": "../assets/thumbnails/explore/names-and-gender--scatter-y2025.webp",
        "duration": 1000
      },
      {
        "src": "../assets/thumbnails/explore/histogram.webp",
        "duration": 3000
      },
      {
        "src": "../assets/thumbnails/explore/unisex-time.webp",
        "duration": 3000
      },
      {
        "src": "../assets/thumbnails/explore/unisex-table.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "trendy-vs-timeless",
    "title": "Trendy vs. Timeless",
    "shortTitle": "Trendy vs. Timeless",
    "category": "Trendiness",
    "description": "Compare names that arrived in a sharp popularity burst with names that have been used more steadily across time.",
    "instructions": "Choose Trendy Names or Timeless Names for examples, or use the Table to search, filter, classify, and sort name/sex pairs. The example views also let you enter your own name and sex combinations.",
    "methodology": "Trendiness is measured separately by sex as the share of a name's recorded all-time births that occurred during its strongest consecutive 10-year window. Higher values indicate a more concentrated popularity burst; lower values indicate use spread more evenly across time.",
    "iframeHeight": 835,
    "embedMode": "scale",
    "embedWidth": 1200,
    "variants": [
      {
        "id": "trendy",
        "label": "Trendy Names",
        "path": "../visualizations/showcase/trendiness-trendy.html",
        "iframeHeight": 835,
        "embedMode": "scale",
        "embedWidth": 1200
      },
      {
        "id": "timeless",
        "label": "Timeless Names",
        "path": "../visualizations/showcase/trendiness-timeless.html",
        "iframeHeight": 835,
        "embedMode": "scale",
        "embedWidth": 1200
      },
      {
        "id": "table",
        "label": "Table",
        "path": "../visualizations/showcase/trendiness-table.html",
        "iframeHeight": 850,
        "embedMode": "fluid"
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/trendy.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/trendy.webp",
        "duration": 3000
      },
      {
        "src": "../assets/thumbnails/explore/timeless.webp",
        "duration": 3000
      },
      {
        "src": "../assets/thumbnails/explore/trend-table.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "cultural-influence",
    "title": "Cultural Influence",
    "shortTitle": "Cultural Influence",
    "category": "Trendiness",
    "description": "See how selected names rise and fall alongside cultural moments, public figures, and other shared associations.",
    "instructions": "Hover over the cells or names for more details. Cells are colored according to total births.",
    "methodology": "The displayed names are curated examples chosen to illustrate recognizable cultural waves. They are not intended to be a complete list of names influenced by culture, and a popularity change by itself does not prove a single cause.",
    "iframeHeight": 930,
    "embedMode": "scale",
    "embedWidth": 900,
    "variants": [
      {
        "id": "default",
        "label": "Open visualization",
        "path": "../visualizations/showcase/cultural-name-waves.html"
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/cultural-influence.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/cultural-influence.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "comeback-names",
    "title": "Comeback Names",
    "shortTitle": "Comeback Names",
    "category": "Trendiness",
    "description": "Find names whose popularity stretches across long periods or returns in multiple waves.",
    "instructions": "Use Comeback Names to explore example curves, enter your own name/sex pairs, switch between Frequency and Percentage, and adjust the early/late split. Use the Table to search, filter, and sort names by comeback score.",
    "methodology": "The comeback score reflects how widely a name's recorded births are spread across birth years, calculated separately by sex. It is calculated using the standard deviation of birth years for all births with that name and sex.",
    "iframeHeight": 835,
    "embedMode": "scale",
    "embedWidth": 1200,
    "variants": [
      {
        "id": "comeback",
        "label": "Comeback Names",
        "path": "../visualizations/showcase/comeback-names.html",
        "iframeHeight": 835,
        "embedMode": "scale",
        "embedWidth": 1200
      },
      {
        "id": "table",
        "label": "Table",
        "path": "../visualizations/showcase/comeback-table.html",
        "iframeHeight": 850,
        "embedMode": "fluid"
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/comeback.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/comeback.webp",
        "duration": 3000
      },
      {
        "src": "../assets/thumbnails/explore/comeback-table.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "religion",
    "title": "Religion",
    "shortTitle": "Religion",
    "category": "Global Influence",
    "description": "Compare broad national and state patterns for selected names associated with Christian/Biblical and Muslim naming traditions.",
    "instructions": "Choose Christian and Muslim National for the national time series or Christian and Muslim by State for the maps. The national graph uses separate vertical scales for the two groups; read the Christian-name scale on the left and the Muslim-name scale on the right. In the state view, use the year controls and hover over states.",
    "methodology": "These views use curated lists of names associated with Christian/Biblical and Muslim naming traditions. A person's name does not determine religion, and the lists are illustrative rather than complete. Percentages are based on recorded births in the relevant year or state.",
    "instructionsHtml": "Choose Christian and Muslim National for the national time series or Christian and Muslim by State for the maps. The national graph uses separate vertical scales for the two groups; read the Christian-name scale on the left and the Muslim-name scale on the right. In the state view, use the year controls and hover over states.",
    "methodologyHtml": "These views use curated lists of names associated with <a href=\"./global-influence-name-lists.html#christian\" target=\"_blank\" rel=\"noopener\">Christian/Biblical</a> and <a href=\"./global-influence-name-lists.html#muslim\" target=\"_blank\" rel=\"noopener\">Muslim</a> naming traditions. A person's name does not determine religion, and the lists are illustrative rather than complete. Percentages are based on recorded births in the relevant year or state.",
    "iframeHeight": 760,
    "embedMode": "scale",
    "embedWidth": 1200,
    "variants": [
      {
        "id": "national",
        "label": "Christian and Muslim National",
        "path": "../visualizations/showcase/christian-muslim-national.html",
        "iframeHeight": 700,
        "embedMode": "scale",
        "embedWidth": 1200
      },
      {
        "id": "state",
        "label": "Christian and Muslim by State",
        "path": "../visualizations/showcase/christian-muslim-state-maps.html",
        "iframeHeight": 780,
        "embedMode": "scale",
        "embedWidth": 1250
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/religion-national.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/religion-national.webp",
        "duration": 3000
      },
      {
        "src": "../assets/thumbnails/explore/religion-state.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "migration",
    "title": "Migration",
    "shortTitle": "Migration",
    "category": "Global Influence",
    "description": "Follow the changing national share of selected names associated with German and Irish naming traditions.",
    "instructions": "Hover over the curves to compare years. The graph uses separate vertical scales: German-associated names use the left axis and Irish-associated names use the right axis.",
    "methodology": "This view uses curated lists of names associated with German and Irish naming traditions. A person's name does not determine ancestry, nationality, or migration history, and the lists are illustrative rather than complete. The curves show each group's share of recorded U.S. births over time.",
    "instructionsHtml": "Hover over the curves to compare years. The graph uses separate vertical scales: German-associated names use the left axis and Irish-associated names use the right axis.",
    "methodologyHtml": "This view uses curated lists of names associated with <a href=\"./global-influence-name-lists.html#german\" target=\"_blank\" rel=\"noopener\">German</a> and <a href=\"./global-influence-name-lists.html#irish\" target=\"_blank\" rel=\"noopener\">Irish</a> naming traditions. A person's name does not determine ancestry, nationality, or migration history, and the lists are illustrative rather than complete. The curves show each group's share of recorded U.S. births over time.",
    "iframeHeight": 700,
    "embedMode": "scale",
    "embedWidth": 1200,
    "variants": [
      {
        "id": "national",
        "label": "German and Irish Names",
        "path": "../visualizations/showcase/irish-german-national.html"
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/migration.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/migration.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "name-correlation-explorer",
    "title": "Name Correlation Explorer",
    "shortTitle": "Name Correlation Explorer",
    "category": "Correlations",
    "description": "Compare the popularity histories of any two names and see how closely their patterns move together.",
    "instructions": "Enter two names, choose the sex and measure you want to compare, and use the scatter plot and time-series views to inspect their relationship.",
    "methodology": "Correlation summarizes how similarly the two national popularity curves move across years. A value near 1 means they tend to rise and fall together; a value near -1 means they tend to move in opposite directions. Correlation describes curve shape, not a causal relationship between the names.",
    "iframeHeight": 900,
    "embedMode": "scale",
    "embedWidth": 1100,
    "variants": [
      {
        "id": "default",
        "label": "Open visualization",
        "path": "../visualizations/showcase/name-correlation-explorer.html"
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/correlation.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/correlation.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "top-bottom-correlates",
    "title": "Top/bottom Correlates",
    "shortTitle": "Top/bottom Correlates",
    "category": "Correlations",
    "description": "Find the names whose national popularity histories are most similar—and least similar—to a name you choose.",
    "instructions": "Enter a target name to see its five strongest and five weakest correlates, then inspect the comparison curves.",
    "methodology": "Correlations use combined-sex national frequency histories for the 3,000 most common names. Missing name-years are treated as zero. The ranking is based on Pearson correlation across the full national year range.",
    "iframeHeight": 900,
    "embedMode": "scale",
    "embedWidth": 1100,
    "variants": [
      {
        "id": "default",
        "label": "Open visualization",
        "path": "../visualizations/showcase/name-correlation-correlates.html"
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/correlates.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/correlates.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "draw-your-own-curve",
    "title": "Draw Your Own Curve",
    "shortTitle": "Draw Your Own Curve",
    "category": "Correlations",
    "description": "Sketch the popularity pattern you have in mind and find names with similar historical curves.",
    "instructions": "Choose the sex mode and construct a popularity curve by dragging the sliders. The closest matching names appear in the results panel.",
    "methodology": "The tool compares the shape of your curve with historical national baby-name popularity curves or the top 3000 names. Similarity is calculated by Pearson correlation.",
    "iframeHeight": 980,
    "embedMode": "fluid",
    "variants": [
      {
        "id": "default",
        "label": "Open visualization",
        "path": "../visualizations/showcase/drawn-curve-matcher.html"
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/draw-your-own-curve.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/draw-your-own-curve.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "groupings-connected-pairs-and-trios",
    "title": "Connected Pairs and Trios",
    "shortTitle": "Connected Pairs and Trios",
    "category": "Groupings",
    "description": "Compare names that are connected by meaning, spelling, season, or sex usage.",
    "instructions": "Choose one of the preset comparisons or Custom names. For custom comparisons, one entered name compares male and female usage; two or three names compare combined usage. Use the period control and hover over states for details.",
    "methodology": "The maps compare recorded birth counts among the displayed choices within each state and period. Very small state-year counts are suppressed in the source data, so missing observations may represent either zero or fewer than five recorded births.",
    "iframeHeight": 940,
    "embedMode": "scale",
    "embedWidth": 1150,
    "variants": [
      {
        "id": "aspen-forrest",
        "label": "Aspen vs. Forrest",
        "path": "../visualizations/showcase/name-balance-aspen-forrest.html"
      },
      {
        "id": "casey",
        "label": "Casey: male vs. female",
        "path": "../visualizations/showcase/name-balance-casey.html"
      },
      {
        "id": "dwayne",
        "label": "Dwayne / Dewayne / Duane",
        "path": "../visualizations/showcase/name-balance-dwayne.html"
      },
      {
        "id": "summer-autumn",
        "label": "Summer vs. Autumn",
        "path": "../visualizations/showcase/name-balance-summer-autumn.html"
      },
      {
        "id": "custom",
        "label": "Custom names",
        "path": "../visualizations/showcase/name-balance-custom.html",
        "iframeHeight": 980,
        "embedMode": "scale",
        "embedWidth": 1150
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/aspen-forrest.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/aspen-forrest.webp",
        "duration": 3000
      },
      {
        "src": "../assets/thumbnails/explore/casey.webp",
        "duration": 3000
      },
      {
        "src": "../assets/thumbnails/explore/dwayne.webp",
        "duration": 3000
      },
      {
        "src": "../assets/thumbnails/explore/summer-autumn.webp",
        "duration": 3000
      },
      {
        "src": "../assets/thumbnails/explore/custom-connected.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "yearbook-guesser",
    "title": "Yearbook Guesser",
    "shortTitle": "Yearbook Guesser",
    "category": "Groupings",
    "description": "Estimate a shared birth year from a group of first names and their historical popularity patterns.",
    "instructions": "Choose one of the premade lists, or Custom input. In the custom view, enter names separated by commas, semicolons, or line breaks. Use the Frequency/Percentage control in the chart to change how the individual curves are shown.",
    "methodology": "The estimate combines the national popularity histories of the entered first names and asks which birth years make that collection of names most plausible by constructing a likelihood curve. The predicted year is the median likelihood estimate.",
    "iframeHeight": 820,
    "embedMode": "scale",
    "embedWidth": 1100,
    "variants": [
      {
        "id": "mambo5",
        "label": "Mambo No. 5",
        "path": "../visualizations/showcase/yearbook-mambo5.html"
      },
      {
        "id": "dream-team",
        "label": "USA Dream Team",
        "path": "../visualizations/showcase/yearbook-dream-team.html"
      },
      {
        "id": "friends",
        "label": "Friends Cast",
        "path": "../visualizations/showcase/yearbook-friends.html"
      },
      {
        "id": "custom",
        "label": "Custom input",
        "path": "../visualizations/showcase/yearbook-custom.html"
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/yearbook-mambo5.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/yearbook-mambo5.webp",
        "duration": 3000
      },
      {
        "src": "../assets/thumbnails/explore/yearbook-dream-team.webp",
        "duration": 3000
      },
      {
        "src": "../assets/thumbnails/explore/yearbook-friends.webp",
        "duration": 3000
      },
      {
        "src": "../assets/thumbnails/explore/yearbook-custom.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "name-identification-single",
    "title": "Single Curve",
    "shortTitle": "Single Curve",
    "category": "Name Identification Game",
    "description": "Identify a hidden baby name from its popularity curve, with rounds that become progressively more difficult.",
    "instructions": "Study the hidden curve and choose among four names. You can separate into two lines by sex or change the y-axis metric. You can also view the popularity map. After you answer, the comparison curves are revealed and Next Round button appears.",
    "methodology": "The prepared Single Curve and Matching rounds use common U.S. names chosen to provide a range of recognizable and challenging popularity patterns. Later rounds include curated themed groups. Frequency and Percentage use linear vertical scales, while Rank uses a logarithmic scale. Map views use all-time state patterns.",
    "iframeHeight": 900,
    "embedMode": "fluid",
    "variants": [
      {
        "id": "default",
        "label": "Open game",
        "path": "../visualizations/showcase/name-guessing-game.html?mode=single"
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/game.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/game.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "name-identification-matching",
    "title": "Matching",
    "shortTitle": "Matching",
    "category": "Name Identification Game",
    "description": "Match three popularity curves with the names that produced them, with rounds that become progressively more difficult.",
    "instructions": "Compare the curves, assign each name, and submit your matches. Choose the line graph over time or map views for additional clues before answering.",
    "methodology": "The prepared Single Curve and Matching rounds use common U.S. names chosen to provide a range of recognizable and challenging popularity patterns. Later rounds include curated themed groups. Frequency and Percentage use linear vertical scales, while Rank uses a logarithmic scale. Map views use all-time state patterns.",
    "iframeHeight": 900,
    "embedMode": "fluid",
    "variants": [
      {
        "id": "default",
        "label": "Open game",
        "path": "../visualizations/showcase/name-guessing-game.html?mode=multi"
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/game-multi.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/game-multi.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "name-identification-custom",
    "title": "Custom",
    "shortTitle": "Custom",
    "category": "Name Identification Game",
    "description": "Build your own name-identification challenge using a set of names you choose.",
    "instructions": "Enter 2–6 names and start the custom game. Use the line graph over time and map views to compare the selected names.",
    "methodology": "Custom mode uses the same historical national and state baby-name records as the prepared games, but the names are chosen by you rather than from the prepared round sets.",
    "iframeHeight": 900,
    "embedMode": "fluid",
    "variants": [
      {
        "id": "default",
        "label": "Open game",
        "path": "../visualizations/showcase/name-guessing-game.html?mode=custom"
      }
    ],
    "thumbnail": "../assets/thumbnails/explore/game-custom.webp",
    "thumbnailFrames": [
      {
        "src": "../assets/thumbnails/explore/game-custom.webp",
        "duration": 3000
      }
    ]
  },
  {
    "id": "name-identification-leaderboard",
    "title": "Leaderboard",
    "shortTitle": "Leaderboard",
    "category": "Name Identification Game",
    "description": "See the ten highest scores for Single Curve and Matching, with ties decided by completion time.",
    "instructions": "The leaderboard updates when a qualifying player finishes a prepared Single Curve or Matching game and chooses to submit a short display name.",
    "methodology": "Rankings use total correct answers first and elapsed time second. Single Curve is scored out of 5 and Matching is scored out of 15.",
    "iframeHeight": 620,
    "embedMode": "fluid",
    "variants": [
      {
        "id": "default",
        "label": "Open leaderboard",
        "path": "../visualizations/showcase/name-identification-leaderboard.html?v=20260903-play-links-1"
      }
    ],
    "liveThumbnail": "../visualizations/showcase/name-identification-leaderboard.html?preview=1&v=20260903-play-links-1"
  }
];

export function getVisualization(id) {
  return visualizations.find(item => item.id === id) ?? null;
}

export function getVariant(item, variantId) {
  if (!item) return null;
  return item.variants.find(variant => variant.id === variantId) ?? item.variants[0] ?? null;
}
