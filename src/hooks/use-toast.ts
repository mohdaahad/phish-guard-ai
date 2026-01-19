import * as React from "react";

type Toast = { id: string; title?: string; description?: string };

const TOAST_LIMIT = 5;

type State = { toasts: Toast[] };

const toastState: State = { toasts: [] };
const listeners: Array<(state: State) => void> = [];

function dispatch(action: { type: "ADD"; toast: Toast } | { type: "REMOVE"; id: string }) {
  if (action.type === "ADD") {
    toastState.toasts = [action.toast, ...toastState.toasts].slice(0, TOAST_LIMIT);
  } else if (action.type === "REMOVE") {
    toastState.toasts = toastState.toasts.filter((t) => t.id !== action.id);
  }
  listeners.forEach((l) => l({ ...toastState }));
}

export function useToast() {
  const [state, setState] = React.useState<State>(toastState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => { listeners.splice(listeners.indexOf(setState), 1); };
  }, []);
  return {
    toasts: state.toasts,
    toast: (props: Omit<Toast, "id">) => {
      const id = Math.random().toString(36).slice(2);
      dispatch({ type: "ADD", toast: { id, ...props } });
      setTimeout(() => dispatch({ type: "REMOVE", id }), 3000);
    },
  };
}

export const toast = (props: Omit<Toast, "id">) => {
  const id = Math.random().toString(36).slice(2);
  dispatch({ type: "ADD", toast: { id, ...props } });
  setTimeout(() => dispatch({ type: "REMOVE", id }), 3000);
};
