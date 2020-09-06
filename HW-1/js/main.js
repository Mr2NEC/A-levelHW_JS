// Больница с докторами и пациентами

var Patient = {
    surname: "Burmistrov",
    name: "Ivan",
    patronymic: "Afonovich",
    age: 27,
    stomachache: true,
    queuePosition: true,
};
var ChiefPhysician;
console.log(
    "У " +
        Patient.surname +
        "a " +
        Patient.name +
        "a " +
        Patient.patronymic +
        "a разболелся живот " +
        Patient.stomachache +
        " и он решил записаться на прём к врачу в местной больнице."
);
var Hospital = {
    Doctor1: {
        surname: "Kudryavtseva",
        name: "Klava",
        patronymic: "Nikolaevna",
        age: 55,
        specialization: "Therapist",
        queuePerson: 27,
        DPA: 50,
        Patient: Patient,
        WorkingHours: 8,
        Break: 1,
    },
    Doctor2: {
        surname: "Solovieva",
        name: "Galina",
        patronymic: "Anatolievna",
        age: 47,
        specialization: "Therapist",
        queuePerson: 37,
        DPA: 35,
        Patient: Patient,
        WorkingHours: 8,
        Break: 1,
    },
    ChiefPhysician: ChiefPhysician,
};

// Подсчет времени до приема врача.

var WDoc1T =
    (Hospital.Doctor1.queuePerson * Hospital.Doctor1.DPA) /
    (Hospital.Doctor1.WorkingHours - Hospital.Doctor1.Break);
var WDoc2T =
    (Hospital.Doctor2.queuePerson * Hospital.Doctor2.DPA) /
    (Hospital.Doctor2.WorkingHours - Hospital.Doctor2.Break);

console.log(
    "В больнице есть два терапевта - " +
        Hospital.Doctor1.surname +
        " " +
        Hospital.Doctor1.name +
        " " +
        Hospital.Doctor1.patronymic +
        " и " +
        Hospital.Doctor2.surname +
        " " +
        Hospital.Doctor2.name +
        " " +
        Hospital.Doctor2.patronymic +
        ", и скоро в больнице будет назначен новый главврач " +
        Hospital.ChiefPhysician +
        ". По данным сайта больницы,  " +
        Patient.name +
        " будет у " +
        Hospital.Doctor1.name +
        " " +
        Hospital.Doctor1.surname +
        " " +
        (Hospital.Doctor1.queuePerson + Patient.queuePosition) +
        "ой в очереди " +
        "и попадет к врачу через " +
        Math.trunc(WDoc1T / 60) +
        " дня и " +
        Math.trunc(WDoc1T % 60) +
        " минут, так как длительнось приема одного пациента " +
        Hospital.Doctor1.DPA +
        " минут" +
        ", а у " +
        Hospital.Doctor2.name +
        " " +
        Hospital.Doctor2.patronymic +
        " длительнось приема одного пациента " +
        Hospital.Doctor2.DPA +
        " и он будет " +
        (Hospital.Doctor2.queuePerson + Patient.queuePosition) +
        "ой, и попадет к врачу через " +
        Math.trunc(WDoc2T / 60) +
        " дня и " +
        Math.trunc(WDoc2T % 60) +
        " минут."
);
Hospital.ChiefPhysician = {
    surname: "Burmistrov",
    name: "Afon",
    patronymic: "Grigorievich",
    queuePosition: null,
};
console.log(
    "Но у " +
        Patient.name +
        "a есть блат, так как его отец " +
        Hospital.ChiefPhysician.surname +
        " " +
        Hospital.ChiefPhysician.name +
        " " +
        Hospital.ChiefPhysician.patronymic +
        " теперь главврач этой больницы, и теперь позиция " +
        Patient.name +
        "a в очереди к " +
        Hospital.Doctor1.name +
        " " +
        Hospital.Doctor1.surname +
        " №" +
        (Hospital.Doctor1.queuePerson * Hospital.ChiefPhysician.queuePosition +
            Patient.queuePosition) +
        " и к " +
        Hospital.Doctor2.name +
        " " +
        Hospital.Doctor2.surname +
        " позиция №" +
        (Hospital.Doctor2.queuePerson * Hospital.ChiefPhysician.queuePosition +
            Patient.queuePosition) +
        ". После приема терапевта боль в животе " +
        Patient.name +
        " стала " +
        !Patient.stomachache +
        "."
);
