import South from "../images/31South.svg"
import OustLogo from "../images/OUST.svg"
import Ritual from "../images/Ritual.svg"
import WPLogo from "../images/Wild Places.svg"
import WPBG from "../images/WP-BG.png"
import SHBG from "../images/SH-BG.png"
import SummitHero from "./SummitHero"

const brands = [
  {
    title: 'Summit House',
    background: `url(${SHBG}) center right/cover`,
    altChildren: SummitHero
  },
  {
    title: '31South',
    background: 'white',
    logo: South,
    textColor: 'black',
    children: '31South is a new breed of agency. One lead by veteran entrepreneurs and award winning team members who have not only worked with the biggest brands in the world, but also profoundly know the landscape and nuances of hyper growth.',
    buttonColor: '#DB3832',
    buttonTextColor: 'white',
    buttonText: 'Visit 31South',
    arrowColor: '#000000',
    dest: 'https://www.31south.io/'
  },
  {
    title: 'OUST',
    background: '#2A2A28',
    logo: OustLogo,
    textColor: '#F1EDE2',
    children: 'An Agency specialized in Digital Advertising, Creative Ideation, Social Media, + Influencer Marketing.',
    buttonColor: '#F08D91',
    buttonTextColor: '#F1EDE2',
    buttonText: 'Visit Oust',
    arrowColor: '#F08D91',
    dest: 'https://www.weareoust.co/'
  },
  {
    title: 'Wild Places',
    background: `url(${WPBG}) center`,
    logo: WPLogo,
    textColor: 'black',
    children: 'A BRAND IDENTITY COMPANY AND DESIGN STUDIO WITH A FOCUS ON CREATING BOLD, ADVENTUROUS IDENTITIES',
    buttonColor: 'black',
    buttonTextColor: '#CAD6C8',
    buttonText: 'Visit Wild Places',
    arrowColor: 'black',
    dest: 'https://gotowildplaces.com/'
  },
  {
    title: 'Ritual Film Company',
    background: '#EDE2D9',
    logo: Ritual,
    textColor: 'black',
    children: 'With extensive experience in the commercial and documentary world, Ritual is lead by a nimble team of executive producers to produce authentic, compelling content.',
    buttonColor: 'white',
    buttonTextColor: '#050608',
    buttonText: 'Visit Ritual',
    dest: 'https://www.weareritual.co/'
  },
]

export default brands