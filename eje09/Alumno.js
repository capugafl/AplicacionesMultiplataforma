"use strict";
exports.__esModule = true;
var Alumno = /** @class */ (function () {
    function Alumno() {
        this.arreglo = Array();
    }
    Alumno.prototype.agregar = function (ncontrol, nombre, apellido, promedio, genero, fecha, activo) {
        var nal;
        nal = { nctrl: ncontrol,
            nombre: nombre,
            apellidos: apellido,
            promedio: promedio,
            genero: genero,
            f_nac: fecha,
            activo: activo };
        this.arreglo.push(nal);
        this.imprimir();
    };
    Alumno.prototype.borrar = function (nc) {
        for (var i = 0; i < this.arreglo.length; i++) {
            if (this.arreglo[i].nctrl == nc) {
                this.arreglo.splice(i, 1);
            }
        }
        this.imprimir();
    };
    Alumno.prototype.actualizar = function (nc, n, a, p, g, f, ac) {
        var nal;
        nal = { nctrl: nc,
            nombre: n,
            apellidos: a,
            promedio: p,
            genero: g,
            f_nac: f,
            activo: ac };
        for (var i = 0; i < this.arreglo.length; i++) {
            if (this.arreglo[i].nctrl == nc) {
                this.arreglo[i] = nal;
            }
        }
        this.imprimir();
    };
    Alumno.prototype.imprimir = function () {
        for (var i = 0; i < this.arreglo.length; i++) {
            console.log(this.arreglo[i]);
        }
    };
    return Alumno;
}());
exports.Alumno = Alumno;
