"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBarProvider = ({children}) => {
    return (
        <>
          {children}
          <ProgressBar
            height="4px"
            color="blue"
            options={{ showSpinner: false }}
            shallowRouting
          />
        </>
      );
}

export default ProgressBarProvider