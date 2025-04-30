import type { ReactNode } from "react";

export interface TERMItem {
  question: string;
  answer: ReactNode;
}

const termData: TERMItem[] = [
  {
    question: "Términos y Condiciones de la Plataforma",
    answer: (
      <>
        Al utilizar los servicios de SdepMone, aceptas cumplir con estos Términos y Condiciones en su totalidad. Este documento tiene como objetivo proteger tanto al cliente como al proveedor del servicio. Si no estás de acuerdo con alguno de los puntos establecidos, te pedimos no continuar con el uso del sitio ni enviar ninguna solicitud o pago.
      </>
    ),
  },
  {
    question: "Uso del Sitio Web",
    answer: (
      <>
        SdepMone funciona como una plataforma ágil y directa, sin necesidad de registro de cuenta. El usuario únicamente debe llenar un formulario proporcionando:
        <br /><br />
        • Nombre del jugador
        <br /><br />
        • ID del juego
        <br /><br />
        Región o servidor (según el juego)
        <br /><br />
        • Producto o servicio solicitado
        <br /><br />
        • Cantidad de productos o servicios
        <br /><br />
        Una vez completado, el formulario debe enviarse por WhatsApp para proceder con la confirmación del pedido. Es responsabilidad del cliente verificar que los datos enviados estén correctos.
      </>
    ),
  },
  {
    question: "Formas de Pago y Comprobantes",
    answer: (
      <>
        Aceptamos únicamente:
        <br /><br />
        • Transferencias bancarias
        <br /><br />
        • Depósitos
        <br /><br />
        • ACH o CH
        <br /><br />
        Una vez realizado el pago, el cliente deberá enviar una boleta o comprobante por WhatsApp como verificación. El comprobante fiscal es opcional puede solicitarse vía correo: sdepmone@gmail.com.
        Teléfono oficial de atención: +502 3885 0854.

      </>
    ), 
  },
  {
    question: "Entrega y Confirmación",
    answer: (
      <>
        El tiempo de entrega habitual es de 5 a 30 minutos después de validar el pago. En circunstancias especiales (alta demanda, mantenimiento, etc.), puede demorar hasta 24 horas. Se notificará cualquier retraso con anticipación.
      </>
    ), 
  },
  {
    question: "Política de Reembolsos y Cancelaciones",
    answer: (
      <>
        Los reembolsos solo aplican si el error es por parte de SdepMone o sus proveedores. Si el cliente proporcionó datos erróneos o incompletos, no se hará devolución alguna. Es fundamental revisar los datos antes de confirmar el envío del formulario.
      </>
    ), 
  },
  {
    question: "Exención de Responsabilidad",
    answer: (
      <>
        SdepMone no se hace responsable por compras realizadas por intermediarios, terceros o personas no autorizadas. Si el cliente no realiza su pedido de forma directa y sufre una estafa, SdepMone no asumirá ninguna responsabilidad.
Recomendamos firmemente que cada cliente esté presente y realice su compra directamente desde el sitio oficial para evitar cualquier malentendido o fraude.
      </>
    ), 
  },
  {
    question: "Contacto y Soporte",
    answer: (
      <>
        • Correo: sdepmone@gmail.com
        <br /><br />
        • WhatsApp: +502 3885 0854
        <br /><br />
        • Horario de atención: Lunes a viernes de 9:00 a 18:00 (UTC-06:00)
        <br /><br />
        • Tiempo máximo de respuesta: 12 horas hábiles
      </>
    ), 
  }
];

export default termData;
