
import { Alumno } from './Alumno';

let na= new Alumno();

na.agregar("14400990","Carlos","Puga Flores",90,"H","1996",true);

na.agregar("14400991","Dylan Salvador","Parra Dominguez",100,"H","1995",false);

na.actualizar("14400990","Carlos","Puga",100,"H","1996",true);

na.borrar("14400990")