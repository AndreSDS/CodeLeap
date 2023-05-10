import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserSchema, User } from "../../schemas";
import { setUser } from "../../actions/userSlice";
import { Card, Form } from "../../components";
import { userStoraged } from "../../helpers/utils";

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = userStoraged();

  const onSubmit = (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(setUser(user));
    navigate("/home");
  };

  return (
    <Card addClassName="w-[500px] border-[#ccc] flex-col gap-6">
      <Form
        titleForm="Welcome to CodeLeap network!"
        textBtnConfirm="ENTER"
        onSubmit={onSubmit}
        schema={UserSchema}
        defaultValues={{
          username: user?.username || "",
        }}
      />
    </Card>
  );
};
