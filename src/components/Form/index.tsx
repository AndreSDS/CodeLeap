import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Post, User } from "../../schemas";
import { Button, Input, TextArea } from "..";

interface FormProps {
  titleForm: string;
  schema: any;
  textBtnConfirm: string;
  defaultValues?: Post | User | undefined;
  hasBtnCancel?: boolean;
  btnConfirmStyle?: "cancel" | "confirm" | "delete";
  btnCancelStyle?: "cancel" | "confirm" | "delete";
  onCancel?: () => void;
  onSubmit: (data: any) => void;
}

export const Form = ({
  titleForm,
  schema,
  defaultValues,
  textBtnConfirm,
  btnConfirmStyle,
  hasBtnCancel,
  btnCancelStyle,
  onCancel,
  onSubmit,
}: FormProps) => {
  const { pathname } = useLocation();

  const {
    handleSubmit,
    register,
    reset,
    formState: { isValid, isSubmitting, isSubmitted },
  } = useForm<typeof schema>({
    defaultValues,
    resolver: zodResolver(schema),
    mode: "all",
  });

  useEffect(() => {
    if (isSubmitted) {
      reset();
    }
  }, [isSubmitted, reset]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full"
      >
        <h1 className="font-bold text-[22px]/[26px]">{titleForm}</h1>

        {pathname === "/" ? (
          <Input
            label="Please enter your username"
            placeHolder="John doe"
            register={{ ...register("username") }}
          />
        ) : (
          <>
            <Input
              label="Title"
              placeHolder="Post title"
              register={{ ...register("title") }}
            />

            <TextArea
              label="Content"
              placeHolder="Content here"
              register={{ ...register("content") }}
            />
          </>
        )}

        <div className="ml-auto flex items-center gap-4">
          {hasBtnCancel && (
            <Button
              onClick={onCancel}
              textButton="Cancel"
              isDisabled={false}
              style={btnCancelStyle}
            />
          )}

          <Button
            type="submit"
            textButton={textBtnConfirm}
            isDisabled={!isValid}
            style={btnConfirmStyle}
            isLoading={isSubmitting}
          />
        </div>
      </form>
    </>
  );
};
