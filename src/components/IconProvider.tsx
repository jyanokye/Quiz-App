import { Subject } from '../data/questions';
import htmlIcon from '../assets/images/HTML-icon.png';
import cssIcon from '../assets/images/CSS-icon.png';
import javascriptIcon from '../assets/images/JavaScript-icon.png';
import accessibilityIcon from '../assets/images/Accessibility-icon.png';


export const subjectIconMapping: { [key in Subject]: string } = {
    HTML: htmlIcon,
    CSS: cssIcon,
    Javascript: javascriptIcon,
    Accessibility: accessibilityIcon,
  };
  