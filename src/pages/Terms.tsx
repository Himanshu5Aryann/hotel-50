import PolicyPage from "../components/PolicyPage";
import { SITE } from "../data/site";

export default function Terms() {
  return (
    <PolicyPage title="Terms & Conditions">
      <p>
        These terms govern your use of the Hotel Binwa View & Banquets
        website and your engagement with us for weddings, banquets, events
        and stays.
      </p>
      <h2>Use of Website</h2>
      <p>
        This website is provided for informational purposes to help you
        learn about our venue, services, and to submit enquiries. Content on
        this site should not be considered a binding offer until confirmed
        directly by our team in writing.
      </p>
      <h2>Bookings & Enquiries</h2>
      <p>
        Submitting an enquiry form does not constitute a confirmed booking.
        All wedding, event and stay bookings are subject to availability and
        confirmation by Hotel Binwa View & Banquets.
      </p>
      <h2>Pricing</h2>
      <p>
        Package pricing, room rates and event costs are shared directly by
        our team upon enquiry and are not published on this website.
      </p>
      <h2>Contact</h2>
      <p>
        For questions regarding these terms, contact us at{" "}
        <a href={`mailto:${SITE.email}`} className="underline">
          {SITE.email}
        </a>{" "}
        or {SITE.phone}.
      </p>
      <p className="italic text-charcoal/50">
        [Placeholder — final terms should be reviewed by Hotel Binwa View & Banquets
        management or legal counsel.]
      </p>
    </PolicyPage>
  );
}
