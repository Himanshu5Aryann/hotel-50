import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import FinalCTA from "../components/FinalCTA";
import BookingPlatforms from "../components/BookingPlatforms";
import { WEDDINGS } from "../data/media";
import { SITE } from "../data/site";

const ROOM_AMENITIES = [
  "Mineral Water", "Air Conditioning", "Wi-Fi", "Bathroom", "Housekeeping",
  "Room Service", "Chair", "Dining Table", "Kettle", "Blanket", "Safe",
  "TV", "Towels", "Toiletries", "Western Toilet Seat", "Hot & Cold Water", "Fan",
];

const ROOMS = [
  { name: "Premium With Balcony", image: "/hotel_binwa_02.jpg", view: "Balcony", description: "A comfortable premium room with a private balcony, designed for a relaxed stay in Baijnath." },
  { name: "Premium Without Balcony", image: "/hotel_binwa_01.jpg", view: "Premium Stay", description: "A refined premium room offering practical comfort and everything needed for a restful stay." },
];

function BookingButtons() {
  return <div className="grid gap-2 sm:grid-cols-3">
    <a href="https://www.agoda.com/en-gb/hotel-binwa-view/hotel/palampur-in.html?countryId=35&finalPriceView=1&isShowMobileAppPrice=false&cid=1833981&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2026-09-9&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&los=1&searchrequestid=58f23cca-e234-4ae4-8de2-202bbaffb1ec&ds=d2DlJhC2WnW06s5x" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-burgundy px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-ivory">Agoda</a>
    <a href="https://www.makemytrip.com/hotels/hotel-details/?hotelId=201907151702217184&Campaign=21695531698&_uCurrency=INR&checkin=09092026&checkout=09102026&city=CTBAIJ&cmp=googlehoteldfinder_Old_DH_META_Paid_type%3Dbl_RateRule%3D_usernolist_aud%3D_21695531698_default_IN_mapresults_201907151702217184&country=IN&gad_campaignid=21695531698&gad_source=6&gbraid=0AAAAACwdfVWdfEreIWrB3Lh6saKMiGxUW&gclid=Cj0KCQjwh4TVBhCWARIsAG0czmrSvvqlLFeS8nzbHkyMIPwVuVRCqChgU4cUhrZW5Jm3pJIQDIfC9zcaAvAmEALw_wcB&lat=32.04911&lng=76.64236&locusId=CTBAIJ&locusType=city&mtkeys=9e63a462-a54f-41cc-9b00-cf8b76c32922_312168_2Wednesday&rank=1&roomCount=1&roomStayQualifier=2e0e&rsc=1e2e0e&topHtlId=201907151702217184&totalGuestCount=2&viewType=BUDGET&isPropSearch=T" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-charcoal/20 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-charcoal">MakeMyTrip</a>
    <a href="https://www.goibibo.com/hotels/binwa-view-hotel-in-baijnath-india-8275445182069241523/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-charcoal/20 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-charcoal">Goibibo</a>
  </div>;
}

export default function Stays() {
  return <div>
    <SEO title="Stays | Hotel Binwa View & Banquets, Baijnath" description="Comfortable rooms and hospitality at Hotel Binwa View & Banquets in Baijnath, Himachal Pradesh." />
    <PageHero image="/HA1.jpg" eyebrow="Stay at Hotel Binwa View & Banquets" title="Stay Close to the Celebration." subtitle="Comfortable rooms, practical amenities and easy booking for guests visiting Baijnath." />

    <section className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10">
        <Reveal>
          <Eyebrow>Comfort, On-Site</Eyebrow>
          <h2 className="mt-5 font-display text-4xl italic leading-tight text-charcoal sm:text-5xl">Rest Well, Right Where the Celebration Is.</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal/70">Whether you are visiting for a wedding, event or simply exploring Baijnath, Hotel Binwa View & Banquets offers comfortable rooms with essential hotel facilities.</p>
          <div className="mt-8 flex gap-10">
            <div><p className="eyebrow text-[10px] text-rose-dark/80">Check-in</p><p className="mt-1 font-display text-2xl italic text-charcoal">{SITE.checkIn}</p></div>
            <div><p className="eyebrow text-[10px] text-rose-dark/80">Check-out</p><p className="mt-1 font-display text-2xl italic text-charcoal">{SITE.checkOut}</p></div>
          </div>
          <Link to="/contact" className="mt-8 inline-block rounded-full bg-burgundy px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-ivory">Enquire About Your Stay</Link>
        </Reveal>
        <Reveal delay={0.15}><div className="overflow-hidden rounded-sm border border-charcoal/10 bg-ivory shadow-[0_18px_36px_rgba(31,13,14,0.04)]"><img src="/bedroom_hd.jpg" alt="Hotel room at Hotel Binwa View & Banquets" className="h-[420px] w-full object-cover object-center sm:h-[500px]" loading="lazy" /></div></Reveal>
      </div>
    </section>

    <section className="bg-ivory-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <Eyebrow>Rooms</Eyebrow>
        <h2 className="mt-5 max-w-xl font-display text-4xl italic leading-tight text-charcoal sm:text-5xl">Choose the Stay That Suits You.</h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-charcoal/65">Every listed room is approximately 216 sq.ft (20 sq.mt), with 1 Double Bed and 1 Bathroom. Room-specific features are shown below.</p>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {ROOMS.map((room) => <article key={room.name} className="overflow-hidden border border-charcoal/10 bg-ivory">
            <img src={room.image} alt={`${room.name} at Hotel Binwa View & Banquets`} className="h-72 w-full object-cover object-center" loading="lazy" />
            <div className="space-y-5 p-6">
              <div className="flex items-center justify-between gap-4"><p className="font-display text-3xl italic text-charcoal">{room.name}</p><span className="rounded-full border border-charcoal/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal/70">{room.view}</span></div>
              <div className="grid gap-3 text-sm text-charcoal/70 sm:grid-cols-2">
                <p><span className="font-medium text-charcoal">Size:</span> 216 sq.ft (20 sq.mt)</p><p><span className="font-medium text-charcoal">Bed:</span> 1 Double Bed</p><p><span className="font-medium text-charcoal">Bathroom:</span> 1 Bathroom</p><p><span className="font-medium text-charcoal">Guests:</span> 2 Guests</p>
              </div>
              <p className="text-sm leading-relaxed text-charcoal/70">{room.description}</p>
              <div className="flex flex-wrap gap-2">{ROOM_AMENITIES.map((amenity) => <span key={amenity} className="rounded-full border border-charcoal/10 bg-ivory px-2.5 py-1.5 text-[10px] uppercase tracking-wide text-charcoal/70">{amenity}</span>)}</div>
              <BookingButtons />
            </div>
          </article>)}
        </div>
        <div className="mt-14 max-w-2xl"><BookingPlatforms title="Book Your Stay" subtitle="Reserve Hotel Binwa View & Banquets through your preferred booking platform." /></div>
      </div>
    </section>

    <section className="bg-charcoal py-24 sm:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10"><Reveal><img src="/hotel_binwa_13.jpg" alt="Hotel Binwa View & Banquets property" className="h-96 w-full rounded-sm object-cover object-center" loading="lazy" /></Reveal><Reveal delay={0.15}><Eyebrow tone="light">Hotel Facilities</Eyebrow><h2 className="mt-5 font-display text-4xl italic leading-tight text-ivory sm:text-5xl">Everything You Need for a Comfortable Stay.</h2><p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/70">Free Wi-Fi, air conditioning, parking, room service, restaurant, laundry service and other essential facilities are available for guests.</p><div className="mt-8 grid grid-cols-2 gap-3 text-sm text-ivory/75">{["Free Wi-Fi","Paid breakfast","Free parking","Accessible","Pool","Air-conditioned","Laundry service","Business centre","Pet-friendly","Room service","Restaurant","Airport shuttle","Fitness centre","Bar","Smoke-free"].map(x=><span key={x} className="border-b border-ivory/10 py-2">{x}</span>)}</div></Reveal></div></section>
    <FinalCTA image={WEDDINGS.couplePortrait} />
  </div>;
}
