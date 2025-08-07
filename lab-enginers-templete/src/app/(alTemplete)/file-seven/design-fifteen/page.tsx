import React from 'react'

export default function FileSevenDesignFifteen() {
    return (
        <div className="max-w-[632px] mx-auto">
            <div className=" bg-white">
                {/* Title */}
                <h2 className="text-center font-semibold text-lg mb-6 underline">
                    ΣΥΝΑΙΝΕΣΗ ΣΥΝΔΙΟΚΤΗΤΩΝ
                </h2>

                {/* Project Row */}
                <div className="grid grid-cols-12 gap-2 mb-4 ml-10">
                    <label className="col-span-2 font-medium">Έργο:</label>
                    <div className="col-span-10">
                        PROJECT DESCRIPTION
                    </div>
                </div>

                {/* Address Row */}
                <div className="grid grid-cols-12 gap-2 mb-4 ml-10">
                    <label className="col-span-2 font-medium">Θέση:</label>
                    <div className="col-span-10">
                        ADDRESS, TOWN/AREA , POSTAL CODE (FOR BUILDING)
                    </div>
                </div>

                {/* Consent Text */}
                <div className='mt-[100px]'>
                    <p className="mt-6 mb-2">
                        Εμείς οι κάτωθι υπογεγραμμένοι, συνιδιοκτήτες της πολυκατοικίας επί της οδού
                    </p>
                    <h3>
                        <span className="text-lg font-semibold">ADDRESS, TOWN/AREA , POSTAL CODE (FOR BUILDING)</span>
                    </h3>
                    <p>
                        δηλώνουμε υπεύθυνα και ρητά συναινούμε στην εκτέλεση των παρακάτω εργασιών:</p>
                </div>

                {/* Works from Technical Description Section */}
                <div className="mt-4">
                    <p className="font-semibold text-lg my-6">[WORKS FROM TECHNICAL DESCRIPTION]</p>
                    <p className="text-sm leading-relaxed">
                        Η συναίνεση αφορά την υλοποίηση των ανωτέρω εργασιών στις κοινές όψεις/κοινόχρηστα μέρη του κτιρίου ή επεμβάσεις που επηρεάζουν την
                        αισθητική και λειτουργική ενότητα του ακινήτου. Οι εργασίες θα εκτελεστούν από εξουσιοδοτημένο μηχανικό σύμφωνα με την πολεοδομική νομοθεσία
                        (Ν.4495/2017) και με σεβασμό στην ασφάλεια και στην κοινή χρήση του ακινήτου
                    </p>
                </div>
            </div>
            {/* table  */}
            <div className="my-20">
                <table className="table-auto w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">A/A</th>
                            <th className="border px-4 py-2">Ονοματεπώνυμο</th>
                            <th className="border px-4 py-2">Ιδιότητα / Ιδιοκτησία</th>
                            <th className="border px-4 py-2">Υπογραφή</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Repeat this for each row */}
                        {[...Array(10)].map((_, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2"></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
