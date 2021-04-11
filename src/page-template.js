

const generateCard = (empArr) => {

    console.log(`Employee array is ${empArr}`);
    return `
    <section class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${empArr.EmpName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${empArr.Designation}</h6>
                <h6 class="card-subtitle mb-2 text-muted">${empArr.Id}</h6>
                <a href="#" class="card-link">${empArr.email}</a>
                <a href="#" class="card-link">${empArr.details}</a>
            </div>
        </div>
    </section>
    `;
};

module.exports = templateData => {
    const { TeamName, ...employeeData } = templateData;
    // console.log(`template data is ${templateData}`);
    console.log(`team name is ${TeamName}`);
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
<div class="row">${TeamName}</div>
<div class="row">

    // ${generateCard(templateData)}
</div>
</div>
</body>
</html>
`;
}