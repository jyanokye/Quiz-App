export type Subject = 'HTML' | 'CSS' | 'Javascript' | 'Accessibility';

export const questions: Record<Subject, { question: string; options: string[]; answer: number }[]> = {
  HTML: [
    {
      question: 'What does HTML stand for?',
      options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Hyper Tool Markup Language'],
      answer: 0,
    },
    {
      question: 'Which HTML element is used to create a hyperlink?',
      options: ['<link>', '<a>', '<href>', '<nav>'],
      answer: 1,
    },
    {
      question: 'How can you make a numbered list in HTML?',
      options: ['<ul>', '<ol>', '<li>', '<dl>'],
      answer: 1,
    },
    {
      question: 'Which attribute is used to specify the URL of an image in HTML?',
      options: ['href', 'src', 'alt', 'link'],
      answer: 1,
    },
    {
      question: 'What is the correct HTML element for inserting a line break?',
      options: ['<break>', '<lb>', '<br>', '<line>'],
      answer: 2,
    },
    {
      question: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
      options: ['title', 'alt', 'src', 'longdesc'],
      answer: 1,
    },
    {
      question: 'Which HTML tag is used to define an internal style sheet?',
      options: ['<style>', '<css>', '<script>', '<link>'],
      answer: 0,
    },
    {
      question: 'What is the correct HTML for adding a background color?',
      options: ['<body bg="yellow">', '<body style="background-color:yellow;">', '<background>yellow</background>', '<body color="yellow">'],
      answer: 1,
    },
    {
      question: 'Which HTML element is used to specify a footer for a document or section?',
      options: ['<bottom>', '<section>', '<footer>', '<foot>'],
      answer: 2,
    },
    {
      question: 'Which HTML attribute is used to define inline styles?',
      options: ['class', 'style', 'styles', 'css'],
      answer: 1,
    },
  ],
  CSS: [
    {
      question: 'What does CSS stand for?',
      options: ['Cascading Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'],
      answer: 0,
    },
    {
      question: 'Which property is used to change the background color?',
      options: ['background-color', 'color', 'bgcolor', 'bg-color'],
      answer: 0,
    },
    {
      question: 'Which CSS property controls the text size?',
      options: ['font-style', 'text-size', 'font-size', 'text-style'],
      answer: 2,
    },
    {
      question: 'How do you select an element with id "demo"?',
      options: ['#demo', '.demo', 'demo', '*demo'],
      answer: 0,
    },
    {
      question: 'Which property is used to change the font of an element?',
      options: ['font-family', 'font-style', 'font-weight', 'font'],
      answer: 0,
    },
    {
      question: 'How do you make each word in a text start with a capital letter?',
      options: ['text-transform:capitalize', 'text-transform:uppercase', 'text-transform:lowercase', 'text-transform:capitalize-each'],
      answer: 0,
    },
    {
      question: 'Which property is used to change the space between letters?',
      options: ['letter-spacing', 'text-spacing', 'font-spacing', 'character-spacing'],
      answer: 0,
    },
    {
      question: 'Which property is used to change the space between lines?',
      options: ['line-height', 'spacing', 'line-spacing', 'line-width'],
      answer: 0,
    },
    {
      question: 'Which CSS property is used to change the text color of an element?',
      options: ['color', 'text-color', 'font-color', 'foreground-color'],
      answer: 0,
    },
    {
      question: 'How do you make a list that lists its items with squares?',
      options: ['list-style-type: square', 'list-type: square', 'list: square', 'list-style: square'],
      answer: 0,
    },
  ],
  Javascript: [
    {
      question: 'What is JavaScript?',
      options: ['A programming language', 'A type of coffee', 'A markup language', 'A style sheet language'],
      answer: 0,
    },
    {
      question: 'Which company developed JavaScript?',
      options: ['Netscape', 'Microsoft', 'Sun Microsystems', 'Oracle'],
      answer: 0,
    },
    {
      question: 'Which symbol is used for comments in JavaScript?',
      options: ['//', '<!-- -->', '/* */', '**'],
      answer: 0,
    },
    {
      question: 'Which method is used to write HTML output using JavaScript?',
      options: ['document.write()', 'console.log()', 'window.write()', 'output.write()'],
      answer: 0,
    },
    {
      question: 'How do you declare a variable in JavaScript?',
      options: ['var', 'let', 'const', 'All of the above'],
      answer: 3,
    },
    {
      question: 'Which method is used to convert a string to a number in JavaScript?',
      options: ['Number()', 'parseFloat()', 'parseInt()', 'All of the above'],
      answer: 3,
    },
    {
      question: 'Which event occurs when a user clicks on an HTML element?',
      options: ['onmouseover', 'onchange', 'onclick', 'onmouseclick'],
      answer: 2,
    },
    {
      question: 'What is the correct syntax for referring to an external script called "script.js"?',
      options: ['<script src="script.js">', '<script href="script.js">', '<script ref="script.js">', '<script name="script.js">'],
      answer: 0,
    },
    {
      question: 'How do you create a function in JavaScript?',
      options: ['function myFunction()', 'function:myFunction()', 'function = myFunction()', 'create myFunction()'],
      answer: 0,
    },
    {
      question: 'How do you call a function named "myFunction"?',
      options: ['call myFunction()', 'call function myFunction()', 'myFunction()', 'execute myFunction()'],
      answer: 2,
    },
  ],
  Accessibility: [
    {
      question: 'What is web accessibility?',
      options: ['Ensuring web content is accessible to all users', 'Making websites fast', 'SEO optimization', 'Enhancing website security'],
      answer: 0,
    },
    {
      question: 'What does WCAG stand for?',
      options: ['Web Content Accessibility Guidelines', 'Web Content Accessibility Guide', 'Website Content Accessibility Guidelines', 'Web Content Accessibility Goals'],
      answer: 0,
    },
    {
      question: 'Which attribute is used to provide an accessible name for an HTML element?',
      options: ['aria-label', 'alt', 'title', 'name'],
      answer: 0,
    },
    {
      question: 'What does ARIA stand for?',
      options: ['Accessible Rich Internet Applications', 'Accessible Robust Internet Applications', 'Accessible Rich Interactive Applications', 'Accessible Reliable Internet Applications'],
      answer: 0,
    },
    {
      question: 'Which of the following is a principle of the WCAG?',
      options: ['Perceivable', 'Operable', 'Understandable', 'All of the above'],
      answer: 3,
    },
    {
      question: 'What is the purpose of using landmarks in HTML?',
      options: ['To improve navigation for assistive technologies', 'To add visual appeal', 'To organize content', 'To enhance SEO'],
      answer: 0,
    },
    {
      question: 'Which HTML attribute can be used to specify a keyboard shortcut for an element?',
      options: ['accesskey', 'shortcut', 'key', 'shortcutkey'],
      answer: 0,
    },
    {
      question: 'Why is it important to provide text alternatives for images?',
      options: ['For users who cannot see images', 'To improve loading times', 'To enhance visual design', 'For SEO purposes'],
      answer: 0,
    },
    {
      question: 'What does the tabindex attribute do?',
      options: ['Controls the order of keyboard navigation', 'Adds a tab to the content', 'Creates a new tab in the browser', 'Defines the tab style'],
      answer: 0,
    },
    {
      question: 'Which tool can be used to test web accessibility?',
      options: ['Lighthouse', 'WAVE', 'Axe', 'All of the above'],
      answer: 3,
    },
  ],
};
