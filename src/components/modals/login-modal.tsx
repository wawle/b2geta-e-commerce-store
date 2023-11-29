'use client';

import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form";
import { useRouter } from "next/navigation";
import useLoginModal from "@/hooks/use-login-modal";
import useRegisterModal from "@/hooks/use-register-modal";
import Heading from "../heading";
import Input from "../inputs/input";
import Button from "../ui/button";
import Modal from "../ui/modal";
import { login } from "@/actions/auth";
import useAuth from "@/hooks/use-auth";



const LoginModal = () => {
    const router = useRouter();
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const auth = useAuth();

    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        },
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        },
    });

    const onSubmit: SubmitHandler<FieldValues> =
        (data) => {
            setIsLoading(true);
            login()
                .then((callback) => {
                    setIsLoading(false);
                    if (callback?.ok) {
                        auth.setToken("token")
                        toast.success('Logged in');
                        router.refresh();
                        loginModal.onClose();
                    }
                    if (callback?.error) {
                        toast.error(callback.error);
                    }
                });
        }

    const onToggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal])

    return (
        <Modal
            open={loginModal.isOpen}
            onClose={loginModal.onClose}
        >
            <div className="w-full">
                <div className="flex flex-col gap-4">
                    <Heading
                        title="Welcome back"
                        subtitle="Login to your account!"
                    />
                    <Input
                        id="email"
                        label="Email"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
                    <Input
                        id="password"
                        label="Password"
                        type="password"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
                </div>
                <div className="flex flex-col gap-2 p-6">
                    <div
                        className="
                    flex 
                    flex-row 
                    items-center 
                    gap-4 
                    w-full
                  "
                    >

                        <Button
                            disabled={isLoading}
                            onClick={handleSubmit(onSubmit)}
                            className="w-full bg-slate-600"
                        >
                            Login
                        </Button>
                    </div>
                    <div className="flex flex-col gap-4 mt-3">
                        <hr />
                        <Button
                            onClick={() => { }}
                        >
                            Continue with Google
                        </Button>

                        <div className="
      text-neutral-500 text-center mt-4 font-light">
                            <p>First time using B2Geta?
                                <span
                                    onClick={onToggle}
                                    className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
                                > Create an account</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default LoginModal;