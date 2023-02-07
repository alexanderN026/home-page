"use strict";

const yOffset = -70;

const über_mich =
   document.getElementById("Menü_1.Eintrag"); /*Interaktion des 1.Menüeintrags*/

über_mich.addEventListener("mouseenter", über_mich_grau);
function über_mich_grau() {
   über_mich.style.color = "#444444";
}

über_mich.addEventListener("mouseleave", über_mich_weiß);
function über_mich_weiß() {
   über_mich.style.color = "white";
}

const Bewerbungsfoto = document.getElementById("Bewerbungsfoto");
const y_über_mich =
   Bewerbungsfoto.getBoundingClientRect().top + window.scrollY + yOffset;

über_mich.addEventListener("click", über_mich_scroll);
function über_mich_scroll() {
   window.scrollTo({ top: y_über_mich, behavior: "smooth" });
}

const Ausbildung =
   document.getElementById("Menü_2.Eintrag"); /*Interaktion des 2.Menüeintrags*/

Ausbildung.addEventListener("mouseover", Ausbildung_grau);
function Ausbildung_grau() {
   Ausbildung.style.color = "#444444";
}

Ausbildung.addEventListener("mouseleave", Ausbildung_weiß);
function Ausbildung_weiß() {
   Ausbildung.style.color = "white";
}

const SCL = document.getElementById("SCL");
const y_Ausbildung = SCL.getBoundingClientRect().top + window.scrollY + yOffset;

Ausbildung.addEventListener("click", Ausbildung_scroll);
function Ausbildung_scroll() {
   window.scrollTo({ top: y_Ausbildung, behavior: "smooth" });
}

const Studium =
   document.getElementById("Menü_3.Eintrag"); /*Interaktion des 3.Menüeintrags*/

Studium.addEventListener("mouseover", Studium_grau);
function Studium_grau() {
   Studium.style.color = "#444444";
}

Studium.addEventListener("mouseleave", Studium_weiß);
function Studium_weiß() {
   Studium.style.color = "white";
}

const HSD = document.getElementById("HSD");
const y_Studium = HSD.getBoundingClientRect().top + window.scrollY + yOffset;

Studium.addEventListener("click", Studium_scroll);
function Studium_scroll() {
   window.scrollTo({ top: y_Studium, behavior: "smooth" });
}

const Berufserfahrung =
   document.getElementById("Menü_4.Eintrag"); /*Interaktion des 4.Menüeintrags*/

Berufserfahrung.addEventListener("mouseover", Berufserfahrung_grau);
function Berufserfahrung_grau() {
   Berufserfahrung.style.color = "#444444";
}

Berufserfahrung.addEventListener("mouseleave", Berufserfahrung_weiß);
function Berufserfahrung_weiß() {
   Berufserfahrung.style.color = "white";
}

const Schaltschrank = document.getElementById("Schaltschrank");
const y_Berufserfahrung =
   Schaltschrank.getBoundingClientRect().top + window.scrollY + yOffset;

Berufserfahrung.addEventListener("click", Berufserfahrung_scroll);
function Berufserfahrung_scroll() {
   window.scrollTo({ top: y_Berufserfahrung, behavior: "smooth" });
}
