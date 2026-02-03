'use client'

import type { OtpModalInputProps, OtpResendRequestModel, OtpVerifyRequestModel } from "@/src/models/auth/userAuthModels"
import AuthService from "@/src/services/authService"
import { Button, InputOTP, Modal, REGEXP_ONLY_DIGITS, Spinner } from "@heroui/react"
import { useEffect, useRef, useState } from "react"
import { AppAlert } from "../AppAlert"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import AppMessages from "@/src/config/AppMessages"

interface Props {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    params: OtpModalInputProps,
    setLoaderVisibility: (arg: string) => void
}

export default function InputOtpModal({ isOpen, setIsOpen, params, setLoaderVisibility }: Props) {

    const [isOtpResendLoading, setIsOtpResendLoading] = useState<boolean>(false);
    const [verifyButtonDisabled, setVerifyButtonDisabled] = useState<boolean>(true);
    const [resendButtonDisabled, setResendButtonDisabled] = useState<boolean>(true);
    const [isVerifyButtonLoading, setIsVerifyButtonLoading] = useState<boolean>(false);
    const [otpValue, setOtpValue] = useState<string>('');
    const [timeRemaining, setTimeRemaining] = useState<number>(100);

    const intervalRef = useRef<number | undefined>(undefined);

    const router = useRouter();

    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            if (timeRemaining > 0) {
                setTimeRemaining(timeRemaining - 1);
            } else {
                clearInterval(intervalRef.current);
                setResendButtonDisabled(false);
            }
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        }

    }, [timeRemaining])

    const updateOtpTime = () => {
        setTimeRemaining(100);
    }

    // page handlers
    const resendOtp = async () => {
        setLoaderVisibility('block');
        const service = new AuthService();
        const data: OtpResendRequestModel = {
            userId: params.visitorId
        }
        setIsOtpResendLoading(true);
        const response = await service.resendOtpForUserAccount(data).catch(error => {
            setLoaderVisibility('hidden');
            setIsOtpResendLoading(false);
            AppAlert.errorToast(error.message);
        });
        setIsOtpResendLoading(false);
        setLoaderVisibility('hidden');
        if (response) {
            AppAlert.successToast(response.message ?? '');
            setResendButtonDisabled(true);
            updateOtpTime();
        }
    }

    const handleOnComplete = () => {
        setVerifyButtonDisabled(false);
    }

    const verifyOtp = async () => {
        const requestBody: OtpVerifyRequestModel = {
            userId: params.visitorId,
            otp: otpValue
        }
        setLoaderVisibility('block');
        setIsVerifyButtonLoading(true);
        const service = new AuthService()
        const response = await service.verifyOtpForUserAccount(requestBody).catch(error => {
            setLoaderVisibility('hidden');
            AppAlert.errorToast(error.message);
            setOtpValue('');
            setIsVerifyButtonLoading(false);
            setVerifyButtonDisabled(true);
            setTimeRemaining(100)
        });
        setLoaderVisibility('hidden');
        if (response) {
            signIn('credentials', {
                username: params.email,
                phoneCodeISO: params.phoneIsoCode,
                phoneNumber: params.phoneNumber,
                otp: otpValue,
                redirect: false
            }).then(res => {
                setIsOpen(false);
                if(res?.status === 401){
                    AppAlert.errorToast(AppMessages.Error.unauthorized);
                } else if(res?.status === 500){
                    AppAlert.errorToast(AppMessages.Error.serverError);
                } 
                if(res?.ok){
                    router.push('setting/profile');
                }
                
            }).catch(err => {
                setIsVerifyButtonLoading(false);
                setVerifyButtonDisabled(true);
                setTimeRemaining(100)
                AppAlert.errorToast(err.message)
            });
        }
    }


    return <>
        <Modal isOpen={isOpen} onOpenChange={() => { setIsOpen(false); window.clearInterval(intervalRef.current) }}>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="lg:max-w-[460px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading className="text-2xl text-[var(--accent)] mb-2">Verification</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <p className="text-center text-[14px] text-gray-600 mb-1">
                                {
                                    params.isEmailLogin === true ?
                                        'We have sent you an OTP code via email:'
                                        : params.isEmailLogin === false ?
                                            'We have sent you an OTP code via SMS:'
                                            : 'We have sent you an OTP code via SMS for mobile number verification to:'
                                }
                            </p>
                            <p className="text-center text-[var(--accent)] text-base font-semibold mb-3">
                                {
                                    params.isEmailLogin === true ?
                                        params.email
                                        : params.phoneCode + params.phoneNumber
                                }

                            </p>
                            <p className="text-center text-[14px] text-gray-500 mb-4">
                                Time Remaining: <b className="font-bold">{timeRemaining} seconds</b>
                            </p>
                            <p className="text-center font-medium mb-3">Enter OTP</p>

                            <div className="flex justify-center mb-4">
                                <InputOTP
                                    aria-describedby='otp_input'
                                    maxLength={6}
                                    name="otpCode"
                                    inputMode="numeric"
                                    onComplete={handleOnComplete}
                                    value={otpValue}
                                    onChange={(value) => {
                                        setOtpValue(value);
                                        setVerifyButtonDisabled(true);
                                    }}
                                    pattern={REGEXP_ONLY_DIGITS}
                                >
                                    <InputOTP.Group>
                                        <InputOTP.Slot index={0} />
                                        <InputOTP.Slot index={1} />
                                        <InputOTP.Slot index={2} />
                                        <InputOTP.Slot index={3} />
                                        <InputOTP.Slot index={4} />
                                        <InputOTP.Slot index={5} />
                                    </InputOTP.Group>
                                </InputOTP>
                            </div>

                            <div className="flex justify-center mb-3">
                                <Button className={'w-40'} isDisabled={verifyButtonDisabled} isPending={isVerifyButtonLoading} onClick={verifyOtp}>
                                    {(({ isPending }) => (
                                        <>
                                            {isPending ? <Spinner color="current" size="sm" /> : ''}
                                            {isPending ? "Verifying..." : "Confirm"}
                                        </>
                                    ))}
                                </Button>
                            </div>
                            <div className="flex justify-center text-sm mb-2">
                                <Button variant="ghost" className="bg-transparent hover:bg-transparent text-blue-600 text-sm h-auto" onClick={() => { setIsOpen(false) }}>
                                    Try a different number
                                </Button>
                            </div>
                            <div className="text-center text-sm">
                                <Button className="text-[var(--accent)] font-medium bg-transparent hover:bg-transparent h-auto" onClick={resendOtp} isPending={isOtpResendLoading} isDisabled={resendButtonDisabled}>
                                    {({ isPending }) => (
                                        <>
                                            {isPending ? <Spinner color="current" size="sm" /> : ''}
                                            {isPending ? "Resending..." : "Resend OTP"}
                                        </>
                                    )}
                                </Button>
                            </div>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    </>
}