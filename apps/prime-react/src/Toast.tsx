import { useRef } from "react";
import { Button } from "primereact/button";
import { Toast as PrimeToast } from "primereact/toast";

export default function Toast() {
  const toast = useRef<PrimeToast>(null);

  const show = () => {
    toast.current?.show({
      severity: "info",
      summary: "Notification title",
      detail: "Notification content",
    });
  };

  return (
    <>
      <PrimeToast ref={toast} />
      <Button onClick={show} label="Show notification" />
    </>
  );
}
