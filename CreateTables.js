var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "asmamohamed",
  database: "sahtech"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE compte ( NomUtilisateur varchar (40) primary key not null, MotDePasse varchar(40) not null check(MotDePasse > 8 ),IdAdmin int,foreign key (IdAdmin) references administrateur (IDAdmin ))";
  var sql = " CREATE TABLE medecin (IdMedecin int primary key not null,nom varchar (40),prenom varchar(40),NumTel int,Email varchar(40),NomUtilisateur varchar(40),MotDePasse varchar (40),foreign key(NomUtilisateur)references compte (NomUtilisateur))";
  var sql = " CREATE TABLE administrateur (IDAdmin int primary key not null,nom varchar (40),prenom varchar(40) ,NumTel int )";
  var sql = " CREATE TABLE AssistantAdmin (IdAssistantAdmin int primary key not null , nom varchar (40),prenom varchar(40),NumTel int,Email varchar (40))";
  var sql = " CREATE TABLE patient ( IdPatient int primary key not null ,nom varchar (40),prenom varchar(40),NumTel int,wilaya varchar(20),sexe varchar(10),DateNaissance date,Adress varchar(40),Email varchar(40),NomUtilisateur varchar(40),foreign key(NomUtilisateur)references compte (NomUtilisateur),MotDePasse varchar(40))";
  var sql = " CREATE TABLE  infirmier (IdInfirmier int primary key not null ,nom varchar(40),prenom varchar(40),NumTel int, Email varchar (40), NomUtilisateur varchar(40),foreign key(NomUtilisateur)references compte (NomUtilisateur),MotDePasse varchar(40))";
  var sql = " CREATE TABLE Rapport  (IdRapport int primary key not null ,DateRapport date,IdMed int ,foreign key (IdMed) references medecin (IdMedecin))";
  var sql = " CREATE TABLE Ordonnance ( IdOrdonnance int primary key not null , NomMedecin varchar(40),NomPatient varchar(40),IdMed int ,foreign key (IdMed) references medecin (IdMedecin))";
  var sql = " CREATE TABLE CertificatMed (IdCertificat int primary key not null,NomPatient varchar(40),PrenomPatient varchar(40),Date_ date,IdMed int ,foreign key (IdMed) references medecin (IdMedecin) )";
  var sql = " CREATE TABLE appartient(IdPatient int,IdDossier int,foreign key(IdPatient) references patient (IdPatient),foreign key(IdDossier) references dossierMedical (IdDossier))";
  var sql = " CREATE TABLE dossierMedical( IdDossier int primary key not null , DateDossier date ,NomPatient varchar(40),PrenomPatient varchar(40),DateNaissance date ,LieuxNaissance varchar(40),sexe varchar(40),GroupeSanguim varchar(5),Adresse varchar(40),Email varchar (40),NumSS int,categorie varchar(40),taille float ,poids float ,IMC varchar (10),AntMed varchar (10),AntChirurgicaux varchar (10),AntAllergique varchar (10),AntFamilliaux varchar (10),AntToxique varchar (10),IdMed int not null ,foreign key (IdMed) references medecin(IdMedecin))";
  var sql = " CREATE TABLE Consultation (IdConsultation int primary key not null ,DateConsultation date ,IdMed int ,foreign key(IdMed) references medecin (IdMedecin))";
  var sql = " CREATE TABLE Orientation (IdOriantation int primary key not null,AdrOrientation varchar(40),IdMed int ,foreign key (IdMed)references medecin (IdMedecin))";
  var sql = " CREATE TABLE  Statistique(IdStatistiqu int primary key not null ,DateStatistique date ,IdMed int ,IdAssistantAdmin int ,foreign key (IdMed) references medecin(IdMedecin),foreign key (IdAssistantAdmin)references AssistantAdmin (IdAssistantAdmin))";
  var sql = " CREATE TABLE RendezVous(IdRDV int primary key not null ,DateRDV date ,HeureRDV time,IdPatient int not null,IdInfirmier int not null,IdMed int not null,foreign key (IdMed) references medecin(IdMedecin),foreign key (IdPatient) references oatient(IdPatient),foreign key (IdInfirmier) references infirmier(Idinfirmier))";
  var sql = "DESCRIBE COMPTE";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});