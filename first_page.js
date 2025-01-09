
// Extract query parameters from the script's URL
const scriptSrc = document.currentScript.src;
const params = new URL(scriptSrc).searchParams;
// Path to your PDF document
const pdfUrl = params.get('arg'); // Replace with your PDF file path

// Get the image element
const imgElement = document.getElementById('thumbnail');

// Load the PDF using PDF.js
pdfjsLib.getDocument(pdfUrl).promise.then(function(pdf) {
    // Get the first page of the PDF
    pdf.getPage(1).then(function(page) {
        // Set the scale for the thumbnail
        const scale = 0.5; // Adjust for desired thumbnail size

        // Create a canvas element to render the PDF page
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        // Get the viewport for the page
        const viewport = page.getViewport({ scale: scale });

        // Set canvas size based on the viewport
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // Render the page into the canvas
        page.render({
            canvasContext: context,
            viewport: viewport
        }).promise.then(function() {
            // Convert the canvas to a data URL and set it as the image source
            imgElement.src = canvas.toDataURL('image/png');
        });
    });
}).catch(function(error) {
    console.error('Error loading PDF:', error);
});