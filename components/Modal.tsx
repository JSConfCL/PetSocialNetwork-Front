"use client";

import { XIcon } from "lucide-react";
import { useEffect, useId, useState } from "react";

import { TEST_IDS } from "@/lib/constants";

import { LoadingSpinner } from "@/components/LoadingSpinner";

export type ModalPropsType = {
  message?: string;
  type: "loading" | "info";
};

export function Modal({ message, type }: ModalPropsType) {
  const innerModalContainerId = useId();
  const modalMessageId = useId();
  const [closeModal, setCloseModal] = useState(false);

  useEffect(() => {
    function handleEventListener(event: MouseEvent) {
      if (event.target instanceof Element) {
        if (
          event.target.id !== innerModalContainerId &&
          event.target.id !== modalMessageId &&
          type === "info"
        ) {
          setCloseModal(true);
        }
      }
    }

    document.addEventListener("click", (event) => handleEventListener(event));

    return () => document.removeEventListener("click", handleEventListener);
  }, [innerModalContainerId, modalMessageId, type]);

  return closeModal === false ? (
    <div className="fixed inset-0 z-[--modal-z-index] flex items-center justify-center bg-[#00000050] p-4 text-white backdrop-blur">
      {type === "info" && (
        <div
          id={innerModalContainerId}
          className="relative flex w-full max-w-[40rem] items-center justify-center gap-4 rounded-lg bg-[#00000099] px-6 py-16 text-center text-lg md:px-20"
        >
          <button
            onClick={() => setCloseModal(true)}
            data-cy={TEST_IDS.modalCloseButton}
            className="absolute right-3 top-3 h-6 w-6"
          >
            <XIcon className="size-5" />
          </button>
          <p
            id={modalMessageId}
            data-cy={TEST_IDS.modalInfoMessage}
            className="w-full break-words font-semibold"
          >
            {message}
          </p>
        </div>
      )}
      {type === "loading" && <LoadingSpinner />}
    </div>
  ) : null;
}
