const viaggi = [
  {
    id: "v1",
    attivita: "Tour enogastronomico",
    citta: "Firenze",
    dataInizio: "15-09-2025",
    dataFine: "20-09-2025",
    poster : 'img/BooroadFirenze.png',
    numeriEmergenza: {
      polizia: "113",
      ambulanza: "118",
      vigiliDelFuoco: "115"
    },
    partecipanti: [
      { id: "p1", nome: "Luca", cognome: "Rossi", codiceFiscale: "RSSLCU85M15H501X", email: "luca.rossi@example.com", telefono: "+393401234567", contattoEmergenza: "+393491234567" },
      { id: "p2", nome: "Alessandra", cognome: "Bianchi", codiceFiscale: "BNCALS90T20H501U", email: "alessandra.bianchi@example.com", telefono: "+393401212345", contattoEmergenza: "+393491212345" },
      { id: "p3", nome: "Fabio", cognome: "Conti", codiceFiscale: "CNTFBO88P01F205H", email: "fabio.conti@example.com", telefono: "+393491111222", contattoEmergenza: "+393481111222" },
      { id: "p4", nome: "Giulia", cognome: "Riva", codiceFiscale: "RVAGLU93E45H501T", email: "giulia.riva@example.com", telefono: "+393387654320", contattoEmergenza: "+393487654320" },
      { id: "p5", nome: "Paolo", cognome: "Ferrari", codiceFiscale: "FRRPLA91B01H501A", email: "paolo.ferrari@example.com", telefono: "+393331112233", contattoEmergenza: "+393431112233" }
    ]
  },
  {
    id: "v2",
    attivita: "Escursione sulle Dolomiti",
    citta: "Cortina d'Ampezzo",
    dataInizio: "10-07-2025",
    dataFine: "15-07-2025",
    poster: 'img/BooroadCortina.png',
    numeriEmergenza: {
      polizia: "112",
      ambulanza: "118",
      soccorsoAlpino: "112"
    },
    partecipanti: [
      { id: "p1", nome: "Giulia", cognome: "Verdi", codiceFiscale: "VRDGLI90A01F205R", email: "giulia.verdi@example.com", telefono: "+393388765432", contattoEmergenza: "+393488765432" },
      { id: "p2", nome: "Sara", cognome: "Neri", codiceFiscale: "NRSRA90T01H501F", email: "sara.neri@example.com", telefono: "+393388812345", contattoEmergenza: "+393488812345" },
      { id: "p3", nome: "Andrea", cognome: "Pellegrini", codiceFiscale: "PLLNDR85D01H501Y", email: "andrea.pellegrini@example.com", telefono: "+393391234567", contattoEmergenza: "+393491234567" },
      { id: "p4", nome: "Marta", cognome: "Costa", codiceFiscale: "CSTMRT92E45H501K", email: "marta.costa@example.com", telefono: "+393387890123", contattoEmergenza: "+393487890123" },
      { id: "p5", nome: "Leonardo", cognome: "Fontana", codiceFiscale: "FNTLNR89M15H501J", email: "leonardo.fontana@example.com", telefono: "+393333456789", contattoEmergenza: "+393433456789" },
      { id: "p6", nome: "Elisa", cognome: "Ferri", codiceFiscale: "FRRLSA91L01H501P", email: "elisa.ferri@example.com", telefono: "+393384567123", contattoEmergenza: "+393484567123" }
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
      { id: "p1", nome: "Marco", cognome: "Bianchi", codiceFiscale: "BNCMRC85D10H501T", email: "marco.bianchi@example.com", telefono: "+393391112223", contattoEmergenza: "+393491112223" },
      { id: "p2", nome: "Roberta", cognome: "Lombardi", codiceFiscale: "LMBRRT90C01H501W", email: "roberta.lombardi@example.com", telefono: "+393391234555", contattoEmergenza: "+393491234555" },
      { id: "p3", nome: "Stefano", cognome: "Rizzi", codiceFiscale: "RZZSTF88B01H501Q", email: "stefano.rizzi@example.com", telefono: "+393381111999", contattoEmergenza: "+393481111999" },
      { id: "p4", nome: "Anna", cognome: "Marchetti", codiceFiscale: "MRCHNN93E41H501E", email: "anna.marchetti@example.com", telefono: "+393383456123", contattoEmergenza: "+393483456123" },
      { id: "p5", nome: "Federico", cognome: "Villa", codiceFiscale: "VLLFRC87L21H501Z", email: "federico.villa@example.com", telefono: "+393385432101", contattoEmergenza: "+393485432101" },
      { id: "p6", nome: "Chiara", cognome: "De Luca", codiceFiscale: "DLCCHR95D61H501T", email: "chiara.deluca@example.com", telefono: "+393387772233", contattoEmergenza: "+393487772233" }
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
      { id: "p1", nome: "Antonio", cognome: "Greco", codiceFiscale: "GRCNTN86L01F205L", email: "antonio.greco@example.com", telefono: "+393384445556", contattoEmergenza: "+393494445556" },
      { id: "p2", nome: "Valentina", cognome: "Serra", codiceFiscale: "SRRVNT92C01H501Z", email: "valentina.serra@example.com", telefono: "+393383330111", contattoEmergenza: "+393483330111" },
      { id: "p3", nome: "Nicola", cognome: "Parisi", codiceFiscale: "PRSNCL89L11H501V", email: "nicola.parisi@example.com", telefono: "+393389990000", contattoEmergenza: "+393489990000" },
      { id: "p4", nome: "Alberto", cognome: "Morelli", codiceFiscale: "MRLALB93F21H501E", email: "alberto.morelli@example.com", telefono: "+393388880111", contattoEmergenza: "+393488880111" },
      { id: "p5", nome: "Elena", cognome: "D'Amico", codiceFiscale: "DMCLNE91B31H501A", email: "elena.damico@example.com", telefono: "+393381111444", contattoEmergenza: "+393481111444" }
    ]
  },
];

export default viaggi;


