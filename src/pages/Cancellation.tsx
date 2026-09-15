import PolicyPage from "../components/PolicyPage";
import { SITE } from "../data/site";

export default function Cancellation() {
  return (
    <PolicyPage title="Cancellation Policy">
      <p>
        We understand that plans for weddings, events and stays can change.
        This page outlines the general approach to cancellations at Hotel
        Hotel Binwa View & Banquets.
      </p>
      <h2>Wedding & Event Bookings</h2>
      <p>
        Cancellation terms for wedding and event bookings, including any
        applicable advance payments, are communicated directly to the
        hosting family at the time of confirmation and will vary based on
        the date, scale and season of the event.
      </p>
      <h2>Stay Bookings</h2>
      <p>
        Cancellation terms for room bookings are shared at the time of
        reservation confirmation.
      </p>
      <h2>Contact for Cancellations</h2>
      <p>
        To request a cancellation or discuss your booking, please contact
        our team directly at{" "}
        <a href={`mailto:${SITE.email}`} className="underline">
          {SITE.email}
        </a>{" "}
        or {SITE.phone}.
      </p>
      <p className="italic text-charcoal/50">
        [Placeholder — specific cancellation timelines and refund terms
        should be provided by Hotel Binwa View & Banquets management.]
      </p>
    </PolicyPage>
  );
}
