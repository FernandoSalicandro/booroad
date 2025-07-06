const viaggi = [
  {
    id: "v1",
    attivita: "Tour enogastronomico",
    citta: "Firenze",
    dataInizio: "05-07-2025",
    dataFine: "20-09-2025",
    poster: 'img/BooroadFirenze.png',
    numeriEmergenza: {
      polizia: "113",
      ambulanza: "118",
      vigiliDelFuoco: "115"
    },
    partecipanti: [
      { id: "p1", nome: "Luca", cognome: "Rossi", codiceFiscale: "RSSLCU85M15H501X", email: "luca.rossi@example.com", telefono: "+393401234567", contattoEmergenza: "+393491234567", citta: "Milano", dataDiNascita: "15-08-1985" },
      { id: "p2", nome: "Alessandra", cognome: "Bianchi", codiceFiscale: "BNCALS90T20H501U", email: "alessandra.bianchi@example.com", telefono: "+393401212345", contattoEmergenza: "+393491212345", citta: "Torino", dataDiNascita: "20-12-1990" },
      { id: "p3", nome: "Fabio", cognome: "Conti", codiceFiscale: "CNTFBO88P01F205H", email: "fabio.conti@example.com", telefono: "+393491111222", contattoEmergenza: "+393481111222", citta: "Bologna", dataDiNascita: "01-09-1988" },
      { id: "p4", nome: "Giulia", cognome: "Riva", codiceFiscale: "RVAGLU93E45H501T", email: "giulia.riva@example.com", telefono: "+393387654320", contattoEmergenza: "+393487654320", citta: "Firenze", dataDiNascita: "05-05-1993" },
      { id: "p5", nome: "Paolo", cognome: "Ferrari", codiceFiscale: "FRRPLA91B01H501A", email: "paolo.ferrari@example.com", telefono: "+393331112233", contattoEmergenza: "+393431112233", citta: "Napoli", dataDiNascita: "01-02-1991" }
    ]
  },
  {
    id: "v2",
    attivita: "Escursione sulle Dolomiti",
    citta: "Cortina d'Ampezzo",
    dataInizio: "05-07-2025",
    dataFine: "15-07-2025",
    poster: 'img/BooroadCortina.png',
    numeriEmergenza: {
      polizia: "112",
      ambulanza: "118",
      soccorsoAlpino: "112"
    },
    partecipanti: [
      { id: "p1", nome: "Giulia", cognome: "Verdi", codiceFiscale: "VRDGLI90A01F205R", email: "giulia.verdi@example.com", telefono: "+393388765432", contattoEmergenza: "+393488765432", citta: "Verona", dataDiNascita: "01-01-1990" },
      { id: "p2", nome: "Sara", cognome: "Neri", codiceFiscale: "NRSRA90T01H501F", email: "sara.neri@example.com", telefono: "+393388812345", contattoEmergenza: "+393488812345", citta: "Padova", dataDiNascita: "01-12-1990" },
      { id: "p3", nome: "Andrea", cognome: "Pellegrini", codiceFiscale: "PLLNDR85D01H501Y", email: "andrea.pellegrini@example.com", telefono: "+393391234567", contattoEmergenza: "+393491234567", citta: "Genova", dataDiNascita: "01-04-1985" },
      { id: "p4", nome: "Marta", cognome: "Costa", codiceFiscale: "CSTMRT92E45H501K", email: "marta.costa@example.com", telefono: "+393387890123", contattoEmergenza: "+393487890123", citta: "Trento", dataDiNascita: "05-05-1992" },
      { id: "p5", nome: "Leonardo", cognome: "Fontana", codiceFiscale: "FNTLNR89M15H501J", email: "leonardo.fontana@example.com", telefono: "+393333456789", contattoEmergenza: "+393433456789", citta: "Vicenza", dataDiNascita: "15-08-1989" },
      { id: "p6", nome: "Elisa", cognome: "Ferri", codiceFiscale: "FRRLSA91L01H501P", email: "elisa.ferri@example.com", telefono: "+393384567123", contattoEmergenza: "+393484567123", citta: "Belluno", dataDiNascita: "01-07-1991" }
    ]
  },
  {
    id: "v3",
    attivita: "Visita ai musei",
    citta: "Roma",
    dataInizio: "05-08-2025",
    dataFine: "09-08-2025",
    poster: 'img/BooroadRoma.png',
    numeriEmergenza: {
      polizia: "112",
      ambulanza: "118",
      vigiliDelFuoco: "115"
    },
    partecipanti: [
      { id: "p1", nome: "Marco", cognome: "Bianchi", codiceFiscale: "BNCMRC85D10H501T", email: "marco.bianchi@example.com", telefono: "+393391112223", contattoEmergenza: "+393491112223", citta: "Roma", dataDiNascita: "10-04-1985" },
      { id: "p2", nome: "Roberta", cognome: "Lombardi", codiceFiscale: "LMBRRT90C01H501W", email: "roberta.lombardi@example.com", telefono: "+393391234555", contattoEmergenza: "+393491234555", citta: "Latina", dataDiNascita: "01-03-1990" },
      { id: "p3", nome: "Stefano", cognome: "Rizzi", codiceFiscale: "RZZSTF88B01H501Q", email: "stefano.rizzi@example.com", telefono: "+393381111999", contattoEmergenza: "+393481111999", citta: "Pescara", dataDiNascita: "01-02-1988" },
      { id: "p4", nome: "Anna", cognome: "Marchetti", codiceFiscale: "MRCHNN93E41H501E", email: "anna.marchetti@example.com", telefono: "+393383456123", contattoEmergenza: "+393483456123", citta: "Terni", dataDiNascita: "11-05-1993" },
      { id: "p5", nome: "Federico", cognome: "Villa", codiceFiscale: "VLLFRC87L21H501Z", email: "federico.villa@example.com", telefono: "+393385432101", contattoEmergenza: "+393485432101", citta: "Ancona", dataDiNascita: "21-07-1987" },
      { id: "p6", nome: "Chiara", cognome: "De Luca", codiceFiscale: "DLCCHR95D61H501T", email: "chiara.deluca@example.com", telefono: "+393387772233", contattoEmergenza: "+393487772233", citta: "Roma", dataDiNascita: "21-04-1995" }
    ]
  },
  {
    id: "v4",
    attivita: "Trekking sull'Etna",
    citta: "Catania",
    dataInizio: "18-07-2025",
    dataFine: "20-07-2025",
    poster: 'img/BooroadCatania.png',
    numeriEmergenza: {
      polizia: "112",
      ambulanza: "118",
      soccorsoAlpino: "112"
    },
    partecipanti: [
      { id: "p1", nome: "Antonio", cognome: "Greco", codiceFiscale: "GRCNTN86L01F205L", email: "antonio.greco@example.com", telefono: "+393384445556", contattoEmergenza: "+393494445556", citta: "Catania", dataDiNascita: "01-07-1986" },
      { id: "p2", nome: "Valentina", cognome: "Serra", codiceFiscale: "SRRVNT92C01H501Z", email: "valentina.serra@example.com", telefono: "+393383330111", contattoEmergenza: "+393483330111", citta: "Siracusa", dataDiNascita: "01-03-1992" },
      { id: "p3", nome: "Nicola", cognome: "Parisi", codiceFiscale: "PRSNCL89L11H501V", email: "nicola.parisi@example.com", telefono: "+393389990000", contattoEmergenza: "+393489990000", citta: "Palermo", dataDiNascita: "11-07-1989" },
      { id: "p4", nome: "Alberto", cognome: "Morelli", codiceFiscale: "MRLALB93F21H501E", email: "alberto.morelli@example.com", telefono: "+393388880111", contattoEmergenza: "+393488880111", citta: "Messina", dataDiNascita: "21-06-1993" },
      { id: "p5", nome: "Elena", cognome: "D'Amico", codiceFiscale: "DMCLNE91B31H501A", email: "elena.damico@example.com", telefono: "+393381111444", contattoEmergenza: "+393481111444", citta: "Catania", dataDiNascita: "31-02-1991" }
    ]
  },
  {
    id: "v5",
    attivita: "Visita culturale",
    citta: "Praga",
    dataInizio: "01-08-2025",
    dataFine: "07-08-2025",
    poster: "img/BooroadPraga.png",
    numeriEmergenza: {
      polizia: "112",
      ambulanza: "118",
      vigiliDelFuoco: "115",
      soccorsoAlpino: "112"
    },
    partecipanti: [
{
        id: "p1",
        nome: "Francesca",
        cognome: "Morelli",
        codiceFiscale: "MORFRA90A01H501X",
        email: "francesca.morelli@example.com",
        telefono: "+393412404103",
        contattoEmergenza: "+393512404103",
        citta: "Napoli",
        dataDiNascita: "25-08-1984"
      },
{
        id: "p2",
        nome: "Carlo",
        cognome: "Esposito",
        codiceFiscale: "ESPCAR90A01H501X",
        email: "carlo.esposito@example.com",
        telefono: "+393464788248",
        contattoEmergenza: "+393564788248",
        citta: "Milano",
        dataDiNascita: "30-01-1996"
      },
{
        id: "p3",
        nome: "Claudia",
        cognome: "Lombardi",
        codiceFiscale: "LOMCLA90A01H501X",
        email: "claudia.lombardi@example.com",
        telefono: "+393448251998",
        contattoEmergenza: "+393548251998",
        citta: "Milano",
        dataDiNascita: "11-03-1999"
      },
{
        id: "p4",
        nome: "Gianni",
        cognome: "Morelli",
        codiceFiscale: "MORGIA90A01H501X",
        email: "gianni.morelli@example.com",
        telefono: "+393448491266",
        contattoEmergenza: "+393548491266",
        citta: "Napoli",
        dataDiNascita: "28-12-1998"
      }
      ]
  },
  {
    id: "v6",
    attivita: "Tour gastronomico",
    citta: "Tokyo",
    dataInizio: "01-08-2025",
    dataFine: "07-08-2025",
    poster: "img/BooroadTokyo.png",
    numeriEmergenza: {
      polizia: "112",
      ambulanza: "118",
      vigiliDelFuoco: "115",
      soccorsoAlpino: "112"
    },
    partecipanti: [
{
        id: "p1",
        nome: "Claudia",
        cognome: "Verdi",
        codiceFiscale: "VERCLA90A01H501X",
        email: "claudia.verdi@example.com",
        telefono: "+393430526985",
        contattoEmergenza: "+393530526985",
        citta: "Torino",
        dataDiNascita: "16-10-1988"
      },
{
        id: "p2",
        nome: "Claudia",
        cognome: "Conti",
        codiceFiscale: "CONCLA90A01H501X",
        email: "claudia.conti@example.com",
        telefono: "+393462951713",
        contattoEmergenza: "+393562951713",
        citta: "Napoli",
        dataDiNascita: "19-07-1989"
      },
{
        id: "p3",
        nome: "Simona",
        cognome: "Esposito",
        codiceFiscale: "ESPSIM90A01H501X",
        email: "simona.esposito@example.com",
        telefono: "+393469032863",
        contattoEmergenza: "+393569032863",
        citta: "Roma",
        dataDiNascita: "08-07-1993"
      },
{
        id: "p4",
        nome: "Mario",
        cognome: "Bianchi",
        codiceFiscale: "BIAMAR90A01H501X",
        email: "mario.bianchi@example.com",
        telefono: "+393487094648",
        contattoEmergenza: "+393587094648",
        citta: "Torino",
        dataDiNascita: "09-11-1989"
      }
      ]
  },
  {
    id: "v7",
    attivita: "Escursione in montagna",
    citta: "New York",
    dataInizio: "01-08-2025",
    dataFine: "10-08-2025",
    poster: "img/BooroadNewYork.png",
    numeriEmergenza: {
      polizia: "112",
      ambulanza: "118",
      vigiliDelFuoco: "115",
      soccorsoAlpino: "112"
    },
    partecipanti: [
{
        id: "p1",
        nome: "Giorgio",
        cognome: "Neri",
        codiceFiscale: "NERGIO90A01H501X",
        email: "giorgio.neri@example.com",
        telefono: "+393473496581",
        contattoEmergenza: "+393573496581",
        citta: "Napoli",
        dataDiNascita: "27-05-1993"
      },
{
        id: "p2",
        nome: "Gianni",
        cognome: "Russo",
        codiceFiscale: "RUSGIA90A01H501X",
        email: "gianni.russo@example.com",
        telefono: "+393437529469",
        contattoEmergenza: "+393537529469",
        citta: "Milano",
        dataDiNascita: "14-09-1993"
      },
{
        id: "p3",
        nome: "Francesca",
        cognome: "Lombardi",
        codiceFiscale: "LOMFRA90A01H501X",
        email: "francesca.lombardi@example.com",
        telefono: "+393478001275",
        contattoEmergenza: "+393578001275",
        citta: "Torino",
        dataDiNascita: "17-04-1997"
      },
{
        id: "p4",
        nome: "Mario",
        cognome: "Neri",
        codiceFiscale: "NERMAR90A01H501X",
        email: "mario.neri@example.com",
        telefono: "+393468604836",
        contattoEmergenza: "+393568604836",
        citta: "Napoli",
        dataDiNascita: "05-09-1997"
      },
{
        id: "p5",
        nome: "Carlo",
        cognome: "Lombardi",
        codiceFiscale: "LOMCAR90A01H501X",
        email: "carlo.lombardi@example.com",
        telefono: "+393482231970",
        contattoEmergenza: "+393582231970",
        citta: "Milano",
        dataDiNascita: "09-08-1985"
      },
{
        id: "p6",
        nome: "Luisa",
        cognome: "Bianchi",
        codiceFiscale: "BIALUI90A01H501X",
        email: "luisa.bianchi@example.com",
        telefono: "+393460340958",
        contattoEmergenza: "+393560340958",
        citta: "Napoli",
        dataDiNascita: "20-12-1984"
      }
      ]
  },
  {
    id: "v8",
    attivita: "Weekend artistico",
    citta: "Barcellona",
    dataInizio: "01-08-2025",
    dataFine: "08-08-2025",
    poster: "img/BooroadBarcellona.png",
    numeriEmergenza: {
      polizia: "112",
      ambulanza: "118",
      vigiliDelFuoco: "115",
      soccorsoAlpino: "112"
    },
    partecipanti: [
{
        id: "p1",
        nome: "Elena",
        cognome: "Russo",
        codiceFiscale: "RUSELE90A01H501X",
        email: "elena.russo@example.com",
        telefono: "+393437360175",
        contattoEmergenza: "+393537360175",
        citta: "Roma",
        dataDiNascita: "19-12-2000"
      },
{
        id: "p2",
        nome: "Riccardo",
        cognome: "Ferrari",
        codiceFiscale: "FERRIC90A01H501X",
        email: "riccardo.ferrari@example.com",
        telefono: "+393459109386",
        contattoEmergenza: "+393559109386",
        citta: "Roma",
        dataDiNascita: "17-02-1999"
      },
{
        id: "p3",
        nome: "Elena",
        cognome: "Esposito",
        codiceFiscale: "ESPELE90A01H501X",
        email: "elena.esposito@example.com",
        telefono: "+393476945442",
        contattoEmergenza: "+393576945442",
        citta: "Milano",
        dataDiNascita: "11-04-1991"
      },
{
        id: "p4",
        nome: "Elena",
        cognome: "Bianchi",
        codiceFiscale: "BIAELE90A01H501X",
        email: "elena.bianchi@example.com",
        telefono: "+393434684103",
        contattoEmergenza: "+393534684103",
        citta: "Roma",
        dataDiNascita: "25-06-1985"
      },
{
        id: "p5",
        nome: "Riccardo",
        cognome: "Esposito",
        codiceFiscale: "ESPRIC90A01H501X",
        email: "riccardo.esposito@example.com",
        telefono: "+393472122253",
        contattoEmergenza: "+393572122253",
        citta: "Roma",
        dataDiNascita: "28-08-2002"
      },
{
        id: "p6",
        nome: "Riccardo",
        cognome: "Conti",
        codiceFiscale: "CONRIC90A01H501X",
        email: "riccardo.conti@example.com",
        telefono: "+393426915107",
        contattoEmergenza: "+393526915107",
        citta: "Torino",
        dataDiNascita: "01-10-1991"
      }
      ]
  },
  {
    id: "v9",
    attivita: "Esperienza storica",
    citta: "Sydney",
    dataInizio: "01-08-2025",
    dataFine: "11-08-2025",
    poster: "img/BooroadSydney.png",
    numeriEmergenza: {
      polizia: "112",
      ambulanza: "118",
      vigiliDelFuoco: "115",
      soccorsoAlpino: "112"
    },
    partecipanti: [
{
        id: "p1",
        nome: "Gianni",
        cognome: "Ferrari",
        codiceFiscale: "FERGIA90A01H501X",
        email: "gianni.ferrari@example.com",
        telefono: "+393482299958",
        contattoEmergenza: "+393582299958",
        citta: "Torino",
        dataDiNascita: "04-10-1994"
      },
{
        id: "p2",
        nome: "Elena",
        cognome: "Ferrari",
        codiceFiscale: "FERELE90A01H501X",
        email: "elena.ferrari@example.com",
        telefono: "+393490519634",
        contattoEmergenza: "+393590519634",
        citta: "Roma",
        dataDiNascita: "01-02-1999"
      },
{
        id: "p3",
        nome: "Claudia",
        cognome: "Bianchi",
        codiceFiscale: "BIACLA90A01H501X",
        email: "claudia.bianchi@example.com",
        telefono: "+393415109243",
        contattoEmergenza: "+393515109243",
        citta: "Milano",
        dataDiNascita: "21-11-1989"
      },
{
        id: "p4",
        nome: "Luisa",
        cognome: "Ferrari",
        codiceFiscale: "FERLUI90A01H501X",
        email: "luisa.ferrari@example.com",
        telefono: "+393466950905",
        contattoEmergenza: "+393566950905",
        citta: "Milano",
        dataDiNascita: "12-09-1986"
      },
{
        id: "p5",
        nome: "Mario",
        cognome: "Ferrari",
        codiceFiscale: "FERMAR90A01H501X",
        email: "mario.ferrari@example.com",
        telefono: "+393439229402",
        contattoEmergenza: "+393539229402",
        citta: "Torino",
        dataDiNascita: "30-12-1995"
      },
{
        id: "p6",
        nome: "Claudia",
        cognome: "Neri",
        codiceFiscale: "NERCLA90A01H501X",
        email: "claudia.neri@example.com",
        telefono: "+393449368275",
        contattoEmergenza: "+393549368275",
        citta: "Milano",
        dataDiNascita: "11-01-1987"
      }
      ]
  },
  {
    id: "v10",
    attivita: "Avventura urbana",
    citta: "Lisbona",
    dataInizio: "01-08-2025",
    dataFine: "05-08-2025",
    poster: "img/BooroadLisbona.png",
    numeriEmergenza: {
      polizia: "112",
      ambulanza: "118",
      vigiliDelFuoco: "115",
      soccorsoAlpino: "112"
    },
    partecipanti: [
{
        id: "p1",
        nome: "Claudia",
        cognome: "Ferrari",
        codiceFiscale: "FERCLA90A01H501X",
        email: "claudia.ferrari@example.com",
        telefono: "+393444831124",
        contattoEmergenza: "+393544831124",
        citta: "Napoli",
        dataDiNascita: "28-02-2001"
      },
{
        id: "p2",
        nome: "Mario",
        cognome: "Russo",
        codiceFiscale: "RUSMAR90A01H501X",
        email: "mario.russo@example.com",
        telefono: "+393441489449",
        contattoEmergenza: "+393541489449",
        citta: "Torino",
        dataDiNascita: "09-10-2001"
      },
{
        id: "p3",
        nome: "Riccardo",
        cognome: "Morelli",
        codiceFiscale: "MORRIC90A01H501X",
        email: "riccardo.morelli@example.com",
        telefono: "+393449439420",
        contattoEmergenza: "+393549439420",
        citta: "Torino",
        dataDiNascita: "04-09-2002"
      },
{
        id: "p4",
        nome: "Mario",
        cognome: "Conti",
        codiceFiscale: "CONMAR90A01H501X",
        email: "mario.conti@example.com",
        telefono: "+393423190883",
        contattoEmergenza: "+393523190883",
        citta: "Roma",
        dataDiNascita: "01-10-2001"
      }
      ]
  },
  {
    id: "v11",
    attivita: "Trekking fotografico",
    citta: "Vienna",
    dataInizio: "01-08-2025",
    dataFine: "16-08-2025",
    poster: "img/BooroadVienna.png",
    numeriEmergenza: {
      polizia: "112",
      ambulanza: "118",
      vigiliDelFuoco: "115",
      soccorsoAlpino: "112"
    },
    partecipanti: [
{
        id: "p1",
        nome: "Mario",
        cognome: "Russo",
        codiceFiscale: "RUSMAR90A01H501X",
        email: "mario.russo@example.com",
        telefono: "+393429487165",
        contattoEmergenza: "+393529487165",
        citta: "Milano",
        dataDiNascita: "30-06-1986"
      },
{
        id: "p2",
        nome: "Elena",
        cognome: "Lombardi",
        codiceFiscale: "LOMELE90A01H501X",
        email: "elena.lombardi@example.com",
        telefono: "+393435681740",
        contattoEmergenza: "+393535681740",
        citta: "Milano",
        dataDiNascita: "14-03-1994"
      },
{
        id: "p3",
        nome: "Luisa",
        cognome: "Riva",
        codiceFiscale: "RIVLUI90A01H501X",
        email: "luisa.riva@example.com",
        telefono: "+393437289714",
        contattoEmergenza: "+393537289714",
        citta: "Torino",
        dataDiNascita: "31-07-1993"
      },
{
        id: "p4",
        nome: "Giorgio",
        cognome: "Neri",
        codiceFiscale: "NERGIO90A01H501X",
        email: "giorgio.neri@example.com",
        telefono: "+393467365205",
        contattoEmergenza: "+393567365205",
        citta: "Napoli",
        dataDiNascita: "21-03-2001"
      },
{
        id: "p5",
        nome: "Francesca",
        cognome: "Ferrari",
        codiceFiscale: "FERFRA90A01H501X",
        email: "francesca.ferrari@example.com",
        telefono: "+393410768113",
        contattoEmergenza: "+393510768113",
        citta: "Milano",
        dataDiNascita: "05-06-1991"
      },
{
        id: "p6",
        nome: "Elena",
        cognome: "Bianchi",
        codiceFiscale: "BIAELE90A01H501X",
        email: "elena.bianchi@example.com",
        telefono: "+393432333689",
        contattoEmergenza: "+393532333689",
        citta: "Milano",
        dataDiNascita: "06-09-1992"
      }
      ]
  },
  {
    id: "v12",
    attivita: "Viaggio naturalistico",
    citta: "Amsterdam",
    dataInizio: "01-08-2025",
    dataFine: "08-08-2025",
    poster: "img/BooroadAmsterdam.png",
    numeriEmergenza: {
      polizia: "112",
      ambulanza: "118",
      vigiliDelFuoco: "115",
      soccorsoAlpino: "112"
    },
    partecipanti: [
{
        id: "p1",
        nome: "Simona",
        cognome: "Riva",
        codiceFiscale: "RIVSIM90A01H501X",
        email: "simona.riva@example.com",
        telefono: "+393438197410",
        contattoEmergenza: "+393538197410",
        citta: "Torino",
        dataDiNascita: "18-10-1992"
      },
{
        id: "p2",
        nome: "Riccardo",
        cognome: "Esposito",
        codiceFiscale: "ESPRIC90A01H501X",
        email: "riccardo.esposito@example.com",
        telefono: "+393461869668",
        contattoEmergenza: "+393561869668",
        citta: "Torino",
        dataDiNascita: "04-05-1996"
      },
{
        id: "p3",
        nome: "Giorgio",
        cognome: "Riva",
        codiceFiscale: "RIVGIO90A01H501X",
        email: "giorgio.riva@example.com",
        telefono: "+393492120913",
        contattoEmergenza: "+393592120913",
        citta: "Torino",
        dataDiNascita: "01-06-2002"
      },
{
        id: "p4",
        nome: "Elena",
        cognome: "Ferrari",
        codiceFiscale: "FERELE90A01H501X",
        email: "elena.ferrari@example.com",
        telefono: "+393441567611",
        contattoEmergenza: "+393541567611",
        citta: "Torino",
        dataDiNascita: "24-01-1995"
      },
{
        id: "p5",
        nome: "Elena",
        cognome: "Bianchi",
        codiceFiscale: "BIAELE90A01H501X",
        email: "elena.bianchi@example.com",
        telefono: "+393494653047",
        contattoEmergenza: "+393594653047",
        citta: "Milano",
        dataDiNascita: "30-09-1987"
      }
      ]
  },
  {
    id: "v13",
    attivita: "Giro dei monumenti",
    citta: "Berlino",
    dataInizio: "01-08-2025",
    dataFine: "05-08-2025",
    poster: "img/BooroadBerlino.png",
    numeriEmergenza: {
      polizia: "112",
      ambulanza: "118",
      vigiliDelFuoco: "115",
      soccorsoAlpino: "112"
    },
    partecipanti: [
{
        id: "p1",
        nome: "Gianni",
        cognome: "Neri",
        codiceFiscale: "NERGIA90A01H501X",
        email: "gianni.neri@example.com",
        telefono: "+393455266243",
        contattoEmergenza: "+393555266243",
        citta: "Milano",
        dataDiNascita: "04-07-1999"
      },
{
        id: "p2",
        nome: "Mario",
        cognome: "Russo",
        codiceFiscale: "RUSMAR90A01H501X",
        email: "mario.russo@example.com",
        telefono: "+393481552501",
        contattoEmergenza: "+393581552501",
        citta: "Napoli",
        dataDiNascita: "16-09-1990"
      },
{
        id: "p3",
        nome: "Simona",
        cognome: "Esposito",
        codiceFiscale: "ESPSIM90A01H501X",
        email: "simona.esposito@example.com",
        telefono: "+393424667070",
        contattoEmergenza: "+393524667070",
        citta: "Milano",
        dataDiNascita: "19-06-1986"
      },
{
        id: "p4",
        nome: "Riccardo",
        cognome: "Morelli",
        codiceFiscale: "MORRIC90A01H501X",
        email: "riccardo.morelli@example.com",
        telefono: "+393453721539",
        contattoEmergenza: "+393553721539",
        citta: "Milano",
        dataDiNascita: "29-06-1999"
      }
      ]
  },
  {
    id: "v14",
    attivita: "Tour dei quartieri storici",
    citta: "Atene",
    dataInizio: "01-08-2025",
    dataFine: "14-08-2025",
    poster: "img/BooroadAtene.png",
    numeriEmergenza: {
      polizia: "112",
      ambulanza: "118",
      vigiliDelFuoco: "115",
      soccorsoAlpino: "112"
    },
    partecipanti: [
{
        id: "p1",
        nome: "Riccardo",
        cognome: "Neri",
        codiceFiscale: "NERRIC90A01H501X",
        email: "riccardo.neri@example.com",
        telefono: "+393463786164",
        contattoEmergenza: "+393563786164",
        citta: "Torino",
        dataDiNascita: "07-06-1992"
      },
{
        id: "p2",
        nome: "Gianni",
        cognome: "Riva",
        codiceFiscale: "RIVGIA90A01H501X",
        email: "gianni.riva@example.com",
        telefono: "+393413257497",
        contattoEmergenza: "+393513257497",
        citta: "Napoli",
        dataDiNascita: "16-05-1992"
      },
{
        id: "p3",
        nome: "Gianni",
        cognome: "Conti",
        codiceFiscale: "CONGIA90A01H501X",
        email: "gianni.conti@example.com",
        telefono: "+393455729876",
        contattoEmergenza: "+393555729876",
        citta: "Napoli",
        dataDiNascita: "12-01-1995"
      },
{
        id: "p4",
        nome: "Giorgio",
        cognome: "Ferrari",
        codiceFiscale: "FERGIO90A01H501X",
        email: "giorgio.ferrari@example.com",
        telefono: "+393448481327",
        contattoEmergenza: "+393548481327",
        citta: "Roma",
        dataDiNascita: "05-05-2003"
      },
{
        id: "p5",
        nome: "Simona",
        cognome: "Conti",
        codiceFiscale: "CONSIM90A01H501X",
        email: "simona.conti@example.com",
        telefono: "+393468021097",
        contattoEmergenza: "+393568021097",
        citta: "Napoli",
        dataDiNascita: "10-12-1987"
      }
      ]
  }
];

export default viaggi;
