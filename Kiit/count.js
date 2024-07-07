// Function to increment the view count
function incrementViewCount() {
    // Get the current view count from local storage
    let viewCount = localStorage.getItem('viewCount');
  
    // Check if the view count exists
    if (viewCount) {
      // Increment the view count
      viewCount = parseInt(viewCount) + 1;
    } else {
      // Set the view count to 1 if it doesn't exist
      viewCount = 1;
    }
  
    // Store the updated view count in local storage
    localStorage.setItem('viewCount', viewCount);
  
    // Update the view count in the HTML
    document.getElementById('viewCount').innerHTML = viewCount;
  }
  
  // Call the incrementViewCount function when the page loads
  window.onload = incrementViewCount;
  