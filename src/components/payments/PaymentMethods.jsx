import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";

const CopyField = ({ label, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Error al copiar:", error);
    }
  };

  return (
    <div className="mb-6">
      <p className="text-sm font-semibold text-primary mb-2">{label}</p>
      <div className="flex items-center gap-3">
        <Input value={value} readOnly className="bg-muted cursor-text" />
        <Button className="border-input bg-muted dark:bg-input/30" variant="outline" size="icon" onClick={handleCopy}>
          <Copy size={18} />
        </Button>
        {copied && <span className="text-green-500 text-xs">¡Copiado!</span>}
      </div>
    </div>
  );
};

const PaymentMethods = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-12">
      <Card className="archives bg-[var(--card-color)] text-[var(--text-color)] border-none rounded-3xl shadow-none overflow-hidden">
        <CardContent className="p-0">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 text-center">
            Pago Fácil y Seguro
          </h2>
          <p className="text-center text-[var(--text-color-lighten)] text-base md:text-lg mb-10">
            Elige la opción que mejor se adapte a tus necesidades y procede de manera rápida y segura:
          </p>

          {/* Opciones de pago */}
          <div className="flex flex-col gap-4">
            {/* Banco Industrial */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="/BancoBi.webp"
                alt="Banco Industrial"
                className="w-32 h-32 object-contain bg-[var(--background-color)] rounded-lg"
              />
              <div className="flex-1 w-full">
                <CopyField label="Banco Industrial (Ahorro)" value="1248509" />
              </div>
            </div>

            {/* Transferencia a terceros */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="/Transferenciaterceros.webp"
                alt="Cuenta de Terceros"
                className="w-32 h-32 object-contain bg-[var(--background-color)] rounded-lg"
              />
              <div className="flex-1 w-full">
                <CopyField label="Cuenta de Terceros - Banco Industrial" value="1248509" />
              </div>
            </div>

            {/* Zigi */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="/Zigi.webp"
                alt="Transferencias a Zigi"
                className="w-32 h-32 object-contain bg-[var(--background-color)] rounded-lg"
              />
              <div className="flex-1 w-full">
                <CopyField label="Zigi" value="38408010" />
              </div>
            </div>

          {/* Beneficiario */}
          <div className="flex flex-col md:flex-row items-center gap-8">
          <img
                src="/Beneficiario.webp"
                alt="Transferencias a Zigi"
                className="w-32 h-32 object-contain bg-[var(--background-color)] rounded-lg"
              />
            <div className="flex-1 w-full">
              <CopyField label="Beneficiario" value="Marvin Emilio Moran Xona" />
            </div>
          </div>

          </div>

          {/* Nota elegante */}
          <div className="mt-12 bg-muted p-6 rounded-2xl text-center">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Para agilizar el proceso de validación de tu compra, te recomendamos contar con tu comprobante o boleta de pago antes de finalizar el proceso. ¡Gracias por confiar en nosotros!
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentMethods;
