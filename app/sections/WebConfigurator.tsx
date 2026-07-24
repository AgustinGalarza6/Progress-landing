"use client";

import { useState } from "react";
import { ArrowRight, Check, Globe, Server, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "5491138923268";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const PLAN_TIER: Record<string, string> = {
  silver: "Plan Base",
  gold: "Crecimiento",
  platinum: "Empresarial",
};

const WEB_PLANS = [
  {
    id: "silver",
    name: "WEB PLAN SILVER",
    price: 270,
    features: ["Landing page profesional", "Diseño responsivo y moderno", "Hasta 3 cuentas de email corporativo"],
  },
  {
    id: "gold",
    name: "WEB PLAN GOLD",
    price: 380,
    features: ["Página web de hasta 3 secciones navegables", "Diseño responsivo y moderno", "Hasta 5 cuentas de email corporativo"],
  },
  {
    id: "platinum",
    name: "WEB PLAN PLATINUM + PIL CLOUD",
    price: 600,
    features: ["Página web de hasta 5 secciones navegables", "Diseño responsivo y moderno", "Incluye PIL Cloud + 1 TB de almacenamiento para backups"],
  },
] as const;

const ADD_ONS = [
  {
    id: "domain",
    name: "Gestión de Dominio",
    price: 20,
    description: "Registro y gestión de dominio (.com / .com.ar / .ar)",
    icon: Globe,
  },
  {
    id: "hosting",
    name: "Hosting Corporativo",
    price: 199,
    description: "Alojamiento en servidores de alto rendimiento",
    icon: Server,
  },
  {
    id: "ssl",
    name: "Certificado SSL",
    price: 20,
    description: "Seguridad SSL para transacciones seguras",
    icon: ShieldCheck,
  },
] as const;

function formatPlanName(name: string) {
  return name.replace("WEB PLAN ", "");
}

function ToggleSwitch({
  checked,
  label,
  onChange,
}: {
  checked: boolean;
  label: string;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className="inline-flex min-h-11 min-w-12 touch-manipulation items-center justify-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B9FF0]"
    >
      <span
        className={cn(
          "relative h-6 w-11 rounded-full border transition-[background-color,border-color] duration-200",
          checked ? "border-[#6B9FF0] bg-[#6B9FF0]" : "border-white/20 bg-black/40",
        )}
      >
        <span
          className={cn(
            "absolute left-0.5 top-0.5 size-[18px] rounded-full bg-white transition-transform duration-200",
            checked && "translate-x-5 bg-[#050609]",
          )}
        />
      </span>
    </button>
  );
}

export default function WebConfigurator() {
  const [selectedPlan, setSelectedPlan] = useState<string>("gold");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const currentPlan = WEB_PLANS.find((plan) => plan.id === selectedPlan);
  const basePlanPrice = currentPlan?.price ?? 0;
  const addOnsTotal = selectedAddOns.reduce(
    (total, id) => total + (ADD_ONS.find((addOn) => addOn.id === id)?.price ?? 0),
    0,
  );
  const totalPrice = basePlanPrice + addOnsTotal;

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  const handleFinishOrder = () => {
    const planName = currentPlan?.name ?? "Plan no seleccionado";
    const addOnsDetail = selectedAddOns
      .map((id) => {
        const addOn = ADD_ONS.find((item) => item.id === id);
        return `   • ${addOn?.name}: +USD ${addOn?.price}`;
      })
      .join("\n");

    const message = `*SOLICITUD DE DESARROLLO WEB - PROGRESS IN LINE*\n\n*Plan:* ${planName}\n*Total:* USD ${totalPrice}\n\nServicios Adicionales:\n${addOnsDetail}`;
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="desarrollo-web"
      className="scroll-mt-[72px] overflow-hidden bg-black px-4 py-16 text-white md:py-24 xl:scroll-mt-[80px]"
      aria-labelledby="planes-title"
    >
      <div className="mx-auto max-w-7xl">
        <header className="grid gap-7 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-8">
            <p className="mb-5 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
              <span className="h-px w-8 bg-[#6B9FF0]" aria-hidden="true" />
              Planes y adicionales
            </p>
            <h2
              id="planes-title"
              className="max-w-2xl text-[34px] font-normal leading-tight text-white md:text-5xl"
            >
              Elegí una base para tu próxima web
            </h2>
          </div>
          <p className="max-w-lg text-base font-light leading-relaxed text-gray-400 sm:text-lg lg:col-span-4 lg:pb-1">
            ¿Tu web anda lenta o su diseño quedó en el tiempo? Tenemos una solución para vos.
          </p>
        </header>

        <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-12 lg:items-start">
          <div className="space-y-5 lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {WEB_PLANS.map((plan) => {
                const isSelected = selectedPlan === plan.id;
                const isPopular = plan.id === "gold";
                const planName = formatPlanName(plan.name);

                return (
                  <button
                    key={plan.id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={cn(
                      "relative flex min-h-[22rem] flex-col rounded-lg border p-6 text-left transition-[background-color,border-color,box-shadow] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B9FF0]",
                      isSelected
                        ? "border-[#6B9FF0]/70 bg-[#101624] shadow-[0_20px_60px_rgba(107,159,240,0.1)]"
                        : "border-white/[0.1] bg-[#0b0e14] hover:border-white/20 hover:bg-[#10141c]",
                    )}
                  >
                    <div className="flex min-h-8 items-start justify-between gap-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6B9FF0]">
                        {PLAN_TIER[plan.id]}
                      </p>
                      {isPopular ? (
                        <span className="rounded-md border border-white/15 bg-white/[0.04] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-white/65">
                          Más popular
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mt-8 break-words text-2xl font-medium leading-tight text-white md:text-3xl">
                      {planName}
                    </h3>
                    <p className="mt-7 text-4xl font-medium leading-none text-white">
                      ${plan.price}
                      <span className="ml-2 text-xs font-semibold uppercase tracking-[0.08em] text-white/45">
                        USD
                      </span>
                    </p>

                    <ul className="mt-auto space-y-3 pt-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-xs font-light leading-relaxed text-white/60">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#6B9FF0]" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </button>
                );
              })}
            </div>

            <div className="overflow-hidden rounded-lg border border-[#6B9FF0]/30 bg-[#101624]">
              <h3 className="px-6 py-5 text-lg font-medium text-white sm:px-7 sm:text-xl">
                Servicios adicionales
              </h3>
              {ADD_ONS.map((addOn) => {
                const isEnabled = selectedAddOns.includes(addOn.id);
                return (
                  <div
                    key={addOn.id}
                    className="grid gap-4 border-t border-white/[0.08] px-6 py-5 sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:gap-5 sm:px-7"
                  >
                    <div className="flex size-11 items-center justify-center rounded-md border border-[#6B9FF0]/25 bg-[#6B9FF0]/10 text-[#6B9FF0]">
                      <addOn.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{addOn.name}</p>
                      <p className="mt-1 text-xs font-light leading-relaxed text-white/50">{addOn.description}</p>
                    </div>
                    <div className="flex items-center justify-between gap-5 sm:justify-end">
                      <span className="text-xs font-medium text-white/72">
                        ${addOn.price.toLocaleString("en-US")} USD
                      </span>
                      <ToggleSwitch
                        checked={isEnabled}
                        label={`${isEnabled ? "Quitar" : "Agregar"} ${addOn.name}`}
                        onChange={() => toggleAddOn(addOn.id)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <aside
            className="rounded-lg border border-[#6B9FF0]/35 bg-[linear-gradient(145deg,rgba(107,159,240,0.13),rgba(17,20,27,0.98)_45%)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.25)] sm:p-8 lg:sticky lg:top-24 lg:col-span-4"
            aria-label="Resumen de la consulta"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6B9FF0]">
              Resumen de la consulta
            </p>
            <h3 className="mt-5 break-words text-2xl font-medium leading-tight text-white md:text-3xl">
              {currentPlan ? formatPlanName(currentPlan.name) : "Plan"}
            </h3>

            <dl className="mt-8 divide-y divide-white/10 border-y border-white/10">
              <div className="flex items-center justify-between gap-5 py-4">
                <dt className="text-sm font-light text-white/50">Plan seleccionado</dt>
                <dd className="text-sm font-medium text-white">${basePlanPrice.toLocaleString("en-US")} USD</dd>
              </div>
              {selectedAddOns.map((id) => {
                const addOn = ADD_ONS.find((item) => item.id === id);
                return (
                  <div key={id} className="flex items-center justify-between gap-5 py-4">
                    <dt className="text-sm font-light text-white/50">{addOn?.name}</dt>
                    <dd className="text-sm font-medium text-white">+${addOn?.price.toLocaleString("en-US")} USD</dd>
                  </div>
                );
              })}
            </dl>

            <div className="mt-8">
              <p className="text-sm font-light text-white/50">Total estimado</p>
              <p className="mt-2 text-3xl font-semibold leading-none text-white md:text-4xl">
                ${totalPrice.toLocaleString("en-US")}
                <span className="ml-2 text-xs font-semibold uppercase tracking-[0.08em]">USD</span>
              </p>
              <p className="mt-4 text-xs font-light leading-relaxed text-white/40">
                Cotización en pesos a valor BNA del día de pago. Consultar cotización exacta antes de contratar.
              </p>
            </div>

            <button
              type="button"
              onClick={handleFinishOrder}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-semibold text-black transition-colors duration-200 hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.99]"
            >
              Consultar por mi web
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
