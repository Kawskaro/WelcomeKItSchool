import {
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { AudioButton } from "../components/AudioButton";
import { ImageWithFallback } from "../components/ImageWithFallback";

export function SchoolInfo() {
  const { t } = useTranslation();

  return (
    <div className="min-h-full w-full flex-1 bg-slate-50 pb-20">
      <div className="sticky top-0 z-20 rounded-b-3xl bg-amber-500 px-6 py-8 text-slate-900 shadow-md">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-3xl font-bold">{t("schoolInfo.title")}</h2>
          <AudioButton text={t("schoolInfo.title")} className="shrink-0" />
        </div>
        <p className="mt-2 text-lg font-medium text-amber-900">
          {t("home.schoolInfoDesc")}
        </p>
      </div>

      <div className="mt-6 space-y-6 px-5">
        <div className="h-48 overflow-hidden rounded-3xl border border-slate-300 bg-slate-200 shadow-sm">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop"
            alt="Fachada de la escuela"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-800">
              {t("schoolInfo.contactTitle")}
            </h3>
            <AudioButton
              text={t("schoolInfo.contactTitle")}
              className="shrink-0"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-blue-100 p-3 text-blue-700">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {t("schoolInfo.phone")}
                </p>
                <p className="text-lg font-bold text-slate-900">
                  +56 2 2345 6789
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-full bg-emerald-100 p-3 text-emerald-700">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {t("schoolInfo.email")}
                </p>
                <p className="text-lg font-bold text-slate-900">
                  info@escuela.cl
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-amber-100 p-3 text-amber-700">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {t("schoolInfo.address")}
                </p>
                <p className="text-base leading-relaxed text-slate-900">
                  Av. Los Leones 1234, Providencia, Santiago
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-amber-100 p-3 text-amber-700">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                {t("schoolInfo.scheduleTitle")}
              </h3>
            </div>
            <AudioButton
              text={t("schoolInfo.scheduleTitle")}
              className="shrink-0"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-lg font-medium text-slate-600">
                {t("schoolInfo.classes")}
              </span>
              <span className="text-lg font-bold text-slate-900">
                8:00 - 15:30
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-slate-600">
                {t("schoolInfo.enrollment")}
              </span>
              <span className="text-lg font-bold text-slate-900">
                9:00 - 14:00
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-800">
              {t("schoolInfo.rulesTitle")}
            </h3>
            <AudioButton
              text={`${t("schoolInfo.rulesTitle")}. ${t("schoolInfo.rule1")}. ${t("schoolInfo.rule2")}. ${t("schoolInfo.rule3")}. ${t("schoolInfo.rule4")}`}
              className="shrink-0"
            />
          </div>

          <div className="space-y-3">
            {[
              t("schoolInfo.rule1"),
              t("schoolInfo.rule2"),
              t("schoolInfo.rule3"),
              t("schoolInfo.rule4"),
            ].map((rule) => (
              <div key={rule} className="flex items-start gap-3">
                <CheckCircle
                  className="mt-0.5 shrink-0 text-emerald-600"
                  size={20}
                />
                <p className="text-base leading-relaxed text-slate-700">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-100 p-3 text-blue-700">
                <Calendar size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                {t("schoolInfo.calendarTitle")}
              </h3>
            </div>
            <AudioButton
              text={t("schoolInfo.calendarTitle")}
              className="shrink-0"
            />
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl bg-white/60 p-4">
              <p className="mb-2 font-bold text-blue-900">
                {t("schoolInfo.term1")}
              </p>
              <p className="text-slate-700">
                {t("schoolInfo.march")} - {t("schoolInfo.july")}
              </p>
            </div>

            <div className="rounded-2xl bg-white/60 p-4">
              <p className="mb-2 font-bold text-purple-900">
                {t("schoolInfo.vacations")}
              </p>
              <p className="text-slate-700">{t("schoolInfo.julyPeriod")}</p>
            </div>

            <div className="rounded-2xl bg-white/60 p-4">
              <p className="mb-2 font-bold text-blue-900">
                {t("schoolInfo.term2")}
              </p>
              <p className="text-slate-700">
                {t("schoolInfo.august")} - {t("schoolInfo.december")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
