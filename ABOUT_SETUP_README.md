# About Section Background Image Setup

## Instructions:

1. Save the "seccion_about.png" image from your attachments to:
   `c:\Users\Lenovo\Desktop\Proyectos Propios\Slugs\Slugs\public\images\sections\seccion_about.png`

2. The image should replace the placeholder file that was created.

3. The About section will automatically display the image as a full background.

## Current Setup:

✅ AboutSection component created
✅ Component imported in main page
✅ Section added after HomeSection  
✅ Placeholder image file created
⏳ Need to copy actual image file

## Changes Made:

1. **PromotionalBanner Updates:**
   - Contract address changed to: `HusumSkat3cL5bSZWWu1fTMQakarBcT5rFtHzH5Lpump`
   - "View on Solscan" button replaced with "Buy Pumpfun" button
   - Button now links to: https://pump.fun/coin/HusumSkat3cL5bSZWWu1fTMQakarBcT5rFtHzH5Lpump
   - Button styling changed to orange theme

2. **New About Section:**
   - Created AboutSection component
   - Full viewport height section
   - Uses `/images/sections/seccion_about.png` as background
   - Added after HomeSection in main page flow
   - Responsive design with proper image scaling

## File Locations:

- About component: `components/sections/AboutSection.tsx`
- Image location: `public/images/sections/seccion_about.png`
- Main page: `app/page.tsx` (updated with new section)