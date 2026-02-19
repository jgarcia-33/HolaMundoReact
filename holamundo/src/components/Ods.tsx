function ods() {
  enum listaODS {
    ods1 = "Fin de la pobreza",
    ods2 = "Hambre cero",
    ods3 = "Salud y bienestar",
    ods4 = "Educación de calidad",
    ods5 = "Igualdad de género",
    ods6 = "Agua limpia y saneamiento",
    ods7 = "Energía asequible y no contaminante",
    ods8 = "Trabajo decente y crecimiento económico",
  }
  type EstadoODS = "Aprobado" | "Ejecucion" | "Completado" | "Rechazado";

  interface InterfazSostenible {
    id: number;
    odsFav: listaODS;
    estado: EstadoODS;
  }

  const odsAlumnos: InterfazSostenible[] = [
    {
      id: 1,
      odsFav: listaODS.ods2,
      estado: "Ejecucion",
    },
  ];

  function filtrarProyectosClimaticos(
    ods: InterfazSostenible[],
  ): InterfazSostenible[] {
    return ods.filter((o) => o.estado === "Ejecucion");
  }

  const resultadoJson = filtrarProyectosClimaticos(odsAlumnos);
  console.log(resultadoJson);
  return <h1>{JSON.stringify(resultadoJson, null, 1)}</h1>;

  let odsFav = listaODS.ods2;

  return <h1>Mi ods fav es: {odsFav}</h1>;
}

export default ods;
