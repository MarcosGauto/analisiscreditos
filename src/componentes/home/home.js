import "./home.css"


const Home = () => {
    return(
        <div>
            <form class="form">
                <h1>Calificion creditica Grupo Nucleo S.A</h1>
                <div class="formdatos">
                    <h2>Informacion General</h2>
                    <div>
                        <label>Nombre del Cliente</label>
                            <input></input><br/>
                        <label>CUIT</label>
                            <input></input><br/>
                        <label>Localidad</label>
                            <input></input><br/>
                        <label>Sucursales</label>
                            <select></select><br/>
                        <label>Web</label>
                            <input></input><br/> 
                        <label>Score Nosis</label>
                            <input></input><br/>
                        <label>Riesgo estimado</label>
                            <input></input><br/>
                        <label>Antecedentes</label>
                            <textarea></textarea><br/>
                            <label>Observacion</label>
                            <textarea></textarea><br/>
                        <label>Condicion de venta</label>
                            <input></input><br/>
                            <label>Calificacion final</label>
                        <input></input>
                    </div>
                    <div>
                        <h2>Resumen indicadores</h2>
                            <label>Prom Ingresos bancarios</label>
                                <input></input><br/>
                            <label>Ventas Contables</label>
                                <input></input><br/>
                            <label>Ventas Iva</label>
                                <input></input><br/>
                            <label>Promedio</label>
                                <input></input> <br/>  
                            <label>Patrimonio bal o fiscal</label>
                                <input></input><br/>
                            <label>Prom Ref Bancarias</label>
                                <input></input><br/>
                            <label>Scoring 5Cs</label>
                                <input></input><br/>  
                            <label>Pre calificacion</label>
                                <input></input><br/>        
                    </div>
                        <div>
                            <h3>Modelo de Scoring 5 Cs</h3>
                            <div>
                                <h3>Resumen indicadores</h3>
                                <h3>Resumen indicadores</h3>
                                <h3>Resumen indicadores</h3>
                                <h3>Resumen indicadores</h3>
                                <h3>Resumen indicadores</h3>
                            </div>
                            <div>
                                <h3>Resumen indicadores</h3>
                            </div>
                            <div>
                                <h3>Resumen indicadores</h3>
                            </div>
                            <div>
                            <h3>Resumen indicadores</h3>
                            </div>
                            <div>
                            <h3>Resumen indicadores</h3>
                            </div>

                    </div>
                </div>



            </form>
        </div>
    )

}


export default Home