
import ProjectDetail from '@/components/WorksDetailsPage'

// Mock project data
const projectsData: Record<string, any> = {
  '1': {
    title: 'Residential Solar Installation - 10kW System',
    category: 'Residential',
    location: 'Pondicherry',
    capacity: '10 kW',
    savings: '₹45,000 annually',
    completion: 'March 2024',
    shortDesc: 'Modern villa equipped with premium solar panels and battery backup system',
    fullDesc: `This residential installation transformed a modern villa by providing complete energy independence. 
    The system was custom-designed to meet the household's peak demand while maximizing self-consumption.`,
    details: [
      '25 units of 400W monocrystalline panels',
      'Hybrid inverter with 5kW capacity',
      '10kWh lithium battery storage',
      'Real-time monitoring via mobile app',
      'Smart load management system',
      '25-year performance warranty'
    ],
    benefits: [
      'Reduced electricity bills by 85%',
      'Grid-independent during power cuts',
      'Increased property value',
      'Environmental impact: 15 tons CO2 saved annually',
      'Payback period: 4-5 years',
      'System lifespan: 25+ years'
    ],
    timeline: [
      { phase: 'Consultation & Design', duration: '1-2 weeks' },
      { phase: 'Approvals & Permits', duration: '2-4 weeks' },
      { phase: 'Equipment Procurement', duration: '1-2 weeks' },
      { phase: 'Installation & Testing', duration: '3-5 days' },
      { phase: 'Grid Connection', duration: '1 week' }
    ]
  },
  '2': {
    title: 'Commercial Complex - 50kW Solar System',
    category: 'Commercial',
    location: 'Vanur',
    capacity: '50 kW',
    savings: '₹2,50,000 annually',
    completion: 'January 2024',
    shortDesc: 'Large office building with comprehensive solar infrastructure',
    fullDesc: `Enterprise-grade solar installation designed for peak operational efficiency. 
    The system provides 60% of the building's annual energy needs.`,
    details: [
      '125 units of 400W commercial panels',
      'Three-phase 50kW inverter',
      'SCADA monitoring system',
      'Real-time production analytics',
      'Predictive maintenance alerts',
      'Industrial-grade mounting structure'
    ],
    benefits: [
      'Reduced operating costs by 60%',
      'Corporate sustainability goals met',
      'Tax benefits and depreciation',
      'Enhanced brand value',
      'Payback period: 5-6 years',
      'Long-term energy security'
    ],
    timeline: [
      { phase: 'Site Assessment', duration: '1 week' },
      { phase: 'Engineering & Design', duration: '2-3 weeks' },
      { phase: 'Regulatory Approvals', duration: '4-6 weeks' },
      { phase: 'Equipment Delivery', duration: '2 weeks' },
      { phase: 'Installation', duration: '10-15 days' },
      { phase: 'Testing & Commission', duration: '1 week' }
    ]
  },
  '3': {
    title: 'Industrial Rooftop - 100kW Installation',
    category: 'Industrial',
    location: 'Tamil Nadu',
    capacity: '100 kW',
    savings: '₹5,00,000 annually',
    completion: 'December 2023',
    shortDesc: 'Industrial facility with industrial-grade solar arrays',
    fullDesc: `Advanced industrial solar system designed for 24/7 monitoring and predictive maintenance. 
    Provides 70% of facility's annual energy consumption.`,
    details: [
      '250 units of 400W bifacial panels',
      'Industrial three-phase inverter',
      'Advanced monitoring with AI analytics',
      'Round-the-clock performance tracking',
      'Predictive maintenance system',
      'Heavy-duty structural mounting'
    ],
    benefits: [
      'Operational cost reduction: 65%',
      'Peak load shaving',
      'Energy cost predictability',
      'Carbon footprint reduction: 125 tons/year',
      'Payback period: 4-5 years',
      'System efficiency: 98%+'
    ],
    timeline: [
      { phase: 'Facility Analysis', duration: '2 weeks' },
      { phase: 'System Design', duration: '3-4 weeks' },
      { phase: 'Permits & Approvals', duration: '4-8 weeks' },
      { phase: 'Supply Chain', duration: '3-4 weeks' },
      { phase: 'Installation', duration: '15-20 days' },
      { phase: 'Commissioning', duration: '1-2 weeks' }
    ]
  },
  '4': {
    title: 'Villa Solar System - 8kW Rooftop',
    category: 'Residential',
    location: 'Pondicherry',
    capacity: '8 kW',
    savings: '₹35,000 annually',
    completion: 'February 2024',
    shortDesc: 'Luxury residential property with sleek solar installation',
    fullDesc: `Aesthetically designed solar installation for luxury villa combining performance with visual appeal.`,
    details: [
      '20 units of 400W bifacial panels',
      'String inverter 8kW capacity',
      'Microinverter options available',
      'Cloud-based monitoring',
      'Premium mounting hardware',
      'Aesthetic panel arrangement'
    ],
    benefits: [
      'Reduced bills by 80%',
      'Premium property addition',
      'Eco-friendly living',
      'Future-proof investment',
      'Payback: 5 years',
      'Maintenance-free operation'
    ],
    timeline: [
      { phase: 'Design Consultation', duration: '1 week' },
      { phase: 'System Design', duration: '1 week' },
      { phase: 'Approvals', duration: '2 weeks' },
      { phase: 'Equipment Arrival', duration: '1 week' },
      { phase: 'Installation', duration: '2-3 days' },
      { phase: 'Activation', duration: '3-5 days' }
    ]
  },
  '5': {
    title: 'School Campus Solar Project - 30kW',
    category: 'Commercial',
    location: 'Pattanur',
    capacity: '30 kW',
    savings: '₹1,50,000 annually',
    completion: 'November 2023',
    shortDesc: 'Educational institution with sustainable solar solution',
    fullDesc: `Community-focused solar installation supporting sustainable education and reduced operational costs.`,
    details: [
      '75 units of 400W educational-grade panels',
      '30kW three-phase inverter',
      'Educational monitoring dashboard',
      'Real-time data API for learning',
      'Expandable architecture',
      'Institutional mounting system'
    ],
    benefits: [
      'Operational budget reduction',
      'Educational value for students',
      'Sustainability commitment',
      'Long-term energy cost savings',
      'Community leadership example',
      'Government incentive eligibility'
    ],
    timeline: [
      { phase: 'Educational Alignment', duration: '2 weeks' },
      { phase: 'Campus Design', duration: '3 weeks' },
      { phase: 'Institutional Approvals', duration: '3-4 weeks' },
      { phase: 'Supply', duration: '2 weeks' },
      { phase: 'Installation', duration: '7-10 days' },
      { phase: 'Inauguration', duration: '1 week' }
    ]
  },
  '6': {
    title: 'Factory Complex - 75kW Solar Array',
    category: 'Industrial',
    location: 'Tamil Nadu',
    capacity: '75 kW',
    savings: '₹3,75,000 annually',
    completion: 'October 2023',
    shortDesc: 'Manufacturing facility with comprehensive renewable energy',
    fullDesc: `Advanced manufacturing facility installation with integrated energy management and production analytics.`,
    details: [
      '187 units of 400W panels',
      'Industrial hybrid inverter 75kW',
      'IoT energy management system',
      'Production data integration',
      'Scalable battery storage option',
      'Industrial-grade infrastructure'
    ],
    benefits: [
      'Manufacturing cost reduction',
      'Production efficiency boost',
      'Energy independence',
      'ESG reporting capability',
      'Competitive advantage',
      'Long-term cost savings'
    ],
    timeline: [
      { phase: 'Factory Audit', duration: '2-3 weeks' },
      { phase: 'Design & Engineering', duration: '4 weeks' },
      { phase: 'Permitting', duration: '4-6 weeks' },
      { phase: 'Procurement', duration: '3 weeks' },
      { phase: 'Installation', duration: '12-15 days' },
      { phase: 'Integration & Testing', duration: '1-2 weeks' }
    ]
  }
}

export default function Page() {

  return (
    <ProjectDetail/>
  )
}
