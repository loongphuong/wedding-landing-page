export function Location() {
  return (
    <section id="location" className="mt-20">
      <iframe
        src="https://maps.google.com/maps?q=Trung+Tâm+Hội+Nghị+Tiệc+Cưới+Sen+Hồng&hl=vi&z=15&output=embed"
        height="600"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
        className="w-screen"
      />
    </section>
  );
}
