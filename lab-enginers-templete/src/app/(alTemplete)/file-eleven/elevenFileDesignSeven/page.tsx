import StampComponent from "@/component/shared/dashed/Dashed";
import React from "react";

function ElevenFileDesignSeven() {
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
          Στο ακίνητο{" "}
          <span className="text-sm font-semibold">
            Description for building/horizontal property
          </span>
          επί της οδού <br />{" "}
          <span className="text-lg font-semibold">
            Address, Town/Area, postal code (FOR BUILDING)
          </span>
          , πρόκειται να εκτελεσθούν οι παρακάτω εργασίες :
        </p>

        {/* Bullet Point */}
        <div className="mt-4">
          <p className="font-semibold text-lg mb-2">
            ● Χάραξη και Οριοθέτηση Θέσεων Περίφραξης
          </p>
          <p className="text-sm leading-relaxed">
            Θα πραγματοποιηθεί επιτόπια χάραξη των ορίων της ιδιοκτησίας, βάσει
            των στοιχείων του τοπογραφικού διαγράμματος. Η οριοθέτηση θα γίνει
            με σημειακή σήμανση των θέσεων τοποθέτησης των στύλων.
          </p>
        </div>
        <div className="mt-6">
          <p className="font-semibold text-lg mb-2">
            ● Διενέργεια τοπικών εκσκαφών μικρού βάθους (20-60cm) για τη
            θεμελίωση των στοιχείων στήριξης (στύλοι ή χαμηλά στηθαία).
          </p>
          <p className="text-sm leading-relaxed">
            Οι εκσκαφές θα γίνουν με ελαφρά μηχανικά μέσα ή χειρωνακτικά, χωρίς
            επεμβάσεις μεγάλης κλίμακας και χωρίς αλλοίωση της γενικής
            μορφολογίας του εδάφους.
          </p>
        </div>
        <div className="mt-6">
          <p className="font-semibold text-lg mb-2">
            ● Κατασκευή Χαμηλής Περιτοίχισης (έως 1,00μ)
          </p>
          <p className="text-sm leading-relaxed">
            Κατασκευή χαμηλού στηθαίου ή τοιχίου ύψους έως 1,00m κατά μήκος των
            ορίων του γηπέδου. Υλικά που δύνανται να χρησιμοποιηθούν:
          </p>
          <p className="text-sm leading-relaxed mt-2">
            Λιθοδομή (ξερολιθιά ή αρμολογητή) από φυσική ή τεχνητή πέτρα
          </p>
          <p className="text-sm leading-relaxed mt-2">
            Σκυρόδεμα (οπλισμένο ή άοπλο)
          </p>
          <p className="text-sm leading-relaxed mt-2">
            Τσιμεντόλιθοι ή προκατασκευασμένα στοιχεία (όπου επιτρέπεται)
          </p>
          <p className="text-sm leading-relaxed mt-2">
            Τούβλα ή άλλα ανόργανα υλικά
          </p>
          <p className="text-sm leading-relaxed mt-2">
            Η επιλογή υλικού θα γίνει σύμφωνα με την αισθητική, τη στατική
            επάρκεια και τις τοπικές πολεοδομικές διατάξεις.
          </p>
        </div>
        <div className="mt-22">
          <p className="font-semibold text-lg">
            ● Τοποθέτηση Ελαφράς Περίφραξης (άνω του στηθαίου) μέγιστου
            συνολικού ύψους μαζί με τη περιτοίχηση έως 1,5 μ
          </p>
          <p className="text-sm leading-relaxed">
            Πάνω από τη χαμηλή περιτοίχιση ή απευθείας στο έδαφος (όπου δεν
            υπάρχει στηθαίο), τοποθέτηση ελαφρών στοιχείων περίφραξης όπως:
          </p>
          <p className="text-sm leading-relaxed mt-2">
            Γαλβανισμένο συρματόπλεγμα
          </p>
          <p className="text-sm leading-relaxed mt-2">
            Ηλεκτροσυγκολλητό πλέγμα (πλέγμα κλουβιού)
          </p>
          <p className="text-sm leading-relaxed mt-2">
            Ξύλινη ή μεταλλική πέργκολα τύπου αγροτικής περίφραξης
          </p>
          <p className="text-sm leading-relaxed mt-2">
            Σιδερένιες λάμες ή κάγκελα ελαφρού τύπου
          </p>
          <p className="text-sm leading-relaxed mt-2">
            Η στερέωση θα γίνεται σε κατάλληλους μεταλλικούς ή ξύλινους στύλους,
            οι οποίοι θα αγκυρώνονται σε κατάλληλες βάσεις μέσα στο στηθαίο ή
            στο έδαφος.
          </p>
        </div>
        <div className="mt-12">
          <p className="text-sm leading-relaxed">
            ● Τοποθέτηση Θύρας Πρόσβασης (όπου απαιτείται) Σε επιλεγμένο σημείο
            του γηπέδου (πύλη εισόδου), προβλέπεται τοποθέτηση μεταλλικής ή
            ξύλινης θύρας / αυλόπορτας, αναλόγως χρήσης και αισθητικής.
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

export default ElevenFileDesignSeven;
