'use client';

import axios from "axios";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { 
  FieldValues, 
  SubmitHandler,
  useForm
} from "react-hook-form";
import useRegisterModal from "@/hooks/use-register-modal";
import useLoginModal from "@/hooks/use-login-modal";
import Modal from "../ui/modal";
import Heading from "../heading";
import Input from "../inputs/input";
import Button from "../ui/button";
import { signUp } from "@/actions/auth";



const RegisterModal= () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signUp()
    .then(() => {
      toast.success('Registered!');
      registerModal.onClose();
      loginModal.onOpen();
    })
    .catch((error) => {
      toast.error(error);
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  const onToggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [registerModal, loginModal])

   
return (
  <Modal
      open={registerModal.isOpen}
      onClose={registerModal.onClose}
  >
      <div className="w-full">
          <div className="flex flex-col gap-4">
          <Heading
        title="Welcome to B2Geta Store"
        subtitle="Create an account!"
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
        id="name"
        label="Name"
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
                      Sign In
                  </Button>
              </div>
              <div className="flex flex-col gap-4 mt-3">
                  <hr />
                  <Button
                      onClick={() => { }}
                  >
                      Continue with Google
                  </Button>

                  <div 
        className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
      >
        <p>Already have an account?
          <span 
            onClick={onToggle} 
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
            > Log in</span>
        </p>
      </div>
              </div>
          </div>
      </div>
  </Modal>
);
}

export default RegisterModal;