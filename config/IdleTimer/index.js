// import plugins
import { useIdleTimer } from "react-idle-timer";

// next js
import { useRouter } from "next/router";

export const configIdleTimer = () => {
  // use router dari next js
  const route = useRouter();

  // handle action ketika tidak ada aktifitas selama waktu yang telah di tentukan
  const handleOnIdle = (event) => {
    route.push("/idle");
  };

  //   handle ketika user masih aktif
  const handleOnActive = (event) => {
    console.log("user is active", event);
    console.log("time remaining", getRemainingTime());
  };

  //   handle user jika ada aksi
  const handleOnAction = (event) => {
    console.log("user did something", event);
  };

  const { getRemainingTime } = useIdleTimer({
    timeout: 1000 * 5,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    onAction: handleOnAction,
    debounce: 500,
  });
};
