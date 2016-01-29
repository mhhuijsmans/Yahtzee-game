/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

// Maakt array voor de dobbelstenen aan met daarin per dobbelsteen een variabele
var dices = ['', '', '', '', ''];

// Variabele aantal keer dat gegooid mag worden
var rollAmountLeft = 3;
// Aantal "rondes" - er zijn 13 scoreblokken die je in kan vullen, daarna is het spelletje afgelopen
var roundsLeft = 13;
// De scores, deze worden aan het begin op 0 gezet
var counteen = 0,
    counttwee = 0,
    countdrie = 0,
    countvier = 0,
    countvijf = 0,
    countzes = 0,
    counttoak = 0,
    countfoak = 0,
    countfh = 0,
    countks = 0,
    countgs = 0,
    countyahtzee = 0,
    countchance = 0,
    countbonus = 0,
    counttotalleft = 0,
    counttotalright = 0,
    counttotal = 0;
// Variabele waarin als er een bepaalde combinatie gegooid wordt de naam van de combinatie in een string in komt te staan
var diceCombi ='';

// Om te voorkomen dat niet alle dobbelstenen tijdens de eerste worp worden gegooid
document.getElementById('checkDice1').checked = true;
document.getElementById('checkDice2').checked = true;
document.getElementById('checkDice3').checked = true;
document.getElementById('checkDice4').checked = true;
document.getElementById('checkDice5').checked = true;
document.getElementById('checkDice1').disabled = true;
document.getElementById('checkDice2').disabled = true;
document.getElementById('checkDice3').disabled = true;
document.getElementById('checkDice4').disabled = true;
document.getElementById('checkDice5').disabled = true;

// De functies waarmee de dobbelstenen worden gegooid worden hier gedeclareerd. Er wordt een willekeurig getal tussen de 1-6 gegenereerd.
// Controle functie waarmee in de console wordt gezet wat er gegooid is.
// Functie geeft een waarde terug (die van de dobbelsteen).
function rollDiceOne() {
    dices[0] = Math.floor((Math.random() * 6) + 1);
    console.log('Je hebt een ' + dices[0] + ' gegooid.');
    return dices[0];
}

function rollDiceTwo() {
    dices[1] = Math.floor((Math.random() * 6) + 1);
    console.log('Je hebt een ' + dices[1] + ' gegooid.');
    return dices[1];
}

function rollDiceThree() {
    dices[2] = Math.floor((Math.random() * 6) + 1);
    console.log('Je hebt een ' + dices[2] + ' gegooid.');

    return dices[2];
}

function rollDiceFour() {
    dices[3] = Math.floor((Math.random() * 6) + 1);
    console.log('Je hebt een ' + dices[3] + ' gegooid.');

    return dices[3];
}

function rollDiceFive() {
    dices[4] = Math.floor((Math.random() * 6) + 1);
    console.log('Je hebt een ' + dices[4] + ' gegooid.');
    return dices[4];
}
// Functie waarmee alle radiobuttons gedeselecteerd worden wordt hier gedeclareerd
// Variabele deselectScore geeft het aantal elementen met de naam 'scoreoption' (dit zijn de radiobuttons).
function deselectScorebox() {
    var deselectScore = document.getElementsByName('scoreoption');
    var i;
    for (i = 0; i <= deselectScore.length - 1; i++) {
        document.getElementsByName('scoreoption')[i].checked = false;
    }
}
// Click events waarmee ervoor wordt gezorgd dat de speler ook op de plaatjes van de dobbelstenen kan klikken om ze te (de)selecteren
document.getElementById('imgDice1').addEventListener('click', function () {
    if (document.getElementById('checkDice1').disabled === false) {
        if (document.getElementById('checkDice1').checked === false) {
            document.getElementById('checkDice1').checked = true;
        } else if (document.getElementById('checkDice1').checked === true) {
            document.getElementById('checkDice1').checked = false;
        }
    }
});

document.getElementById('imgDice2').addEventListener('click', function () {
    if (document.getElementById('checkDice2').disabled === false) {
        if (document.getElementById('checkDice2').checked === false) {
            document.getElementById('checkDice2').checked = true;
        } else if (document.getElementById('checkDice2').checked === true) {
            document.getElementById('checkDice2').checked = false;
        }
    }
});

document.getElementById('imgDice3').addEventListener('click', function () {
    if (document.getElementById('checkDice3').disabled === false) {
        if (document.getElementById('checkDice3').checked === false) {
            document.getElementById('checkDice3').checked = true;
        } else if (document.getElementById('checkDice3').checked === true) {
            document.getElementById('checkDice3').checked = false;
        }
    }
});

document.getElementById('imgDice4').addEventListener('click', function () {
    if (document.getElementById('checkDice4').disabled === false) {
        if (document.getElementById('checkDice4').checked === false) {
            document.getElementById('checkDice4').checked = true;
        } else if (document.getElementById('checkDice4').checked === true) {
            document.getElementById('checkDice4').checked = false;
        }
    }
});

document.getElementById('imgDice5').addEventListener('click', function () {
    if (document.getElementById('checkDice5').disabled === false) {
        if (document.getElementById('checkDice5').checked === false) {
            document.getElementById('checkDice5').checked = true;
        } else if (document.getElementById('checkDice5').checked === true) {
            document.getElementById('checkDice5').checked = false;
        }
    }
});

// Click event voor de knop om de dobbelstenen te rollen
document.getElementById('rollbutton').addEventListener('click', function (event) {
    // Als je 3 keer de dobbelstenen geworpen hebt mag je niet meer gooien. De knop wordt uitgeschakeld als je het nog een keer probeert, en je     krijgt de melding dat je een categorie op de scorekaart moet kiezen.
    if (rollAmountLeft === 0) {
        this.disabled = true;
        document.getElementsByClassName('msg')[0].innerHTML = 'Je mag niet meer gooien. <br/> Kies een categorie op je scorekaart.';
    }
    // Als er geen dobbelstenen geselecteerd zijn om opnieuw te gooien, wordt daar melding van gegeven.
    else {
        if (document.getElementById('checkDice1').checked === false && document.getElementById('checkDice2').checked === false && document.getElementById('checkDice3').checked === false && document.getElementById('checkDice4').checked === false && document.getElementById('checkDice5').checked === false) {
            document.getElementsByClassName('msg')[0].innerHTML = 'Je mag nog ' + rollAmountLeft + ' keer gooien.<br/> <b>Je hebt geen dobbelstenen geselecteerd <br/> om opnieuw te gooien.</b>';
        }

    // Als een checkbox geselecteerd is wordt de corresponderende dobbelsteen opnieuw gegooid. De dobbelsteen rol functies worden hier            aangeroepen.
    else {

            if (document.getElementById('checkDice1').checked === true) {
                rollDiceOne();
            }
            if (document.getElementById('checkDice2').checked === true) {
                rollDiceTwo();
            }
            if (document.getElementById('checkDice3').checked === true) {
                rollDiceThree();
            }
            if (document.getElementById('checkDice4').checked === true) {
                rollDiceFour();
            }
            if (document.getElementById('checkDice5').checked === true) {
                rollDiceFive();
            }

            // De waardes van de dobbelstenen worden hier in onzichtbare velden in de HTML gezet. De waardes van de velden worden later     gecontroleerd op bepaalde combinaties. De reden dat dit zo gebeurd, is dat deze velden makkelijker gemanipuleerd kunnen worden en zo makkelijk gecontroleerd kan worden of met de combinatiecheck ook de juiste score wordt toegekend.
            document.getElementById('checkWaarde1').value = dices[0];
            document.getElementById('checkWaarde2').value = dices[1];
            document.getElementById('checkWaarde3').value = dices[2];
            document.getElementById('checkWaarde4').value = dices[3];
            document.getElementById('checkWaarde5').value = dices[4];

            // Iedere keer dat je gooit wordt er 1 van het aantal keer dat je nog mag gooien afgetrokken, en dit wordt in een melding weergeven
            rollAmountLeft = rollAmountLeft - 1;
            document.getElementsByClassName('msg')[0].innerHTML = 'Je mag nog ' + rollAmountLeft + ' keer gooien.';

            // De dobbelsteen plaatjes worden na iedere worp geupdated
            document.getElementById('imgDice1').src = 'images/' + dices[0] + '.png';
            document.getElementById('imgDice2').src = 'images/' + dices[1] + '.png';
            document.getElementById('imgDice3').src = 'images/' + dices[2] + '.png';
            document.getElementById('imgDice4').src = 'images/' + dices[3] + '.png';
            document.getElementById('imgDice5').src = 'images/' + dices[4] + '.png';

            // Na de eerste worp mag je dobbelstenen selecteren om opnieuw te gooien. Deze waren voor de eerste worp disabled om te voorkomen dat de speler dobbelstenen uit een vorige ronde mee zou nemen. Ook worden ze standaard niet geselecteerd om te voorkomen dat de speler perongeluk 2x snel drukt en zo 2x gooit.
            document.getElementById('checkDice1').disabled = false;
            document.getElementById('checkDice2').disabled = false;
            document.getElementById('checkDice3').disabled = false;
            document.getElementById('checkDice4').disabled = false;
            document.getElementById('checkDice5').disabled = false;
            document.getElementById('checkDice1').checked = false;
            document.getElementById('checkDice2').checked = false;
            document.getElementById('checkDice3').checked = false;
            document.getElementById('checkDice4').checked = false;
            document.getElementById('checkDice5').checked = false;

            // Om te voorkomen dat de speler een ingevulde score de volgende ronde nog een keer kan invullen omdat de radiobutton nog geselecteerd is worden deze gedeselecteerd. De functie deselectScorebox wordt hier aangeroepen.
            deselectScorebox();
            // Nadat de gebruiker heeft gegooid mag hij een categorie op de scorekaart invullen. De knop waarmee dit gebeurt wordt hier beschikbaar gemaakt. Deze was eerst uitgeschakeld om te voorkomen dat een speler een worp voor 2 categorieen tegelijk gebruikt.
            document.getElementById('scorebutton').disabled = false;
        }
    }
    // De werp-knop is een submit button. event.preventDefault() is om te voorkomen dat de knop ook iets verstuurt.
    event.preventDefault();
}, false);

// De functie die score variabelen bij elkaar optelt in de scorekaart wordt hier gedeclareerd.
function scoreCheck() {
    // De bonus van 35 punten wordt toegekend als in de linkerzijde van de scorekaart 63 of meer punten zijn behaald.
    if (counteen + counttwee + countdrie + countvier + countvijf + countzes >= 63) {
        countbonus = 35;
    }

    // De linkerscore bestaat uit alle scores uit de linkerzijde, dito voor rechts en de totaalscore bestaat uit de som van beide zijden.
    counttotalleft = counteen + counttwee + countdrie + countvier + countvijf + countzes + countbonus;
    counttotalright = counttoak + countfoak + countfh + countks + countgs + countyahtzee + countchance;
    counttotal = counttotalleft + counttotalright;

    // De HTML elementen waar de eindscores komen te staan worden hiermee ingevuld.
    document.getElementById('bonusbox').innerHTML = '<p>' + countbonus + '</p>';
    document.getElementById('linkerbox').innerHTML = '<p>' + counttotalleft + '</p>';
    document.getElementById('rechterbox').innerHTML = '<p>' + counttotalright + '</p>';
    document.getElementById('totaalbox').innerHTML = '<p>' + counttotal + '</p>';
}

// De functie die controleert hoeveel rondes de speler nog heeft te gaan wordt hier gedeclareerd.
function roundsLeftCheck() {
    // Iedere keer als deze functie wordt aangeroepen wordt er 1 afgetrokken van het aantal rondes dat de speler nog te gaan heeft.
    roundsLeft--;
    //Dit aantal rondes wordt ter controle in de console weergegeven.
    console.log('Nog ' + roundsLeft + ' rondes te gaan');
    // Als de teller op 0 komt kan de speler niets meer selecteren.
    if (roundsLeft === 0) {
        document.getElementById('rollbutton').disabled = true;
        document.getElementById('checkDice1').disabled = true;
        document.getElementById('checkDice2').disabled = true;
        document.getElementById('checkDice3').disabled = true;
        document.getElementById('checkDice4').disabled = true;
        document.getElementById('checkDice5').disabled = true;
        document.getElementById('scorebutton').disabled = true;
        // De eindscore wordt weergegeven in een bericht.
        document.getElementsByClassName('msg')[0].innerHTML = 'Je eindscore is ' + counttotal + '.';
    }
}

// De functie die controleert of er een bepaalde combinatie is gegooid wordt hier gedeclareerd.
function testCurrentRoll() {
    // Hier wordt een array aangemaakt met 5 variabelen waarin de 5 waarden uit de HTML velden worden gezet.
    var roll = ['','','','',''];
    roll[0] = document.getElementById('checkWaarde1').value;
    roll[1] = document.getElementById('checkWaarde2').value;
    roll[2] = document.getElementById('checkWaarde3').value;
    roll[3] = document.getElementById('checkWaarde4').value;
    roll[4] = document.getElementById('checkWaarde5').value;

    //Deze array wordt gesorteerd.
    roll.sort();
    // De array wordt omgezet in een string met niks als scheidingsteken.
    roll = roll.join('');
    // Bovengenoemde string wordt hier gecontroleerd op bepaalde combinaties. Als deze combinatie voorkomt wordt de variabele diceCombi aangepast met de naam van de combinatie.

    // Om te controleren op combinaties worden reguliere expressies gebruikt.

    /*
    / = begin van expressie
    haakjes = capture group
    \d = matches any digit (komt overeen met elk cijfer)
    \1 = een backreference naar de eerste capture groep, in dit geval dus (\d)
    {2} = komt van n{X}. Deze kijkt naar een X aantal overeenkomende n's
    | = OR
    */

    if (/(\d)\1{2}/.test(roll)) {
        diceCombi = "toak";
    }
    if (/(\d)\1{2}(\d)\2{1}|(\d)\3{1}(\d)\4{2}/.test(roll)) {
        diceCombi = "fullhouse";
    }
    if (/(\d)\1{3}/.test(roll)) {
        diceCombi = "foak";
    }
    if (/(\d)\1{4}/.test(roll)) {
        diceCombi = "yahtzee";
    }
    // Hier wordt gezocht naar de string 1234, 2345 of 3456. In de roll string wordt gekeken naar eventuele dubbele cijfers. Dit, omdat een string als 23345 niet herkend wordt als kleine straat. Het dubbele cijfer wordt vervangen door het laatste karakter uit de string. 23345 wordt dan 23455. Dit wordt wel herkend als kleine straat.
    if (/1234|2345|3456/.test(roll.replace(/(\d)\1{1}/, "$1"))) {
        diceCombi = "ks";
    }
    // Hier wordt gezocht naar de string 12345 of 23456
    if (/12345|23456/.test(roll)) {
        diceCombi = "gs";
    }

}

// Click event voor de knop om een categorie op de scorekaart in te vullen.
document.getElementById('scorebutton').addEventListener('click', function () {
    // Als de waardes van de dobbelstenen niet niks is
    if (dices[0] !== '' && dices[1] !== '' && dices[2] !== '' && dices[3] !== '' && dices[4] !== '') {
        // Maakt variabele aan met een string met de naam van de geselecteerde radiobutton. querySelector retourneert het eerste element wat aan de selectoren voldoet (in dit geval dus een input element met de naam 'scoreoption' die geselecteerd is)
        var selectedRadio = document.querySelector('input[name = "scoreoption"]:checked').id;
        // Ter controle de naam van de geselecteerde radiobutton in de console
        console.log(selectedRadio);
        // De functie testCurrentRoll wordt hier aangeroepen.
        testCurrentRoll();

        // Een switch statement die adhv de geselecteerde radiobutton een bepaalde score invult in het corresponderende vak van de scorekaart
        switch (selectedRadio) {

            // Bij enen t/m zessen wordt gecontroleerd of de dobbelsteen een bepaald cijfer is of niet. Bv bij de enen wordt voor iedere 1 ook 1 punt opgeteld bij de variabele voor de score die bij de enen hoort.
            // Als een score is ingevuld wordt de bijbehorende radiobutton uitgeschakeld om te voorkomen dat de score nog een keer kan worden ingevuld.
            case 'enenradio':
                if (dices[0] == 1) {
                    counteen += 1;
                }
                if (dices[1] == 1) {
                    counteen += 1;
                }
                if (dices[2] == 1) {
                    counteen += 1;
                }
                if (dices[3] == 1) {
                    counteen += 1;
                }
                if (dices[4] == 1) {
                    counteen += 1;
                }
                document.getElementById('enenbox').innerHTML = '<p>' + counteen + '</p>';
                document.getElementById('enenradio').disabled = true;
                break;

            case 'tweeenradio':
                if (dices[0] == 2) {
                    counttwee += 2;
                }
                if (dices[1] == 2) {
                    counttwee += 2;
                }
                if (dices[2] == 2) {
                    counttwee += 2;
                }
                if (dices[3] == 2) {
                    counttwee += 2;
                }
                if (dices[4] == 2) {
                    counttwee += 2;
                }
                document.getElementById('tweeenbox').innerHTML = '<p>' + counttwee + '</p>';
                document.getElementById('tweeenradio').disabled = true;
                break;

            case 'drieenradio':
                if (dices[0] == 3) {
                    countdrie += 3;
                }
                if (dices[1] == 3) {
                    countdrie += 3;
                }
                if (dices[2] == 3) {
                    countdrie += 3;
                }
                if (dices[3] == 3) {
                    countdrie += 3;
                }
                if (dices[4] == 3) {
                    countdrie += 3;
                }
                document.getElementById('drieenbox').innerHTML = '<p>' + countdrie + '</p>';
                document.getElementById('drieenradio').disabled = true;
                break;

            case 'vierenradio':
                if (dices[0] == 4) {
                    countvier += 4;
                }
                if (dices[1] == 4) {
                    countvier += 4;
                }
                if (dices[2] == 4) {
                    countvier += 4;
                }
                if (dices[3] == 4) {
                    countvier += 4;
                }
                if (dices[4] == 4) {
                    countvier += 4;
                }
                document.getElementById('vierenbox').innerHTML = '<p>' + countvier + '</p>';
                document.getElementById('vierenradio').disabled = true;
                break;

            case 'vijvenradio':
                if (dices[0] == 5) {
                    countvijf += 5;
                }
                if (dices[1] == 5) {
                    countvijf += 5;
                }
                if (dices[2] == 5) {
                    countvijf += 5;
                }
                if (dices[3] == 5) {
                    countvijf += 5;
                }
                if (dices[4] == 5) {
                    countvijf += 5;
                }
                document.getElementById('vijvenbox').innerHTML = '<p>' + countvijf + '</p>';
                document.getElementById('vijvenradio').disabled = true;
                break;

            case 'zessenradio':
                if (dices[0] == 6) {
                    countzes += 6;
                }
                if (dices[1] == 6) {
                    countzes += 6;
                }
                if (dices[2] == 6) {
                    countzes += 6;
                }
                if (dices[3] == 6) {
                    countzes += 6;
                }
                if (dices[4] == 6) {
                    countzes += 6;
                }
                document.getElementById('zessenbox').innerHTML = '<p>' + countzes + '</p>';
                document.getElementById('zessenradio').disabled = true;
                break;

            // Bij de combinaties wordt gekeken of de variabele diceCombi een corresponderende string is. Als dit zo is worden er punten toegekend, anders niet.
            case 'toakradio':
                // Omdat de volgende 4 combinaties allen uit minstens 3 dezelfden bestaan kunnen ze allemaal gebruikt worden om three of a kind mee in te vullen. Dit geldt ook voor sommige andere combinaties.
                if (diceCombi == 'toak') {
                    counttoak = dices[0] + dices[1] + dices[2] + dices[3] + dices[4];
                } else if (diceCombi == 'foak') {
                    counttoak = dices[0] + dices[1] + dices[2] + dices[3] + dices[4];
                } else if (diceCombi == 'fullhouse') {
                    counttoak = dices[0] + dices[1] + dices[2] + dices[3] + dices[4];
                } else if (diceCombi == 'yahtzee') {
                    counttoak = dices[0] + dices[1] + dices[2] + dices[3] + dices[4];
                } else {
                    counttoak = 0;
                }
                document.getElementById('toakbox').innerHTML = '<p>' + counttoak + '</p>';
                document.getElementById('toakradio').disabled = true;
                break;

            case 'foakradio':
                if (diceCombi == 'foak') {
                    countfoak = dices[0] + dices[1] + dices[2] + dices[3] + dices[4];
                } else if (diceCombi == 'yahtzee') {
                    countfoak = dices[0] + dices[1] + dices[2] + dices[3] + dices[4];
                } else {
                    countfoak = 0;
                }
                document.getElementById('foakbox').innerHTML = '<p>' + countfoak + '</p>';
                document.getElementById('foakradio').disabled = true;
                break;

            case 'fhradio':
                if (diceCombi == 'fullhouse') {
                    countfh = 25;
                } else {
                    countfh = 0;
                }
                document.getElementById('fhbox').innerHTML = '<p>' + countfh + '</p>';
                document.getElementById('fhradio').disabled = true;
                break;

            case 'ksradio':
                if (diceCombi == 'ks') {
                    countks = 30;
                } else if (diceCombi == 'gs') {
                    countks = 30;
                } else {
                    countks = 0;
                }
                document.getElementById('ksbox').innerHTML = '<p>' + countks + '</p>';
                document.getElementById('ksradio').disabled = true;
                break;

            case 'gsradio':
                if (diceCombi == 'gs') {
                    countgs = 40;
                } else {
                    countgs = 0;
                }
                document.getElementById('gsbox').innerHTML = '<p>' + countgs + '</p>';
                document.getElementById('gsradio').disabled = true;
                break;

            case 'yahtzeeradio':
                if (diceCombi == 'yahtzee') {
                    countyahtzee = 50;
                } else {
                    countyahtzee = 0;
                }
                document.getElementById('yahtzeebox').innerHTML = '<p>' + countyahtzee + '</p>';
                document.getElementById('yahtzeeradio').disabled = true;
                break;

            case 'chanceradio':
                countchance = dices[0] + dices[1] + dices[2] + dices[3] + dices[4];
                document.getElementById('chancebox').innerHTML = '<p>' + countchance + '</p>';
                document.getElementById('chanceradio').disabled = true;
                break;
        }


        // Na het invullen van een score wordt de knop uitgeschakeld om te voorkomen dat er nogmaals een score kan worden ingevuld met dezelfde dobbelstenen
        this.disabled = true;
        // Het aantal worpen wordt voor de volgende ronde weer teruggezet op 3.
        rollAmountLeft = 3;
        // De functie deselectScorebox wordt hier aangeroepen.
        deselectScorebox();
        // De functie scoreCheck wordt hier aangeroepen.
        scoreCheck();


        // Nadat er een score is ingevuld mag er weer gegooid worden.
        document.getElementById('rollbutton').disabled = false;
        // Om te voorkomen dat niet alle dobbelstenen tijdens de eerste worp worden gegooid.
        document.getElementById('checkDice1').checked = true;
        document.getElementById('checkDice2').checked = true;
        document.getElementById('checkDice3').checked = true;
        document.getElementById('checkDice4').checked = true;
        document.getElementById('checkDice5').checked = true;
        document.getElementById('checkDice1').disabled = true;
        document.getElementById('checkDice2').disabled = true;
        document.getElementById('checkDice3').disabled = true;
        document.getElementById('checkDice4').disabled = true;
        document.getElementById('checkDice5').disabled = true;
        // Het aantal keer dat de speler nog mag gooien wordt in een bericht weergegeven.
        document.getElementsByClassName('msg')[0].innerHTML = 'Je mag nog ' + rollAmountLeft + ' keer gooien.';
        // De functie roundsLeftCheck wordt hier aangeroepen.
        roundsLeftCheck();

    }
    // Deze else slaat nog op de if (dices[0] !== '' && dices[1] !== '' && dices[2] !== '' && dices[3] !== '' && dices[4] !== '') van aan het begin van de functie. Als de waardes van de dobbelstenen dus wel '' zijn, wordt er een melding weergegeven dat de speler nog niet gegooid heeft.
    else {
        document.getElementsByClassName('msg')[0].innerHTML = 'Je mag nog ' + rollAmountLeft + ' keer gooien.<br/> <b>Je hebt nog niet gegooid.</b>';
    }
});
