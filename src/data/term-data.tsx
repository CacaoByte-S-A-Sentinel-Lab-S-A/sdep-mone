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
        Declaro que he leído y acepto de manera voluntaria los Términos y Condiciones que regulan el uso de esta plataforma, incluyendo el tratamiento y resguardo de los datos personales solicitados, así como las políticas, condiciones y limitaciones aplicables a los métodos de pago disponibles para realizar la compra.
        <br /><br />
        Entiendo que es mi responsabilidad revisar esta información antes de completar cualquier transacción.
      </>
    ),
  },
  {
    question: "Entrega de Comprobante de Pago",
    answer: (
      <>
        Una vez realizado el pago, el cliente deberá enviar una boleta o comprobante por WhatsApp como verificación.
        <br /><br />
        El comprobante fiscal es opcional y puede solicitarse vía correo electrónico: <strong>sdepmone@gmail.com</strong>.
        <br /><br />
        Teléfono oficial de atención: <strong>+502 3885 0854</strong>.
      </>
    ),
  }
];

export default termData;
