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
                    link.href = './css/style.css';  
                    document.head.appendChild(link);
                })
                .catch(error => {
                    console.error('Error loading the content:', error);
                });
        } 

                else if (url === '/dice') {//dice game
            fetch('dice.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('content').innerHTML = data;
                    // Reapply the default CSS
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = './css/style.css';  
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

        else if (url === '/electric') {//WARES
            fetch('electric.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('content').innerHTML = data;
                    // Reapply the default CSS
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = './css/style.css';  
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

        else if (url === '/dice') {
            document.title = 'Dice Game';
            document.querySelector('.header-text').textContent = 'Dice Game';
        } 

        else if (url === '/electric') {
            document.title = 'Electronics';
            document.querySelector('.header-text').textContent = 'Electronic Projects';
        } 

        else if (url === '/timeline') {
            document.title = 'Raymonds Timeline';
        } 
        
        else {
            document.title = '404 - Page Not Found';
            setTimeout(() => {
                window.location.href = "/"; // Redirects to home
            }, 3000); // 3000 milliseconds = 3 seconds
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

        else if (event.target.closest('#electricLink')) {
            event.preventDefault();
            navigateTo('/electric');
        }

        else if (event.target.closest('#timeLink')) {
            event.preventDefault();
            navigateTo('/timeline');
        }

        else if (event.target.closest('#cheese')){
            const inNumber = document.querySelector("#Integer");//user input
            const roman = document.querySelector("#roman"); // Result display
            console.log(inNumber.value); // Debugging log
            roman.textContent = inNumber.value; // Assign input value            
            cheeseIt();        
        }

        else if (event.target.closest('#diceLink')) {
            event.preventDefault();
            navigateTo('/dice');
        }

        else if (event.target.closest('#rollBtn')) {
            const d1 = getRandomInt(1, 6);
            const d2 = getRandomInt(1, 6);

            const img1 = document.getElementById("d1");
            const img2 = document.getElementById("d2");

            // Update dice image sources
            img1.src = `./assets/Images/dice${d1}.png`;
            img2.src = `./assets/Images/dice${d2}.png`;

            // Re-trigger animation
            img1.classList.remove("animate-die");
            img2.classList.remove("animate-die");
            void img1.offsetWidth; // trigger reflow                
            void img2.offsetWidth;

            img1.classList.add("animate-die");
            img2.classList.add("animate-die");
        }

        // Random number helper
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
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
        const roman = document.querySelector("#roman");//roman numeral converter code
    });

    let isNeg = false;  
    function cheeseIt() {
        const inNumber = document.querySelector("#Integer"); 
        const roman = document.querySelector("#roman"); 
        let num = parseInt(inNumber.value); //get user input
        num = negIt(num);//converts negs
        console.log(num);//prints to console
        const passIt = romanize(num); //converts number to Roman
        roman.textContent = (isNeg ? "-":"") + num + " equals " + (isNeg ? "-":"") + passIt + " in Roman notation.";//string
    }

    function negIt(num) {
        if (num < 0) { // Changed <= -1 to just < 0
            isNeg = true;  
            return Math.abs(num);
        }
        isNeg = false; // Reset isNeg if number isn't negative
        return num;
    }
        
    function romanize (num) {//100% not mine
        if (num == NaN)
            return "🤨"
    
        var digits = String(+num).split(""),
            key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                    "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                    "","I","II","III","IV","V","VI","VII","VIII","IX"],
            roman = "",
            i = 3;
        while (i--)
            roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        return  Array(+digits.join("") + 1).join("M") + roman;
    }

    function openNav() {//for the dropdown menu
        document.getElementById("myNav").style.height = "100%";
      }
      
      function closeNav() {
        document.getElementById("myNav").style.height = "0%";
      }
      
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      




