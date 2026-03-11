import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface AudioButtonProps {
  text: string;
  className?: string;
}

export function AudioButton({ text, className = "" }: AudioButtonProps) {
  const { i18n, t } = useTranslation();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    setIsSupported("speechSynthesis" in window);

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  useEffect(() => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [i18n.language]);

  const handleSpeak = () => {
    if (!isSupported) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const languageMap: Record<string, string> = {
      es: "es-CL",
      en: "en-US",
      ht: "fr-FR",
    };

    utterance.lang = languageMap[i18n.language] ?? "es-CL";
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  if (!isSupported) return null;

  return (
    <button
      onClick={handleSpeak}
      className={`rounded-full p-3 transition-all ${
        isSpeaking
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-blue-100 text-blue-600 hover:bg-blue-200"
      } ${className}`}
      aria-label={isSpeaking ? t("audio.stop") : t("audio.readAloud")}
      type="button"
    >
      {isSpeaking ? <VolumeX size={22} /> : <Volume2 size={22} />}
    </button>
  );
}
