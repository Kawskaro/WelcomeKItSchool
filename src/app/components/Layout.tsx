import { ChevronLeft, HelpCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { LanguageSelector } from "./LanguageSelector";

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-800">
      <header className="sticky top-0 z-10 flex min-h-[72px] items-center justify-between bg-white px-4 py-4 shadow-sm">
        {!isHome ? (
          <button
            onClick={() => navigate(-1)}
            className="flex items-center rounded-full p-2 text-blue-600 transition-colors hover:bg-slate-100"
            aria-label={t("back")}
            type="button"
          >
            <ChevronLeft size={28} />
            <span className="ml-1 text-lg font-medium">{t("back")}</span>
          </button>
        ) : (
          <div className="flex items-center">
            <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white shadow-sm">
              E
            </div>
            <h1 className="text-xl leading-tight font-bold text-slate-900">
              {t("appTitle").split(" ")[0]} <br /> {t("appTitle").split(" ")[1]}
            </h1>
          </div>
        )}

        <div className="flex items-center gap-2">
          <LanguageSelector />
          {isHome && (
            <button
              onClick={() => navigate("/ayuda")}
              className="flex items-center gap-2 rounded-full bg-blue-50 p-3 text-blue-700 transition-colors hover:bg-blue-100"
              aria-label={t("help")}
              type="button"
            >
              <HelpCircle size={24} />
            </button>
          )}
        </div>
      </header>

      <main className="relative mx-auto flex min-h-full w-full max-w-lg flex-1 flex-col overflow-x-hidden bg-slate-50 shadow-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex w-full flex-1 flex-col"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
