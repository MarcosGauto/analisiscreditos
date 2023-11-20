import React from 'react';
import "../modeloDeScoring/modeloDeScoring.css";
import Table from 'react-bootstrap/Table';


function ModeloDeScoring() {
    return (
        <Table striped bordered hover size="sm" className='tableClass'>
            <thead className='textinfo'>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Propiedades</td>
                    <td>Titularidad</td>
                    <select>
                        <option></option>
                        <option>Propietario</option>
                        <option>Familiar</option>
                        <option>Alquilada</option>
                    </select>
                </tr>
                <tr>
                    <td>Negocio</td>
                    <td>Tiempo de negocio</td>
                    <select>
                        <option></option>
                        <option>menos de 1 año</option>
                        <option>1 año a 5</option>
                        <option>más de 5 años</option>
                    </select>
                </tr>
                <tr>
                    <td>Credit Report</td>
                    <td>Puntuacion Buró</td>
                    <select>
                        <option></option>
                        <option>0 a 100</option>
                        <option>101 a 500</option>
                        <option>mas de 501</option>
                    </select>
                </tr>
                <tr>
                    <td>Solvencia</td>
                    <td>Endeudamiento actual</td>
                    <select>
                        <option></option>
                        <option>0% a 40%</option>
                        <option>40,1% a 65%</option>
                        <option>65,1% en adelante</option>
                    </select>
                </tr>
                <tr>
                    <td>Patrimonio Neto</td>
                    <td>Patrimonio </td>
                    <select>
                        <option></option>
                        <option>Hasta $150.000</option>
                        <option>De $150.000 a 500.000</option>
                        <option>Mayor a $500.000</option>
                    </select>
                </tr>
                <tr>
                    <td>Rentabilidad Neta</td>
                    <td>Rentabilidad Mensual</td>
                    <select>
                        <option></option>
                        <option>Utilidad neta menor a 30k</option>
                        <option>Utilidad neta entre 31 y 100</option>
                        <option>Utilidad neta mayor a 101</option>
                    </select>
                </tr>
                <tr>
                    <td>Ingresos Bancarios</td>
                    <td>Ingresos Bancarios</td>
                    <select>
                        <option></option>
                        <option>Hasta  $70.000</option>
                        <option>Entre $70.001 y $150.000</option>
                        <option>Mayores a $150.000</option>
                    </select>
                </tr>
                <tr>
                    <td>Ventas mensuales</td>
                    <td>Ventas mensuales</td>
                    <select>
                        <option></option>
                        <option>Hasta $100.000</option>
                        <option>Entre $100.001 y $500.000</option>
                        <option>Mayores a $500.001</option>
                    </select>
                </tr>
                <tr>
                    <td>Rentabilidad Neta</td>
                    <td>Rentabilidad Mensual</td>
                    <div >
                    <select>
                        <option></option>
                        <option>Utilidad neta menor a 30k</option>
                        <option>Utilidad neta entre 31 y 100</option>
                        <option>Utilidad neta mayor a 101</option>
                    </select>
                    </div>
                </tr>
            </tbody>
        </Table>
    );
}

export default ModeloDeScoring;