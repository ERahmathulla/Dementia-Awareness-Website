export interface OutreachCounty {
  name:  string
  slug:  string
  path:  string   // route: '/counties/leon'
  lng:   number   // WGS-84 longitude — OSM Nominatim county centroid
  lat:   number   // WGS-84 latitude  — OSM Nominatim county centroid
  blurb: string
}

export const OUTREACH_COUNTIES: OutreachCounty[] = [
  {
    name:  'Leon',
    slug:  'leon',
    path:  '/counties/leon',
    lng:   -84.2549,
    lat:   30.4683,
    blurb: "Home to Tallahassee, Florida's capital, and a gathering place for dementia support across the Big Bend.",
  },
  {
    name:  'Wakulla',
    slug:  'wakulla',
    path:  '/counties/wakulla',
    lng:   -84.3544,
    lat:   30.1480,
    blurb: 'Home to Crawfordville, Sopchoppy, and St. Marks, where families care for one another from the springs to the coast.',
  },
  {
    name:  'Gadsden',
    slug:  'gadsden',
    path:  '/counties/gadsden',
    lng:   -84.6390,
    lat:   30.5937,
    blurb: 'Home to Quincy, Havana, Chattahoochee, and neighboring towns, rooted in history and strong family ties.',
  },
  {
    name:  'Jefferson',
    slug:  'jefferson',
    path:  '/counties/jefferson',
    lng:   -83.9327,
    lat:   30.3950,
    blurb: 'Home to historic Monticello, a community where caring for loved ones runs deep.',
  },
  {
    name:  'Madison',
    slug:  'madison',
    path:  '/counties/madison',
    lng:   -83.4525,
    lat:   30.4514,
    blurb: 'Home to Madison, Greenville, and Lee, where neighbors and congregations have long supported one another.',
  },
  {
    name:  'Taylor',
    slug:  'taylor',
    path:  '/counties/taylor',
    lng:   -83.6378,
    lat:   30.0927,
    blurb: 'Home to Perry and Steinhatchee, a coastal community with deep roots and a strong spirit of helping out.',
  },
  {
    name:  'Liberty',
    slug:  'liberty',
    path:  '/counties/liberty',
    lng:   -84.8956,
    lat:   30.2507,
    blurb: 'Home to Bristol and Hosford, a close-knit community surrounded by forests and rivers.',
  },
  {
    name:  'Franklin',
    slug:  'franklin',
    path:  '/counties/franklin',
    lng:   -84.8239,
    lat:   29.8323,
    blurb: 'Home to Apalachicola, Carrabelle, and Eastpoint, a coastal community proud of its heritage and its people.',
  },
  {
    name:  'Calhoun',
    slug:  'calhoun',
    path:  '/counties/calhoun',
    lng:   -85.2224,
    lat:   30.3854,
    blurb: 'Home to Blountstown and Altha, a hometown community along the Apalachicola River.',
  },
]
