import { type ReactNode, useRef } from "react";
import { Button } from "react-aria-components";
import { type ToastState, useToastState } from "@react-stately/toast";
import {
  type AriaToastProps,
  type AriaToastRegionProps,
  useToastRegion,
  useToast,
} from "@react-aria/toast";

interface ToastProps<T> extends AriaToastProps<T> {
  state: ToastState<T>;
}

function Notification<T extends ReactNode>({ state, ...props }: ToastProps<T>) {
  let ref = useRef(null);
  let { toastProps, titleProps, closeButtonProps } = useToast(
    props,
    state,
    ref
  );

  return (
    <div {...toastProps} ref={ref} className="toast">
      <div {...titleProps}>{props.toast.content}</div>
      <Button {...closeButtonProps}>x</Button>
    </div>
  );
}

interface ToastRegionProps<T> extends AriaToastRegionProps {
  state: ToastState<T>;
}

function ToastRegion<T extends React.ReactNode>({
  state,
  ...props
}: ToastRegionProps<T>) {
  const ref = useRef(null);
  const { regionProps } = useToastRegion(props, state, ref);

  return (
    <div {...regionProps} ref={ref} className="toast-region">
      {state.visibleToasts.map((toast) => (
        <Notification key={toast.key} toast={toast} state={state} />
      ))}
    </div>
  );
}

interface ToastProviderProps {
  children: (state: ToastState<ReactNode>) => ReactNode;
}

function ToastProvider({ children }: ToastProviderProps) {
  const state = useToastState<ReactNode>({
    maxVisibleToasts: 5,
  });

  return (
    <>
      {children(state)}
      {state.visibleToasts.length > 0 && <ToastRegion state={state} />}
    </>
  );
}

export default function Toast() {
  return (
    <ToastProvider>
      {(state) => (
        <Button onPress={() => state.add("Notification content")}>
          Show notification
        </Button>
      )}
    </ToastProvider>
  );
}
