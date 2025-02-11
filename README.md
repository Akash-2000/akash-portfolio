# My Portfolio

    - Installed tailwind css
    - Installed daisy UI
    - Installed react router dom
    - create a single route
    - Addd the header and other hero sections
    - added the scroll to section feature
    - Added hero section title
    - worked on About me section using the grid
    - currently work on the ruff view
    - Project carousel need to work

# Pages

    - Layout
        - Header
        - Footer
    - Pages
        - Home
        - About
        - Project
        - Experience
        - Contact
    - Path
      - / - (root)

# Research

```javascript
import React, { useRef } from "react";

// Create a reference for the "Contact Us" section
const contactUsRef = useRef(null);

// Function to scroll to the Contact Us section
const scrollToContact = () => {
  contactUsRef.current.scrollIntoView({ behavior: "smooth" });
};

const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  // Ensure window is available (client-side only)
  if (typeof window !== "undefined") {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }
}, []); // Empty dependency array, meaning this runs once when the component mounts
```
