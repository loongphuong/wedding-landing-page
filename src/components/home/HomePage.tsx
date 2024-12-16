import { Background } from "./Background";
import { Gallery } from "./Gallery";
import { Info } from "./Info";
import { Location } from "./Location";
import { Timeline } from "./Timeline";

export function HomePage() {
  return (
    <div>
      <Background />
      <Info></Info>
      <Gallery></Gallery>
      <Timeline></Timeline>
      <Location></Location>
    </div>
  );
}
