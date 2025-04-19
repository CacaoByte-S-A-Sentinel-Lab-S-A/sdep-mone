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

// 1. Definimos el esquema (manual aún)
const formSchema = z.object({
  name_1110064419: z.string().min(2).max(20),
  name_2435070634: z.coerce.number().min(1),
  name_9680451077: z.string().min(1),
  name_5232852522: z.string().min(0),
  name_1930221828: z.boolean(),
});

// 2. Tipo de campos válidos
type FormFields = keyof z.infer<typeof formSchema>;

export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: FormsGames.reduce((acc, field) => {
      acc[field.name as FormFields] = field.variant === "Checkbox" ? false : "";
      return acc;
    }, {} as any),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">

        {FormsGames.map((field) => (
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
                      value={innerField.value as string | number | undefined} // <- aquí casteamos
                      onChange={innerField.onChange}
                    />
                  ) : field.variant === "Checkbox" ? (
                    <Checkbox
                      checked={!!innerField.value} // <- forzamos a booleano
                      onCheckedChange={innerField.onChange}
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
        ))}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
