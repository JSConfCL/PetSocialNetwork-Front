import { cn } from "@/lib/utils";

import styles from "./LoadingSpinner.module.css";

type LoadingSpinnerProps = {
  loadingType?: "editing" | "creating" | "loading";
};

export function LoadingSpinner({ loadingType }: LoadingSpinnerProps) {
  return (
    <div
      className={cn(
        loadingType === "editing"
          ? `${styles.loadingSpinner} ${styles.editingSpinner}`
          : styles.loadingSpinner,
      )}
    ></div>
  );
}
