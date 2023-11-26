import { useEffect, FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="w-full sm:max-w-md overflow-hidden">
                <h2 className="text-xl font-bold leading-6">
                    Prijavi se na svoj nalog
                </h2>
                <form onSubmit={submit} className="py-4 mt-10">
                    <div>
                        <InputLabel htmlFor="email" value="E-mail adresa" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Upisite e-mail adresu"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Lozinka" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Upisite sifru"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <PrimaryButton
                        className="mt-[4.875rem] w-full"
                        disabled={processing}
                    >
                        Prijavi se na nalog
                    </PrimaryButton>
                </form>
            </div>
        </GuestLayout>
    );
}
