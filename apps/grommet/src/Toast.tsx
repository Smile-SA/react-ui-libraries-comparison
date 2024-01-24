import { useState } from "react";
import { Box, Button, Notification } from "grommet";

export default function Toast() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Box pad="large" justify="center">
        <Button label="Show Notification" onClick={() => setVisible(true)} />
      </Box>
      {visible && (
        <Notification
          toast
          title="Notification title"
          message="Notification content"
          onClose={() => setVisible(false)}
        />
      )}
    </>
  );
}
