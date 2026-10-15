# 🤝 Contributing to NeuroVistaAI

Thank you for your interest in contributing to NeuroVistaAI! This guide will help you get started.

## 🌟 Ways to Contribute

- 🐛 **Bug Reports**: Found an issue? Report it!
- ✨ **Feature Requests**: Have ideas? Share them!
- 📝 **Documentation**: Improve our guides
- 💻 **Code**: Submit pull requests
- 🎨 **Design**: Suggest UI/UX improvements
- 🌐 **Translations**: Help add language support

## 🚀 Getting Started

### 1. Fork & Clone
```bash
# Fork the repository on GitHub, then:
git clone https://github.com/your-username/neurovistaai.git
cd neurovistaai
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create a Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

### 4. Make Changes
- Edit files in `src/`
- Test your changes locally
- Ensure responsive design works
- Check dark/light mode compatibility

### 5. Test Thoroughly
```bash
# Development server
npm run dev

# Production build
npm run build
npm run preview
```

### 6. Commit Changes
```bash
git add .
git commit -m "feat: add new feature description"
# or
git commit -m "fix: resolve issue with component"
```

### 7. Push & Create PR
```bash
git push origin feature/your-feature-name
```
Then create a Pull Request on GitHub.

## 📋 Coding Standards

### React Components
```javascript
// Use functional components with hooks
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MyComponent = () => {
  const [state, setState] = useState(initialValue);
  
  return (
    <motion.div className="...">
      {/* Component content */}
    </motion.div>
  );
};

export default MyComponent;
```

### Styling
- Use Tailwind CSS utility classes
- Follow dark mode pattern: `className="light-class dark:dark-class"`
- Maintain consistent spacing
- Use theme colors from `tailwind.config.js`

### Naming Conventions
- **Components**: PascalCase (`MyComponent.jsx`)
- **Functions**: camelCase (`handleClick`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_ITEMS`)
- **CSS Classes**: kebab-case or Tailwind utilities

### File Structure
```
src/
├── components/       # React components
│   └── NewComponent.jsx
├── context/         # React context providers
├── hooks/           # Custom React hooks (if any)
└── utils/           # Utility functions (if any)
```

## 🎨 Design Guidelines

### Colors
- Always use theme colors from config
- Test in both light and dark modes
- Maintain WCAG AA contrast ratios
- Keep the calming, trustworthy aesthetic

### Typography
- Minimum 18px for body text
- Clear hierarchy with size progression
- Use Inter or Nunito Sans fonts
- Ensure high readability

### Animations
- Keep animations smooth (60fps)
- Use Framer Motion for complex animations
- Avoid jarring or sudden movements
- Test on slower devices
- Provide reduced-motion alternatives if needed

### Accessibility
- Use semantic HTML
- Include ARIA labels where needed
- Ensure keyboard navigation works
- Test with screen readers
- Maintain high contrast

## 🐛 Bug Reports

When reporting bugs, include:

1. **Description**: Clear summary of the issue
2. **Steps to Reproduce**: 
   - Step 1
   - Step 2
   - Step 3
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Screenshots**: If applicable
6. **Environment**:
   - Browser & version
   - OS
   - Screen size (if responsive issue)
   - Dark/light mode

## ✨ Feature Requests

When requesting features:

1. **Use Case**: Why is this needed?
2. **Description**: What should it do?
3. **Mockups**: Visual examples (if applicable)
4. **Alternatives**: Other solutions considered
5. **Impact**: Who benefits from this?

## 🔍 Code Review Process

All submissions require review. We look for:

- ✅ Code quality and readability
- ✅ Follows project conventions
- ✅ Works in both themes
- ✅ Responsive design
- ✅ No console errors
- ✅ Maintains accessibility
- ✅ Performance considerations
- ✅ Proper documentation

## 📝 Commit Message Format

Use conventional commits:

```
type(scope): subject

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(chatbot): add support for medical terminology

fix(theme): resolve toggle button positioning on mobile

docs(readme): update installation instructions

style(hero): improve spacing and alignment
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] Works in Chrome, Firefox, Safari
- [ ] Mobile responsive (320px+)
- [ ] Tablet responsive (768px+)
- [ ] Desktop responsive (1024px+)
- [ ] Dark mode works correctly
- [ ] Light mode works correctly
- [ ] Theme toggle functions
- [ ] Chatbot responds correctly
- [ ] All animations smooth
- [ ] No console errors
- [ ] Accessibility compliant

### Automated Testing (Future)
We plan to add:
- Unit tests (Jest + React Testing Library)
- E2E tests (Cypress or Playwright)
- Visual regression tests

## 🚫 What Not to Do

- ❌ Don't commit `node_modules/`
- ❌ Don't commit `.env` files
- ❌ Don't use inline styles (use Tailwind)
- ❌ Don't break responsive design
- ❌ Don't ignore accessibility
- ❌ Don't add heavy dependencies without discussion
- ❌ Don't remove important comments
- ❌ Don't change colors without reason

## 💡 Areas Needing Contribution

Current priorities:

1. **Chatbot Enhancement**
   - OpenAI API integration
   - More comprehensive responses
   - Multi-language support

2. **Accessibility**
   - Screen reader testing
   - Keyboard navigation improvements
   - ARIA label additions

3. **Content**
   - Medical accuracy review
   - Additional FAQs
   - Resource links

4. **Features**
   - Actual screening tests
   - Results dashboard
   - User authentication
   - Backend integration

5. **Internationalization**
   - Multi-language support (i18n)
   - RTL language support
   - Vernacular translations

6. **Performance**
   - Image optimization
   - Code splitting
   - Lazy loading

7. **Testing**
   - Unit tests
   - Integration tests
   - E2E tests

## 🎓 Learning Resources

New to the tech stack? Check these out:

- **React**: [react.dev](https://react.dev)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion)
- **Vite**: [vitejs.dev](https://vitejs.dev)

## 🤔 Questions?

- Check existing documentation
- Search existing issues on GitHub
- Ask in discussions
- Contact: dev@neurovistaai.com

## 📜 Code of Conduct

### Our Pledge
We are committed to providing a welcoming and inclusive environment for all contributors.

### Our Standards
- ✅ Be respectful and inclusive
- ✅ Accept constructive criticism
- ✅ Focus on what's best for the community
- ✅ Show empathy towards others

### Unacceptable Behavior
- ❌ Harassment or discrimination
- ❌ Trolling or insulting comments
- ❌ Personal or political attacks
- ❌ Publishing private information

## 🙏 Recognition

All contributors will be:
- Added to CONTRIBUTORS.md
- Mentioned in release notes
- Appreciated in project README

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT).

---

## 🎉 Thank You!

Every contribution, no matter how small, makes NeuroVistaAI better. We appreciate your time and effort in helping us create a tool that can genuinely help people concerned about their cognitive health.

**Happy Contributing! 🚀**

---

*Together, we can make a difference in early dementia detection and cognitive health awareness.*
