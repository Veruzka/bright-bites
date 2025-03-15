/* Predefined set of spacing for consistency */
const SPACING_SIZES = {
    "200": 200,
    "96": 96,
    "88": 90,
    "80": 80,
    "72": 70,
    "64": 60,
    "56": 50,
    "48": 40,
    "40": 30,
    "32": 20,
    "24": 10,
    "16": 10,
    "8": 10,
  };
  
  interface SpacingProps {
    size: keyof typeof SPACING_SIZES;
  }
  
  const Spacing: React.FC<SpacingProps> = ({ size }) => {
    const spacingSize = SPACING_SIZES[size];
  
    return <div style={{ width: spacingSize, height: spacingSize, display: "block" }} />;
  };

  export default Spacing;
  
