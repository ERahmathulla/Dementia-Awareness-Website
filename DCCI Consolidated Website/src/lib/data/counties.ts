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
    blurb: 'Home to Tallahassee and the regional hub for Big Bend dementia outreach.',
  },
  {
    name:  'Wakulla',
    slug:  'wakulla',
    path:  '/counties/wakulla',
    lng:   -84.3544,
    lat:   30.1480,
    blurb: 'A rural coastal county with growing caregiver support networks.',
  },
  {
    name:  'Gadsden',
    slug:  'gadsden',
    path:  '/counties/gadsden',
    lng:   -84.6390,
    lat:   30.5937,
    blurb: 'Community outreach includes churches, libraries, and senior centers across the county.',
  },
  {
    name:  'Jefferson',
    slug:  'jefferson',
    path:  '/counties/jefferson',
    lng:   -83.9327,
    lat:   30.3950,
    blurb: 'A small rural county where outreach connects families to regional resources.',
  },
  {
    name:  'Madison',
    slug:  'madison',
    path:  '/counties/madison',
    lng:   -83.4525,
    lat:   30.4514,
    blurb: 'Serving families across a large geographic area with limited local services.',
  },
  {
    name:  'Taylor',
    slug:  'taylor',
    path:  '/counties/taylor',
    lng:   -83.6378,
    lat:   30.0927,
    blurb: 'Coastal and rural, Taylor County benefits from mobile outreach and traveling resource tables.',
  },
  {
    name:  'Liberty',
    slug:  'liberty',
    path:  '/counties/liberty',
    lng:   -84.8956,
    lat:   30.2507,
    blurb: "One of Florida's least populous counties — outreach here focuses on volunteer reach.",
  },
  {
    name:  'Franklin',
    slug:  'franklin',
    path:  '/counties/franklin',
    lng:   -84.8239,
    lat:   29.8323,
    blurb: 'A Gulf Coast county where resource access depends on community partnerships.',
  },
  {
    name:  'Calhoun',
    slug:  'calhoun',
    path:  '/counties/calhoun',
    lng:   -85.2224,
    lat:   30.3854,
    blurb: 'Western Big Bend county with deep community ties and active outreach volunteers.',
  },
]
