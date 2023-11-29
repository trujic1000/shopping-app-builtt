import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import { Cart, PageProps } from '@/types';

type Props = {
    cart: Cart;
    mustVerifyEmail: boolean;
    status?: string;
};

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
    cart,
}: PageProps<Props>) {
    return (
        <AuthenticatedLayout user={auth.user} cart={cart}>
            <Head title='Profile' />

            <div className='py-12'>
                <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6'>
                    <div className='p-4 sm:p-8 bg-white shadow sm:rounded-lg'>
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className='max-w-xl'
                        />
                    </div>

                    <div className='p-4 sm:p-8 bg-white shadow sm:rounded-lg'>
                        <UpdatePasswordForm className='max-w-xl' />
                    </div>

                    <div className='p-4 sm:p-8 bg-white shadow sm:rounded-lg'>
                        <DeleteUserForm className='max-w-xl' />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
