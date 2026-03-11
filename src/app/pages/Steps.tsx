import { ChevronDown, ChevronUp, CheckCircle2, Circle } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { AudioButton } from "../components/AudioButton";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function Steps() {
  const { t } = useTranslation();
  const [completed, setCompleted] = useLocalStorage<number[]>(
    "welcome-kit.steps.completed",
    []
  );
  const [expandedStep, setExpandedStep] = useLocalStorage<number | null>(
    "welcome-kit.steps.expanded",
    null
  );

  const steps = [
    {
      id: 1,
      titleKey: "steps.step1Title",
      descKey: "steps.step1Desc",
      detailKey: "steps.step1Detail",
    },
    {
      id: 2,
      titleKey: "steps.step2Title",
      descKey: "steps.step2Desc",
      detailKey: "steps.step2Detail",
    },
    {
      id: 3,
      titleKey: "steps.step3Title",
      descKey: "steps.step3Desc",
      detailKey: "steps.step3Detail",
    },
    {
      id: 4,
      titleKey: "steps.step4Title",
      descKey: "steps.step4Desc",
      detailKey: "steps.step4Detail",
    },
    {
      id: 5,
      titleKey: "steps.step5Title",
      descKey: "steps.step5Desc",
      detailKey: "steps.step5Detail",
    },
    {
      id: 6,
      titleKey: "steps.step6Title",
      descKey: "steps.step6Desc",
      detailKey: "steps.step6Detail",
    },
  ];

  const toggleStep = (id: number) => {
    setCompleted((current) =>
      current.includes(id)
        ? current.filter((step) => step !== id)
        : [...current, id]
    );
  };

  const toggleExpand = (id: number) => {
    setExpandedStep((current) => (current === id ? null : id));
  };

  const progress = Math.round((completed.length / steps.length) * 100);

  return (
    <div className="min-h-full w-full flex-1 bg-slate-50 pb-20">
      <div className="sticky top-0 z-20 rounded-b-3xl bg-blue-600 px-6 py-8 text-white shadow-md">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-3xl font-bold">{t("steps.title")}</h2>
          <AudioButton text={t("steps.title")} className="shrink-0" />
        </div>
        <p className="mt-2 text-lg text-blue-100">
          {t("home.enrollmentStepsDesc")}
        </p>

        <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/20">
          <motion.div
            className="h-full rounded-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="mt-2 text-right text-sm font-medium text-blue-100">
          {t("steps.progress", {
            completed: completed.length,
            total: steps.length,
          })}
        </p>
      </div>

      <div className="mt-6 space-y-4 px-5">
        {steps.map((step, index) => {
          const isDone = completed.includes(step.id);
          const isExpanded = expandedStep === step.id;
          const title = t(step.titleKey);
          const desc = t(step.descKey);
          const detail = t(step.detailKey);

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-3xl border shadow-sm transition-all ${
                isDone
                  ? "border-blue-200 bg-blue-50"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div
                onClick={() => toggleStep(step.id)}
                className="flex cursor-pointer gap-4 p-5 transition-transform active:scale-[0.98]"
              >
                <div className="mt-1 shrink-0">
                  {isDone ? (
                    <CheckCircle2
                      size={32}
                      className="text-blue-600 drop-shadow-sm"
                    />
                  ) : (
                    <Circle size={32} className="text-slate-300" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      className={`text-xl font-bold transition-colors ${
                        isDone ? "text-blue-900" : "text-slate-800"
                      }`}
                    >
                      {step.id}. {title}
                    </h3>
                    <AudioButton
                      text={`${title}. ${desc}`}
                      className="shrink-0"
                    />
                  </div>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">
                    {desc}
                  </p>
                </div>
              </div>

              <button
                onClick={() => toggleExpand(step.id)}
                className="flex w-full items-center justify-center gap-2 px-5 pt-1 pb-4 text-blue-600 transition-colors hover:text-blue-700"
                type="button"
              >
                <span className="text-sm font-medium">
                  {isExpanded ? t("steps.showLess") : t("steps.showMore")}
                </span>
                {isExpanded ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>

              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-5 pb-5"
                >
                  <div className="flex items-start gap-3 rounded-xl bg-slate-100 p-4">
                    <div className="flex-1">
                      <p className="leading-relaxed text-slate-700">
                        {detail}
                      </p>
                    </div>
                    <AudioButton text={detail} className="shrink-0" />
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
