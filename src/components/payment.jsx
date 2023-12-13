import React, { useState } from 'react';
import { initMercadoPago, CardPayment  } from '@mercadopago/sdk-react';

initMercadoPago('TEST-085e5a8c-5bde-4e9f-b786-09fb68ee66dd', {locale: 'es-CL'});

function MeliPayment() {

  const [isPayedAlready, setPayed] = useState(false);
  const [isError, setError] = useState(false);

  if (!isPayedAlready && !isError) {
    return (
        <CardPayment
          initialization={{ amount: 100}}
          onSubmit={async (param) => {
            let paymentPending = await fetch("http://localhost:4000/process_payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(param)
            });
            let serverResponse = await paymentPending.json();
            console.log(serverResponse)
            if (serverResponse === 'approved') { setPayed(true); }
            else { setError(true) }
          }}
        />
    );
  } else if (isPayedAlready) {
    return (
        <div>
            El pago fue realizado con éxito
        </div>
    );
  }
  else {
    return (
        <div>
            Hubo un error. Ningún cobro fue hecho. Recarga la página e intentalo nuevamente.
        </div>
    )
  }
  
}

export default MeliPayment;
