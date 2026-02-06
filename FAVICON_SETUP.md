# Favicon Setup Instructions

The favicon has been configured to use the Nature Credits symbol logo. The SVG favicon is already in place at `/static/favicon.svg`.

## Current Status

✅ **Done:**
- SVG favicon copied to `/static/favicon.svg`
- Favicon links added to Layout component
- Modern browsers will use the SVG favicon

⏳ **To Complete (Optional but Recommended):**

Generate PNG and ICO versions for better browser compatibility.

## Quick Setup (Recommended)

### Option 1: Use Online Generator (Easiest)

1. Go to [RealFaviconGenerator.net](https://realfavicongenerator.net/)
2. Upload `/static/Logos/naturecredits_symbol.svg`
3. Customize settings if needed (or use defaults)
4. Generate and download the favicon package
5. Extract and copy these files to `/static/`:
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`

### Option 2: Use ImageMagick (Command Line)

If you have ImageMagick installed:

```bash
cd static

# Convert SVG to PNG at different sizes
convert Logos/naturecredits_symbol.svg -resize 16x16 favicon-16x16.png
convert Logos/naturecredits_symbol.svg -resize 32x32 favicon-32x32.png
convert Logos/naturecredits_symbol.svg -resize 180x180 apple-touch-icon.png

# Create ICO file (multi-resolution)
convert favicon-16x16.png favicon-32x32.png favicon.ico
```

### Option 3: Use favicon.io

1. Go to [favicon.io/favicon-converter](https://favicon.io/favicon-converter/)
2. Upload `/static/Logos/naturecredits_symbol.svg`
3. Download the generated files
4. Copy to `/static/` folder

## Files Needed

Place these files in the `/static/` directory:

- ✅ `favicon.svg` (already done)
- ⏳ `favicon.ico` (for older browsers)
- ⏳ `favicon-16x16.png` (for modern browsers)
- ⏳ `favicon-32x32.png` (for modern browsers)
- ⏳ `apple-touch-icon.png` (for iOS devices)

## Current Favicon Links in Layout

```tsx
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

## Browser Support

- **Modern browsers** (Chrome, Firefox, Safari, Edge): Will use `favicon.svg` ✅
- **Older browsers**: Will fall back to `favicon.ico` (needs to be generated)
- **iOS devices**: Will use `apple-touch-icon.png` (needs to be generated)

## Note

The SVG favicon is already working in modern browsers. The PNG and ICO versions are optional but recommended for maximum compatibility with older browsers and mobile devices.
