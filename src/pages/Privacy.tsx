import PolicyPage from "../components/PolicyPage";
import { SITE } from "../data/site";

export default function Privacy() {
  return (
    <PolicyPage title="Privacy Policy">
      <p>
        Hotel Binwa View & Banquets ("we", "us", "our") respects the
        privacy of every guest and website visitor. This page outlines, in
        general terms, how information shared with us through enquiries,
        calls, WhatsApp messages or our website may be used.
      </p>
      <h2>Information We Collect</h2>
      <p>
        When you submit an enquiry form, contact us by phone, email or
        WhatsApp, we may collect your name, contact number, email address,
        and details relevant to your wedding, event or stay enquiry.
      </p>
      <h2>How We Use Information</h2>
      <p>
        Information shared with us is used solely to respond to your
        enquiry, coordinate your booking, and provide relevant updates about
        your wedding, event or stay at Hotel Binwa View & Banquets.
      </p>
      <h2>Data Security</h2>
      <p>
        We take reasonable measures to protect the information shared with
        us. However, no method of transmission over the internet is
        completely secure.
      </p>
      <h2>Contact</h2>
      <p>
        For any privacy-related queries, please contact us at{" "}
        <a href={`mailto:${SITE.email}`} className="underline">
          {SITE.email}
        </a>{" "}
        or {SITE.phone}.
      </p>
      <p className="italic text-charcoal/50">
        [Placeholder — this policy should be reviewed and finalised by Hotel
        Hotel Binwa View & Banquets management or legal counsel before formal
        publication.]
      </p>
    </PolicyPage>
  );
}
