import { useContext } from "react";
import { dataContext } from "../context/ContextApi.tsx";
import { Link } from "react-router";

function HomeAccountInfo() {
  const { lang } = useContext(dataContext);

  return (
    <section className="w-[80%] m-[50px_auto_80px_auto]">
      <h1 className="text-3xl text-center mb-15">
        {lang === "en"
          ? "Create an account and find what you’re looking for"
          : "Φτιάξε λογαριασμό και βρες αυτό που ψάχνεις"}
      </h1>
      <p className="text-center w-250 m-auto">
        {lang === "en"
          ? "Your next career move starts with an account. Create it in a few minutes and fill in a short form about what you’re looking for and what you offer. From there, with a single click you see the jobs or candidates that match you. Whether you’re looking for work or for staff, we connect the right employer with the right employee, easily and quickly."
          : "Η επόμενη επαγγελματική σου κίνηση ξεκινά με έναν λογαριασμό. Δημιούργησέ τον σε λίγα λεπτά και συμπλήρωσε μια σύντομη φόρμα με το τι ψάχνεις και τι προσφέρεις. Από εκεί και πέρα, με ένα μόνο κλικ βλέπεις τις θέσεις εργασίας ή τους υποψηφίους που σου ταιριάζουν. Είτε ψάχνεις δουλειά είτε προσωπικό, φέρνουμε σε επαφή τον σωστό εργοδότη με τον σωστό εργαζόμενο, εύκολα και γρήγορα."}
      </p>
      <div className="flex flex-col justify-center items-center mt-20">
        <button
          className="text-center w-60 p-2.5 bg-[#245bd9] text-amber-50 transition hover:translate-y-0.3 hover:bg-[#2446a8] hover:shadow-xl hover:shadow-[#245bd9]/40 cursor-pointer"
          type="submit"
        >
          <Link to="/Account">
            {lang === "en" ? "Create account" : "Δημιούργησε λογαριασμό"}
          </Link>
        </button>
        <p className="text-sm">
          {lang === "en"
            ? "Already have an account? Log in."
            : "Έχεις ήδη λογαριασμό; Σύνδεση"}
        </p>
      </div>
    </section>
  );
}

export default HomeAccountInfo;

{
  /* 
      For mobile

      Here is an expanded version of Option 1, in the same friendly tone as your site.

Header
Φτιάξε λογαριασμό και βρες αυτό που ψάχνεις

Paragraph
Η επόμενη επαγγελματική σου κίνηση ξεκινά με έναν λογαριασμό. Δημιούργησέ τον σε λίγα λεπτά και συμπλήρωσε μια σύντομη φόρμα με το τι ψάχνεις και τι προσφέρεις. Από εκεί και πέρα, με ένα μόνο κλικ βλέπεις τις θέσεις εργασίας ή τους υποψηφίους που σου ταιριάζουν. Είτε ψάχνεις δουλειά είτε προσωπικό, φέρνουμε σε επαφή τον σωστό εργοδότη με τον σωστό εργαζόμενο, εύκολα και γρήγορα.

Three short steps (optional, shown under the paragraph)

Φτιάξε τον λογαριασμό σου: χρειάζεται μόνο λίγος χρόνος.
Συμπλήρωσε τη φόρμα: πες μας τι ψάχνεις και τι σε ενδιαφέρει.
Δες τις προτάσεις: θέσεις ή υποψηφίους, με ένα κλικ.

Button
Δημιούργησε λογαριασμό

Small line under the button (optional)
Έχεις ήδη λογαριασμό; Σύνδεση

English translation

Header: Create an account and find what you’re looking for

Paragraph: Your next career move starts with an account. Create it in a few minutes and fill in a short form about what you’re looking for and what you offer. From there, with a single click you see the jobs or candidates that match you. Whether you’re looking for work or for staff, we connect the right employer with the right employee, easily and quickly.

Steps: 1. Create your account: it only takes a little time. 2. Fill in the form: tell us what you’re looking for and what interests you. 3. See your matches: jobs or candidates, in one click.

Button: Create account. Small line: Already have an account? Log in.

Shorter version, if the section feels too long on mobile
Δημιούργησε λογαριασμό σε λίγα λεπτά, πες μας τι ψάχνεις και δες με ένα κλικ τις θέσεις ή τους υποψηφίους που σου ταιριάζουν. Εύκολα και γρήγορα.

After login, expanded texts

Profile not complete:

Header: Ολοκλήρωσε το προφίλ σου
Paragraph: Είσαι ένα βήμα πριν δεις τις προτάσεις που σου ταιριάζουν. Συμπλήρωσε τη φόρμα με το τι ψάχνεις και τι προσφέρεις, και θα σου δείξουμε αμέσως τα αποτελέσματα.
Button: Συμπλήρωσε το προφίλ

Profile complete, job seeker:

Header: Υπάρχουν προτάσεις για σένα
Paragraph: Με βάση όσα μας είπες, βρήκαμε θέσεις εργασίας που ταιριάζουν στο προφίλ σου. Δες τες με ένα κλικ.
Button: Δες τις θέσεις

Profile complete, employer:

Header: Υπάρχουν υποψήφιοι για σένα
Paragraph: Με βάση την αγγελία σου, βρήκαμε υποψηφίους που ταιριάζουν σε αυτό που ψάχνεις. Δες τους με ένα κλικ.
Button: Δες τους υποψηφίους

Reminder: add the word "δωρεάν" (free), for example "Δημιούργησε δωρεάν λογαριασμό", only if the account really is free. If it is, it usually increases sign-ups.

I can also adjust the length, make it more formal, or translate the post-login texts into English.
      
      
      */
}
