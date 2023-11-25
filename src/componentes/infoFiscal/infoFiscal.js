import React from 'react'
import "../infoFiscal/infoFiscal.css"

const InfoFiscal = () => {
    return (
    <>
        <div className='textForm'>
            <form className='textinfo'>
                <div>
                    <label> Razon Social</label>
                    <input type="text"/>
                </div>
                <div>
                    <label> Score Nosis</label>
                    <input type="text"/>
                </div>
                <div>
                    <label> Localidad</label>
                    <input type="text"/>
                </div>
                <div>
                    <label> Sucursales</label>
                    <input type="text"/>
                </div>
                <div>
                    <label> Riesgo estimado</label>
                    <input type="text"/>
                </div>
                <div>
                    <label> Tipo de empresa</label>
                    <select type="text"/>
                </div>
            </form>
        </div>
    </>
  )
}

export default InfoFiscal;