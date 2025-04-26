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
    <div className="mb-4">
      <p className="text-sm text-muted-foreground mb-1 font-medium">{label}</p>
      <div className="flex items-center space-x-2">
        <Input value={value} readOnly className="bg-muted cursor-text" />
        <Button variant="outline" size="icon" onClick={handleCopy}>
          <Copy size={18} />
        </Button>
        {copied && <span className="text-green-500 text-xs">Copiado</span>}
      </div>
    </div>
  );
};

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
          <div className="flex justify-center mb-6">
            <img
              src="/payments.png"
              alt="Métodos de pago: depósito bancario, transferencias, Zigi"
              className="rounded-xl shadow-md w-full max-w-2xl object-contain"
            />
          </div>

         
          {/* Campos de pago */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CopyField label="Zigi" value="38408010" />
            <CopyField label="Banco Industrial (Ahorro)" value="1248509" />
            <div className="md:col-span-2 flex justify-center">
              <div className="w-full md:w-1/2">
                <CopyField label="Beneficiario" value="Marvin Emilio Moran Xona" />
              </div>
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentMethods;
