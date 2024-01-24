import { Button } from "@mantine/core";
import { Notifications, notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";

export default function Toast() {
  return (
    <>
      <Notifications />
      <Button
        onClick={() =>
          notifications.show({
            autoClose: 5000,
            title: "Notification title",
            message: "Notification content",
          })
        }
      >
        Show notification
      </Button>
    </>
  );
}
