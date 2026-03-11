import { AlertCircle, CheckCircle2, FileText, KeyRound } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AudioButton } from "../components/AudioButton";

export function Documents() {
  const { t } = useTranslation();

  const requiredDocs = [
    {
      id: "studentId",
      titleKey: "documents.studentId",
      descKey: "documents.studentIdDesc",
    },
    {
      id: "guardianId",
      titleKey: "documents.guardianId",
      descKey: "documents.guardianIdDesc",
    },
    {
      id: "entryDoc",
      titleKey: "documents.entryDoc",
      descKey: "documents.entryDocDesc",
    },
  ];

  const optionalDocs = [
    {
      id: "previousStudies",
      titleKey: "documents.previousStudies",
      descKey: "documents.previousStudiesDesc",
    },
    {
      id: "vaccines",
      titleKey: "documents.vaccines",
      descKey: "documents.vaccinesDesc",
    },
    {
      id: "address",
      titleKey: "documents.address",
      descKey: "documents.addressDesc",
    },
  ];

  return (
    <div className="min-h-full w-full flex-1 bg-slate-50 pb-20">
      <div className="sticky top-0 z-20 rounded-b-3xl bg-emerald-600 px-6 py-8 text-white shadow-md">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-3xl font-bold">{t("documents.title")}</h2>
          <AudioButton text={t("documents.title")} className="shrink-0" />
        </div>
        <p className="mt-2 text-lg text-emerald-100">
          {t("documents.introDesc")}
        </p>
      </div>

      <div className="mt-6 px-5">
        <div className="mb-6 rounded-3xl border border-emerald-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-emerald-100 p-3 text-emerald-700">
                <KeyRound size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {t("documents.identifierTitle")}
              </h3>
            </div>
            <AudioButton
              text={t("documents.identifierTitle")}
              className="shrink-0"
            />
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-emerald-50 p-4">
              <p className="font-bold text-emerald-900">
                {t("documents.ipeTitle")}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-emerald-900">
                {t("documents.ipeDesc")}
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-4">
              <p className="font-bold text-blue-900">
                {t("documents.ipaTitle")}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-blue-900">
                {t("documents.ipaDesc")}
              </p>
            </div>

            <div className="rounded-2xl bg-amber-50 p-4">
              <p className="font-bold text-amber-900">
                {t("documents.studiesTitle")}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-amber-900">
                {t("documents.studiesDesc")}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-1 shrink-0 text-amber-600" size={24} />
            <div className="flex-1">
              <p className="text-base leading-relaxed font-medium text-amber-800">
                <strong>{t("documents.note")}</strong>:{" "}
                {t("documents.noteDesc")}
              </p>
            </div>
            <AudioButton
              text={`${t("documents.note")}: ${t("documents.noteDesc")}`}
              className="shrink-0"
            />
          </div>
        </div>

        <h3 className="mb-4 pl-1 text-xl font-bold text-slate-800">
          {t("documents.required")}
        </h3>

        <div className="mb-8 space-y-4">
          {requiredDocs.map((doc) => {
            const title = t(doc.titleKey);
            const desc = t(doc.descKey);

            return (
              <div
                key={doc.id}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="rounded-full bg-emerald-100 p-3 text-emerald-700">
                    <FileText size={28} />
                  </div>
                  <span className="rounded-full bg-red-100 px-3 py-2 text-xs font-bold tracking-wide text-red-700 uppercase">
                    {t("documents.requiredBadge")}
                  </span>
                </div>

                <div className="mb-2 flex items-start justify-between gap-3">
                  <h4 className="flex-1 text-xl font-bold text-slate-900">
                    {title}
                  </h4>
                  <AudioButton
                    text={`${title}. ${desc}`}
                    className="shrink-0"
                  />
                </div>
                <p className="text-base leading-relaxed text-slate-600">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>

        <h3 className="mb-4 pl-1 text-xl font-bold text-slate-800">
          {t("documents.optional")}
        </h3>

        <div className="space-y-4">
          {optionalDocs.map((doc) => {
            const title = t(doc.titleKey);
            const desc = t(doc.descKey);

            return (
              <div
                key={doc.id}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="rounded-full bg-blue-100 p-3 text-blue-700">
                    <FileText size={28} />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold tracking-wide text-slate-600 uppercase">
                    {t("documents.optionalBadge")}
                  </span>
                </div>

                <div className="mb-2 flex items-start justify-between gap-3">
                  <h4 className="flex-1 text-xl font-bold text-slate-900">
                    {title}
                  </h4>
                  <AudioButton
                    text={`${title}. ${desc}`}
                    className="shrink-0"
                  />
                </div>
                <p className="text-base leading-relaxed text-slate-600">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">
              {t("documents.introTitle")}
            </h3>
            <AudioButton
              text={`${t("documents.introTitle")}. ${t("documents.introDesc")}`}
              className="shrink-0"
            />
          </div>

          <div className="space-y-3">
            {[
              t("documents.introDesc"),
              t("documents.ipeDesc"),
              t("documents.studiesDesc"),
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-emerald-600"
                  size={18}
                />
                <p className="text-sm leading-relaxed text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
