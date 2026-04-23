import React from "react";
import styles from "./Subjects.module.css";

export default function Subjects() {
  return (
    <div className={styles.subjects}>
      <h3 className={styles.subjects__title}>
        <i className="fas fa-graduation-cap"></i> Materias Relevantes
      </h3>

      <div className={styles.subjects__list}>
        <span className={styles.subject}>Programación Orientada a Objetos</span>
        <span className={styles.subject}>Estructuras de Datos</span>
        <span className={styles.subject}>Algoritmos</span>
        <span className={styles.subject}>Redes de Computadoras</span>
        <span className={styles.subject}>Ingeniería de Software</span>
        <span className={styles.subject}>Bases de Datos</span>
        <span className={styles.subject}>Sistemas Operativos</span>
        <span className={styles.subject}>Desarrollo Web</span>
      </div>
    </div>
  );
}