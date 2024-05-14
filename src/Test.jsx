import useTime from "./useTime";

export default function Test() {
  const currentTime = useTime();
  return <span>{currentTime.toLocaleTimeString()}</span>;
}
