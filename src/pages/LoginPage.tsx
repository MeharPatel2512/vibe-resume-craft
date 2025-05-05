
import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <AuthLayout title="Sign In to VibeResume">
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
