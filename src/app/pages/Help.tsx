import {
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AudioButton } from "../components/AudioButton";
import { useLocalStorage } from "../hooks/useLocalStorage";

type HelpDraft = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const emptyDraft: HelpDraft = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export function Help() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [draft, setDraft] = useLocalStorage<HelpDraft>(
    "welcome-kit.help.draft",
    emptyDraft
  );
  const quickIssues = [
    t("helpPage.quick1"),
    t("helpPage.quick2"),
    t("helpPage.quick3"),
    t("helpPage.quick4"),
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    window.setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setDraft(emptyDraft);
    }, 1000);
  };

  const updateDraft =
    (field: keyof HelpDraft) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setDraft((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };

  if (submitted) {
    return (
      <div className="flex min-h-full w-full flex-1 items-center justify-center bg-slate-50 p-6">
        <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-md">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="mb-4 text-3xl font-bold text-slate-800">
            {t("helpPage.successTitle")}
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-600">
            {t("helpPage.successMessage")}
          </p>
          <button
            onClick={() => window.history.back()}
            className="w-full rounded-2xl bg-blue-600 py-4 text-lg font-bold text-white transition-colors hover:bg-blue-700 active:scale-95"
            type="button"
          >
            {t("helpPage.close")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full w-full flex-1 bg-slate-50 pb-20">
      <div className="sticky top-0 z-20 rounded-b-3xl bg-slate-800 px-6 py-8 text-white shadow-md">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-3xl font-bold">{t("helpPage.title")}</h2>
          <AudioButton text={t("helpPage.title")} className="shrink-0" />
        </div>
        <p className="mt-2 text-lg text-slate-300">
          {t("helpPage.subtitle")}
        </p>
      </div>

      <div className="mt-6 px-5">
        <div className="mb-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <MessageCircle className="mt-1 shrink-0 text-blue-600" size={24} />
            <div className="flex-1">
              <p className="text-base leading-relaxed font-medium text-blue-800">
                {t("helpPage.subtitle")}
              </p>
            </div>
            <AudioButton
              text={t("helpPage.subtitle")}
              className="shrink-0"
            />
          </div>
        </div>

        <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">
              {t("helpPage.quickTitle")}
            </h3>
            <AudioButton
              text={t("helpPage.quickTitle")}
              className="shrink-0"
            />
          </div>

          <div className="space-y-3">
            {quickIssues.map((issue) => (
              <div
                key={issue}
                className="rounded-2xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700"
              >
                {issue}
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mb-6 space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div>
            <label
              className="mb-2 block text-lg font-bold text-slate-700"
              htmlFor="name"
            >
              {t("helpPage.name")}
            </label>
            <input
              type="text"
              id="name"
              required
              value={draft.name}
              onChange={updateDraft("name")}
              placeholder={t("helpPage.namePlaceholder")}
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 text-lg text-slate-800 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              className="mb-2 block text-lg font-bold text-slate-700"
              htmlFor="phone"
            >
              {t("helpPage.phone")}
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={draft.phone}
              onChange={updateDraft("phone")}
              placeholder={t("helpPage.phonePlaceholder")}
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 text-lg text-slate-800 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              className="mb-2 block text-lg font-bold text-slate-700"
              htmlFor="email"
            >
              {t("helpPage.email")}
            </label>
            <input
              type="email"
              id="email"
              value={draft.email}
              onChange={updateDraft("email")}
              placeholder={t("helpPage.emailPlaceholder")}
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 text-lg text-slate-800 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              className="mb-2 block text-lg font-bold text-slate-700"
              htmlFor="message"
            >
              {t("helpPage.message")}
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={draft.message}
              onChange={updateDraft("message")}
              placeholder={t("helpPage.messagePlaceholder")}
              className="w-full resize-none rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 text-lg text-slate-800 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-800 py-4 text-xl font-bold text-white transition-colors hover:bg-slate-900 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span>
              {isSubmitting ? t("helpPage.sending") : t("helpPage.send")}
            </span>
            <Send size={24} />
          </button>
        </form>

        <div className="rounded-3xl bg-gradient-to-br from-slate-700 to-slate-800 p-6 text-white shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold">{t("helpPage.contactInfo")}</h3>
            <AudioButton
              text={t("helpPage.contactInfo")}
              className="shrink-0"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
              <div className="rounded-full bg-white/20 p-3">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-white/70">
                  {t("helpPage.schoolChannel")}
                </p>
                <p className="text-lg font-bold">+56 2 2345 6789</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
              <div className="rounded-full bg-white/20 p-3">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-white/70">
                  {t("helpPage.officialChannel")}
                </p>
                <p className="text-lg font-bold">ayuda@escuela.cl</p>
                <p className="mt-1 text-sm text-white/70">
                  {t("helpPage.officialChannelDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
