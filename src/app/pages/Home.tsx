import {
  ClipboardList,
  FileText,
  HelpCircle,
  School,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AudioButton } from "../components/AudioButton";

export function Home() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto flex w-full max-w-lg flex-1 flex-col items-center p-5 pb-10">
      <div className="mb-8 mt-6 w-full text-center">
        <div className="mb-3 flex items-center justify-center gap-3">
          <h2 className="text-3xl leading-tight font-bold text-slate-900">
            {t("home.welcome")}
          </h2>
          <AudioButton text={t("home.welcome")} />
        </div>
        <div className="flex items-center justify-center gap-3">
          <p className="mt-3 px-4 text-lg text-slate-600">
            {t("home.subtitle")}
          </p>
          <AudioButton text={t("home.subtitle")} />
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4">
        <Link
          to="/pasos"
          className="group flex flex-col items-center rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition-all hover:bg-blue-50/50 hover:shadow-md active:scale-95"
        >
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-200">
            <ClipboardList size={40} />
          </div>
          <h3 className="text-center text-2xl font-bold text-slate-800">
            {t("home.enrollmentSteps")}
          </h3>
          <p className="mt-2 text-center text-base text-slate-500">
            {t("home.enrollmentStepsDesc")}
          </p>
        </Link>

        <Link
          to="/documentos"
          className="group flex flex-col items-center rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition-all hover:bg-emerald-50/50 hover:shadow-md active:scale-95"
        >
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-200">
            <FileText size={40} />
          </div>
          <h3 className="text-center text-2xl font-bold text-slate-800">
            {t("home.documents")}
          </h3>
          <p className="mt-2 text-center text-base text-slate-500">
            {t("home.documentsDesc")}
          </p>
        </Link>

        <Link
          to="/escuela"
          className="group flex flex-col items-center rounded-3xl border border-amber-100 bg-white p-6 shadow-sm transition-all hover:bg-amber-50/50 hover:shadow-md active:scale-95"
        >
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 text-amber-600 transition-colors group-hover:bg-amber-200">
            <School size={40} />
          </div>
          <h3 className="text-center text-2xl font-bold text-slate-800">
            {t("home.schoolInfo")}
          </h3>
          <p className="mt-2 text-center text-base text-slate-500">
            {t("home.schoolInfoDesc")}
          </p>
        </Link>

        <Link
          to="/ayuda"
          className="group mt-2 flex flex-col items-center rounded-3xl border border-slate-700 bg-slate-800 p-6 text-white shadow-sm transition-all hover:bg-slate-700 hover:shadow-md active:scale-95"
        >
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
            <HelpCircle size={32} />
          </div>
          <h3 className="text-center text-2xl font-bold">
            {t("home.askHelp")}
          </h3>
          <p className="mt-2 text-center text-base text-white/80">
            {t("home.askHelpDesc")}
          </p>
        </Link>
      </div>
    </div>
  );
}
