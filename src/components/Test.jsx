import { useEffect } from "react";

export default function Test({ titles, handlePress }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      });
    });

    // Tarkkaile kaikkia elementtejä, joilla on luokka 'scroll-animation'
    document.querySelectorAll(".scroll-animation").forEach((element) => {
      observer.observe(element);
    });

    // Puhdistetaan observer komponentin poistuessa
    return () => observer.disconnect();
  }, []);

  return (
    <div className="opacity-0 transform translate-y-8 transition-opacity transition-transform duration-700 ease-out scroll-animation">
      Tämä elementti näkyy scrollatessa. Tämä elementti näkyy scrollatessa. Tämä
      <p>asdasdasdas</p>
      <p>asdasdasdas</p>
      <p>asdasdasdas</p>
      <p>asdasdasdas</p>
      <p>asdasdasdas</p>
      <p>asdasdasdas</p>
      <p>asdasdasdas</p>
      <p>asdasdasdas</p>
      <p>asdasdasdas</p>
      <p>asdasdasdas</p>
    </div>
  );
}
