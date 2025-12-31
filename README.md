## Reacting Calculator

text

## 🎯 How to Use

### **Mouse/Touch Input**
1. Click number buttons (0-9) to input values
2. Click operator buttons (+, -, ×, ÷) to select operation
3. Click equals (=) to calculate
4. Click decimal (.) to add decimal point
5. Click clear (C) to reset everything

### **Calculation Examples**
- **Single Operation**: `5 + 3 =` → `8`
- **Chained Operations**: `5 + 3 × 2 =` → `11` (Note: Simple left-to-right logic)
- **Decimal Operations**: `3.14 + 2.5 =` → `5.64`
- **Error Prevention**: `5 ÷ 0 =` → "Cannot divide by zero!" alert

## 💻 Code Highlights

### **HTML Structure**
```html
<!-- Semantic class naming with data attributes -->
<button class="btn number" data-number="7">7</button>
<button class="btn operator" data-action="divide">/</button>
CSS Grid Layout
css
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
.equals {
  grid-row: span 2; /* Makes equals button 2x tall */
}
JavaScript State Management
javascript
// Four variables manage all calculator state
let currentInput = '0';     // What's on display
let previousInput = '';     // First number in operation
let currentOperator = null; // Current operation (+, -, ×, ÷)
let shouldResetDisplay = false; // Display reset flag
Safe Calculation Logic
javascript
// Custom calculation instead of eval() for security
switch (currentOperator) {
  case 'add':
    result = prevValue + currentValue;
    break;
  case 'divide':
    if (currentValue === 0) {
      alert('Cannot divide by zero!');
      clearCalculator();
      return;
    }
    result = prevValue / currentValue;
    break;
  // ... other operations
}
🔧 Installation & Setup
Clone the repository

bash
git clone https://github.com/your-username/calculator.git
cd calculator
Run locally (choose one):

Simply open index.html in any browser

Use VS Code with Live Server extension

Use Python: python -m http.server 8000

No dependencies required - runs in any modern browser

🧪 Testing the Calculator
Test these edge cases to see robust error handling:

Division by zero → Alert message

Multiple decimal points → Prevented

Chained operations → Works correctly

Large numbers → Proper display with word-wrap

Clear functionality → Complete reset

📈 Learning Outcomes
This project demonstrates mastery of:

HTML/CSS
Semantic HTML5 structure

CSS Grid for complex layouts

Flexbox for centering

CSS variables and transitions

Responsive design principles

JavaScript
DOM manipulation and event handling

State management patterns

Algorithm implementation (calculation logic)

Error handling and input validation

Code organization and commenting

Software Engineering
Clean, readable code with comments

Separation of concerns (HTML/CSS/JS)

Problem-solving for edge cases

Version control with Git

🔮 Future Enhancements
Planned features (great for contributors!):

Keyboard support (number/operator keys)

Backspace functionality

Percentage calculations

Memory functions (M+, M-, MR, MC)

Theme switcher (light/dark mode)

Calculation history panel

Scientific functions (sin, cos, √, etc.)

Mobile app with PWA capabilities

🤝 Contributing
Found a bug or have a feature request?

Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit changes (git commit -m 'Add AmazingFeature')

Push to branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
Distributed under the MIT License. See LICENSE file for details.

🙏 Acknowledgments
Inspired by classic calculator designs

Built as part of web development fundamentals practice

Thanks to the developer community for best practices

Special thanks to JSFiddle for prototyping environment

Built with pure HTML, CSS, and JavaScript • No frameworks, no dependencies, just clean code 🎯

"Good code is its own best documentation." - Steve McConnell
