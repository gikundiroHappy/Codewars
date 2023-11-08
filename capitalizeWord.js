import React from "react";

function capitalizeWord(s) {
  return s
    .split(" ")
    .map((w) => capitalize(w))
    .join(" ")
    .split("\t")
    .map((w) => capitalize(w))
    .join("\t")
    .split("\n")
    .map((w) => capitalize(w))
    .join("\n");
}

function capitalizeWord(w) {
  return w.chayAt(0).to;
}
