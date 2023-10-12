class Estudiante {
  constructor(codigo, nombre, carrera) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.carrera = carrera;
  }
}

class Curso {
  constructor(codigo, nombre, especialidad, duracion, creditos) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.especialidad = especialidad;
    this.duracion = duracion;
    this.creditos = creditos;
  }
}

class Horario {
  constructor(codigoCurso, codigoEstudiante, dia, horaInicio, horaFin) {
    this.codigoCurso = codigoCurso;
    this.codigoEstudiante = codigoEstudiante;
    this.dia = dia;
    this.horaInicio = horaInicio;
    this.horaFin = horaFin;
  }
}

// Variables para almacenar los datos simulados
const estudiantes = [];
const cursos = [];
const horarios = [];

// Funciones para modificar los objetos
// Función para modificar un estudiante y actualizar la tabla
function modificarEstudiante(codigo) {
  const estudiante = estudiantes.find(e => e.codigo === codigo);
  if (estudiante) {
    const nuevoNombre = prompt('Ingrese el nuevo nombre:');
    const nuevaCarrera = prompt('Ingrese la nueva carrera:');
    if (nuevoNombre) {
      estudiante.nombre = nuevoNombre;
    }
    if (nuevaCarrera) {
      estudiante.carrera = nuevaCarrera;
    }
    console.log('Estudiante modificado:', estudiante);
    actualizarTablaEstudiantes(); // Actualizar la tabla de estudiantes
  } else {
    console.log('Estudiante no encontrado.');
  }
}

// Función para modificar un curso y actualizar la tabla
function modificarCurso(codigo) {
  const curso = cursos.find(c => c.codigo === codigo);
  if (curso) {
    const nuevoNombre = prompt('Ingrese el nuevo nombre:');
    const nuevaEspecialidad = prompt('Ingrese la nueva especialidad:');
    const nuevaDuracion = prompt('Ingrese la nueva duración:');
    const nuevosCreditos = prompt('Ingrese los nuevos créditos:');
    if (nuevoNombre) {
      curso.nombre = nuevoNombre;
    }
    if (nuevaEspecialidad) {
      curso.especialidad = nuevaEspecialidad;
    }
    if (nuevaDuracion) {
      curso.duracion = nuevaDuracion;
    }
    if (nuevosCreditos) {
      curso.creditos = nuevosCreditos;
    }
    console.log('Curso modificado:', curso);
    actualizarTablaCursos(); // Actualizar la tabla de cursos
  } else {
    console.log('Curso no encontrado.');
  }
}

// Función para modificar un horario y actualizar la tabla
function modificarHorario(codigo) {
  const horario = horarios.find(h => h.codigoCurso === codigo || h.codigoEstudiante === codigo);
  if (horario) {
    const nuevoDia = prompt('Ingrese el nuevo día:');
    const nuevaHoraInicio = prompt('Ingrese la nueva hora de inicio:');
    const nuevaHoraFin = prompt('Ingrese la nueva hora de fin:');
    if (nuevoDia) {
      horario.dia = nuevoDia;
    }
    if (nuevaHoraInicio) {
      horario.horaInicio = nuevaHoraInicio;
    }
    if (nuevaHoraFin) {
      horario.horaFin = nuevaHoraFin;
    }
    console.log('Horario modificado:', horario);
    actualizarTablaHorarios(); // Actualizar la tabla de horarios
  } else {
    console.log('Horario no encontrado.');
  }
}

function eliminarEstudiante(codigo) {
  // Lógica para eliminar estudiante
  const estudianteIndex = estudiantes.findIndex(e => e.codigo === codigo);
  if (estudianteIndex !== -1) {
    estudiantes.splice(estudianteIndex, 1);
    console.log('Estudiante eliminado con éxito.');
    actualizarTablaEstudiantes(); // Actualiza la tabla de estudiantes
  } else {
    console.log('Estudiante no encontrado.');
  }
}

function eliminarCurso(codigo) {
  // Lógica para eliminar curso
  const cursoIndex = cursos.findIndex(c => c.codigo === codigo);
  if (cursoIndex !== -1) {
    cursos.splice(cursoIndex, 1);
    console.log('Curso eliminado con éxito.');
    actualizarTablaCursos(); // Actualiza la tabla de cursos
  } else {
    console.log('Curso no encontrado.');
  }
}

function eliminarHorario(codigo) {
  // Lógica para eliminar horario
  const horarioIndex = horarios.findIndex(h => h.codigoCurso === codigo || h.codigoEstudiante === codigo);
  if (horarioIndex !== -1) {
    horarios.splice(horarioIndex, 1);
    console.log('Horario eliminado con éxito.');
    actualizarTablaHorarios(); // Actualiza la tabla de horarios
  } else {
    console.log('Horario no encontrado.');
  }
}

// Funciones para actualizar las tablas
// Función para actualizar la tabla de estudiantes
function actualizarTablaEstudiantes() {
  const tabla = document.getElementById('listaEstudiantes');
  tabla.innerHTML = `
    <tr>
      <th>Código</th>
      <th>Nombre</th>
      <th>Carrera</th>
      <th>Modificar</th>
      <th>Eliminar</th>
    </tr>
  `;
  estudiantes.forEach(estudiante => {
    tabla.innerHTML += `
      <tr>
        <td>${estudiante.codigo}</td>
        <td>${estudiante.nombre}</td>
        <td>${estudiante.carrera}</td>
        <td><button onclick="modificarEstudiante('${estudiante.codigo}')">Modificar</button></td>
        <td><button onclick="eliminarEstudiante('${estudiante.codigo}')">Eliminar</button></td>
      </tr>
    `;
  });
}

// Función para actualizar la tabla de cursos
function actualizarTablaCursos() {
  const tabla = document.getElementById('listaCursos');
  tabla.innerHTML = `
    <tr>
      <th>Código</th>
      <th>Nombre</th>
      <th>Especialidad</th>
      <th>Duración</th>
      <th>Créditos</th>
      <th>Modificar</th>
      <th>Eliminar</th>
    </tr>
  `;
  cursos.forEach(curso => {
    tabla.innerHTML += `
      <tr>
        <td>${curso.codigo}</td>
        <td>${curso.nombre}</td>
        <td>${curso.especialidad}</td>
        <td>${curso.duracion}</td>
        <td>${curso.creditos}</td>
        <td><button onclick="modificarCurso('${curso.codigo}')">Modificar</button></td>
        <td><button onclick="eliminarCurso('${curso.codigo}')">Eliminar</button></td>
      </tr>
    `;
  });
}

// Función para actualizar la tabla de horarios
function actualizarTablaHorarios() {
  const tabla = document.getElementById('listaHorarios');
  tabla.innerHTML = `
    <tr>
      <th>Código del Curso</th>
      <th>Código del Estudiante</th>
      <th>Día</th>
      <th>Hora de Inicio</th>
      <th>Hora de Fin</th>
      <th>Modificar</th>
      <th>Eliminar</th>
    </tr>
  `;
  horarios.forEach(horario => {
    tabla.innerHTML += `
      <tr>
        <td>${horario.codigoCurso}</td>
        <td>${horario.codigoEstudiante}</td>
        <td>${horario.dia}</td>
        <td>${horario.horaInicio}</td>
        <td>${horario.horaFin}</td>
        <td><button onclick="modificarHorario('${horario.codigoCurso}')">Modificar</button></td>
        <td><button onclick="eliminarHorario('${horario.codigoCurso}')">Eliminar</button></td>
      </tr>
    `;
  });
}

// Event listeners para los formularios
document.getElementById('estFormulario').addEventListener('submit', function (e) {
  e.preventDefault();
  const codigo = document.getElementById('estCodigo').value;
  const nombre = document.getElementById('estNombre').value;
  const carrera = document.getElementById('estCarrera').value;
  const estudiante = new Estudiante(codigo, nombre, carrera);
  estudiantes.push(estudiante);
  console.log('Estudiante registrado:', estudiante);
  actualizarTablaEstudiantes(); // Actualizar la tabla de estudiantes
});

document.getElementById('cursoFormulario').addEventListener('submit', function (e) {
  e.preventDefault();
  const codigo = document.getElementById('cursoCodigo').value;
  const nombre = document.getElementById('cursoNombre').value;
  const especialidad = document.getElementById('cursoEspecialidad').value;
  const duracion = document.getElementById('cursoDuracion').value;
  const creditos = document.getElementById('cursoCreditos').value;
  const curso = new Curso(codigo, nombre, especialidad, duracion, creditos);
  cursos.push(curso);
  console.log('Curso registrado:', curso);
  actualizarTablaCursos(); // Actualizar la tabla de cursos
});

document.getElementById('horarioEstudianteCodigo').value;
  const dia = document.getElementById('horarioDia').value;
  const horaInicio = document.getElementById('horarioHoraInicio').value;
  const horaFin = document.getElementById('horarioHoraFin').value;
  const horario = new Horario(codigoCurso, codigoEstudiante, dia, horaInicio, horaFin);
  horarios.push(horario);
  console.log('Horario registrado:', horario);
  actualizarTablaHorarios(); // Actualizar la tabla de horarios
 ;

// Event listeners para los botones de modificación
function agregarBotonModificacion(id, modificar) {
  document.getElementById(id).addEventListener('click', function () {
    const codigo = prompt(`Ingrese el código a modificar:`);
    if (codigo) {
      modificar(codigo);
    }
  });
}

agregarBotonModificacion('modEstudianteButton', modificarEstudiante);
agregarBotonModificacion('modCursoButton', modificarCurso);
agregarBotonModificacion('modHorarioButton', modificarHorario);

// Event listeners para los botones de eliminación
function agregarBotonEliminacion(id, eliminar) {
  document.getElementById(id).addEventListener('click', function () {
    const codigo = prompt(`Ingrese el código a eliminar:`);
    if (codigo) {
      eliminar(codigo);
    }
  });
}

agregarBotonEliminacion('eliEstudianteButton', eliminarEstudiante);
agregarBotonEliminacion('eliCursoButton', eliminarCurso);
agregarBotonEliminacion('eliHorarioButton', eliminarHorario);

