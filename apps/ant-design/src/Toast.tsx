import { Button, notification } from "antd";

export default function Toast() {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: "Notification title",
      description: "Notification content",
      duration: 5,
    });
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Show Notification
      </Button>
    </>
  );
}
