interface Iactive {
  active: boolean;
  setActive: (bool: boolean) => void;
}

function ControlButton({ active, setActive }: Iactive) {
  const startMessage = "start racer";
  const stopMessage = "stop racer";
  let message = active ? stopMessage : startMessage;
  return <button onClick={() => setActive(!active)}>{message}</button>;
}

export default ControlButton;
