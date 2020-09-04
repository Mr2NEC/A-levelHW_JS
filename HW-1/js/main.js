var Patient = {
    surname: "Burmistrov",
    name: "Ivan",
    patronymic: "Afonovich",
    age: 27,
    stomachache: true,
    queuePosition: true,
};
console.log(Patient);
var Hospital = {
    Doctor1: {
        surname: "Kudryavtseva",
        name: "Klava",
        patronymic: "Nikolaevna",
        age: 55,
        specialization: "Therapist",
        queuePerson: 25,
        DPA: 50,
        Patient: Patient,
    },
    Doctor2: {
        surname: "Solovieva",
        name: "Galina",
        patronymic: "Anatolievna",
        age: 47,
        specialization: "Therapist",
        queuePerson: 55,
        DPA: 35,
        Patient: Patient,
    },
};
console.log(Hospital);
console.log(Patient.queuePosition + Hospital.Doctor1.queuePerson);
