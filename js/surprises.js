
/* ========================================
   CALENDARIO SOFIA
   CONTENUTI DELLE 24 SORPRESE

   TIPI DISPONIBILI:
   text
   image
   video
   music
======================================== */

const surprises = [

    {
        title: "Come ci siamo incontrati",
        type: "text",
        content: "Era l'inizio di settembre, ci stavamo organizzando per il video del diciottesimo della Maria. Non eravamo ancora niente, non eravamo neanche amici. Eppure, non lo sapevamo che, a distanza di poco meno di due mesi, ci saremo fidanzati. Nessuno dei due sapeva cosa il destino ci stava per regalare. Una piccola stella, caduta dal nulla nella mia vita, è diventata ora essenziale. Grazie di esserci. Ti amo!",
        media: "",
        image: "assets/images/foto-1.jpg"
    },

    {
        title: "La Sofia che conoscevo prima di innamorarmi.",
        type: "text",
        content: "Prima che iniziassi a provare qualcosa per te, eri semplicemente Sofia, una ragazza con cui mi piaceva parlare e passare del tempo. Non avevo ancora idea di quello che sarebbe successo e non guardavo le cose come le guardo adesso. Mi ricordo che piano piano ho iniziato a conoscerti, a capire come sei fatta e a scoprire sempre qualcosa di nuovo. La cosa buffa è che probabilmente eri già la persona di cui mi sarei innamorato, soltanto che ancora non lo sapevo. Ripensando a quei momenti, mi viene da sorridere, perché adesso conosco molto meglio quella ragazza con cui avevo iniziato semplicemente a parlare. E se potessi tornare a quei primi giorni, non cambierei assolutamente niente. Mi piacerebbe soltanto sapere che, senza accorgercene, stavamo iniziando qualcosa di bello."
    },

    {
        title: "I dettagli di te che forse non sai nemmeno di avere.",
        type: "text",
        content: "Ci sono tante cose che amo di te e alcune probabilmente non immagini nemmeno che io noti. Sono quei piccoli dettagli che magari per te non hanno alcuna importanza, ma che per me riescono a renderti ancora più speciale. Il modo in cui parli, le tue espressioni, le tue reazioni, le risate che fai quando qualcosa ti diverte davvero. Mi piacciono anche quelle piccole abitudini che ormai riconosco e che fanno semplicemente parte di te. Non sono necessariamente grandi gesti o caratteristiche straordinarie. Anzi, credo che spesso siano proprio le cose più semplici a raccontare meglio una persona. Potrei stare ore a descrivere tutto quello che mi piace di te, ma probabilmente dimenticherei comunque qualcosa. Vorrei solo che sapessi che ti osservo, ti ascolto e che anche i dettagli più piccoli riescono a rimanermi impressi."
    },

    {
        title: "Quando hai iniziato a diventare un pensiero ricorrente.",
        type: "text",
        content: "Non saprei indicare un giorno preciso in cui hai iniziato a occupare così tanto spazio nei miei pensieri. È successo gradualmente. All'inizio magari mi faceva piacere ricevere un tuo messaggio, poi ho iniziato ad aspettarlo. Mi ritrovavo a pensare a qualcosa da raccontarti, a chiedermi come fosse andata la tua giornata o a immaginare cosa stessi facendo in quel momento. Anche quando ero impegnato in altro, prima o poi il pensiero tornava a te. E la cosa più bella è che non dovevo fare nulla per pensarci: succedeva naturalmente. A un certo punto mi sono reso conto che eri diventata una presenza costante nelle mie giornate, anche quando non eri fisicamente accanto a me. Credo che sia stato uno dei primi segnali che mi hanno fatto capire che quello che provavo stava diventando qualcosa di più."
    },

{
    title: "Il momento in cui qualcosa è cambiato dentro di me.",
    type: "text",
    content: "Ci sono momenti in cui ti accorgi che qualcosa dentro di te non è più come prima, anche se non riesci a spiegare esattamente quando sia successo. Con te è stato un po' così. A un certo punto ho iniziato a sentire qualcosa di diverso, qualcosa che andava oltre il semplice volerti bene o stare bene in tua compagnia. Ho cominciato a desiderare una vicinanza diversa, a dare importanza a gesti che prima magari non avrei notato e a chiedermi se anche tu potessi provare qualcosa di simile. Non è stato un cambiamento improvviso, ma una sensazione che cresceva ogni volta che passavamo del tempo insieme. Forse non me ne sono accorto subito, oppure avevo semplicemente paura di ammetterlo. So soltanto che, quando ho capito cosa stava succedendo, ormai eri già diventata una persona speciale per me.",
   
},

    {
        title: "Le cose che ho scoperto di te conoscendoti davvero.",
        type: "text",
        content: "Conoscere una persona significa andare oltre quello che si vede all'inizio. Significa scoprire i suoi pensieri, le sue insicurezze, i suoi desideri, le sue paure e tutti quei lati che non mostra necessariamente a chiunque. Più ti conosco, più mi rendo conto di quante cose ci siano dentro di te. Mi piace scoprire nuovi lati della tua personalità, capire il tuo modo di ragionare e conoscere ciò che ti rende felice o che magari ti mette in difficoltà. Mi piace sapere che dietro ogni sorriso c'è una persona con le proprie giornate, i propri pensieri e le proprie emozioni. Non voglio conoscere soltanto la parte più semplice e spensierata di te. Voglio conoscere anche quella che a volte fai più fatica a mostrare, perché penso che amare qualcuno significhi anche avere voglia di conoscerlo davvero, senza fermarsi alla superficie."
    },

    {
        title: "Il tuo modo di rendere speciali anche i momenti normali.",
        type: "text",
        content: "Una delle cose più belle di te è che riesci a rendere speciali anche momenti che, senza di te, sarebbero assolutamente normali. Non abbiamo bisogno di organizzare qualcosa di incredibile, andare in un posto particolare o fare chissà cosa per stare bene insieme. A volte basta parlare, ridere per una sciocchezza, stare vicini oppure semplicemente condividere un po' di tempo. Mi piace questa sensazione, perché mi fa capire che non è necessariamente quello che facciamo a rendere bello un momento, ma la persona con cui lo viviamo. E io quella persona vorrei che fossi sempre tu. Anche le giornate più semplici possono diventare ricordi a cui ripensare con un sorriso, se ci sei tu. Credo che questa sia una delle cose che più apprezzo di noi: non dobbiamo inventarci qualcosa per stare bene, perché spesso ci basta esserci."
    },

    {
        title: "I ricordi che vorrei poter conservare intatti per sempre.",
        type: "text",
        content: "Ci sono momenti che vorrei poter mettere da parte, come se esistesse un modo per conservarli esattamente come sono stati. Non per riviverli continuamente, ma per sapere che potrò tornarci ogni volta che ne sentirò il bisogno. I momenti passati insieme, le conversazioni, le risate, gli sguardi e tutte quelle piccole cose che magari sul momento sembrano normali, ma che con il tempo acquistano un valore enorme. A volte mi piacerebbe poter fermare il tempo proprio quando sto bene con te, senza dover pensare a quello che succederà dopo. Vorrei ricordare ogni sensazione, ogni particolare e ogni emozione. So che non possiamo trattenere il tempo, ma possiamo conservare quello che ci lascia dentro. E io spero che, anche tra tanti anni, alcuni dei ricordi più belli della mia vita continuino ad avere il tuo volto."
    },

    {
        title: "Il momento in cui ho capito che volevo qualcosa di più.",
        type: "text",
        content: "A un certo punto ho capito che averti nella mia vita così com'era non mi bastava più. Non perché mancasse qualcosa alla nostra vicinanza, ma perché dentro di me era nato il desiderio di condividere con te qualcosa di diverso. Volevo poterti chiamare la mia ragazza, vivere insieme quei piccoli gesti che appartengono a una coppia e sapere che quello che sentivo poteva essere condiviso anche da te. Non era soltanto il desiderio di essere innamorato, ma quello di costruire qualcosa proprio con te. Naturalmente avevo anche le mie paure e non sapevo esattamente cosa sarebbe successo. Però c'era una cosa che avevo abbastanza chiara: se avessi potuto scegliere con chi provare a vivere tutto questo, avrei scelto te. E oggi sono felice di non aver lasciato che quelle paure decidessero al posto mio."
    },

    {
        title: "Cosa ho provato quando siamo diventati una coppia.",
        type: "text",
        content: "Diventare una coppia con te è stato un momento che porterò sempre con me. Sapere che quella persona che ormai occupava così tanto spazio nei miei pensieri era diventata anche la persona con cui potevo condividere ufficialmente il mio amore mi ha fatto provare una felicità difficile da spiegare. Non era semplicemente una nuova definizione per quello che eravamo, ma la consapevolezza che entrambi avevamo scelto di iniziare qualcosa insieme. Da quel momento non sei diventata importante per me, perché lo eri già, ma ho iniziato a vivere il nostro rapporto con una consapevolezza diversa. Mi piace sapere che siamo noi, che possiamo chiamarci fidanzati e che stiamo costruendo qualcosa che appartiene soltanto a noi. Se penso a quel momento, sorrido ancora. E spero che sia soltanto il primo di tantissimi momenti belli che vivremo insieme.",

    },

    {
        title: "Il significato del nostro primo bacio.",
        type: "text",
        content: "Il nostro primo bacio per me non è stato soltanto un gesto romantico. È stato un momento in cui tante emozioni che avevo dentro hanno trovato finalmente un modo per uscire. Ci sono cose che a volte facciamo fatica a spiegare con le parole, anche quando le sentiamo fortissimo. E quel momento, per me, ha avuto proprio questo significato. Non era soltanto avvicinarmi a te, ma sentire che tra noi stava succedendo qualcosa di reale, qualcosa che fino a quel momento avevo soltanto immaginato o desiderato. Credo che alcuni momenti non abbiano bisogno di essere perfetti per diventare indimenticabili. Basta che siano sinceri e che vengano vissuti con la persona giusta. E io quel momento l'ho vissuto con te. Non so quante volte ci baceremo ancora, ma so che il primo avrà sempre un posto speciale nei miei ricordi."
    },

    {
        title: "La bellezza di essere noi, anche senza fare niente di speciale.",
        type: "text",
        content: "Sai cosa mi piace particolarmente di noi? Il fatto che non dobbiamo necessariamente fare qualcosa di straordinario per essere felici insieme. Mi piace poter passare del tempo con te senza avere un programma preciso, parlare di qualsiasi cosa, scherzare oppure stare semplicemente vicini. Mi piace sapere che posso condividere con te anche i momenti più tranquilli delle mie giornate. Non voglio che il nostro rapporto sia fatto soltanto di occasioni speciali, uscite organizzate o momenti da ricordare. Voglio anche le giornate normali, quelle in cui magari non succede assolutamente niente di particolare. Perché è proprio lì che si vede quanto sia bello avere qualcuno accanto. E io sono felice che quel qualcuno sia tu. Non ho bisogno di una giornata perfetta per essere contento: a volte mi basta sapere che ci sei."
    },

    {
        title: " Le parti di me che soltanto tu riesci a raggiungere.",
        type: "text",
        content: "Ci sono lati di me che non mostro facilmente a tutti. Pensieri, emozioni e fragilità che spesso tengo per me, magari perché non so come raccontarli oppure perché non mi viene naturale farlo. Con te, però, sento di poter essere diverso. Riesci a raggiungere parti di me che non sempre riesco a mostrare, anche senza rendertene conto. Mi fai venire voglia di raccontarti quello che penso, di condividere le mie giornate e di lasciarti entrare sempre un po' di più nel mio mondo. Non significa che io sia sempre capace di esprimere tutto nel modo giusto, ma significa che con te sento il desiderio di provarci. Mi piace poter essere semplicemente me stesso, senza dover fingere di essere sempre forte, sicuro o perfetto. Vorrei che sapessi quanto valore ha per me questa sensazione, perché non è qualcosa che provo con chiunque.",
        media: ""
    },

    {
        title: "Tutto quello che vorrei che tu sapessi quando mi guardi.",
        type: "text",
        content: "Quando mi guardi, vorrei che riuscissi a vedere anche tutte quelle cose che magari non riesco a dirti ogni volta. Vorrei che sapessi quanto sei importante per me, quanto mi piace averti nella mia vita e quanto sono felice di poter condividere con te questo percorso. Vorrei che dietro ogni mio sorriso riuscissi a riconoscere anche l'affetto che provo, dietro ogni abbraccio il desiderio di averti vicina e dietro ogni piccolo gesto la voglia di farti sentire amata. Non sempre trovo le parole giuste e probabilmente non sarò sempre bravissimo a dimostrarti tutto quello che sento. Ma non vorrei mai che questo ti facesse pensare di valere meno ai miei occhi. Sei una persona che desidero proteggere, rispettare e rendere felice, senza mai impedirti di essere te stessa. E se potessi farti capire una sola cosa con uno sguardo, sarebbe che sono davvero felice di averti scelta."
    },

    {
        title: "Le cose che mi fanno innamorare di te ogni giorno.",
        type: "text",
        content: "Non penso che ci si innamori di una persona una volta sola. Credo che ci siano tantissimi piccoli momenti in cui ti rendi conto, ancora una volta, di quanto ti piaccia quella persona. A me succede con te. Magari fai una cosa che hai sempre fatto, mi racconti qualcosa oppure mi guardi in un certo modo e io mi ritrovo a pensare a quanto sono contento di averti nella mia vita. Non serve che tu faccia qualcosa di particolare o che cerchi di sorprendermi. Mi basta vederti essere te stessa. E la cosa bella è che, anche se ormai ti conosco molto più di prima, continuo a scoprire cose nuove che mi fanno piacere ancora di più. Non so quante volte mi succederà ancora, ma spero tantissime."
    },

    {
        title: "Le paure che non cancellano ciò che provo.",
        type: "text",
        content: "Avere paura non significa non essere felici. Significa semplicemente rendersi conto di quanto qualcosa sia importante e di quanto ci teniamo a non perderlo. Anche io, quando penso a noi, a volte ho delle paure. Ho paura di sbagliare, di non riuscire sempre a trovare le parole giuste, di deluderti senza volerlo o di non essere all'altezza di quello che meriti. Ma nessuna di queste paure cambia il fatto che io voglia stare con te. Non voglio che il timore di quello che potrebbe succedere domani mi impedisca di vivere quello che abbiamo oggi. Preferisco imparare, crescere e affrontare insieme le difficoltà, piuttosto che rinunciare a qualcosa di bello soltanto perché non posso avere la certezza che tutto andrà sempre perfettamente. Non posso prometterti che non avremo mai momenti difficili, ma posso dirti che quello che provo per te è sincero."
    },

    {
        title: "Le cose che vorrei imparare a fare meglio per noi.",
        type: "text",
        content: "So benissimo che non sono perfetto e che ci saranno sicuramente delle cose che potrei fare meglio. Vorrei imparare a comunicare sempre di più con te, a non dare per scontato quello che mi dici e a capire meglio anche le cose che magari non riesci a spiegarmi subito. Vorrei essere più bravo ad ascoltarti, soprattutto quando hai bisogno di raccontarmi qualcosa e non necessariamente di ricevere una soluzione. Vorrei imparare a gestire meglio eventuali discussioni, senza lasciare che l'orgoglio o un momento di nervosismo prendano il sopravvento. Non voglio essere il fidanzato perfetto, perché non esiste, ma voglio essere un fidanzato che ci tiene davvero e che cerca di migliorarsi. E vorrei che anche tu potessi dirmi tranquillamente quando qualcosa non va, perché preferisco affrontare insieme un problema piuttosto che fare finta che non esista."
    },

    {
        title: "Il tipo di amore che voglio costruire con te.",
        type: "text",
        content: "Io non voglio una relazione in cui dobbiamo dimostrarci continuamente qualcosa o in cui dobbiamo essere sempre perfetti. Vorrei una relazione in cui possiamo sentirci tranquilli, essere noi stessi e parlare liberamente di qualsiasi cosa. Voglio che possiamo ridere insieme per le stupidaggini, raccontarci i nostri problemi, sostenerci quando qualcosa non va e festeggiare anche i traguardi più piccoli. Vorrei che ci fosse fiducia, che nessuno dei due dovesse sentirsi obbligato a nascondere qualcosa e che potessimo continuare ad avere anche i nostri spazi e i nostri obiettivi personali. Non voglio che stare insieme significhi rinunciare a qualcosa di noi stessi, ma aggiungere una persona con cui condividere ancora più cose. Voglio un amore in cui ci scegliamo ogni giorno senza sentirci costretti, semplicemente perché ci fa stare bene farlo. E mi piacerebbe riuscire a costruire tutto questo con te.",
        
    },

    {
        title: "I momenti che sogno di vivere insieme.",
        type: "text",
        content: "Quando penso alle cose che mi piacerebbe fare con te in futuro, non penso soltanto a viaggi o esperienze particolari. Penso anche a quelle cose che magari sembrano banali, ma che mi piacerebbe tantissimo condividere. Fare colazione insieme, uscire senza sapere bene dove andare, passare una serata a guardare un film, cucinare qualcosa e magari combinarne una delle nostre. Mi piacerebbe anche poter condividere le giornate più normali, quelle in cui non succede praticamente niente. Sapere che alla fine della giornata posso raccontarti com'è andata e ascoltare tutto quello che hai da dirmi. Sono cose semplici, lo so, ma proprio per questo mi piacciono. Non voglio immaginare soltanto i momenti più belli e particolari. Vorrei poter vivere con te anche tutta quella normalità che, secondo me, è una delle parti più belle di una relazione."
    },

    {
        title: "I luoghi del mondo in cui vorrei perdermi con te.",
        type: "text",
        content: "Ci sono tantissimi posti che vorrei visitare e mi piacerebbe davvero poterli scoprire insieme a te. Pensa a quante cose potremmo vedere, alle città in cui potremmo perderci senza conoscere le strade, ai panorami davanti ai quali fermarci per fare qualche foto e a tutte le esperienze che potremmo raccontarci una volta tornati a casa. Mi piacerebbe prendere un aereo, arrivare in un posto nuovo e avere te accanto durante tutto il viaggio. E non parlo soltanto della destinazione, ma anche del viaggio stesso: preparare le valigie, scegliere cosa portare, aspettare la partenza e magari discutere su cosa visitare per primo. Probabilmente ci saranno anche momenti in cui ci perderemo o qualcosa non andrà come previsto, ma penso che rideremmo anche di quelli. Non so ancora quali saranno le nostre prime destinazioni insieme, ma spero che ce ne saranno tante."
    },

    {
        title: "Le versioni future di noi che spero di conoscere.",
        type: "text",
        content: "Mi capita qualche volta di pensare a come saremo tra qualche anno. Chissà come cambieremo, cosa riusciremo a realizzare e quali cose che oggi ci sembrano lontanissime diventeranno normali. Io avrò i miei progetti, tu avrai i tuoi e sicuramente avremo tante esperienze nuove da raccontarci. Mi piacerebbe vedere tutti i tuoi progressi, essere lì quando raggiungerai qualcosa a cui tieni e poterti sostenere quando le cose non andranno come speravi. E vorrei che anche tu potessi fare lo stesso con me. Non voglio immaginare un futuro in cui siamo esattamente uguali a oggi, perché è normale crescere e cambiare. Vorrei semplicemente che continuassimo a conoscerci, a sorprenderci e a trovare nuovi motivi per volerci bene. Non so cosa ci aspetta, ma l'idea di avere ancora tante cose da vivere insieme mi piace davvero tanto."
    },

    {
        title: "Le promesse che voglio dimostrarti con i fatti.",
        type: "text",
        content: "Potrei scriverti tantissime promesse, ma alla fine penso che siano le azioni a contare davvero. Voglio dimostrarti che puoi fidarti di me, che quando hai bisogno di parlare io ci sono e che quello che senti mi interessa davvero. Voglio ricordarmi delle cose che mi racconti, prestare attenzione a ciò che ti piace e cercare di farti sentire apprezzata anche nei giorni in cui magari non te lo aspetti. Voglio continuare a trovare modi per farti sorridere, sorprenderti ogni tanto e non smettere di corteggiarti soltanto perché ormai siamo una coppia. Soprattutto, voglio rispettarti sempre, anche quando non la penseremo allo stesso modo. Non ti prometto che non sbaglierò mai, perché sicuramente succederà. Ti prometto però che non voglio smettere di impegnarmi e che preferisco dimostrarti ogni giorno quanto tengo a te, invece di limitarmi a scriverlo.",
        media: ""
    },

    {
        title: "Se un giorno dovessi dimenticare quanto sei importante, cosa vorrei lasciarti da rileggere.",
        type: "text",
        content: "Se un giorno dovessi avere bisogno di ricordarti quanto tengo a te, vorrei che tornassi a leggere queste parole. Vorrei che ti ricordassi di tutte le volte in cui abbiamo riso, di tutte le conversazioni che abbiamo fatto e di tutti quei momenti in cui siamo stati semplicemente noi. Vorrei che ricordassi che non sei diventata importante per me da un giorno all'altro, ma che è successo conoscendoti, passando del tempo insieme e scoprendo sempre qualcosa di nuovo. Non devi essere sempre felice, non devi essere sempre perfetta e non devi sentirti obbligata a fare qualcosa per meritarti il mio affetto. Mi piaci anche quando sei stanca, quando sei nervosa, quando hai una giornata no e quando magari non hai voglia di fare niente. Sei la persona che ho scelto di avere accanto e sono contento di poter condividere con te tutto questo. Quindi, se mai dovessi dimenticarlo, rileggi questa pagina. Ti amo e spero di riuscire a fartelo sentire ogni giorno."
    },

    {
        title: "Il capitolo senza titolo",
        type: "text",
        content: "Eccoci arrivati all'ultimo giorno. Mi fa un po' strano pensare che siano già passati ventitré giorni da quando hai iniziato ad aprire queste pagine. Ho cercato di trovare ogni giorno qualcosa da dirti, qualcosa che magari non ti dico abbastanza spesso o che semplicemente volevo mettere per iscritto. Non so se sono riuscito a spiegarti davvero tutto quello che provo, probabilmente no. Ci sono cose che faccio fatica a esprimere anche quando le sento tantissimo. Però ci tenevo a dedicarti questo piccolo calendario, perché volevo fare qualcosa che fosse soltanto tuo e che potessi conservare. Non so quante cose ci aspettano, quante risate faremo ancora, quanti posti visiteremo o quante volte ci ritroveremo a parlare fino a tardi. So che ci saranno tantissimi altri momenti da vivere e che non vedo l'ora di scoprirli. E sai una cosa? Questo calendario finisce oggi, ma non voglio che finisca qui quello che stiamo scrivendo insieme. Ci sono ancora tantissime cose che vorrei fare con te e altrettante che vorrei dirti. Spero che questo sia soltanto uno dei tanti Natali che passeremo insieme. Buon Natale, amore mio. Ti amo tanto, Sofia."
    }

];
