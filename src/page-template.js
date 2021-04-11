const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const renderCard = empArr => {

    console.log(`Employee array is ${empArr}`);
    return `
    <section class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${EmpName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${empArr}</h6>
                <h6 class="card-subtitle mb-2 text-muted">${Id}</h6>
                <a href="#" class="card-link">${email}</a>
                <a href="#" class="card-link">${details}</a>
            </div>
        </div>
    </section>
    `;
};

const startPage = (templateData) => {
    const TeamName = templateData[0];
    // console.log(`team name is ${TeamName}`);
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${TeamName} Team Roster</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="stylesheet" href="./assets/css/style.css">
    </head>
    <body>
        <div class="container">
            <h2 class="navbar-brand bg-danger text-center" href="#">${TeamName}</h2>
            <div class="row mt-5">`;
}

const endPage = () => {
    return `</div >
    </div >
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
</body >
</html > `;
}

module.exports = templateData => {
    // const role = templateData.getRole();
    // console.log(role);

    // console.log(`template data is ${templateData}`);

    console.log(templateData);
    startPage(templateData);
    for (i = 1; i < templateData.length; i++) {
        // if (templateData[i]) {

        renderCard(templateData[i]);
        // }
    }
    endPage();
}