import htmlIcon from '../assets/images/HTML-icon.png';
import cssIcon from '../assets/images/CSS-icon.png';
import javascriptIcon from '../assets/images/JavaScript-icon.png';
import accessibilityIcon from '../assets/images/Accessibility-icon.png';

type Subject = 'HTML' | 'CSS' | 'JavaScript' | 'Accessibility';
export const subjectIconMapping: { [key in Subject]: string } = {
    HTML: htmlIcon,
    CSS: cssIcon,
    JavaScript: javascriptIcon,
    Accessibility: accessibilityIcon,
  };
  