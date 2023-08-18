import React, { useEffect } from 'react';

function CalendlyBadgeWidget() {
    useEffect(() => {
        // Load the CSS
        const link = document.createElement('link');
        link.href = 'https://assets.calendly.com/assets/external/widget.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      
        // Load the main script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
      
        let initScript; // Declare initScript in a higher scope
      
        // Load the badge initialization script once the main script is loaded
        script.onload = () => {
          initScript = document.createElement('script');
          initScript.type = 'text/javascript';
          initScript.innerHTML = `
            Calendly.initBadgeWidget({
              url: 'https://calendly.com/saiafonua',
              text: 'Schedule time with me',
              color: '#0069ff',
              textColor: '#ffffff',
              branding: true
            });
          `;
          document.body.appendChild(initScript);
        }
      
        return () => {
          document.body.removeChild(script);
          if (initScript) {
            document.body.removeChild(initScript);
          }
          document.head.removeChild(link);
        }
      }, []);
      

  return null;
}

export default CalendlyBadgeWidget;
