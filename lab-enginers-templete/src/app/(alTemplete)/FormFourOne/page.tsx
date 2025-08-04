import React from 'react';

export default function ConstructionTable() {
  const headerInfo = {
    title: "ΣΥΝΤΑΞΗ ΑΝΑΛΥΤΙΚΟΥ ΠΡΟΫΠΟΛΟΓΙΣΜΟΥ ΕΡΓΟΥ",
    subtitle: "(Συμπληρώνεται το Παράρτημα Β' του Ν.4412/17)"
  };

  const projectInfo = [
    { label1: "Στοιχεία:", value1: "OWNER/OWNERS" },
    { label2: "Έργο:", value2: "PROJECT DESCRIPTION" },
    { label3: "Διεύθυνση Έργου:", value3: "ADDRESS, TOWN/AREA, POSTAL CODE ( FOR BUILDING)" }
  ];

  const tableData = [
    {
      section: "1",
      title: "ΧΩΜΑΤΟΥΡΓΙΚΑ",
      items: [
        { code: "1.01", description: "Γενικές εκσκαφές οικοδομής", unit: "κ.μ", quantity: "2,22", total: "" },
        { code: "1.02", description: "Γενικές εκσκαφές για εγκαταστάσεις", unit: "κ.μ", quantity: "7,22", total: "" },
        { code: "1.03", description: "Γενικές εκσκαφές θεμελίων", unit: "κ.μ", quantity: "11,74", total: "" },
        { code: "1.04", description: "Εκσκαφές θεμελίων τεχνικών", unit: "κ.μ", quantity: "3,23", total: "" },
        { code: "1.05", description: "Εκσκαφές θεμελίων κολώνων", unit: "κ.μ", quantity: "3,32", total: "" },
        { code: "1.06", description: "Εκσκαφές τάφρων για σωλήνες", unit: "κ.μ", quantity: "6,40", total: "" },
        { code: "1.07", description: "Επιχώσεις με υλικό για εκσκαφές", unit: "κ.μ", quantity: "1,18", total: "" },
        { code: "1.08", description: "Βάσεις υπομάγας τεχνικών έργων", unit: "κ.μ", quantity: "1,26", total: "" }
      ],
      subtotal: "0,00"
    },
    {
      section: "2",
      title: "ΚΑΘΑΙΡΕΣΕΙΣ",
      items: [
        { code: "2.01", description: "Καθαίρεση πλινθοδομής με κονίαμα", unit: "κ.μ", quantity: "11,74", total: "" },
        { code: "2.02", description: "Καθαίρεση πλινθοδομής με ασβεστο", unit: "κ.μ", quantity: "14,68", total: "" },
        { code: "2.03", description: "Καθαίρεση πλινθοδομής με πηλό", unit: "κ.μ", quantity: "9,88", total: "" },
        { code: "2.04", description: "Καθαίρεση στεγανών και ξυλοδομής", unit: "τ.μ", quantity: "42,56", total: "" },
        { code: "2.05", description: "Καθαίρεση τοίχων φέροντος", unit: "τ.μ", quantity: "4,10", total: "" },
        { code: "2.06", description: "Καθαίρεση τοίχων δια τη θεμελίωση", unit: "τ.μ", quantity: "14,68", total: "" },
        { code: "2.07", description: "Καθαίρεση τοίχων δια τη λεπίδα", unit: "τ.μ", quantity: "8,60", total: "" },
        { code: "2.08", description: "Αποξήλωση σκελετού στη τέχνη", unit: "τ.μ", quantity: "1,50", total: "" },
        { code: "2.09", description: "Αποξήλωση υλικού στεγαστικού", unit: "τ.μ", quantity: "5,50", total: "" },
        { code: "2.10", description: "Αποξήλωση κεντ.θέρμανσης", unit: "τ.μ", quantity: "6,80", total: "" }
      ],
      subtotal: "0,00"
    }
  ];

  return (
    <div className="max-w-[794px] mx-auto p-6 bg-white">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-lg font-bold mb-2 bg-gray-300">{headerInfo.title}</h1>
        <p className="text-sm text-blue-600">{headerInfo.subtitle}</p>
      </div>

      {/* Project Information */}
      <div className="mb-6 space-y-2">
        <div className='mb-20'>
          <div className='flex gap-32 mb-4 '>
          <p>Στοιχεία *..</p>
          <p className='text-blue-600'>OWNER/OWNERS</p>
        </div>
        <div className='flex gap-37'>
          <p>Έργο *..</p>
          <p className='text-blue-600'>PROJECT DESCRIPTION</p>
        </div>
        </div>

        <div className='flex gap-16'>
          <p>Διεύθυνση Έργου *..</p>
          <p className='text-blue-600'>ADDRESS, TOWN/AREA, POSTAL CODE ( FOR BUILDING)</p>
        </div>
      </div>

      {/* Main Table */}
      <div className="border border-gray-300">
        <div className="bg-gray-300 p-2 text-center font-bold text-sm text-blue-600">
          ΑΝΑΛΥΤΙΚΟΣ ΠΡΟΫΠΟΛΟΓΙΣΜΟΣ ΒΑΣΕΙ ΠΑΡΑΡΤΗΜΑΤΟΣ Β' Ν.4495/17
        </div>
        
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-xs font-bold w-16">Κωδικός</th>
              <th className="border border-gray-300 p-2 text-xs font-bold flex-1">Εργασία</th>
              <th className="border border-gray-300 p-2 text-xs font-bold w-20">Μονάδα Μέτρησης</th>
              <th className="border border-gray-300 p-2 text-xs font-bold w-20">Τιμή Μονάδας Ποσότητα</th>
              <th className="border border-gray-300 p-2 text-xs font-bold w-20">Σύνολο</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((section, sectionIndex) => (
              <React.Fragment key={sectionIndex}>
                {/* Section Header */}
                <tr>
                  <td className="border border-gray-300 p-2 font-bold text-center">{section.section}</td>
                  <td className="border border-gray-300 p-2 font-bold">{section.title}</td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                </tr>
                
                {/* Section Items */}
                {section.items.map((item, itemIndex) => (
                  <tr key={itemIndex} className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-2 text-xs text-center">{item.code}</td>
                    <td className="border border-gray-300 p-2 text-xs">{item.description}</td>
                    <td className="border border-gray-300 p-2 text-xs text-center">{item.unit}</td>
                    <td className="border border-gray-300 p-2 text-xs text-center">{item.quantity}</td>
                    <td className="border border-gray-300 p-2 text-xs text-center">{item.total}</td>
                  </tr>
                ))}
                
                {/* Empty rows for spacing */}
                {[1, 2, 3, 4, 5].map((row) => (
                  <tr key={`empty-${sectionIndex}-${row}`}>
                    <td className="border border-gray-300 p-2 h-6"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                    <td className="border border-gray-300 p-2"></td>
                  </tr>
                ))}
                
                {/* Section Subtotal */}
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2 font-medium text-sm">Μερικό Σύνολο =</td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2"></td>
                  <td className="border border-gray-300 p-2 text-center font-bold text-red-600">{section.subtotal}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Footer note */}
      <div className="mt-4 text-xs text-gray-500 text-center">
        Detailed construction project breakdown with quantities and measurements
      </div>
    </div>
  );
}