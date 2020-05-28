var facts = [
    'J.K. Rowling og Harry Potter deler fødselsdag. De har begge fødselsdag den 31. juli.', 'Harry Potter bøgerne er blevet oversat til 80 sprog.',
    'Dementorene er baseret på den tomme følelse du kan have under en depression.', 'Det var originalt Arthur Weasley og ikke Sirius Black der skulle dø i Fønixordenen, men Rowling skiftede mening til sidst.',
    'Når Harry, Ron og Hermione lavede lektier på sættet af filmene, var det faktisk deres rigtige lektier de lavede.', 'Der var i alt 7 ugler der spillede Hedwig i Harry Potter filmene.',
    'Katten der spillede Mrs. Norris, løb væk under indspilningen af første film. Den kom dog tilbage efter 48 timer.', 'Rupert Grint, som spillede Ron, indsendte en rap om hvorfor han skulle spille Ron, som sin audition.',
    'Dumbledore er et gammelt engelsk ord for humlebi.', 'Alan Rickman, som spillede Snape, fik tidligt at vide at hans karakter havde været forelsket i Lily og at det bl.a. var derfor han hadede James og videreførte det had over på Harry.',
    'I De Vises Sten, da Fred og George smed snebolde efter Quirrells baghoved, smed de faktisk snebolde i hovedet på Voldemort.', 'Der findes 700 mulige overtrædelser i Quidditch.',
    'Dumbledore har et ar over sit venstre knæ, der ligner Londons undergrund.', 'For at bruge Ministeriet for Magis gæsteindgang, skal man trykke en kode ind på en telefon i en telefonboks, dette nummer er 6-2-4-4-2, hvilket vil give ordet ”magic” (magi), hvis man skriver det på et gammelt telefondisplay.',
    'Den oprindelige Dumbledore, der blev spiller af Richard Harris, døde før optagelserne til Harry Potter og Fangen fra Azkaban startede. Den nye Dumbledore blev Michael Gambon, som vi ser i resten af filmene.',
    'Da Rupert Grint var yngre, ville han gerne sælge is og som voksen endte han faktisk med at købe en isbil.', 'J.K. Rowling fik originalt ideen til Harry Potter bøgerne i et tog, der var forsinket.',
    'Skuespilleren der spillede Myrtle (Hulkende Hulda) i Hemmelighedernes Kammer, var 36 år gammel da hun spillede en ung studerende på 14 år.', 'Robbie Coltrane, der spillede Hagrid, var den første til at blive castet til filmene.',
    'I Fangen fra Azkaban nægtede professor Trelawney at sætte sig ned ved et bord med 12 mennesker, da det siges at hvis man sidder 13 ved et bord, vil den første der rejser sig dø. I Fønixordenen, sidder 13 medlemmer af ordenen ved bordet og Sirius Black var den første der rejste sig. (Og var også den første af medlemmerne der døde).',
    'Harry har grønne øjne i bøgerne og skulle originalt også have haft grønne øjne i filmene, men det blev droppet, da Daniel Radcliffe, der spiller Harry, ikke kunne tåle de grønne kontaktlinser.',
    'Navnet Voldemort, stammer fra et fransk ord, der betyder ”flygt fra døden”.', 'Harrys ar blev lavet af makeupartister over 2000 gange og Radcliffe brugte omkring 160 par af Harry Potters briller igennem filmene.',
    'Fred og George, er født 1. april (dagen for aprilsnar).', 'Hermiones patronus er en odder, mens Rons patronus er en Jack Russel Terrier, som er kendt for at jagte oddere.',
    ' Ernie og Stanley, chaufføren og kontrolløren i natbussen, er opkaldt efter J.K. Rowlings bedstefædre.', 'Radcliffe ødelagde omkring 80 tryllestave igennem optagelserne, da han blev ved med at bruge dem som trommestikker.',
    'Der var originalt lavet og optaget scener med poltergejsten Peeves, men disse scener blev senere cuttet ud, da instruktør Chis Columbus ikke synes om hvordan det så ud i filmen.',
    'Det originale Harry Potter manuskript blev afvist af 12 forlag, før Bloomsbury endelig accepterede det.', 'McGonagall var en talentfuld Quidditch spiller i sin ungdom og spillede Gryffindors hold.',
    'Voldemort var 71 år da han blev besejret i Kampen om Hogwarts.', 'Hogwarts motto er: Draco Dormiens Nunquam Titillandus, hvilket er latin og oversat betyder: Kild aldrig en sovende drage.',
    'Spejlet Erised viser den der bruger det, deres dybeste ønsker, hvis man spejlvender ordet, står der desire (ønske på dansk) Og hvis man tager hele graveringen, siger den Erised stra ehru oyt ube cafru oyt on wohsi og hvis du så vender det om og opdeler det i rette ord, siger det: ”I show not your face but your heart’s desire” hvilket oversat er: “Jeg viser dig ikke dit ansigt, men dit hjertes ønske.”',
    'Det første og sidste ord vi hører Dobby siger er: ”Harry Potter”.', 'Harry Potters navn bliver nævnt 18,956 gange i hele serien.',
    'Rowling har sagt, at hun besluttede sig for at dræbe Hedwig, fordi det repræsenterede Harrys tab af uskyld og sikkerhed, idet hendes død faktisk markerede afslutningen på hans barndom.',
    'Voldemort var ude af stand til at føle kærlighed, fordi han blev undfanget under en kærlighedseliksir.', 'Kun Hermione ud af trioen, færdiggjorde sin eksamen fra Hogwarts efter kampen om Hogwarts.',
    'Det sidste slag ved Hogwarts, fandt sted i 1998, samme år som første bog blev udgivet. Rowling kommenterede dette ved at sige ”I open at the close” (”Jeg åbner ved afslutningen") en reference til sidste bog.',
    'Dumbledore var 115 år da han døde.', 'Det er gratis at studere på Hogwarts, da alle udgifter bliver betalt af Ministeriet for Magi.', 'J.K. Rowlings yndlings magiske væsen er Fønixen.',
    'Der bliver kun brugt ét bandeord i hele serien, det ord er ”bitch” og det er Molly Weasley der siger det inden hun dræber Bellatrix. ("Not my daughter you bitch")', 
    'J.K. Rowling hedder Joanne Rowling, men udgiverne fik hende til at bruge forkortelsen i stedet, for at skjule at hun var en kvinde, da de var i tvivl om unge drenge ville være interesseret i Harry Potter bøgerne hvis de vidste at de var skrevet af en kvinde. - Rowling har faktisk ikke noget mellemnavn der starter med K, men hun brugte sin bedstemors navn Kathleen og derved blev navnet J.K. Rowling født.',
    'Rowling vidste allerede i grove træk hvordan den sidste bog skulle ende, kort efter første bog var færdig.'
]

function newFact() {
    var randomNumber = Math.floor(Math.random() * (facts.length));
    document.getElementById('factDisplay').innerHTML = facts[randomNumber];
}

/* galleri */
$(document).ready(function() {
    newFact()
      // featherlight gallery configuration
    $('a.gallery').featherlightGallery({
        previousIcon: '<i class="fas fa-chevron-left"></i>',     /* Code that is used as previous icon */
        nextIcon: '<i class="fas fa-chevron-right"></i>',         /* Code that is used as next icon */
        galleryFadeIn: 100,          /* fadeIn speed when slide is loaded */
        galleryFadeOut: 300          /* fadeOut speed before slide is loaded */
});
})  


