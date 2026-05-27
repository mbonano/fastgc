function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3958.8
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLon = (lon2 - lon1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

// Representative points (~50-100 mi spacing) along all U.S. external borders and coastlines
const BORDER_POINTS: [number, number][] = [
  // US-Mexico border (west → east)
  [32.53, -117.12], [32.56, -116.08], [32.74, -114.62], [31.73, -111.0],
  [31.33, -108.21], [31.76, -106.49], [29.72, -104.52], [29.35, -103.08],
  [26.19, -98.27], [25.96, -97.14],
  // US-Canada border
  [49.0, -123.12], [49.0, -117.0], [49.0, -111.0], [49.0, -105.0],
  [49.0, -99.0], [49.0, -93.0], [48.97, -87.0], [48.08, -84.35],
  [45.99, -84.09], [45.0, -83.0], [43.45, -79.05], [45.0, -74.73],
  [45.01, -71.5], [47.46, -69.23],
  // Pacific coast (south → north)
  [32.72, -117.17], [33.77, -118.19], [36.97, -122.02], [37.75, -122.51],
  [38.42, -123.11], [40.8, -124.16], [44.61, -124.06], [46.13, -124.01],
  [47.06, -124.17], [48.38, -124.73],
  // Atlantic coast (south → north)
  [25.77, -80.13], [27.95, -80.6], [30.32, -81.39], [31.9, -80.9],
  [33.76, -77.95], [35.16, -75.75], [36.93, -75.9], [38.04, -75.35],
  [38.95, -74.91], [40.61, -73.97], [41.37, -71.77], [41.62, -70.0],
  [42.48, -70.87], [43.6, -70.25], [44.89, -66.99],
  // Gulf Coast
  [25.68, -97.39], [27.8, -97.4], [29.36, -94.79], [29.95, -93.84],
  [29.85, -89.96], [30.37, -89.09], [30.37, -88.0], [30.4, -87.26],
  [28.81, -86.04], [26.09, -81.86],
  // Hawaii
  [21.31, -158.0], [20.27, -155.9], [20.9, -156.67],
  // Alaska
  [58.3, -134.41], [57.05, -135.33], [55.34, -131.64],
  [61.22, -149.9], [64.84, -147.72], [65.43, -168.09],
  [71.29, -156.79], [60.47, -162.89], [55.21, -162.72], [54.14, -165.48],
]

export function isWithin100MileBorderZone(lat: number, lon: number): boolean {
  return BORDER_POINTS.some(([bLat, bLon]) => haversineDistance(lat, lon, bLat, bLon) <= 100)
}

export function getMinBorderDistanceMiles(lat: number, lon: number): number {
  let min = Infinity
  for (const [bLat, bLon] of BORDER_POINTS) {
    const d = haversineDistance(lat, lon, bLat, bLon)
    if (d < min) min = d
  }
  return Math.round(min)
}
