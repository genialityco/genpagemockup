# Neo-Warhol Pop-Art Radical Editorial Design System

## Design Philosophy
This design system captures the essence of Andy Warhol's pop-art movement combined with radical editorial magazine aesthetics, creating a bold, high-contrast visual language that demands attention and communicates with impact.

## Core Design Principles

### 1. Neo-Warhol Typography
- **Ultra-bold fonts** (font-weight: 900)
- **Uppercase text** for impact
- **Tight letter spacing** (-0.02em to 0.05em)
- **Color blocks** as typography containers
- **Sharp, geometric layouts**

### 2. Pop-Art Color System
- **Primary Orange**: #ff6600 (Warhol orange)
- **Gradient Orange**: linear-gradient(135deg, #fd7e14, #ff922b)
- **High Contrast**: Pure black (#000) and white (#fff)
- **Color blocking** for emphasis

### 3. Radical Editorial Layout
- **Grid-based** magazine layouts
- **Asymmetrical** compositions
- **Geometric accents** (triangles, circles, squares)
- **Bold sectioning** with clear hierarchy

## Component Classes

### Typography
```css
.pop-highlight          /* Orange color block with white text */
.editorial-text         /* Large, readable body text */
.editorial-highlight    /* Inline orange highlights */
.editorial-link         /* Bold, uppercase links with underlines */
.print-style           /* Times New Roman, editorial typography */
.big-number            /* Large decorative numbers */
```

### Layout
```css
.section                /* Main content sections */
.section.invert         /* Black background sections */
.pop-grid               /* Two-column grid system */
.magazine-container     /* Main content container */
.hero-section           /* Hero area with grid background */
.hero-grid              /* Dot grid overlay */
```

### Visual Elements
```css
.color-block            /* Orange gradient buttons/badges */
.geometric-accent       /* Decorative shapes */
.halftone-bg           /* Pop-art halftone patterns */
.overlay-orange        /* Orange diagonal overlays */
.pop-animation         /* Warhol-style animations */
```

## Usage Examples

### Hero Section
```jsx
<section className="hero-section">
  <div className="hero-grid" />
  <Container className="magazine-container">
    <div className="pop-grid">
      <Stack>
        <Title order={1}>
          Brand.<span className="pop-highlight">Solution</span>
        </Title>
        <Text className="editorial-text">
          Your message with <span className="editorial-highlight">emphasis</span>
        </Text>
      </Stack>
      <Box className="halftone-bg" />
    </div>
  </Container>
</section>
```

### Content Section
```jsx
<section className="section overlay-orange">
  <Container className="magazine-container">
    <div className="pop-grid">
      <div>
        <div className="pop-number">01</div>
        <Title order={2}>Section Title</Title>
      </div>
      <Stack>
        <Text className="editorial-text">Content with highlights</Text>
      </Stack>
    </div>
  </Container>
</section>
```

### Inverted Section
```jsx
<section className="section invert">
  <Container>
    <Title order={2}>White Title on Black</Title>
    <SimpleGrid cols={3}>
      <Card className="pop-animation">
        <ThemeIcon className="color-block">
          <Icon />
        </ThemeIcon>
        <Text c="white">White text content</Text>
      </Card>
    </SimpleGrid>
  </Container>
</section>
```

## Geometric Accents
Add visual interest with geometric shapes:
```jsx
<div className="geometric-accent triangle" style={{ top: '10%', left: '10%' }} />
<div className="geometric-accent circle" style={{ bottom: '15%', right: '15%' }} />
<div className="geometric-accent square" style={{ top: '20%', right: '10%' }} />
```

## Responsive Behavior
- **Desktop**: Full grid layouts, large typography
- **Tablet**: Adjusted grid spacing, medium typography
- **Mobile**: Single column, smaller but still bold typography

## Animation Guidelines
- **Subtle movements** (warholPop animation)
- **Staggered delays** for card animations
- **Transform effects** on hover (translateX/Y)
- **Color transitions** on interactive elements

## Accessibility Features
- **High contrast** mode support
- **Scalable typography** system
- **Focus indicators** for interactive elements
- **Color-blind friendly** orange/black/white palette

## Implementation Notes
1. Always use `magazine-container` for consistent spacing
2. Combine `section` with modifier classes (`invert`, `overlay-orange`)
3. Use `pop-grid` for two-column layouts
4. Apply `editorial-text` for readable body content
5. Wrap key terms in `editorial-highlight` for emphasis

This system creates a cohesive, bold visual language that captures the energy and impact of Warhol's pop-art while maintaining readability and usability for modern web applications.
