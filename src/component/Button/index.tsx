"use client";
import React from "react";

interface ButtonProps {
  Message: string;
  alertMessage: string;
}

export function SubmitButton({ Message, alertMessage }: ButtonProps) {
  return (
    <button onClick={() => alert(alertMessage)}>
      {Message}
    </button>
  );
}

interface CafeButtonProps {
  config: string;
}

export function CafeButton({ config }: CafeButtonProps) {
  return (
    <button type="submit" onClick={() => alert("getConfig")}>{config}</button>
  );
}