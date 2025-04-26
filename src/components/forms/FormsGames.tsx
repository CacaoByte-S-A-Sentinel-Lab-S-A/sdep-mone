"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import { FormsGames } from "@/Models/forms/FormsGames";

// Definimos el esquema
const formSchema = z.object({
  name_1110064419: z.string().min(2).max(20), 
  name_2435070634: z.string().min(1),         
  name_9680451077: z.string().min(1),         
  name_5232852522: z.string().min(0),        
  name_4833852072: z.string().min(0),        
  name_1930221828: z.boolean(),               
});



type FormFields = keyof z.infer<typeof formSchema>;

interface MyFormProps {
  gameName: string;
  coinAmount: string;
}

export default function FormsGamesWhatsApp({ gameName, coinAmount }: MyFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: FormsGames.reduce((acc, field) => {
      if (field.name === "name_1110064419") {
        acc[field.name as FormFields] = gameName;
      } else if (field.name === "name_2435070634") {
        acc[field.name as FormFields] = coinAmount.toString(); 
      } else {
        acc[field.name as FormFields] = field.variant === "Checkbox" ? false : "";
      }
      return acc;
    }, {} as any),          
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (!values.name_1930221828) {
        toast.error("Debes aceptar los términos y condiciones antes de enviar el formulario.");
        return; 
      }
  
      const juego = values.name_1110064419;
      const monedas = values.name_2435070634;
      const idCuenta = values.name_9680451077;
      const region = values.name_5232852522;
      const servidor = values.name_4833852072; // <-- Nuevo
  
      const mensaje = `¡Hola SdeepMone! 👋\n\nQuisiera solicitar una recarga de ${monedas} monedas para el juego "${juego}".\n\nLos detalles de mi cuenta son los siguientes:\n- ID de cuenta: ${idCuenta}\n- Región: ${region}\n- Servidor: ${servidor}\n\nQuedo atento(a) para completar el proceso. ¡Muchas gracias! 🙌`;
  
      const numeroWhatsApp = "50238349425"; 
      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
  
      window.open(url, "_blank");
      console.log(values);
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }
  
  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">

      {FormsGames.map((field) => {
          // Lógica para ocultar campos según el juego seleccionado
          if (field.name === "name_5232852522" && 
              !["zenless-zone-zero", "honkai-start-rail", "genshin-impact"].includes(gameName)) {
            return null;
          }

          if (field.name === "name_4833852072" && 
              gameName !== "mobile-legends") {
            return null;
          }

          return (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name as FormFields}
              render={({ field: innerField }) => (
                <FormItem
                  className={field.variant === "Checkbox" ? "flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4" : ""}
                >
                  <FormControl>
                    {field.variant === "Input" ? (
                      <Input
                        type={field.type || "text"}
                        placeholder={field.placeholder}
                        {...innerField}
                        value={innerField.value as string | number | undefined}
                        onChange={innerField.onChange}
                        readOnly={
                          field.name === "name_1110064419" || field.name === "name_2435070634"
                        } 
                      />
                    ) : field.variant === "Checkbox" ? (
                      <Checkbox
                        checked={innerField.value === true}
                        onCheckedChange={(checked) => innerField.onChange(checked)}
                      />
                    ) : null}
                  </FormControl>

                  <div className={field.variant === "Checkbox" ? "space-y-1 leading-none" : ""}>
                    <FormLabel>{field.label}</FormLabel>
                    <FormDescription>{field.description}</FormDescription>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          );
        })}



        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
