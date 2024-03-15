  // Get all the buttons
  let buttons = document.querySelectorAll('button');
  
  // Get all the close buttons
  //let closeButtons = document.querySelectorAll('.close-button');
  
  // Get the block contents of each group/button
  let blockContent = document.querySelectorAll('.btn-content');

  //Get the width of the window, to make it responsive
  let windowSize = window.innerWidth;

  //Buttons function
  buttons.forEach(function(button) {
        
          // Add click event listener to each button
          button.addEventListener('click', function() {
            //each button has an id number as ID, parses at int
            let a = parseInt(this.id);
            //append the id to the corresponding message id
            let messageId = "message-" + a;
            //Copied the message and display it in a div depending on sxreen size
            let copiedMsg = document.getElementById(messageId).innerHTML;           
            //determines the div to place it
            let b = Math.ceil(a/2);
            //the div that displays message for mobile/tablet
            let sdContent = "small-" + b;
            //determines the div to place it
            let f = Math.ceil(a/4);
            //the div that displays message for desktop
            let lgContent = "large-" + f;
            //html code for closing button to append
            let amd = '<button class="close-button" onclick="closeButtons()">close</button>';

            //Two responsive modes, if less the 768 (mobile and tablet), greater
            //than 768 desktop, determines which div to assign the copied content to
            if(windowSize < 768) {
            
              document.getElementById(sdContent).style.display = 'block';
              //copies the content from the block
              document.getElementById(sdContent).innerHTML = copiedMsg;
              //appends the close button
              document.getElementById(sdContent).innerHTML += amd; 
            
            }
            else {
                document.getElementById(lgContent).style.display = 'block';
                //copies the content from the block
                document.getElementById(lgContent).innerHTML = copiedMsg;
                //appends the close button
                document.getElementById(lgContent).innerHTML += amd;
              }
          });   
        });

// Define the function to add event listeners to close buttons
function closeButtons() {
    // Get all elements with the class "close-button"
    var closeButtons = document.querySelectorAll('.close-button');

    // Loop through each close button and attach a click event listener
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Get the parent element (the container div) of the clicked close button
            var container = button.parentElement;
            // Get the ID of the parent element
            var parentID = container.id;
            // Hide the container div
            container.style.display = 'none';
        });
    });
}
 
/* Other attempts at making the close button work but the code above is the one
   that ended up working the best

   
      closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Get the parent element (the container div) of the clicked close button
            var container = button.parentElement;
            // Get the ID of the parent element
            var parentID = container.id;
            // Log the ID of the parent element
            document.getElementById("demo").innerHTML = parentID;
            // Hide the container div
            container.style.display = 'none';
        });
    });

  // Add click event listener to close button
  closeButtons.addEventListener('click', function(event) {
    // Hide the accordion content
    blockContent.style.display = 'none';
    // Prevent the click event from bubbling up to the header
    //event.stopPropagation();
  });

    // Get all elements with the class "close-button"
    
  // Loop through each close button and attach a click event listener
   closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Get the parent element (the container div) of the clicked close button
            var container = button.parentElement;
            // Hide the container div
            container.style.display = 'none';
        });
    });
   
  function closeDiv() {
        var closeDiv = document.getElementById("");
        div.style.display = "none";
    }

      function myFunction() {
    // Get the parent element (the container div) of the clicked close button
            var container = button.parentElement;
            // Get the ID of the parent element
            var parentID = container.id;
            // Log the ID of the parent element
            document.getElementById("demo").innerHTML = parentID;
}
*/