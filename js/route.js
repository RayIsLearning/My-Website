    // Function to render content based on the URL
    function renderContent(url) {
        if (url === '/') {  // HOME
            fetch('home.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('content').innerHTML = data;
        
                    // Reapply the default CSS
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = './css/style.css';  // Replace with the actual path to your default CSS file
                    document.head.appendChild(link);
                })
                .catch(error => {
                    console.error('Error loading the content:', error);
                });
        }
        
        else if (url === '/about') {//ABOUT ME
            fetch('about.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('content').innerHTML = data;
                    // Reapply the default CSS
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = './css/style.css';  // Replace with the actual path to your default CSS file
                    document.head.appendChild(link);
                })

                .catch(error => {
                    console.error('Error loading the content:', error);
                });
        } 

        else if (url === '/software') {//WARES
            fetch('software.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('content').innerHTML = data;
                    // Reapply the default CSS
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = './css/style.css';  // Replace with the actual path to your default CSS file
                    document.head.appendChild(link);
                })
                .catch(error => {
                    console.error('Error loading the content:', error);
                });
        } 

        else if (url === '/roman') {//WARES
            fetch('newRoman.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('content').innerHTML = data;
                    // Reapply the default CSS
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = './css/style.css';  // Replace with the actual path to your default CSS file
                    document.head.appendChild(link);
                })
                .catch(error => {
                    console.error('Error loading the content:', error);
                });
        } 

        else if (url === '/timeline') { // timeline
            fetch('timeline.html')
                .then(response => response.text())
                .then(data => {
                    // Set the fetched HTML content to the #content element
                    document.getElementById('content').innerHTML = data;
        
                    // Define contentElement by selecting the #content element
                    const contentElement = document.getElementById('content');
        
                    // Add the 'timeline-page' class to #content
                    contentElement.classList.add('timeline-page');
        
                    // Create a new <link> element for the specific CSS file
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = './css/timeline.css';  
        
                    // Append the new CSS file to the <head>
                    document.head.appendChild(link);
                })
                .catch(error => {
                    console.error('Error loading the content:', error);
                });
        }
        
        else {
            document.getElementById('content').innerHTML = '404 - Page Not Found';
        }
    }

            function renderTitle(url) {
        if (url === '/') {
            document.title = 'Home';
            document.querySelector('.header-text').textContent = 'Ray Cooke Welcomes You!';
        } 
        
        else if (url === '/about') {
            document.title = 'About';
            document.querySelector('.header-text').textContent = 'All About Ray';
        } 
        
        else if (url === '/software') {
            document.title = 'Projects';
            document.querySelector('.header-text').textContent = 'JavaScript Powered Pages';
        } 

        else if (url === '/roman') {
            document.title = 'Roman Numeral Converter';
            document.querySelector('.header-text').textContent = 'Numeral Converter';
        } 

        else if (url === '/timeline') {
            document.title = 'Raymonds Timeline';
        } 
        
        else {
            document.title = '404 - Page Not Found';
        }
    }

    // Update content when the URL changes
    window.onpopstate = function(event) {
        renderContent(window.location.pathname);
        renderTitle(window.location.pathname);
    };

    // Change the URL and render content
    function navigateTo(url) {
        history.pushState({}, '', url);
        renderContent(url);
        renderTitle(url);
    }

    document.addEventListener('click', function(event) {
        if (event.target.closest('#homeLink')) {
            event.preventDefault(); // Prevent default link behavior
            navigateTo('/');
        } 
        
        else if (event.target.closest('#aboutLink')) {
            event.preventDefault();
            navigateTo('/about');
        } 
        
        else if (event.target.closest('#softwareLink')) {
            event.preventDefault();
            navigateTo('/software');
        }

        else if (event.target.closest('#romanLink')) {
            event.preventDefault();
            navigateTo('/roman');
        }

        else if (event.target.closest('#timeLink')) {
            event.preventDefault();
            navigateTo('/timeline');
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        let path = window.location.pathname;
        
        // Default to home if no valid route
        if (path !== '/about' && path !== '/software') {
            path = '/'; 
            history.replaceState({}, '', path); // Ensures URL updates properly
        }
    
        renderContent(path);
        renderTitle(path);
    });

    function openNav() {//for the dropdown menu
        document.getElementById("myNav").style.height = "100%";
      }
      
      function closeNav() {
        document.getElementById("myNav").style.height = "0%";
      }