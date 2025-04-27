import type { ReactNode } from "react";


export interface FAQItem {
  question: string;
  answer: ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "¿Cómo puedo hacer un pedido?",
    answer: (
      <>
        Hacer un pedido es fácil y rápido. Solo necesitas completar el formulario en nuestro sitio web con la siguiente información:
        <ul className="list-disc list-inside mt-2">
          <li>Nombre del jugador</li>
          <li>ID del juego</li>
          <li>Región o servidor (según el juego)</li>
          <li>Producto o servicio requerido</li>
        </ul>
        <p className="mt-2">
          Una vez completado, envíalo vía WhatsApp a <strong>+502 3885 0854</strong> para confirmar tu pedido.
        </p>
      </>
    ),
  },
  {
    question: "Formas de Pago y Comprobantes",
    answer: (
      <>
        Solo aceptamos las siguientes formas de pago:
        <ul className="list-disc list-inside mt-2">
          <li>Transferencias bancarias</li>
          <li>Depósitos</li>
          <li>ACH o CH</li>
        </ul>
        <p className="mt-2">
          <strong>Importante:</strong> El cliente debe enviar el comprobante de pago por WhatsApp al <strong>+502 3885 0854</strong> para procesar su pedido.
        </p>
        <p className="mt-2">
          El comprobante es obligatorio para confirmar que la transacción fue realizada correctamente. Si el cliente desea recibir un comprobante fiscal, puede solicitarlo vía WhatsApp.
        </p>
      </>
    ),
  },
  {
    question: "¿Cuánto tiempo tardará en procesarse mi pedido?",
    answer: (
      <>
        El tiempo de entrega estándar es de <strong>5 a 30 minutos</strong> después de confirmar el pago.
        <p className="mt-2">
          En casos excepcionales (alta demanda o mantenimiento), podría tardar hasta 24 horas. Te mantendremos informado en todo momento.
        </p>
      </>
    ),
  },
  {
    question: "¿Cómo puedo obtener un comprobante de pago?",
    answer: (
      <>
        El comprobante fiscal es opcional y se entrega solo si lo solicitas. Puedes pedirlo enviándonos un correo a <strong>sdepmone@gmail.com</strong> o escribiéndonos por WhatsApp.
      </>
    ),
  },
  {
    question: "¿Qué hago si tengo un problema con mi pedido?",
    answer: (
      <>
        Si tienes algún inconveniente, contáctanos inmediatamente vía WhatsApp al <strong>+502 3885 0854</strong> o por correo a <strong>sdepmone@gmail.com</strong>.
        <p className="mt-2">
          Nuestro equipo de soporte te ayudará a resolver cualquier problema lo más rápido posible.
        </p>
      </>
    ),
  },
  {
    question: "¿Cómo puedo contactar al soporte?",
    answer: (
      <>
        Puedes contactarnos de las siguientes maneras:
        <ul className="list-disc list-inside mt-2">
          <li>WhatsApp: +502 3885 0854</li>
          <li>Correo electrónico: sdepmone@gmail.com</li>
        </ul>
        <p className="mt-2">
          Horario de atención: <strong>Lunes a viernes de 9:00 a 18:00 (UTC-06:00)</strong>.
          Nuestro tiempo de respuesta máximo es de 12 horas hábiles.
        </p>
      </>
    ),
  },
];

export default faqData;
