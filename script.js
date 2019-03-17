// BOUCLES DE STATISTIQUES

var comptHommes = 0;
var comptFemmes = 0;
for (var i = 0; i < database.length; i++) {
    if (database[i].gender == "female") {
        comptFemmes++;
    } else {
        comptHommes++;
    }

}

var comptAct = 0;
var comptInact = 0;
for (var i = 0; i < database.length; i++) {
    if (database[i].isActive == true) {
        comptAct++;
    } else {
        comptInact++;
    }

}

var compt29 = 0;
var compt31 = 0;
for (var i = 0; i < database.length; i++) {
    if (database[i].age < 30) {
        compt29++;
    } else {
        compt31++;
    }

}

// FRAMEWORK CHART.JS QUI GENERE LES
// TABLEAUX DE STATS

new Chart(document.getElementById("myChart"), {
    // FORME DU MODULE DE STAT
    type: 'pie',
    responsive: false,
    // DONNEES DU MODULE DE STAT
    data: {
        labels: ["Hommes", "Femme"],
        datasets: [{
            label: "Proportion Hommes / Femmes",
            backgroundColor: ["#ce0033", "black"],
            data: [comptHommes, comptFemmes]
        }]
    },
    options: {
        maintainAspectRatio: false,
        title: {
            display: true,

            text: 'Proportion Hommes / Femmes'
        }
    }
});



new Chart(document.getElementById("myChart2"), {
    type: 'pie',
    data: {
        labels: ["Membres Actifs", "Membres Inactifs"],
        datasets: [{
            label: "Membres Actifs",
            backgroundColor: ["#ce0033", "black"],
            data: [comptAct, comptInact]
        }]
    },
    options: {
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Proportion d\'adhérents actifs'
        }
    }
});





new Chart(document.getElementById("myChart3"), {
    type: 'pie',
    data: {
        labels: ["Adh. + 30 ans", "Adh. - 30 ans"],
        datasets: [{
            label: "Proportion +30 / -30 ans",
            backgroundColor: ["#ce0033", "black"],
            data: [compt29, compt31]
        }]
    },
    options: {
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Proportion +30 / -30 ans'
        }
    }
});



$(function() {

    var table = "<tbody>";
    var table2;

    //BOUCLE QUI PARCOURT TOUTE LA DATABASE

    $.each(database, function(index, adherent) {

        // CHAQUE ENTREE DE LA DATABASE GENERE
        // UNE LIGNE AVEC LES INFOS

        table += "<tr>";
        table += '<td><td id="listadh"><img src="images/avatar.jpg" id="avatar" alt=""></td>';
        table += "<td>" + adherent.name + "</td>";
        table += "<td><button type='button' name='button' id='" + index + "' class='btn fas fa-angle-down button1'> </button></td>";
        table += "</tr>";

    });
    table += "</tbody>";


    //LA TABLE S'AFFICHE DANS LE HTML
    $('#listAdh').html(table);


    // CLIC SUR LE BOUTON DU PROFIL
    $('button').click(function() {

        var infoList = database[this.id];

        //INFOS DYNAMIQUES DU POPUP
        table2 += "<tr><td></td><th colspan='3'> <strong>Infos Personnelles</strong> </th><th><i id='cross' class='fa fa-times-circle fa-2x'></i></th></tr>";
        table2 += "<tr><td rowspan='4'><img src='images/avatar.jpg' id='avatar1' alt=''></td><td> <strong>Nom : </strong>" + infoList.name.split(" ")[1] + "</td><td> <strong>Prénom : </strong>" + infoList.name.split(" ")[0] + "</td></tr>";
        table2 += "<tr><td> <strong>Age: </strong>" + infoList.age + "</td><td> <strong>Sexe : </strong>" + infoList.gender + "</td></tr>";
        table2 += "<tr><td colspan='4'> <strong>Adresse : </strong>" + infoList.address + "</td></tr>";
        table2 += "<tr><td><button type='button' name='button' class='btn btn-danger butpop'>Editer compte</button></td><td><button type='button' name='button' class='btn btn-danger butpop'>Supprimer Compte</button></td></tr>";
        table2 += "<tr><td colspan='4'></td></tr>";


        $('#list').hide();
        $('#thead').hide();
        $('#popup1').removeClass('hide');
        $('#popup1').addClass('flex');
        $('#infoPop').removeClass('hide');
        $('#infoPop').addClass('show');
        $('#infoPop').html(table2);


        $('#cross').click(function() {
            table2 = "";
            $('#infoPop').html(table2);
            $('#list').show();
            $('#thead').show();
            $('#popup1').addClass('hide');
            $('#infoPop').addClass('hide');
        });
    });
});

// BOUTONS POUR SWITCHER ENTRE LE
// MODULE DE STAT SUIVANT OU PRECEDENT

$("#chart1").click(function() {

    if ($("#un").hasClass("show")) {
        $("#un").removeClass("show");
        $("#un").addClass("hide");
        $("#deux").removeClass("hide");
        $("#deux").addClass("show")
    } else if ($("#deux").hasClass("show")) {
        $("#deux").removeClass("show");
        $("#deux").addClass("hide");
        $("#trois").removeClass("hide");
        $("#trois").addClass("show")
    } else if ($("#trois").hasClass("show")) {
        $("#trois").removeClass("show");
        $("#trois").addClass("hide");
        $("#un").removeClass("hide");
        $("#un").addClass("show")
    }

})

$("#chart2").click(function() {

    if ($("#un").hasClass("show")) {
        $("#un").removeClass("show");
        $("#un").addClass("hide");
        $("#trois").removeClass("hide");
        $("#trois").addClass("show")
    } else if ($("#trois").hasClass("show")) {
        $("#trois").removeClass("show");
        $("#trois").addClass("hide");
        $("#deux").removeClass("hide");
        $("#deux").addClass("show")
    } else if ($("#deux").hasClass("show")) {
        $("#deux").removeClass("show");
        $("#deux").addClass("hide");
        $("#un").removeClass("hide");
        $("#un").addClass("show");
    }
})
