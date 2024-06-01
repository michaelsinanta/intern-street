"use client";
import { PropsWithChildren, createContext, useCallback, useState } from "react";

interface ModalContextType {
  id: string | null;
  isOpened: boolean;
  openModal: (id: string) => void;
  closeModal: () => void;
  setId: (id: string | null) => void;
  setOpened: (opened: boolean) => void;
}

const ModalContext = createContext<ModalContextType>({
  id: null,
  isOpened: false,
  openModal: () => {},
  closeModal: () => {},
  setId: () => {},
  setOpened: () => {},
});

const ModalProvider = ({ children }: PropsWithChildren) => {
  const [id, setId] = useState<string | null>(null);
  const [isOpened, setOpened] = useState<boolean>(false);

  const openModal = useCallback((id: string) => {
    setId(id);
    setOpened(true);
  }, []);

  const closeModal = useCallback(() => {
    setId(null);
    setOpened(false);
  }, []);

  return (
    <ModalContext.Provider value={{ id, isOpened, openModal, closeModal, setId, setOpened}}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
