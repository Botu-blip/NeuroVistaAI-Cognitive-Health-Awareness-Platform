# NeuroVistaAI - Customization Guide

## 🎨 Customizing Colors

### Editing Theme Colors
All colors are defined in `tailwind.config.js`. You can customize them to match your brand:

```javascript
colors: {
  light: {
    primary: '#EBF4FF',      // Light blue backgrounds
    accent: '#FFE5D9',       // CTA button color
    // ... more colors
  },
  dark: {
    primary: '#0F172A',      // Dark backgrounds
    accent: '#FF9F80',       // CTA button color in dark mode
    // ... more colors
  }
}
```

## 🔤 Changing Fonts

### Update Font Family
Fonts are imported in `src/index.css` and configured in `tailwind.config.js`:

**Step 1**: Update Google Fonts import in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');
```

**Step 2**: Update Tailwind config:
```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
}
```

## 💬 Chatbot Customization

### Adding More Responses
Edit `src/components/Chatbot.jsx` and update the `predefinedResponses` object:

```javascript
const predefinedResponses = {
  yourKeyword: "Your custom response here",
  // ... add more
};
```

### Connecting to OpenAI API
1. Get an API key from [OpenAI](https://platform.openai.com/api-keys)
2. Create a `.env` file (copy from `.env.example`)
3. Add your key: `VITE_OPENAI_API_KEY=sk-...`
4. Update the `getResponse` function in `Chatbot.jsx` to use the OpenAI API

Example integration:
```javascript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Only for demo purposes
});

const getResponse = async (userMessage) => {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant for NeuroVistaAI..." },
      { role: "user", content: userMessage }
    ],
    model: "gpt-3.5-turbo",
  });
  return completion.choices[0].message.content;
};
```

## ✨ Animation Settings

### Adjusting Animation Speed
Edit animation durations in component files:

```javascript
// Faster animation
transition={{ duration: 0.3 }}

// Slower animation
transition={{ duration: 1.5 }}
```

### Disabling Animations
To disable animations for better performance on slower devices, wrap motion components in regular divs:

```javascript
// From this:
<motion.div animate={{ ... }}>

// To this:
<div>
```

## 📱 Responsive Breakpoints

### Tailwind Breakpoints
- `sm`: 640px
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px
- `2xl`: 1536px

Example usage:
```javascript
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
```

## 🧩 Adding New Sections

### Creating a New Section Component

1. **Create component file** in `src/components/`:
```javascript
// src/components/NewSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const NewSection = () => {
  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Your Section Title</h2>
        {/* Your content */}
      </motion.div>
    </section>
  );
};

export default NewSection;
```

2. **Import and add to App.jsx**:
```javascript
import NewSection from './components/NewSection';

// Add to the main element:
<NewSection />
```

## 🔧 Common Customizations

### Changing Hero Headline
Edit `src/components/Hero.jsx`, line ~48:
```javascript
<h1 className="...">
  Your New Headline Here
</h1>
```

### Updating Feature Cards
Edit `src/components/KeyFeatures.jsx`, update the `features` array:
```javascript
const features = [
  {
    icon: <YourIcon />,
    title: "Your Feature",
    description: "Your description"
  },
  // ... more features
];
```

### Modifying Technology Stack
Edit `src/components/Technology.jsx`, update the `technologies` array:
```javascript
const technologies = [
  {
    icon: <YourIcon />,
    name: "Your Technology",
    description: "Description"
  },
  // ... more
];
```

## 🌐 Deployment

### Building for Production
```bash
npm run build
```

### Deploying to Vercel
1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Deploying to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

## 🔒 Environment Variables

Create a `.env` file for sensitive data:
```
VITE_OPENAI_API_KEY=your_key_here
VITE_ANALYTICS_ID=your_analytics_id
```

Access in code:
```javascript
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
```

## 📊 Adding Analytics

### Google Analytics
1. Install: `npm install react-ga4`
2. Initialize in `src/main.jsx`:
```javascript
import ReactGA from 'react-ga4';
ReactGA.initialize('G-XXXXXXXXXX');
```

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format
2. **Lazy Load Components**: Use `React.lazy()` for large sections
3. **Reduce Animation Complexity**: Fewer particles for better performance
4. **Code Splitting**: Vite handles this automatically
5. **Bundle Analysis**: Run `npm run build -- --analyze`

## 🐛 Troubleshooting

### Animations Not Working
- Check if Framer Motion is installed: `npm list framer-motion`
- Ensure imports are correct

### Theme Not Switching
- Check if ThemeProvider wraps the app in `App.jsx`
- Clear localStorage: `localStorage.clear()`

### Chatbot Not Responding
- Check console for errors
- Verify the `getResponse` function logic
- Test with simple keywords first

## 📞 Support

For questions or issues:
- Check the [README.md](./README.md)
- Review [FEATURES.md](./FEATURES.md)
- Contact: support@neurovistaai.com

---

**Happy Customizing! 🚀**
