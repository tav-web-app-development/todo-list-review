import useTime from "./useTime";
export default function Clock() {
  const currentTime = useTime();

  return <span>The current time is: {currentTime.toLocaleTimeString()}</span>;
}
