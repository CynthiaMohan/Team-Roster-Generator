// const Manager = require('../lib/Manager');
// const Engineer = require('../lib/Engineer');
// const Intern = require('../lib/Intern');
let htmlContent = [];
let des = '';
let ref = '';
const renderCard = empArr => {
    switch (empArr.getRole()) {
        case 'Manager':
            des = 'Office Number';
            ref = 'tel:+';
            break;

        case 'Engineer':
            des = 'Github';
            ref = 'https://github.com/';
            break;

        case 'Intern':
            des = 'School';
            ref = '#';
            break;
    }
    // console.log(`Employee array is ${JSON.stringify(empArr)}`);
    return `
    <section class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-header bg-info">
                <h5 class="card-title fs-3">${empArr.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted fs-4">${empArr.getRole()}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID :  ${empArr.id}</li>
                <li class="list-group-item">Email :  <a href="mailto:${empArr.email}" class="card-link">${empArr.email}</a></li>
                <li class="list-group-item">${des}  :  <a href="${ref}${empArr.getdetails()}" class="card-link">${empArr.getdetails()}</a></li>
            </ul>
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
            <h2 class="navbar-brand bg-danger text-center fs-1" href="#">${TeamName}</h2>
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

module.exports = (templateData) => {
    // const role = templateData.getRole();
    // console.log(role);

    // console.log(`template data is ${templateData}`);

    // console.log('array size is' + templateData.length);
    htmlContent.push(startPage(templateData));
    for (i = 1; i < templateData.length; i++) {
        // if (templateData[i]) {
        console.log(templateData[i]);
        htmlContent.push(renderCard(templateData[i]));
        // }
    }
    htmlContent.push(endPage());
    return htmlContent.join('');
}

