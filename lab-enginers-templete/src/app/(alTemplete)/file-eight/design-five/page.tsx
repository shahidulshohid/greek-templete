import StampComponent from "@/component/shared/dashed/Dashed";
import React from "react";

function DesignFive() {
  return (
    <div className="max-w-[632px] mx-auto">
      {/* Title */}
      <h2 className="text-center font-semibold text-xl mb-6 underline">
        ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ - ΒΕΒΑΙΩΣΗ ΜΗΧΑΝΙΚΟΥ
      </h2>

      {/* Project Row */}
      <div className="grid grid-cols-12 gap-2">
        <label className="col-span-2 font-medium">Έργο:</label>
        <div className="col-span-10">PROJECT DESCRIPTION</div>
      </div>

      {/* Address Row */}
      <div className="grid grid-cols-12 gap-2 mb-4 mt-20">
        <label className="col-span-2 font-medium">Θέση:</label>
        <div className="col-span-10">
          ADDRESS, TOWN/AREA , POSTAL CODE (FOR BUILDING)
        </div>
      </div>

      <div className="lg:ml-12">
        {/* Owner Row */}
        <div className="grid grid-cols-12 gap-2">
          <label className="col-span-2 font-medium">Ιδιοκτήτης:</label>
          <div className="col-span-10">OWNER / OWNERS</div>
        </div>

        {/* Greek Description */}
        <p className="my-10">
          Η παρούσα τεχνική έκθεση αφορά την κοπή δέντρων που βρίσκονται εντός
          του ακάλυπτου χώρου του ακινήτου
          <span className="text-lg font-semibold">
            {" "}
            Description for building/ horiontal property επί της οδού Address,
            Town/Area , postal code ( FOR BUILDING).
          </span>{" "}
          Η αναγκαιότητα κοπής τεκμηριώνεται λόγω πλήθους προβλημάτων που
          σχετίζονται με την ασφάλεια, τη λειτουργικότητα του κτιρίου και την
          προστασία των υποδομών.
        </p>

        {/* Bullet Point */}
        <div className="mt-4">
          <p className="font-semibold text-lg mb-2">
            ● Κοπή Δέντρων λόγω Στατικής Επικινδυνότητας
          </p>
          <p className="text-sm leading-relaxed">
            Η εργασία αφορά την κοπή δέντρων τα οποία παρουσιάζουν έντονα
            φαινόμενα στατικής ανεπάρκειας, όπως σοβαρή κλίση, σήψη του κορμού ή
            αποσάθρωση του ριζικού τους συστήματος, γεγονός που αυξάνει τον
            κίνδυνο πτώσης και πιθανής πρόκλησης ζημιών σε γειτονικά κτίρια,
            κοινόχρηστους χώρους ή διερχόμενους.
          </p>
        </div>
        <div className="mt-6">
          <p className="font-semibold text-lg mb-2">
            ● Κοπή Δέντρων λόγω Πρόκλησης Βλαβών σε Υποδομές και Δίκτυα
          </p>
          <p className="text-sm leading-relaxed">
            Η κοπή κρίνεται αναγκαία καθώς παρατηρούνται φαινόμενα ρηγματώσεων
            σε τοιχία περίφραξης, αποκόλληση πλακοστρώσεων και παραμορφώσεις
            δαπέδων, εξαιτίας της υπερβολικής ανάπτυξης του ριζικού συστήματος
            των δέντρων. Επιπλέον, έχουν καταγραφεί φθορές σε υπόγεια δίκτυα
            αποχέτευσης και ύδρευσης.
          </p>
        </div>
        <div className="mt-6">
          <p className="font-semibold text-lg mb-2">
            ● Κοπή Δέντρων για Διασφάλιση Επαρκούς Φωτισμού και Αερισμού
          </p>
          <p className="text-sm leading-relaxed">
            Η εργασία αφορά την απομάκρυνση δέντρων που δημιουργούν σοβαρά
            προβλήματα σκίασης και παρεμπόδισης φυσικού αερισμού σε κύριους
            χώρους διαβίωσης εντός του κτιρίου, γεγονός που επηρεάζει αρνητικά
            την υγιεινή και την ποιότητα ζωής των ενοίκων, σε αντίθεση με τις
            απαιτήσεις του Κτιριοδομικού Κανονισμού.
          </p>
        </div>
        <div className="mt-6">
          <p className="font-semibold text-lg mb-2">
            ● Κοπή Δέντρων λόγω Εκτέλεσης Εγκεκριμένων Οικοδομικών Εργασιών
          </p>
          <p className="text-sm leading-relaxed">
            Η κοπή αφορά δέντρα που βρίσκονται εντός των ζωνών επέμβασης για
            προγραμματισμένες εργασίες μικρής κλίμακας, όπως η τοποθέτηση
            δεξαμενής, κατασκευή ράμπας ή άλλων βοηθητικών υποδομών. Η
            απομάκρυνσή τους είναι απαραίτητη για την ασφαλή και ορθή εκτέλεση
            των εργασιών
          </p>
        </div>

        <div className="mt-24">
          <p className="font-semibold text-lg mb-2">
            ● Κοπή Δέντρων για Πυροπροστασία
          </p>
          <p className="text-sm leading-relaxed">
            Η εργασία αφορά την απομάκρυνση δέντρων που βρίσκονται σε άμεση
            γειτνίαση με τα κτίρια του οικοπέδου, σε απόσταση μικρότερη των 3
            έως 5 μέτρων από τα δομικά στοιχεία, όπως καθορίζεται από τις
            προβλέψεις του Κανονισμού Πυροπροστασίας Κτιρίων (ΦΕΚ 2434/Β/2018)
            και τις γενικές οδηγίες πυροπροστασίας της Πολιτικής Προστασίας.
          </p>
          <p className="text-sm leading-relaxed mt-3">
            Η ανάγκη κοπής των συγκεκριμένων δέντρων τεκμηριώνεται λόγω της
            αυξημένης επικινδυνότητας πρόκλησης και εξάπλωσης πυρκαγιάς, ειδικά
            κατά τους θερινούς μήνες. Τα δέντρα αυτά, λόγω του μεγάλου ύψους,
            της πυκνής κόμης και της άμεσης επαφής με τις όψεις των κτιρίων,
            λειτουργούν ως πιθανός αγωγός φλόγας σε περίπτωση πυρκαγιάς,
            αυξάνοντας τον κίνδυνο μετάδοσης της φωτιάς από το έδαφος προς το
            κτίριο ή από κτίριο σε κτίριο.
          </p>
          <p className="text-sm leading-relaxed mt-3">
            Επιπλέον, ορισμένα από τα δέντρα παρουσιάζουν συσσώρευση ξερών
            φύλλων, κλαδιών και οργανικών υπολειμμάτων τόσο στο ριζικό τους
            σύστημα όσο και εντός της κόμης τους, δημιουργώντας υψηλό φορτίο
            καύσιμης ύλης.
          </p>
          <p className="text-sm leading-relaxed mt-3">
            Η απομάκρυνση των δέντρων αυτών εντάσσεται σε ευρύτερη στρατηγική
            προληπτικής πυροπροστασίας, η οποία περιλαμβάνει:
          </p>
          <p className="text-sm leading-relaxed mt-3">
            Δημιουργία ελεύθερης ζώνης απαλλαγμένης από εύφλεκτη βλάστηση γύρω
            από τα κτίρια.
          </p>
          <p className="text-sm leading-relaxed mt-3">
            Διασφάλιση της δυνατότητας πρόσβασης πυροσβεστικών μέσων σε
            περίπτωση ανάγκης.
          </p>
          <p className="text-sm leading-relaxed mt-3">
            Ελαχιστοποίηση του κινδύνου φλόγας από έρπουσα ή υφέρπουσα πυρκαγιά.
          </p>
          <p className="text-sm leading-relaxed mt-3">
            Συμμόρφωση με τις οδηγίες της Πυροσβεστικής Υπηρεσίας και τις
            απαιτήσεις των εγκεκριμένων μελετών πυροπροστασίας (όπου υπάρχουν).
          </p>
          <p className="text-sm leading-relaxed mt-3">
            Η κοπή των δέντρων θα γίνει με κατάλληλα μέσα, με μέριμνα για την
            προστασία της ανθρώπινης ζωής, των γειτονικών κατασκευών και των
            παρακείμενων ιδιοκτησιών. Τα προϊόντα κοπής θα απομακρυνθούν άμεσα
            και θα διατεθούν σύμφωνα με τις ισχύουσες περιβαλλοντικές διατάξεις.
          </p>
        </div>
      </div>
      <div className="mt-20 flex items-center justify-center">
        <div>
          {/* Header Section */}
          <div className="text-center mb-8">
            <h2 className="text-xl mb-2">Ημερομηνία</h2>
            <p className="text-lg text-gray-600 mb-6">6/25/2025</p>

            <h3 className="text-lg font-medium text-gray-700 mb-4">
              Ο ΜΗΧΑΝΙΚΟΣ
            </h3>
          </div>

          {/* Dashed Border Box = common component*/}
          <StampComponent
            title="ΣΦΡΑΓΙΔΑ ΜΗΧΑΝΙΚΟΥ"
            instructions={[
              "Με δεξί κλικ",
              "Αλλαγή εικόνας",
              " Βάζετε την σφραγίδα σας",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default DesignFive;
