import { Card, CardContent } from "@/components/ui/card";

const PaymentMethods = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-10">
      <Card className="bg-[var(--card-color)] text-[var(--text-color)] border-none shadow-lg rounded-3xl overflow-hidden">
        <CardContent className="p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            Pago Fácil y Seguro
          </h2>
          <p className="text-[var(--text-color-lighten)] mb-6 text-sm md:text-base">
            Ofrecemos diversas opciones para que puedas elegir la forma que más te convenga:
          </p>
          <div className="flex justify-center">
            <img
              src="/payments.png"
              alt="Métodos de pago: depósito bancario, transferencias, Zigi, tarjetas y PayPal"
              className="rounded-xl shadow-md w-full max-w-2xl object-contain"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentMethods;
