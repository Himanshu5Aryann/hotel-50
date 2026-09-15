import PolicyPage from "../components/PolicyPage";
import { SITE } from "../data/site";

export default function Booking() {
  return (
    <PolicyPage title="Booking Policy">
      <p>
        This page outlines the general booking process for weddings,
        banquets, events and stays at Hotel Binwa View & Banquets.
      </p>
      <h2>How Bookings Work</h2>
      <p>
        All wedding, banquet and event dates are confirmed on a
        first-enquiry, first-confirmation basis, subject to availability.
        We recommend enquiring as early as possible, especially for peak
        wedding season dates.
      </p>
      <h2>Check-in & Check-out</h2>
      <p>
        Standard check-in time is {SITE.checkIn} and check-out time is{" "}
        {SITE.checkOut}, unless otherwise arranged with our front desk team.
      </p>
      <h2>Confirming Your Booking</h2>
      <p>
        To confirm a wedding, event or stay booking, please contact our team
        directly at{" "}
        <a href={`mailto:${SITE.email}`} className="underline">
          {SITE.email}
        </a>{" "}
        or {SITE.phone}. Our team will guide you through the confirmation
        process, including any advance payment requirements.
      </p>
      <p className="italic text-charcoal/50">
        [Placeholder — detailed booking terms, advance payment structure and
        documentation requirements should be finalised by Hotel Binwa View & Banquets
        management.]
      </p>
    </PolicyPage>
  );
}
