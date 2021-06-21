function Consultorio(nombre, paciente) {
  this.nombre = nombre;
  this.paciente = paciente || [];
}

function Paciente(nombre, edad, rut, diagnostico) {
  this.nombre = nombre;
  this.edad = edad;
  this.rut = rut;
  this.diagnostico = diagnostico;
}

Consultorio.prototype.setAgregarPaciente = function (paciente_nuevo) {
  this.paciente.push(paciente_nuevo);
};

/* var paciente1 = new Paciente("Javiera", 15, "22166427-2", "Anemia");
var paciente2 = new Paciente("Sofía", 49, "11931016-4", "Diabetes");

var consultorio1 = new Consultorio("Consultorio N°1", [paciente1, paciente2]);
console.log(consultorio1);

var paciente3 = new Paciente("Luis", 24, "19325687-2", "Alergia");
consultorio1.setAgregarPaciente(paciente3); */

paciente1 = new Paciente("Javiera", 15, "22166427-2", "Anemia");
paciente2 = new Paciente("Sofía", 49, "11931016-4", "Diabetes");
paciente3 = new Paciente("Luis", 24, "19325687-2", "Alergia");



/* GETTERS & SETTERS*/

/* PACIENTES */

function Paciente(nombre, edad, rut, diagnostico) {
  var _nombre = nombre;
  var _edad = edad;
  var _rut = rut;
  var _diagnostico = diagnostico;

  Object.defineProperty(this, "_getNombre", {
    get: function () {
      return _nombre;
    },
  });

  Object.defineProperty(this, "_setNombre", {
    set: function (nombre) {
      _nombre = nombre;
    },
  });

  Object.defineProperty(this, "_getEdad", {
    get: function () {
      return _edad;
    },
  });

  Object.defineProperty(this, "_setEdad", {
    set: function (edad) {
      _edad = edad;
    },
  });

  Object.defineProperty(this, "_geRut", {
    get: function () {
      return _rut;
    },
  });

  Object.defineProperty(this, "_setRut", {
    set: function (rut) {
      _rut = rut;
    },
  });

  Object.defineProperty(this, "_getDiagnostico", {
    get: function () {
      return _diagnostico;
    },
  });

  Object.defineProperty(this, "_setDiagnostico", {
    set: function (diagnostico) {
      _diagnostico = diagnostico;
    },
  });
}

/* MODIFICAR NOMBRE */
Paciente.prototype.getNombre = function () {
  return this._getNombre;
};
Paciente.prototype.setNombre = function (nombre) {
  this._setNombre = nombre;
};

/* MODIFICAR EDAD */
Paciente.prototype.getEdad = function () {
  return this._getEdad;
};
Paciente.prototype.setEdad = function (edad) {
  this._setEdad = edad;
};

/* MODIFICAR RUT */
Paciente.prototype.getRut = function () {
  return this._getRut;
};
Paciente.prototype.setRut = function (rut) {
  this._setRut = rut;
};

/* MODIFICAR DIAGNOSTICO */
Paciente.prototype.getDiagnostico = function () {
  return this._getDiagnostico;
};
Paciente.prototype.setDiagnostico = function (diagnostico) {
  this._setDiagnostico = diagnostico;
};


/* CONSULTORIO */
function Consultorio(nombre, paciente) {
  var _nombre = nombre;
  var _paciente = paciente;

  Object.defineProperty(this, "_getNombre", {
    get: function () {
      return _nombre;
    },
  });

  Object.defineProperty(this, "_setNombre", {
    set: function (nombre) {
      _nombre = nombre;
    },
  });

  Object.defineProperty(this, "_getPaciente", {
    get: function () {
      return _paciente;
    },
  });

  Object.defineProperty(this, "_setPaciente", {
    set: function (paciente) {
      _paciente = paciente;
    },
  });
}


/* CAMBIO DE NOMBRE Y EDAD PACIENTE1*/
console.log(paciente1.getNombre());
console.log(paciente1.getEdad());

paciente1.setNombre("María");
paciente1.setEdad(99);

console.log(paciente1.getNombre());
console.log(paciente1.getEdad());
