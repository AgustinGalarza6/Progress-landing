"use client";

import { useState, useMemo, useEffect } from "react";
import { Check, Globe, Server, ShieldCheck, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "5491138923268";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const FALLBACK_EXCHANGE_RATE = 1000;

const PLAN_TIER: Record<string, string> = {
  silver: "Plan Base",
  gold: "Crecimiento",
  platinum: "Empresarial",
};

const PRIMARY = "#6B9FF0";
const SECONDARY = "#4A7EDF";

const WEB_PLANS = [
  { id: "silver", name: "WEB PLAN SILVER", price: 270, features: ["Landing Page profesional", "Diseño responsivo + moderno", "Hasta 3 cuentas de email coorporativos"] },
  { id: "gold", name: "WEB PLAN GOLD", price: 380, features: ["Página web hasta 3 secciones navegables", "Diseño responsivo + moderno", "Hasta 5 cuentas de email coorporativos"] },
  { id: "platinum", name: "WEB PLAN PLATINUM + PIL CLOUD", price: 600, features: ["Página web hasta 5 secciones navegables", "Diseño responsivo + moderno", "Incluye PIL Cloud + 1TB almacenamiento de backups"] },
];

const ADD_ONS = [
  { id: "domain", name: "Gestión de Dominio", price: 20, description: "Registro y gestión de dominio (.com / .com.ar / .ar)" },
  { id: "hosting", name: "Hosting Corporativo", price: 199, description: "Alojamiento en servidores de alto rendimiento" },
  { id: "ssl", name: "Certificado SSL", price: 20, description: "Seguridad SSL para transacciones seguras" },
];

function ToggleSwitch({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 transition-colors duration-200 focus:outline-none
        ${checked ? `bg-[${PRIMARY}] border-blue-700` : "bg-gray-200 dark:bg-[#232b3b] border-gray-300 dark:border-[#232b3b]"}
      `}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full shadow transition duration-200
          ${checked ? "bg-white dark:bg-blue-200" : "bg-gray-400 dark:bg-gray-600"}
          ${checked ? "translate-x-5" : "translate-x-0"}
        `}
      />
    </button>
  );
}

export default function WebConfigurator() {
  const [selectedPlan, setSelectedPlan] = useState<string>("gold");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [exchangeRate, setExchangeRate] = useState<number>(FALLBACK_EXCHANGE_RATE);
  const [loadingExchange, setLoadingExchange] = useState<boolean>(true);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch("/api/bna-rate", { cache: "no-store" });
        if (response.ok) {
          const data = await response.json();
          if (data.sell) setExchangeRate(data.sell);
        }
      } catch {
        console.log("No se pudo obtener el tipo de cambio BNA actual");
      } finally {
        setLoadingExchange(false);
      }
    };
    fetchExchangeRate();
    const intervalId = window.setInterval(fetchExchangeRate, 15 * 60 * 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  const basePlanPrice = useMemo(() => WEB_PLANS.find((p) => p.id === selectedPlan)?.price ?? 0, [selectedPlan]);

  const addOnsTotal = useMemo(() => selectedAddOns.reduce((acc, id) => acc + (ADD_ONS.find((a) => a.id === id)?.price ?? 0), 0), [selectedAddOns]);

  const totalPrice = basePlanPrice + addOnsTotal;

  const toggleAddOn = (id: string) => setSelectedAddOns((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const currentPlan = WEB_PLANS.find((p) => p.id === selectedPlan);

  const handleFinishOrder = () => {
    const planName = currentPlan?.name ?? "Plan no seleccionado";
    const addOnsDetail = selectedAddOns
      .map((id) => {
        const a = ADD_ONS.find((x) => x.id === id);
        return `   • ${a?.name}: +USD ${a?.price}`;
      })
      .join("\n");

    const message = `*SOLICITUD DE DESARROLLO WEB - PROGRESS IN LINE*\n\n*Plan:* ${planName}\n*Total:* USD ${totalPrice}\n\nServicios Adicionales:\n${addOnsDetail}`;

    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div id="desarrollo-web" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-normal leading-tight text-white">
            ¿Tu web anda lenta o su diseño quedó en el tiempo?<br />
            <span style={{ color: PRIMARY }} className="font-normal">Tenemos la solución para vos</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-2/3 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {WEB_PLANS.map((plan) => {
                const isSelected = selectedPlan === plan.id;
                const isPopular = plan.id === "gold";
                return (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`relative flex flex-col text-left rounded-[2rem] p-8 transition-all duration-200 border-2 
                      ${isSelected ? "border-[#6B9FF0] bg-[#101624] shadow-lg scale-[1.03] z-10" : "border-[#232b3b] bg-[#181e2a] hover:border-[#6B9FF0]/40 shadow-sm"}
                    `}
                    style={isSelected ? { boxShadow: "0 8px 32px 0 #6B9FF033" } : {}}
                  >
                    {isPopular && (
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2b6cb0] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap shadow-lg">
                        MÁS POPULAR
                      </span>
                    )}

                    <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] mb-3" style={{ color: isSelected ? "#6B9FF0" : "#6B9FF0BB" }}>
                      {PLAN_TIER[plan.id]}
                    </p>

                    <h3 className="text-2xl font-medium mb-3 leading-none">
                      <span style={{ color: PRIMARY }}>{plan.name.replace("WEB PLAN ", "").split(" ")[0]}</span>{" "}
                      <span style={{ color: isSelected ? "#fff" : "#e6eaf3" }} className="font-medium">{plan.name.replace("WEB PLAN ", "").replace(/^[^ ]+ /, "")}</span>
                    </h3>

                    <div className="flex items-baseline gap-1 mt-8 mb-8">
                      <span className="text-4xl font-medium leading-none" style={{ color: isSelected ? "#fff" : "#6B9FF0" }}>${plan.price}</span>
                      <span className="text-lg ml-1" style={{ color: isSelected ? "#b6d3ff" : "#6B9FF0AA" }}>USD</span>
                    </div>

                    <ul className="space-y-3 mt-auto">
                      {plan.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs" style={{ color: isSelected ? "#e6eaf3" : "#b6c2d6" }}>
                          <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: isSelected ? "#6B9FF0" : "#6B9FF0" }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </button>
                );
              })}
            </div>

            <div className="rounded-[2rem] p-10 border-2 border-[#6B9FF0] bg-[#101624] shadow-lg font-sans">
              <h3 className="text-xl font-medium mb-8" style={{ color: PRIMARY }}>
                Servicios Adicionales
              </h3>
              <div className="space-y-1">
                {ADD_ONS.map((addon) => {
                  const isOn = selectedAddOns.includes(addon.id);
                  return (
                    <div key={addon.id} className="flex items-center justify-between py-6 border-b border-[#232b3b] last:border-0">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "#181e2a" }}>
                          <span style={{ color: PRIMARY }}>{addon.id === 'domain' ? <Globe className="w-4 h-4" /> : addon.id === 'hosting' ? <Server className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-sm" style={{ color: PRIMARY }}>{addon.name}</p>
                          <p className="text-xs mt-0.5" style={{ color: "#8fafc8" }}>{addon.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className="font-medium text-sm whitespace-nowrap" style={{ color: PRIMARY }}>${addon.price.toLocaleString("en-US")} USD</span>
                        <ToggleSwitch checked={isOn} onChange={() => toggleAddOn(addon.id)} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 lg:sticky lg:top-8">
            <div className="rounded-[2.5rem] p-10 border-2 border-[#6B9FF0] bg-[#101624] shadow-lg font-sans">
              <h3 className="text-2xl font-medium mb-8" style={{ color: "#ffffff" }}>Resumen del Pedido</h3>

              <div className="space-y-5 mb-10 pb-10 border-b border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>Plan {currentPlan?.name.replace("WEB PLAN ", "").split(" ")[0]}</span>
                  <span className="text-sm font-medium" style={{ color: "#ffffff" }}>${basePlanPrice.toLocaleString("en-US")} USD</span>
                </div>

                {selectedAddOns.map((aid) => {
                  const a = ADD_ONS.find((x) => x.id === aid);
                  return (
                    <div key={aid} className="flex justify-between items-center">
                      <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{a?.name.split(" (")[0]}</span>
                      <span className="text-sm font-medium" style={{ color: "#ffffff" }}>+${a?.price.toLocaleString("en-US")} USD</span>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-2 mb-10">
                <div className="flex justify-between items-end">
                  <span className="text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>Total estimado</span>
                  <span className="text-4xl font-black" style={{ color: "#ffffff" }}>${totalPrice.toLocaleString("en-US")} USD</span>
                </div>
                <p className="text-xs text-right" style={{ color: "rgba(255,255,255,0.45)" }}>≈ ${(totalPrice * exchangeRate).toLocaleString("es-AR", { maximumFractionDigits: 0 })} ARS{!loadingExchange && " (T.C. referencial)"}</p>
              </div>

              <button onClick={handleFinishOrder} className="w-full flex items-center justify-center gap-2 font-black text-lg py-5 rounded-full transition-all duration-200 hover:shadow-xl active:scale-95" style={{ background: "#ffffff", color: SECONDARY }}>
                Finalizar Pedido
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
