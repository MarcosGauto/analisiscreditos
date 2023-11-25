import React from 'react';
import "../modeloDeScoring/modeloDeScoring.css";
import Table from 'react-bootstrap/Table';


function ModeloDeScoring() {
    return (
        <>
            <div className='textForm'>
                <form className='textinfo'>
                    <div>
                        <label> Propiedades (Titularidad)</label>
                        <select>
                            <option></option>
                            <option>Propietario</option>
                            <option>Familiar</option>
                            <option>Alquilada</option>
                        </select>
                    </div>
                    <div>
                        <label> Tiempo del negocio</label>
                        <select>
                            <option></option>
                            <option>menos de 1 año</option>
                            <option>1 año a 5</option>
                            <option>más de 5 años</option>
                        </select>
                    </div>                  
                    <div>
                        <label> Puntuación Buró</label>
                        <select>
                            <option></option>
                            <option>0 a 100</option>
                            <option>101 a 500</option>
                            <option>mas de 501</option>
                        </select>
                    </div>
                    <div>
                        <label> Referencias comerciales</label>
                        <select>
                            <option></option>
                            <option>Buena</option>
                            <option>Regular</option>
                            <option>Mala</option>
                        </select>
                    </div>
                    <div>
                        <label> Solvencia (Endeudamiento actual)</label>
                        <select>
                            <option></option>
                            <option>0% a 40%</option>
                            <option>40,1% a 65%</option>
                            <option>65,1% en adelante</option>
                        </select>
                    </div>
                    <div>
                        <label> Patrimonio Neto</label>
                        <select>
                            <option></option>
                            <option>Hasta $150.000</option>
                            <option>De $150.000 a 500.000</option>
                            <option>Mayor a $500.000</option>
                        </select>
                    </div>

                    <div>
                        <label> Rentabilidad Neta mensual (en miles de pesos)</label>
                        <select>
                            <option></option>
                            <option>Utilidad neta menor a 30k</option>
                            <option>Utilidad neta entre 31 y 100</option>
                            <option>Utilidad neta mayor a 101</option>
                        </select>
                    </div>
                    <div>
                        <label> Ventas mensuales</label>
                        <select>
                            <option></option>
                            <option>Hasta $100.000</option>
                            <option>Entre $100.001 y $500.000</option>
                            <option>Mayores a $500.001</option>
                        </select>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ModeloDeScoring;