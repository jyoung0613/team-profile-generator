const fs = require('fs');
const index = require('../index');
const colors = require('colors');

// Generate HTML for MyTeam
const generate = (teamArr) => {
    // Functions to create new arrays of employee card HTML.  Grouping employees by role.
    function genManagers(employee) {
        for (i = 0; i < employee.length; i++) {
            if (employee[i].role === "Manager") {
                managerCardsHTML.push(employee[i].managerCard);
            }
        }
    }
    function genEngineers(employee) {
        for (i = 0; i < employee.length; i++) {
            if (employee[i].role === "Engineer") {
                engineerCardsHTML.push(employee[i].engineerCard);
            }
        }
    }
    function genInterns(employee) {
        for (i = 0; i < employee.length; i++) {
            if (employee[i].role === "Intern") {
                internCardsHTML.push(employee[i].internCard);
            }
        }
    }

    // Arrays to hold HTML for each employee card by role.
    let managerCardsHTML = [];
    let engineerCardsHTML = [];
    let internCardsHTML = [];

    // Generate arrays of employee cards
    genManagers(teamArr);
    genEngineers(teamArr);
    genInterns(teamArr);

    return `
    <!doctype html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="description" content="My Team Profile">
            <meta name="keywords" content="My Team Profile">
            <meta name="author" content="John Young">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            
            <!-- Stylesheets -->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?&family=Poppins:wght@200;300;400;500&family=Roboto:wght@300;400;500;700&display=swap" >
            <link rel="stylesheet" href="../styles/style.css">
            <title>My Team</title>
        </head>
        
        <body>
            <header class="jumbotron">
                <div class="container">
                    <div class="row align-self-center">
                        <h1 class="text-center">My Team</h1>
                    </div>
                </div>
            </header>
            
            <main>
                <section class="container">
                    <div class="row">
                        ${managerCardsHTML.join(" ")}
                    </div>
                </section>
                
                <hr class="mt-1 mb-4"/>
                
                <section class="container">
                    <div class="row">
                        ${internCardsHTML.join(" ")}
                    </div>
                </section>

                <hr class="mt-1 mb-4"/>

                <section class="container">
                    <div class="row">
                        ${engineerCardsHTML.join(" ")}
                    </div>
                </section>
                
            </main>
        </body>
    </html>`
}

const generateHTML = (teamArr) => {
    fs.writeFile('./dist/MyTeam.html', generate(teamArr), function(err, result) {
        (err) ? console.log('error', err): console.log(`\r\nSuccessfully wrote MyTeam.html to your dist folder.`.underline.green);
        }
    );
};

module.exports = generateHTML;