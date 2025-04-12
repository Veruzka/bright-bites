/* Predefined set of spacing for consistency */
const SPACING_SIZES = {
    "200": 200,
    "96": 96,
    "88": 88,
    "80": 80,
    "72": 72,
    "64": 64,
    "56": 56,
    "48": 48,
    "40": 40,
    "32": 32,
    "24": 24,
    "16": 16,
    "8": 8,
  };
  
  interface SpacingProps {
    size: keyof typeof SPACING_SIZES;
  }
  
  const Spacing: React.FC<SpacingProps> = ({ size }) => {
    const spacingSize = SPACING_SIZES[size];
  
    return <div style={{ height: spacingSize, display: "flex", margin: 0, padding: 0 }} />;
  };

  export default Spacing;
  
