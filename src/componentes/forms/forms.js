import "../forms/forms.css"
import React, { useState } from 'react';
import Stepper from 'react-stepper-horizontal';

function UserDetails() {
    return <h2>Informacion General</h2>;
}

function Scoring() {
    return <h2>Modelo de Scoring 5 Cs</h2>;
}

function BankInformation() {
    return <h2>Informacion Bancaria</h2>;
}

function TaxInformation() {
    return <h2>Informacion Fiscal</h2>;
}
function AccountingInformation() {
    return <h2>Informacion Contable</h2>;
}

function Confirmation() {
    return <h2>Booking is confird</h2>;
}

function Forms() {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        { title: 'Informacion General' },
        { title: 'Modelo de Scoring 5 Cs' },
        { title: 'Informacion Bancaria' },
        { title: 'Informacion Fiscal' },
        { title: 'Informacion Contable' },
        { title: 'Booking confirmation' },
    ];

    function getSectionComponent() {
        switch (activeStep) {
            case 0: return <UserDetails />;
            case 1: return <Scoring />;
            case 2: return <BankInformation />;
            case 3: return <TaxInformation />;
            case 4: return <AccountingInformation />;
            case 5: return <Confirmation />;
            default: return null;
        }
    }

    return (
        <div>
            <div className="name-section">
            <p className="name-gn">Grupo Nucleo </p>
            <p className="name-analist">Analisis Crediticio </p> 
            </div>

        <div>
            <Stepper
                steps={steps}
                activeStep={activeStep} />
            <div style={{ padding: '20px' }}>
                {getSectionComponent()}
                {(activeStep !== 0 && activeStep !== steps.length - 1)
                    && <button onClick={() => setActiveStep(activeStep - 1)}>Previous</button>
                }
                {activeStep !== steps.length - 1
                    && <button onClick={() => setActiveStep(activeStep + 1)}>Next</button>
                }
            </div>
        </div>
        <div>
            <form>
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
                    <input type="text"/>
                </div>
                <div>
                    <label> Razon Social</label>
                    <input type="text"/>
                </div>
            </form>
        </div>
    </div>
    );
}

export default Forms;