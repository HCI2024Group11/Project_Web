document.addEventListener('DOMContentLoaded', function() {
    // Find all accordion tabs
    const accordionContents = document.querySelectorAll('.ui-accordion-content');
    
    // Add click event listener to each tab
    accordionContents.forEach(content => {
        const header = document.querySelector(`[aria-controls="${content.id}"]`);
        
        if (header) {
            header.addEventListener('click', function() {
                // Toggle display and aria-hidden attributes
                const isHidden = content.getAttribute('aria-hidden') === 'true';
                content.style.display = isHidden ? 'block' : 'none';
                content.setAttribute('aria-hidden', !isHidden);
            });
        }
    });
});