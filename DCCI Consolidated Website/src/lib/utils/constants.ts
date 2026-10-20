export const SITE_NAME = 'Big Bend Brain Health'
export const SITE_DESCRIPTION = 'A consolidated hub for dementia caregiving resources, memory care, and support in the Big Bend region of Florida.'

export const HELPLINE_PHONE = '(850) 386-2778'
export const ELDER_HELPLINE = '1-800-963-5337'
export const ELDER_HELPLINE_LOCAL = '866-467-4624'
export const SENIOR_LEGAL_HELPLINE = '1-888-895-7873'
export const EMERGENCY = '911'
export const CRISIS_LINE = '988'

export const NAV_LINKS = [
  {
    label: 'Start Here',
    href: '/signs-diagnosis',
    description: 'Warning signs, diagnosis, and your free doctor-visit toolkit',
    color: 'lavender',
    children: [
      { label: '10 Early Signs & Warning Guide', href: '/signs-diagnosis/warning-signs', description: 'The 10 domains explained with normal vs. warning sign comparisons' },
      { label: 'Types of Dementia', href: '/signs-diagnosis/types-of-dementia', description: "Alzheimer's, vascular, Lewy body, and more" },
      { label: 'Disease Stages', href: '/signs-diagnosis/disease-stages', description: 'What to expect at each stage' },
      { label: 'Getting Evaluated', href: '/signs-diagnosis/getting-evaluated', description: 'Memory clinics, referrals, and first visits' },
      { label: 'Free Doctor-Visit Toolkit', href: '/signs-diagnosis/toolkit', description: 'Checklists and questions to bring to your appointment' },
    ],
  },
  {
    label: 'For Caregivers',
    href: '/caregiver-support',
    description: 'Support groups, education, self-care, and community',
    color: 'teal',
    children: [
      { label: 'Support Groups', href: '/caregiver-support/support-groups', description: 'Free local groups, times, and locations' },
      { label: 'Classes & Education', href: '/caregiver-support/classes', description: 'Powerful Tools for Caregivers and more' },
      { label: 'Video Library', href: '/caregiver-support/videos', description: 'On-demand how-to videos for common challenges' },
      { label: 'Home Safety', href: '/caregiver-support/home-safety', description: 'Fire safety, smoke alarms, and wandering help' },
      { label: 'Online Communities', href: '/caregiver-support/online', description: 'ALZConnected, Family Caregiver Alliance, and more' },
      { label: 'Taking Care of Yourself', href: '/caregiver-support/self-care', description: 'Burnout prevention and caregiver wellness' },
      { label: 'Talking to Your Doctor', href: '/caregiver-support/talking-to-your-doctor', description: 'How to communicate with the care team' },
    ],
  },
  {
    label: 'Find Care & Services',
    href: '/care-services',
    description: 'Respite, in-home help, safety, and transportation',
    color: 'healthblue',
    children: [
      { label: 'Respite & Adult Day', href: '/care-services/respite', description: 'Social Clubs, in-home respite, and day programs' },
      { label: 'In-Home Services', href: '/care-services/in-home', description: 'CCE, HCE, ADI, and meal programs' },
      { label: 'Long-Term Care Options', href: '/care-services/long-term-care', description: 'PACE, SMMC-LTC, and facility care' },
      { label: 'Home Safety', href: '/care-services/home-safety', description: 'Falls, fire safety, kitchen safety, and wandering' },
      { label: 'Wandering & Missing Persons', href: '/care-services/wandering', description: 'Silver Alert, Scent Evidence K9, and prevention' },
      { label: 'Transportation & Driving', href: '/care-services/transportation', description: 'Senior transport, driving cessation guidance' },
    ],
  },
  {
    label: 'Financial and Legal Assistance',
    href: '/money-legal',
    description: 'Medicare, Medicaid, benefits, and legal planning',
    color: 'sage',
    children: [
      { label: 'Medicare & Insurance', href: '/money-legal/medicare', description: 'Free SHINE counseling and fraud prevention' },
      { label: 'Medicaid & Long-Term Funding', href: '/money-legal/medicaid', description: 'CARES eligibility, SMMC-LTC, PACE' },
      { label: 'Financial Assistance', href: '/money-legal/financial-assistance', description: 'EHEAP, caregiver stipends, benefits overview' },
      { label: 'Legal Planning', href: '/money-legal/legal-planning', description: 'Power of attorney, advance directives, elder law' },
    ],
  },
  {
    label: 'Resource Directory',
    href: '/directory',
    description: 'All local organizations searchable by need, county, and language',
    color: 'warmgray',
  },
] as const

export const BIG_BEND_COUNTIES = [
  'Leon', 'Jefferson', 'Wakulla', 'Franklin', 'Gadsden', 'Gulf', 'Madison', 'Taylor',
] as const

export const RESOURCE_CATEGORY_LABELS: Record<string, string> = {
  'helpline': 'Helpline & First Contact',
  'diagnosis': 'Diagnosis & Evaluation',
  'respite': 'Respite & Adult Day',
  'support-group': 'Support Group',
  'caregiver-education': 'Caregiver Education',
  'in-home-care': 'In-Home Care',
  'long-term-care': 'Long-Term Care',
  'financial': 'Financial & Insurance',
  'legal': 'Legal Planning',
  'safety-emergency': 'Safety & Emergency',
  'transportation': 'Transportation',
  'brain-health': 'Brain Health & Prevention',
  'research': 'Research & Trials',
  'professional-training': 'Professional Training',
}

export const EMERGENCY_NUMBERS = [
  { label: 'Emergency', number: '911', description: 'Life-threatening emergencies' },
  { label: 'Suicide & Crisis', number: '988', description: '24/7 mental health crisis support' },
  { label: '211 Big Bend', number: '211', description: '24-hr crisis counseling & referral' },
  { label: "Alzheimer's Project", number: '(850) 386-2778', description: 'Mon–Fri 9am–5pm (not a 24-hr helpline)' },
  { label: 'Florida Dept. of Elder Affairs', number: '1-800-963-5337', description: 'Statewide resource navigation' },
  { label: 'Florida Senior Legal Helpline', number: '1-888-895-7873', description: 'Free legal assistance for seniors' },
  { label: 'Tallahassee Memorial', number: '(850) 431-1155', description: 'TMH main line' },
  { label: 'Capital Regional', number: '(850) 325-5000', description: 'Capital Regional Medical Center' },
  { label: 'Poison Control', number: '(800) 222-1222', description: '24/7 poison emergency line' },
  { label: 'Elder Abuse Hotline', number: '1-800-962-2873', description: 'Report abuse, exploitation, neglect' },
]
