"use client";

import { motion } from "framer-motion";

export default function LoaderOverlay() {
  return (
    <div className="fixed inset-0 grid place-items-center bg-[color:var(--background)] z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex flex-col items-center gap-4"
      >
        <motion.div
          className="w-14 h-14 rounded-2xl"
          style={{ background: "var(--accent)" }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
        />
        <div className="text-sm muted">Carregando...</div>
      </motion.div>
    </div>
  );
}


