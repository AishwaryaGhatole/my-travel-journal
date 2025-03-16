import marker from "../images/marker.png";

// Step 1: Define the TypeScript type for props
type EntryProps = {
  entry: {
    id: number;
    img: {
      src: string;
      alt: string;
    };
    title: string;
    country: string;
    googleMapsLink: string;
    dates: string;
    text: string;
  };
};

// Step 2: Fix how props are used inside the function
export default function Entry({ entry }: EntryProps) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" src={entry.img.src} alt={entry.img.alt} />
      </div>
      <div className="info-container">
        <img className="marker" src={marker} alt="map marker icon" />
        <span className="country">{entry.country}</span>
        <a href={entry.googleMapsLink} target="_blank" rel="noopener noreferrer">
          View on Google Maps
        </a>
        <h2 className="entry-title">{entry.title}</h2>
        <p className="trip-dates">{entry.dates}</p>
        <p className="entry-text">{entry.text}</p>
      </div>
    </article>
  );
}
