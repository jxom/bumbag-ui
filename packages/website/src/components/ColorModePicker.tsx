import * as React from "react";
import { useLocation, useNavigate } from "@reach/router";
import { Box, Button, Icon, useColorMode } from "bumbag";

export default function ColorModePicker(props) {
  const { colorMode, setColorMode } = useColorMode();

  const handleChangeTheme = React.useCallback(
    (e) => {
      const colorMode = e.target.value;
      setColorMode(colorMode);
    },
    [setColorMode]
  );

  return (
    <Box>
      {colorMode === "default" && (
        <Button
          onClick={() => setColorMode("dark")}
          color="gray"
          iconAfter={props.labeled ? "solid-moon" : null}
          variant={props.labeled ? null : "ghost"}
        >
          {props.labeled ? (
            "Change to Dark Color Mode"
          ) : (
            <Icon icon="solid-moon" />
          )}
        </Button>
      )}
      {colorMode === "dark" && (
        <Button
          onClick={() => setColorMode("default")}
          color="text"
          iconAfter={props.labeled ? "solid-sun" : null}
          variant={props.labeled ? null : "ghost"}
        >
          {props.labeled ? (
            "Change to Default Color Mode"
          ) : (
            <Icon icon="solid-sun" />
          )}
        </Button>
      )}
    </Box>
  );
}
