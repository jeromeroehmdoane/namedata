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
