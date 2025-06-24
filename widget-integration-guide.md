# Plant Doctor Guide - Maropost Commerce Integration Guide

## Option 1: JavaScript Widget Integration (Recommended)

### Step 1: Create Widget Bundle
Convert your React app to a standalone JavaScript widget that can be embedded anywhere.

### Step 2: Maropost Commerce Integration

#### A. Custom Page Integration
1. Create a new page in Maropost admin
2. Add the widget code to the page content
3. Link to this page from your navigation

#### B. Product Page Integration
1. Edit your product page template
2. Add widget container where you want the guide to appear
3. Load the widget script

### Step 3: Widget Code Structure

```html
<!-- Add to your Maropost page or template -->
<div id="plant-doctor-guide"></div>
<script src="https://your-domain.com/plant-doctor-widget.js"></script>
<script>
  PlantDoctorGuide.init({
    containerId: 'plant-doctor-guide',
    apiEndpoint: '/api/products', // Your Maropost API endpoint
    theme: 'maropost' // Match your site styling
  });
</script>
```

## Option 2: Maropost Commerce App Development

### Requirements:
- PHP backend integration
- Maropost Commerce API integration
- Follow Maropost app development standards

### Development Steps:
1. Register as Maropost developer
2. Create app structure following their guidelines
3. Integrate with their product catalog API
4. Submit for review and approval

## Option 3: Iframe Embed (Quick Solution)

### Deploy Standalone:
1. Deploy your Next.js app to Vercel/Netlify
2. Embed via iframe in Maropost pages

```html
<iframe 
  src="https://plant-guide.your-domain.com" 
  width="100%" 
  height="800px" 
  style="border: none; border-radius: 8px;">
</iframe>
```

## Recommended Approach

**For immediate deployment:** Use Option 3 (iframe embed)
**For best integration:** Convert to JavaScript widget (Option 1)
**For marketplace distribution:** Develop as Maropost app (Option 2)

## Next Steps

1. Choose integration method based on your needs
2. Set up hosting for the application
3. Configure product data integration
4. Test on staging environment
5. Deploy to production

## Technical Considerations

- **Product Data Sync:** Ensure product information stays synchronized
- **Styling:** Match your website's design system
- **Performance:** Optimize loading times
- **Mobile Responsiveness:** Ensure it works on all devices
- **Analytics:** Track usage and conversions 